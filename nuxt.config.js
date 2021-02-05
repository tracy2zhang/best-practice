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
  docs: {
    primaryColor: '#55acee'
  },
  hooks: {
    'content:file:beforeParse': (file) => {
      if (file.extension === '.md') {
        file.data = file.data.replace(/file\([\/\\\w\.\-_]+\)/g, resolveFile)
      }
    }
  },
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
  }
})
