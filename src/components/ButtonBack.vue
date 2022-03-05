<template>
    <RouterLink :to="url" class="text-gray-300 flex items-center fixed z-20 top-4 left-3">
         <div class="mr-4">
            <slot name="icon"/>
         </div>
        <slot/>
    </RouterLink>
</template>
<script>
import { RouterLink } from 'vue-router'

export default ({
    components:{
        RouterLink,
    },
    props:{
        url:String
    }
})
</script>