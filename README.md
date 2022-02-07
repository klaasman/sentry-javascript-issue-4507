# `@sentry/javascript` issue [#4507](https://github.com/getsentry/sentry-javascript/issues/4507)

## Steps to reproduce:

1. `npm install`
2. `npm run build`
3. inspect the generated \_middleware files inside `.next/server/pages/`.

   the output summary already displays the issue:

```
Page                                       Size     First Load JS
┌ ○ /                                      5.29 kB         108 kB
├   └ css/01a22525d00b6870.css             697 B
├   /_app                                  0 B             102 kB
├ ƒ /_middleware                           818 B           149 kB
├ ○ /404                                   240 B           103 kB
├ ƒ /api/_middleware                       117 kB          264 kB <- not good!
└ λ /api/hello                             0 B             102 kB
+ First Load JS shared by all              102 kB
  ├ chunks/framework-a75b8138b571f2ec.js   42.1 kB
  ├ chunks/main-c3ad17c978de2a08.js        27 kB
  ├ chunks/pages/_app-ab9eb489e7b110c7.js  32.4 kB
  ├ chunks/webpack-3d00eb2dff231e11.js     1.02 kB
  └ css/b4029e5e9f7cc74e.css               238 B
```

The `/pages/api/_middleware.js` file is too large and should be identical to `/pages/_middleware.js`.
