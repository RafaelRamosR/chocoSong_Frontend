<template>
    <div class="fixed z-50 bottom-3 w-full">
        <div class="mx-4 bg-gray-200 p-4 rounded-md mb-3">
            <div class="flex justify-center mb-3">
                {{title}}
            </div>

            <div @click="eliminar()" class="flex justify-center text-red-500">
                Si, eliminar
            </div>
        </div>
        <div @click="cancel()" class="bg-gray-200 flex items-center justify-center rounded-md mx-4 px-4 py-3">
            Cancelar
        </div>
    </div>
</template>
<script>

export default ({
    props:{
        title:String
    },
    methods:{
        cancel(){   
            this.$emit('cancel')
        },
        eliminar(){
            this.$emit('eliminar')
        }
    }
    
})
</script>
