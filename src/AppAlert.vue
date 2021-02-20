<template>
    <div class="alert" :class="type" @click="$emit('close')">
        <p class="alert-title">{{ title }}</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, recusandae?
    </div>
</template>
<script>
export default {
    emits:['close'],
    props:['title', 'type']
}
</script>