import {
  createApp
} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import router from '@/router'

//createApp(App).mount('#app')
const app = createApp(App)
app.use(ElementPlus, {
  locale
})
app.use(router)
app.mount('#app')