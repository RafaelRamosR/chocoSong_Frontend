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
                Logs
            </template>
        </ButtonBack>

        <div class="min-h-screen py-16 mx-3 items-center">
            <Table :acciones="false">
                <template #thead>
                    <td>Nombre</td>
                </template>
                <template #tbody>
                    <tr v-for="dato in datos" :key="dato.id">
                        <td v-html="dato.id"/>
                        <td v-html="dato.nombre"/>
                    </tr>
                </template>
            </Table>
            <BreezeLoading v-if="loading"/>
        </div>
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
import {logsServices} from '../../services/logsServices'
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
        getCategories(){
            logsServices.index()
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
    },
    mounted(){
        this.getCategories()
    }
})
</script>
