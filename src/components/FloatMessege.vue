<template>
    <div v-if="type=='success' && show" class=" fixed float z-50 bottom-3 right-3">
        <div class="bg-green-300 flex items-center rounded-md shadow-md p-3 text-gray-100">
            <span class="mr-5" v-text="message"></span>
            <div class="bg-green-500 px-2 shadow-md rounded-md cursor-pointer" @click="close()">
                X
            </div>
        </div>
    </div>
</template>
<script>
export default ({
    props:{
        type:String,
        message:String,
    },
    data(){
        return{
            show:this.type
        }
    },
    methods:{
        close(){
            setInterval(()=>{
                this.show=''
            },400)
            this.show=this.type

        }
    }
})
</script>
