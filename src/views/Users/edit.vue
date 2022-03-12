<template>
    <Authenticated>
        <ButtonBack :url="{name:'users.index'}">
            <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                </svg>
            </template>
            Atras
            <template #title>
                Actualizar usuario
            </template>
        </ButtonBack>

        <Card>
            <form @submit.prevent="update" enctype="multipart/form-data" class="w-full">
                <div class="mt-5">
                    <LabelTitle value="Nombre"/>
                    <InputText type="text" v-model="form.nombre" class="w-full mt-2" placeholder="Nombre"/>
                    <span v-if="showError['nombre']" v-text="showError['nombre']" class="text-sm text-red-500"></span>
                </div>
                <div class="mt-5">
                    <LabelTitle value="Apellidos"/>
                    <InputText type="text" v-model="form.apellido" class="w-full mt-2" placeholder="Apellidos"/>
                    <span v-if="showError['apellido']" v-text="showError['apellido']" class="text-sm text-red-500"></span>
                </div>

                <div class="mt-5">
                    <LabelTitle value="Email"/>
                    <InputText type="email" v-model="form.email" class="w-full mt-2" placeholder="Email"/>
                    <span v-if="showError['email']" v-text="showError['email']" class="text-sm text-red-500"></span>
                </div>

                <div class="mt-5">
                    <LabelTitle value="Rol"/>
                    <BreezeSelect :datas="roles" v-model="form.rol_id" class="w-full mt-2"/>
                    <span v-if="showError['rol_id']" v-text="showError['rol_id']" class="text-sm text-red-500"></span>
                </div>

                <BreezeLoading v-if="loading"/>

                <!-- <div class="mt-5">
                    <LabelTitle value="Contraseña"/>
                    <InputText type="password" v-model="form.password" class="w-full mt-2" placeholder="Contraseña"/>
                    <span v-if="showError['password']" v-text="showError['password']" class="text-sm text-red-500"></span>
                </div>

                 <div class="mt-5">
                    <LabelTitle value="Confirmar contraseña"/>
                    <InputText type="password" v-model="confirt_password" class="w-full mt-2" placeholder="Confirmar contraseña"/>
                    <span v-if="showError['confirt_password']" v-text="showError['confirt_password']" class="text-sm text-red-500"></span>
                </div> -->
                

                <div class="mt-10">
                    <ButtonDefault>
                        Actualizar
                    </ButtonDefault>
                </div>
            </form>
        </Card>
    </Authenticated>
</template>
<script>
import Card from '../../components/Card.vue'
import Textarea from '../../components/Textarea.vue' 
import InputText from '../../components/InputName.vue' 
import BreezeSelect from '../../components/Select.vue'
import ButtonDefault from '../../components/Button.vue'
import ButtonBack from '../../components/ButtonBack.vue'
import {userServices} from '../../services/userServices'
import {rolesServices} from '../../services/rolesServices'
import Authenticated from '../../layouts/Authenticate.vue'
import LabelTitle from '../../components/LabelSubTitleForms.vue'
import LabelTitleForms from '../../components/LabelTitleForms.vue'
import BreezeLoading from '../../components/Loading.vue'
export default ({
    components:{
        Card,
        Textarea,
        InputText,
        ButtonBack,
        LabelTitle,
        BreezeSelect,
        ButtonDefault,
        BreezeLoading,
        Authenticated,
        LabelTitleForms
    },
    data(){
        return{
            form:{
                email:'',
                rol_id:'',
                nombre:'',
                apellido:'',
                // password:'',
            },
            roles:'',
            showError:[],
            confirt_password:'',
            loading:true
        }
    },
    methods:{
        update(){
            this.showError=[]
            if (this.form.nombre=='') {
                this.showError['nombre']='El compo nombres es requerido';
                return;
            }
            if (this.form.apellido=='') {
                this.showError['apellido']='El compo apellidos es requerido';
                return;
            }
            if (this.form.email=='') {
                this.showError['email']='El compo email es requerido';
                return;
            }
            if (this.form.rol_id=='') {
                this.showError['rol_id']='El compo rol es requerido';
                return;
            }

            let datos=JSON.stringify(this.form)
            userServices.update(this.$route.params.id,datos)
            .then((response)=>{
                if(response.status==200){
                    console.log(response)
                    this.$router.push({name: "users.index"})
                }

            })
            .catch((error)=>{
                console.log(error)
            })
        }
    },
    mounted(){
        rolesServices.index()
        .then((response)=>{
            this.roles=response.data
        })
        .catch((error)=>{
            console.log('Error al cargar los roles '+error)
        })

        userServices.getUser(this.$route.params.id)
        .then((response)=>{
            this.form.nombre=response.data.nombre
            this.form.apellido=response.data.apellido
            this.form.email=response.data.email
            this.form.rol_id=response.data.rol_id
            this.loading=false
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }
})
</script>