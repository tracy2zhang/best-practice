import theme from '@nuxt/content-theme-docs'
import path from 'path'
import fs from 'fs'

function resolveFile (str) {
  const dir = str.slice(5, str.length - 1)
  try {
    const fileData = fs.readFileSync(path.resolve(__dirname, dir))
    return fileData
  } catch (err) {
    console.log(err)
    return str
  }
}

export default theme({
  head: {
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js'
      }
    ]
  },
  docs: {
    primaryColor: '#55acee'
  },
  content: {
    liveEdit: false
  },
  hooks: {
    'content:file:beforeParse': (file) => {
      if (file.extension === '.md') {
        file.data = file.data.replace(/file\([\/\\\w\.\-_]+\)/g, resolveFile)
      }
    }
  },
  css: [
    // SCSS file in the project
    './assets/css/reset.less',
    './assets/css/fontawesome.min.css'
  ],
  i18n: {
    locales: () => [
      {
        code: 'cn',
        iso: 'zh-CN',
        file: 'zh-CN.js',
        name: 'chinese'
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'english'
      }
    ],
    defaultLocale: 'cn'
  },
  plugins: [
    path.resolve(__dirname, 'plugins/svg-icon') // 注册svg插件文件 
  ],
  build: {
    extend (config, ctx) {
      // 排除 nuxt 原配置的影响,Nuxt 默认有vue-loader,会处理svg,img等
      // 找到匹配.svg的规则,然后将存放svg文件的目录排除
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [path.resolve(__dirname, 'assets/svg')]
      //添加loader规则
      config.module.rules.push({
        test: /\.svg$/, //匹配.svg
        include: [path.resolve(__dirname, 'assets/svg')], //将存放svg的目录加入到loader处理目录
        use: [{ loader: 'svg-sprite-loader', options: { symbolId: 'icon-[name]' } }]
      })
    }
  },
  buildModules: [
    // Doc: https://github.com/nuxt-community/tailwindcss-module
    "@nuxtjs/tailwindcss"
  ]
})
