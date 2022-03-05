<template>
    <div class="min-h-screen relative">   
        <NavBar v-if="open"/>

        <div class="bg-gray-50 min-h-screen px-4">
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