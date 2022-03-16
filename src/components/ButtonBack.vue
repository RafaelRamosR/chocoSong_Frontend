<template>
    <div class=" bg-black-200 mx-3 w-full fixed flex z-50 items-center h-16">
        <RouterLink :to="url" class="text-gray-200 w-28 flex items-center">
            <div class="mr-4">
                <slot name="icon"/>
            </div>
            <slot/>
        </RouterLink>
        <div class="text-gray-200 mr-3 justify-end font-bold text-lg text-center">
            <slot name="title"/>
        </div>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router'

export default ({
    components:{
        RouterLink,
    },
    props:{
        url:Object
    }
})
</script>