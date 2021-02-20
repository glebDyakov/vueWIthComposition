<template>
    <app-alert @close="close" v-if="alert" title="Работаем с Composition" type="primary"></app-alert>
    <div class="card">
        <h1>Переиспользование</h1>
        <pre>{{ alert }}</pre>
        <button class="btn primary" @click="toggle">{{ alert ? 'Закрыть' : 'Показать' }} сообщение</button>
        <button class="btn" @click="navigate">Перейти на главную</button>
    </div>
</template>
<script>
import { reactive } from 'vue'
import {useRouter, useRoute} from 'vue-router'
import AppAlert from '../AppAlert'

import {useAlert} from '../use/alert'
// import {ref} from 'vue'
export default {
    
    setup(){
        // const alert = reactive({
        //     type: 'warning',
        //     title: 'Reactive Alert',
        // })

        // const {alert, close, toggle} = useAlert()
        // const [simpleAlert, toggle, closeAlert] = useAlert()

        // const alert = ref(false)
        const router = useRouter()
        const route = useRoute()
        console.log(route.path)
        const navigate = () => {
            router.push('/')
        }
        // const toggle = () => alert.value = !alert.value
        
        // const close = alert.value = false

        return {
            navigate,
            ...useAlert
            //  close, alert, toggle,
            //  closeAlert, simpleAlert
        }
    },
    components:{
        AppAlert
    }
}
</script>