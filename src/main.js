import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import "bootstrap/dist/js/bootstrap.js";
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from './router'
import Paginate from 'vuejs-paginate-next'

// import JwPagination from 'jw-vue-pagination'
// import 'bootstrap-icons/icons' 
// import Select2 from 'vue3-select2-component'
// import Vue3EasyDataTable from 'vue3-easy-data-table'
// import 'vue3-easy-data-table/dist/style.css'
// import SmartTable from 'vuejs-smart-table'

createApp(App)
// .component('EasyDataTable', Vue3EasyDataTable)
// .component('Select2', Select2)
// .component('jw-pagination', JwPagination)
.component('Paginate', Paginate)
// .use(Paginate)
.use(createPinia())
.use(router)
.use(VueAxios, axios)
// .use(SmartTable)
.mount('#app')

