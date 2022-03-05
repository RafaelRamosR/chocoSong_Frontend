<template>
    <div class="min-h-screen ">
        <NavBar v-if="open"/>

        <div class="bg-black-200 px-3">
            <slot/>
        </div>

       <Amburger @click="open=!open"/>
    </div>
</template>
<script>
import NavBar from '../navbars/NavBar.vue'
import Amburger from '../components/Amburger.vue'
export default ({
    components:{
        NavBar,
        Amburger,
    },
    data(){
        return{
            open:false,
            datos:Object
        }
    },
    beforeMount(){
        if (localStorage.getItem('token') || localStorage.getItem('identify')) {
            this.datos=JSON.parse(localStorage.getItem('identify'))
        }
    }
})
</script>
