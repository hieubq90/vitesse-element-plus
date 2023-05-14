import { createQueryKeys } from '@lukemorales/query-key-factory'
import service from '~/api/http'
import type { DanToc } from '~/types'

const PREFIX_PATH = 'ethnic_groups'

const danTocApi = {
  getAll: async () => await service.get<DanToc[]>(PREFIX_PATH),
  getById: async (id: number) => await service.get<DanToc>(`${PREFIX_PATH}/${id}`),
  create: async (dantoc: DanToc) => await service.post<DanToc>(PREFIX_PATH, dantoc),
  update: async (dantoc: DanToc) => await service.put<DanToc>(`${PREFIX_PATH}/${dantoc.id}`, dantoc),
  deleteById: async (id: number) => await service.delete(`${PREFIX_PATH}/${id}`),
}

export const danTocKeys = createQueryKeys('dantoc', {
  all: () => ({
    queryKey: ['all'],
    queryFn: () => danTocApi.getAll(),
  }),
  detail: (id: number) => ({
    queryKey: [id],
    queryFn: () => danTocApi.getById(id),
  }),

})

export default danTocApi
