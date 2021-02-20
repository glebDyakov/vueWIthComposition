<template>
  <header class="navbar">
    <strong>Vue Composition Api</strong>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Главная</router-link>
        
      </li>
      <li>
        <router-link to="/reusable">Переиспользование</router-link>
      </li>
      <li>
        <router-link to="/vuex">vuex</router-link>
      </li>
    </ul>

  </header>
  <div class="container with-nav">
    <!-- <div class="card">
      <h1>Vue Composition Api</h1>
      <hr>
      <p>Название: <strong>{{ name }}</strong></p>
      <p>Версия: <strong>{{ version }}({{doubleVersion}})</strong></p>
      <div class="form-control">
        <input type="text" ref="textInput">
        <input type="text" v-model="firstName">
        
      </div>
      <button class="btn" @click="change">Изменить</button>
    </div>
    <FrameworkInfo class="test-form-app" @change-version="changeVersion" :name="name" :version="version">
      <template #footer>
        <p>This is footer</p>
      </template>
    </FrameworkInfo> -->
    <router-view></router-view>
  </div>
</template>

<script>
import {ref, reactive, toRefs, isRef, isReactive, computed, watch, provide, inject, onErrorCaptured, onBeforeMount, onBeforeUnmount, onUnmounted, onUpdated, onMounted, onBeforeUpdate} from 'vue'
import FrameworkInfo from './FrameworkInfo.vue'
export default {
  setup(){
    const name = ref('VueJS')
    const version = ref(3)
    const textInput = ref(null)
    const firstName = ref('')

    // const framework = ref({
    //   name: 'VUeJS',
    //   version: 3
    // })
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
    
    // const doubleVersion = computed(() => {
    //    return version.value * 2
    //  })
    // watch(doubleVersion, (newValue, oldValue) => {
        // console.log('new ', newValue)
        // console.log('old ', oldValue)
    // })
    // watch([doubleVersion, name], (newValues, oldValues) => {
    //   console.log('new version', newValues[0])
    //   console.log('new name ', newValues[1])
    //   console.log('old version', oldValues[0])
    //   console.log('new name ', oldValues[1])
      
    // })
    //  console.log(isRef(doubleVersion))
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
      change:changeInfo, firstName, changeVersion
      // framework, doubleVersion, textInput,  name, version, 
    }
  },
  components:{
    FrameworkInfo
  }
  // data() {
  //   return {
  //     name: 'VueJS',
  //     version: 3
  //   }
  // },
  // methods: {
  //   changeInfo() {
  //     this.name = 'Vue JS!'
  //     this.version = 4
  //   }
  // }
}
</script>