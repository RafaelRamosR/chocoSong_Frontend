<template>
     <RouterLink :to="url" class="text-gray-300 mb-6 text-base font-poppins flex items-center">
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
