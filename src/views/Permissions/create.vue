<template>
    <Authenticated>
        <ButtonBack :url="{name:'permissions.index'}">
            <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                </svg>
            </template>
            Atras
            <template #title>
                Agregar permiso
            </template>
        </ButtonBack>

        <Card>
            <form @submit.prevent="store" enctype="multipart/form-data" class="w-full">
                <div class="mt-5">
                    <LabelTitle value="Nombre"/>
                    <InputText type="text" v-model="form.nombre" class="w-full mt-2" placeholder="Nombre"/>
                    <span v-if="showError['nombre']" v-text="showError['nombre']" class="text-sm text-red-500"></span>

                </div>

                <div class="mt-10">
                    <ButtonDefault>
                        Guardar
                    </ButtonDefault>
                </div>
            </form>
        </Card>
    </Authenticated>
</template>
<script>
import Card from '../../components/Card.vue'
import ButtonDefault from '../../components/Button.vue'
import Textarea from '../../components/Textarea.vue' 
import InputText from '../../components/InputName.vue' 
import ButtonBack from '../../components/ButtonBack.vue'
import Authenticated from '../../layouts/Authenticate.vue'
import LabelTitle from '../../components/LabelSubTitleForms.vue'
import LabelTitleForms from '../../components/LabelTitleForms.vue'
import {permissionsServices} from '../../services/permissionsServices'

export default ({
    components:{
        Card,
        Textarea,
        InputText,
        ButtonBack,
        LabelTitle,
        ButtonDefault,
        Authenticated,
        LabelTitleForms
    },
    data(){
        return{
            form:{
                nombre:'',
            },
            showError:[],
        }
    },
    methods:{
        store(){
            if (this.form.nombre=='') {
                this.showError['nombre']='El compo nombre es requerido';
                return;
            }

            let datos=JSON.stringify(this.form)
            permissionsServices.store(datos)
            .then((response)=>{
                console.log(response)
                this.$router.push({name:'permissions.index'})
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    },
})
</script>