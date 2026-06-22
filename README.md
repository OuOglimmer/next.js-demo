## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.
###  第一天 使用pnpm create next项目的时候遇到了，Module not found: Can't resolve '@vercel/turbopack-next/internal/font/google/font'的问题
了解了对应的打包器vite,Webpack,turbopack这几种不同打包器的作用以及适用范围。暂时还未修复这个bug
已修复my-app/app/layout.tsx:2 引入了 Geist 和 Geist_Mono 从 next/font/google，turbopack 在 build 时需要从 Google Fonts 下载这些字体文件。由于 fonts.gstatic.com 在当前网络环境（中国大陆）无法访问，下载失败导致 CSS 生成错误，最终构建崩溃。
###  第二天 使用了vercel对我的项目进行了部署
在部署的过程中排除问题的同时对于某些需要科学上网的工具，经常遇到问题的话可以检查科学上网的工具是否正常的打开
