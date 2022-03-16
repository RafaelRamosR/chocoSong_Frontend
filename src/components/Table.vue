<template>
    <div class="bg-gray-900 rounded-sm shadow-md my-4  p-2">
        <div class="my-4">
            <slot name="title"/>
        </div>
        <div class="overflow-auto">
            <table class="w-full">
                <thead>
                    <tr class="text-gray-200 font-poppins font-medium">
                        <td>#</td>
                        <slot name="thead"/>
                        <td v-if="acciones">Acciones</td>
                    </tr>
                </thead>
                <tbody class="text-gray-300 text-sm">
                    <slot name="tbody"/>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default ({
    props:{
        acciones:{
            default:true
        }
    }
})
</script>
