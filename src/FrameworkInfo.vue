<template>
    <div class="card">
        <p>Название: <strong>{{ name }}</strong></p>
        <p>Версия: <strong>{{ version }}({{doubleVersion}})</strong></p>
        <button class="btn warning" @click="changeToThree">Изменить на 3 версию</button>
    </div>
</template>
<script>
import {computed, inject} from 'vue'
export default {
    // props: ['name', 'version'],
    // computed:{
    //     doubleVersion(){
    //         return this.version * 2
    //     }
    // }
    emits:['change-version'],
    setup(props, context){
        console.log(props)
        function change(){
            context.emit('change-version', 3)
        }
        
        const version = inject('version')
        return {
            name: inject('name'),
            changeToThree: change,
            version,
            // doubleVersion: computed(() => props.version * 2)
            doubleVersion: computed(() => version.value * 2)
        }
    }
}
</script>