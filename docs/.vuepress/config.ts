import {defineUserConfig} from 'vuepress'
import {viteBundler} from '@vuepress/bundler-vite'
import {plumeTheme} from 'vuepress-theme-plume'
import navbar from './navbar'

export default defineUserConfig({
    // 请不要忘记设置默认语言
    lang: 'zh-CN',
    locales: {
        '/': {lang: 'zh-CN', title: '博客',description:"米立祥的博客"},
    },
    theme: plumeTheme({
        base: '',
        hostname: 'https://blog.mitech.fun/',
        navbar,
        plugins: {
            externalLinkIcon: true,
            baiduTongji: {key: 'f8e6e851e99a49b25a46d46325474f1b'}, //百度统计
            shiki: {twoslash: true},
            markdownEnhance: {demo: true},
            markdownPower: {caniuse: true, jsfiddle: true,},

            search:{},
            // docsearch: {
            //     appId: 'KRJOJ00KBL',
            //     apiKey: '3f3b13613235873fbcbc9d304de18126',
            //     indexName: 'pengzhanbo',
            // },

            comment: {
                provider: 'Giscus',
                comment: true,
                repo: 'milixiang/blog.mitech.fun',
                repoId: 'MDEwOlJlcG9zaXRvcnkxNDgwMzY4MDc=',
                category: 'Blog-Comment',
                categoryId: 'DIC_kwDOCNLcx84CUulO',
                mapping: 'pathname',
                reactionsEnabled: true,
                inputPosition: 'top',
                darkTheme: 'dark_protanopia',
                lightTheme: 'light_protanopia',
            },
        },
    }),
    bundler: viteBundler({
        viteOptions: {
            server: {
                // https://github.com/vuepress/core/issues/1526
                // 此设置用于修复 每次新建 md文件后修改 permalink 会导致报错的问题
                // vuepress 不确定是否将此设置内置到 vuepress 中，因此目前在此设置
                fs: {cachedChecks: false},
            }
        }
    }),
})