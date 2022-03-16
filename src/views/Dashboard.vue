<template>
    <Authenticated>
        <Canciones/>
    </Authenticated>
</template>
<script>
import Authenticated from '../layouts/Authenticate.vue'
import Canciones from '../views/Canciones/index.vue'
export default{
    components:{
        Authenticated,  
        Canciones,      
    },
}
</script>
