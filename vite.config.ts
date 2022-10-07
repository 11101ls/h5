import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import pxtoViewPort from 'postcss-px-to-viewport'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  css:{
    postcss:{
      plugins:[pxtoViewPort({
        unitToConvert:'px',//转换的单位
        viewportWidth:750,//ui宽度
        propList:['*'],//指定转换的css属性单位   * 代表全部转换
        viewportUnit:'vw',//指定目标单位
        fontViewportUnit:'vw',//指定字体转换单位
        selectorBlackList:['ignore-'],//指定不转换单位的类名
        unitPrecision:6,//转换后的精度  小数点数
        minPixelValue:1,//默认1  小于等于1px不转换
        mediaQuery:true,//是否在媒体查询的css代码中也转换
        replace:true,//转换后直接替换
        landscape:false,//是否处理横屏
      })]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
