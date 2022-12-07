
import { defineConfig,module } from 'vite'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
         port: '8080',
        proxy: {
          '/api': {
            target: "http://120.78.147.187:80/",
            changeOrigin:true,
            rewrite: (path) => path.replace(/^\/api/, '')
            // 替换target中的请求地址，
           // 也就是说以后你在请求    http://47.104.89.164:80/admin_get_all_user/
            //这个地址的时候直接写成/api/admin_get_all_user/即可。
          }
        },
      }
})

