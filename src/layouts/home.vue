<template>
  <main
    class="min-h-screen w-full bg-[#2b4c81] px-0 py-0"
    style="background-image: linear-gradient(270deg, #3674d1, transparent);"
  >
    <div
      class="h-full w-full"
      style="background: url('/svg/pattern-1.svg') no-repeat center bottom fixed; background-size: cover;"
    >
      <el-container class="h-screen w-full">
        <el-aside class="b-r-1" width="200px">
          Aside
        </el-aside>
        <el-container>
          <el-header class="b-b-1 drop-shadow-lg">
            Header
          </el-header>
          <el-main>
            <RouterView />
          </el-main>
          <el-footer class="b-t-1">
            Footer
          </el-footer>
        </el-container>
      </el-container>
    </div>
  </main>
</template>
