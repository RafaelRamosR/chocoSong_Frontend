<template>
    <Authenticated>
        <ButtonBack :url="{name:'dashboard'}">
            <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                </svg>
            </template>
            Atras
            <template #title>
                Departamentos
            </template>
        </ButtonBack>

        <div class="min-h-screen py-16 mx-3 items-center">
            <Table>
                <template #title>
                    <div class="flex justify-end">
                        <RouterLink :to="{name:'departamentos.create'}">
                            <button class="bg-teal-500 text-gray-200 rounded-md px-2 py-1 right-0">
                                Agregar
                            </button>
                        </RouterLink>
                    </div>
                </template>
                <template #thead>
                    <td>Nombre</td>
                </template>
                <template #tbody>
                    <tr v-for="dato in datos" :key="dato.id">
                        <td v-html="dato.id"/>
                        <td v-html="dato.nombre"/>
                        <td class="flex items-center">
                            <RouterLink :to="{name:'departamentos.edit',params:{id:dato.id}}" class="mr-3">
                                <IconEdit/>
                            </RouterLink>
                            <RouterLink :to="{name:'departamentos.show',params:{id:dato.id}}" class="mr-3">
                                <IconShow class="mr-2"/>
                            </RouterLink>
                           
                            <IconDestroy @click="destroy(dato.id)"/>
                        </td>
                    </tr>
                </template>
            </Table>
            <BreezeLoading v-if="loading"/>
        </div>

        <BreezeAlert @cancel="cancel()" @eliminar="forceDelete()" :title="'¿Desea eliminar este registro?'" v-if="showAlert"/>
    </Authenticated>
</template>
<script>
import { RouterLink } from 'vue-router'
import Table from '../../components/Table.vue'
import BreezeAlert from '../../components/Alert.vue'
import BreezeLoading from '../../components/Loading.vue'
import ButtonBack from '../../components/ButtonBack.vue'
import IconEdit from '../../components/icons/IconEdit.vue'
import IconShow from '../../components/icons/IconShow.vue'
import Authenticated from '../../layouts/Authenticate.vue'
import IconDestroy from '../../components/icons/IconDestroy.vue'
import {departamentosServices} from '../../services/departamentosServices'
export default ({
    components:{
        Table,
        IconEdit,
        IconShow,
        ButtonBack,
        RouterLink,
        BreezeAlert,
        IconDestroy,
        BreezeLoading,
        Authenticated,
    },
    data(){
        return{
            datos:[],
            showAlert:false,
            id:'',
            loading:true,
        }
    },
    methods:{
        destroy(id){
            this.showAlert=true
            this.id=id
        },
        cancel(){
            this.showAlert=false
        },
        getCategories(){
            departamentosServices.index()
            .then((response)=>{
                if (response.status==200) {
                    this.datos=response.data
                    this.loading=false
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        forceDelete(){
            if (this.id) {
                departamentosServices.delete(this.id)
                .then((response)=>{
                    this.showAlert=false
                    this.getCategories()
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
        }
    },
    mounted(){
        this.getCategories()
    }
})
</script>
