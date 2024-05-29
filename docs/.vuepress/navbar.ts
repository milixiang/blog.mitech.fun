import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
      { text: '首页', link: '/', icon: 'material-symbols:home-outline' },
      { text: '博客', link: '/blog/', activeMatch: '^/(blog)/',icon: 'material-symbols:article-outline' },
      { text: '文档', link: '/docs/', activeMatch: '^/(docs)/',icon: 'material-symbols:article-outline' },
      { text: '笔记', link: '/notes/', activeMatch: '^/(notes)/',icon: 'material-symbols:article-outline' },
    ])