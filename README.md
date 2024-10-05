## Đây là một file package.json, được sử dụng trong các dự án Node.js để mô tả thông tin về package và các dependencies. Dưới đây là giải thích về các trường chính trong file này:

- name: Tên của package.
- main: Tệp chính cho Node.js (CommonJS hoặc ES module).
- module: Tệp ES module cho các công cụ hiện đại.
- types Tệp định nghĩa kiểu TypeScript để cung cấp hỗ trợ kiểu cho TypeScript.
- version: Phiên bản hiện tại của package.
- description: Mô tả ngắn gọn về chức năng của package.
- license: Loại giấy phép sử dụng cho package.
- repository: Đường dẫn đến repository của package trên GitHub.
- funding: Thông tin về cách tài trợ cho dự án.
- author: Thông tin về tác giả của package.
- type: Xác định loại module (trong trường hợp này là ES module).
- imports: Xác định các dependencies cần thiết khi import package.
- exports: Xác định các entry points cho package khi được import.
- sideEffects: Chỉ định liệu package có side effects hay không (quan trọng cho tree-shaking).
- engines: Xác định phiên bản Node.js tối thiểu cần thiết để chạy package.
- scripts: Định nghĩa các lệnh npm có thể chạy.
- files: Danh sách các file sẽ được publish lên npm.
- keywords: Các từ khóa liên quan đến package, giúp tìm kiếm trên npm.
- devDependencies: Các dependencies chỉ cần thiết trong quá trình phát triển.
- typesVersions:  field in package.json to redirect typings (https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions)
- browserslist: Được sử dụng để cho biết chúng ta muốn hỗ trợ trình duyệt nào (và phiên bản của chúng). Nó được tham chiếu bởi Babel, Autoprefixer và các công cụ khác, để chỉ thêm polyfills và dự phòng cần thiết cho các trình duyệt mà chúng ta hướng đến. Ví dụ trên có nghĩa là chúng ta muốn hỗ trợ 2 phiên bản chính cuối cùng của tất cả các trình duyệt với ít nhất 1% mức sử dụng (theo thống kê của CanIUse.com), ngoại trừ IE8 trở xuống.
 packageManager: chỉ định loại package manager mà bạn muốn sử dụng (npm hoặc yarn, pnpm).
 - bin: Định nghĩa các lệnh CLI mà package cung cấp.

npm: cài đặt package
npx: chạy lệnh mà không cần cài đặt package

## Tips

- mjs file không thể import cjs package

- cjs file không thể import trực tiếp mjs package, dùng cách này
```ts
const start = async () => {
  const func = await import('xxx.mjs');
}

start().then()
```

## Export

```json
// "exports": {
	// 	"types": "./index.d.ts",
	// 	"default": "./index.js"
	// },
"exports": {
  ".": {
    "types": "./dist/index.d.ts",
    "import": "./dist/index.mjs",
    "require": "./dist/index.cjs"
  },
  "./foo": {
    "types": "./dist/foo.d.ts",
    "import": "./dist/foo.mjs",
    "require": "./dist/foo.cjs"
  }
},
```

## Side effects

- Side effect: src/index.ts
- Gán một thuộc tính cho một đối tượng toàn cục như window
- Thay đổi tất cả các đối tượng khác
- Gọi nhiều hàm dựng sẵn, nhưfetch
- Gọi các hàm do người dùng định nghĩa có chứa các tác dụng phụ


## Bundler tool

- Webpack => rspack => rsbuild/rslib
- Rollup => tsup/unbuild
- Parcel
- Vite
- Snowpack
- esbuild => tsup/unbuild
- microbundle


## Check package.json

https://publint.dev/

## Check tree-shaking

https://bundlephobia.com/

## Check bundle size

https://bundlephobia.com/

## Check package support cjs, esm

https://www.npmjs.com/package/@arethetypeswrong/cli

## Refer

- https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseCJS.md

