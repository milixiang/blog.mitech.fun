import { useClientData,defineClientConfig } from 'vuepress/client'
import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {
    const {
      pageData,
      pageFrontmatter,
      pageHead,
      pageHeadTitle,
      pageLang,
      routeLocale,
      siteData,
      siteLocaleData,
    } = useClientData();
    console.log(routeLocale)
  },
  rootComponents: [],
})

