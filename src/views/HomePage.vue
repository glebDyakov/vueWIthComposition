<template>
<!-- <app-alert @close="close" v-if="alert" title="Работаем с Composition" type="danger"></app-alert> -->
<div class="card">
    <h1>Vue Composition Api</h1>
    <hr>
    <p>Название: <strong>{{ name }}</strong></p>
    <p>Версия: <strong>{{ version }}({{doubleVersion}})</strong></p>
    <div class="form-control">
        <input type="text" ref="textInput">
        <input type="text" v-model="firstName">

    </div>
    <button class="btn" @click="change">Изменить</button>
    <button class="btn danger" @click="toggle">Alert</button>
</div>
<FrameworkInfo class="test-form-app" @change-version="changeVersion" :name="name" :version="version">
    <template #footer>
        <p>This is footer</p>
    </template>
</FrameworkInfo>
</template>
    

<script>
import {ref, reactive, toRefs, isRef, isReactive, computed, watch, provide, inject, onErrorCaptured, onBeforeMount, onBeforeUnmount, onUnmounted, onUpdated, onMounted, onBeforeUpdate} from 'vue'
import FrameworkInfo from '../FrameworkInfo'
import AppAlert from '../AppAlert'
import { useAlert } from '../use/alert'
export default {
  setup(){
    const name = ref('VueJS')
    const version = ref(3)
    const textInput = ref(null)
    const firstName = ref('')
    // const alert = ref(false)
    // const toggle = () => alert.value = !alert.value

    
    // const close = alert.value = false

    // const [alert, toggle, close] = useAlert()

    const framework = reactive({
      name: 'VUeJS',
      version: 3
    })
    console.log('created')
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMount')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    function changeInfo(){
      name.value = 'Vue JS!'
      version.value = 4
      console.log(textInput.value.value)
      // framework.value.name = 'vuejs'
      // framework.value.version = 42
    }
    function changeVersion(num){
      version.value = num
    }
    provide('name', name)
    provide('version', version)
    return {
      change:changeInfo, firstName, changeVersion,
      // alert, toggle, close
      // framework, doubleVersion, textInput,  name, version, 
    }
  },
  components:{
    FrameworkInfo, AppAlert
  }
}
</script>