import {ref} from 'vue'

export function useAlert(visibility = false){
    const alert = ref(visibility)
    const close = () => alert.value = false
    const toggle = () => alert.value = !alert.value
    return {
        alert, toggle, close
    }
    // return [
    //     alert, toggle, close
    // ]   
}