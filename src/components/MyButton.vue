<template>
<button class="m-3 text-sm btn" :disabled="!MyProp" @click="go">
        {{MyProp}}
</button>
</template>
<script setup>import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
    MyProp: {
        type: StringConstructor,
        default: '/',
        },
        })
const go = () => {
  if (props.value) router.push(`/${encodeURIComponent(props.value)}`)
}
</script>
