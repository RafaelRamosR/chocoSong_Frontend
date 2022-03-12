<template>
    <div class="min-h-screen relative">   
        <NavBar v-if="open"/>
     
        <div class="bg-black-200">
            <slot/>
        </div>

       <Amburger @click="open=!open"/>
    </div>
</template>
<script>
    import NavBar from '../navbars/NavBar.vue'
    import Amburger from '../components/Amburger.vue'

    export default{
        components:{
            NavBar,
            Amburger,
        },
        data(){
            return{
                open:false,
            }
        }
    }
</script>