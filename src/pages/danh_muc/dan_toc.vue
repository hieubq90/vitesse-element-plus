<script setup lang="ts">
import { ElMessage, ElTable } from 'element-plus'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { queryKeys } from '~/api'
import danTocApi from '~/api/modules/danTocApi'
import type { DanToc } from '~/types'

defineOptions({
  name: 'QLDanToc',
})
const isLoading = ref(true)
const tmpSearch = ref<string>('')
const search = ref<string>('')
const page = ref(1)
const pageSize = ref(10)

const tableRef = ref<InstanceType<typeof ElTable>>()
const selectedItems = ref<DanToc[]>([])
function onSelectedItemsChanged(val: DanToc[]) {
  selectedItems.value = val
}

const { data } = useQuery({
  ...queryKeys.dantoc.all(),
  onSuccess: (_data) => {
    // lưu thông tin vào store để dùng lại sau
    setTimeout(() => isLoading.value = false, 500)
  },
  onError: (_error) => {
    // _error là error response data
    // thông báo lỗi không tải được dữ liệu
    ElMessage.error('Không tải được dữ liệu')
  },
})

const tableData = computed<DanToc[]>(() => {
  if (!data.value)
    return []
  if (search.value) {
    const searchValue = search.value.toLocaleLowerCase()
    return data.value.filter(item => item.name.toLowerCase().includes(searchValue))
  }
  return data.value
})

const pagedData = computed<DanToc[]>(() => {
  if (!tableData.value)
    return []
  return tableData.value.slice((page.value - 1) * pageSize.value, pageSize.value * page.value)
})

const queryClient = useQueryClient()

function reloadData() {
  isLoading.value = true
  queryClient.invalidateQueries({ queryKey: (queryKeys.dantoc.all as any).queryKey })
}

const debouncedSearch = useDebounceFn((val: string) => {
  search.value = val
}, 1000, { maxWait: 5000 })

watch(tmpSearch, async (val) => {
  debouncedSearch(val)
})

const confirmDelete = ref(false)
const deletingItem = ref<DanToc | undefined>(undefined)
const showFormModal = ref(false)
const editingItem = ref<DanToc | undefined>(undefined)
const schema = {
  name: 'required',
}

const creator = useMutation({
  mutationFn: danTocApi.create,
  onSuccess: (_data, _variables) => {
    // data là response data
    // ElMessage.success('Đăng nhập thành công')
    showFormModal.value = false
    reloadData()
  },
  onError: (_error, _variables) => {
    // _error là error response data
    // _variables là body gửi lên
    showFormModal.value = false
  },
})

const editor = useMutation({
  mutationFn: danTocApi.update,
  onSuccess: (_data, _variables) => {
    // data là response data
    // ElMessage.success('Đăng nhập thành công')
    showFormModal.value = false
    reloadData()
  },
  onError: (_error, _variables) => {
    // _error là error response data
    // _variables là body gửi lên
    showFormModal.value = false
  },
})

const remover = useMutation({
  mutationFn: danTocApi.deleteById,
  onSuccess: (_data, _variables) => {
    // data là response data
    // ElMessage.success('Đăng nhập thành công')
    showFormModal.value = false
    reloadData()
  },
  onError: (_error, _variables) => {
    // _error là error response data
    // _variables là body gửi lên
    showFormModal.value = false
  },
})

async function handleSubmitForm(data: any) {
  if (!data) {
    showFormModal.value = false
    return
  }

  if (!editingItem.value)
    await creator.mutateAsync(data)

  else
    await editor.mutateAsync(data)
}

async function doDelete() {
  if (!deletingItem.value) {
    confirmDelete.value = false
    return
  }
  remover.mutateAsync(deletingItem.value.id as number)
}

function handleEditItem(item: any) {
  editingItem.value = item
  setTimeout(() => showFormModal.value = true, 200)
}

function handleDeleteItem(item: any) {
  deletingItem.value = item
  confirmDelete.value = true
}

function cancel(isDeleting = false) {
  if (isDeleting) {
    confirmDelete.value = false
    deletingItem.value = undefined
  }
  else {
    showFormModal.value = false
    editingItem.value = undefined
  }
}
</script>

<template>
  <div class="max-h-[calc(100vh - 150px)] h-full flex flex-col rounded-xl bg-white p-3">
    <div class="">
      <div class="fal fa-address-card mr-2" />
      <span class="capitalize">Quản lý danh mục dân tộc</span>
    </div>
    <el-divider />
    <div class="flex items-center justify-between px-3 pb-2px">
      <!-- Actions buttons -->
      <div class="flex items-center">
        <el-button type="primary" @click="showFormModal = true">
          <div class="fal fa-plus-circle mr-1" />
          Thêm
        </el-button>
        <el-button type="danger" :disabled="selectedItems.length === 0">
          <div class="fal fa-trash mr-1" />
          Xoá
        </el-button>
      </div>
      <!-- Search & Reload -->
      <div class="flex items-center">
        <el-input v-model="tmpSearch" clearable class="mx-2 max-w-50 w-50" placeholder="Tìm theo tên">
          <template #suffix>
            <el-icon class="el-input__icon">
              <div class="fal fa-search mr-1" />
            </el-icon>
          </template>
        </el-input>
        <el-button type="" @click="reloadData">
          <div class="fal fa-sync mr-1" />
          Tải lại
        </el-button>
      </div>
    </div>
    <ElTable
      ref="tableRef"
      v-loading="isLoading"
      element-loading-text="Đang tải dữ liệu..."
      :data="pagedData"
      empty-text="Không có dữ liệu dân tộc"
      stripe
      class="w-full"
      height="calc(100vh - 310px)"
      max-height="calc(100vh - 310px)"
      @selection-change="onSelectedItemsChanged"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column fixed prop="id" label="Mã dân tộc" width="150" />
      <el-table-column prop="name" label="Tên dân tộc" />
      <el-table-column fixed="right" label="Hành động" width="150">
        <template #default="{ row }">
          <el-button type="primary" size="small" circle @click="() => handleEditItem(row)">
            <div class="fal fa-pencil" />
          </el-button>
          <el-button type="danger" size="small" circle @click="() => handleDeleteItem(row)">
            <div class="fal fa-trash" />
          </el-button>
        </template>
      </el-table-column>
    </ElTable>
    <el-pagination
      v-model:current-page="page"
      v-model:page-size="pageSize"
      class="mt-2 w-full flex justify-end"
      :page-sizes="[10, 20, 30, 40, 50]"
      :disabled="isLoading"
      :total="tableData.length"
      :hide-on-single-page="false"
      small
      background
      layout="total, sizes, prev, pager, next, jumper"
    />
    <ModalConfirm
      :show="confirmDelete"
      title="Xoá dân tộc"
      message="Bạn có chắc chắn muốn xoá bản ghi này"
      icon-color="#f56c6c"
      @cancel="() => cancel(true)"
      @submit="doDelete"
    />
    <ModalForm
      :show="showFormModal"
      :title="editingItem ? 'Sửa dân tộc' : 'Thêm dân tộc'"
      :initial-value="editingItem"
      :schema="schema"
      width="500px"
      @cancel="() => cancel(false)"
      @submit="handleSubmitForm"
    >
      <InputWithValidation name="name" label="Tên dân tộc" class="my-1" autocomplete="off" />
    </ModalForm>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
