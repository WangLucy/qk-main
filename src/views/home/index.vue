<template>
    <div>
        <h1>home</h1>
        <button @click="go">去主页</button>
    </div>  
</template>

<script>
import { showSubApp } from '@/store/common'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const router = useRouter()
        const go = () => {
            showSubApp.value = true
            router.push('/apps')
        }
        return {
            go
        }
    }
}
</script>

<style>

</style>