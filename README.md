<p align='center' style="font-size: 30px;">
FE Template <b>Vue 3 + Element Plus</b> <sup><em>(speed)</em></sup><br>
</p>

<br>


## Tính năng

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [esbuild](https://github.com/evanw/esbuild) - Tốc độ phát triển và build nhanh

- 🗂 [File based routing](./src/pages) - Tạo routing theo phong cách NextJS bằng thư mục **pages**

- 📦 [Components auto importing](./src/components) - Tự động import component

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/) - Quản lý state của ứng dụng tập trung bằng **Pinia**

- 📑 [Layout system](./src/layouts) - Hỗ trợ tạo nhiều loại layout và áp dụng cho các page tuỳ ý

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - CSS engine giống TailwindCSS nhưng nhẹ và nhanh hơn

- 😃 [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons) - Tích hợp sẵn nhiều gói Icon

- 🌍 [I18n ready](./locales) - Hỗ trợ đa ngôn ngữ

- 🗒 [Markdown Support](https://github.com/antfu/vite-plugin-vue-markdown) - Có thể dùng Markdown làm nội dung của 1 page

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227) - Sử dụng cú pháp `<script setup>`

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - sử Composition API trực tiếp, tự động import

- 🖨 Static-site generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg) - Tích hợp SSG, hỗ trợ generate trước một số page dạng static nếu cần

- 🔤 [Webfont self-hosting](https://github.com/feat-agency/vite-plugin-webfont-dl) - Tự động download google font về để build & self-host đảm bảo tốc độ

- 🦾 TypeScript - Code bằng Vue + Typescript

- ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest), E2E Testing with [Cypress](https://cypress.io/)

<br>


## Các thư viện cài sẵn

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - CSS engine thay thế cho TailwindCSS.
- [Element UI Plus](https://element-plus.org/en-US/) - UI Framework với nhiều base component dựng sẵn.

### Icons

- [Iconify](https://iconify.design) - Cung cấp nhiều icon sets [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons) - Copy tệp SVG vào thư mục `src/assets/icons` để dùng làm icon bằng class name

### Plugins

- [Vue Router](https://github.com/vuejs/router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
- [Pinia](https://pinia.vuejs.org) - quản lý state
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - sử dụng Vue Composition API trực tiếp mà không cần import
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- [`vite-plugin-vue-markdown`](https://github.com/antfu/vite-plugin-vue-markdown) - Markdown as components / components in Markdown
  - [`markdown-it-shiki`](https://github.com/antfu/markdown-it-shiki) - [Shiki](https://github.com/shikijs/shiki) for syntax highlighting
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Đa ngôn ngữ
  - [`unplugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n) - unplugin for Vue I18n
- [VueUse](https://github.com/antfu/vueuse) - Tổng hợp các composition API hữu ích
- [`vite-ssg-sitemap`](https://github.com/jbaubree/vite-ssg-sitemap) - Sitemap generator
- [`@vueuse/head`](https://github.com/vueuse/head) - hỗ trợ SEO
- [`vite-plugin-webfont-dl`](https://github.com/feat-agency/vite-plugin-webfont-dl) - tự động tải webfont (Google Fonts) và self-host tăng tốc độ.

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi.

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - Unit testing powered by Vite
- [Cypress](https://cypress.io/) - E2E testing
- [`vite-ssg`](https://github.com/antfu/vite-ssg) - Static-site generation
  - [critters](https://github.com/GoogleChromeLabs/critters) - Critical CSS
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)



## Sử dụng
- Yêu cầu môi trường: Node >= 14.18
- Khuyên dùng: Node >= 16.18.1

### Development
Cài đặt thư viện

```bash
# dùng YARN
yarn install

# dùng NPM
npm install
```

Chạy ứng dụng & truy cập link http://localhost:3333

```bash
# dùng YARN
yarn dev

# dùng NPM
npm run dev
```

### Build

To build the App, run

```bash
# dùng YARN
yarn build

# dùng NPM
npm run build
```

Sau đó bạn sẽ thấy file đóng gói nằm trong thư mục `dist` và sẵn sàng copy di deploy.

