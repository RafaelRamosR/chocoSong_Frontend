<template>
    <div class="min-h-screen relative">   
        <NavBar v-if="open"/>
     
        <div class="bg-black-200">
            <slot/>
        </div>

       <Amburger v-if="!open" @click="open=true"/>
       <AmburgerClose v-if="open" @click="open=false"/>
    </div>
</template>
<script>
    import NavBar from '../navbars/NavBar.vue'
    import Amburger from '../components/Amburger.vue'
    import AmburgerClose from '../components/AmburgerClose.vue'

    export default{
        components:{
            NavBar,
            Amburger,
            AmburgerClose,
        },
        data(){
            return{
                open:false,
            }
        }
    }
</script>