<template>
    <PageBlanck>
        <template #back>
            <router-link to="/dashboard">
                <IconBack/>
            </router-link>
        </template>
        <template #title>
            Mi perfil
        </template>
        
        <div class="bg-gray-50 mt-4 rounded-md shadow-md p-3">
            <form @submit.prevent="updateProfile()" class="w-full">
                <div class="text-center">
                    <LabelTitleForms value="Mis datos"/>
                </div>
                <div class="mt-3">
                    <LabelSubTitleForms value="Nombres"/>
                    <Input type="text" class="w-full" v-model="form.nombre" placeholder="Nombres"/>
                </div>
                <div class="mt-3">
                    <LabelSubTitleForms value="Apellidos"/>
                    <Input type="text" class="w-full" v-model="form.apellido" placeholder="Apellidos"/>
                </div>
                <div class="mt-3">
                    <LabelSubTitleForms value="Email"/>
                    <Input type="email" class="w-full" v-model="form.email" placeholder="Correo electronico"/>
                </div>

                <div class="mt-5">
                    <Button>
                        Actualizar
                    </Button>
                </div>
            </form>
        </div>

        <div class="bg-gray-50 mt-4 rounded-md mt-10 shadow-md p-3">
            <form @submit.prevent="updatePassword()" class="w-full">
                <div class="text-center">
                    <LabelTitleForms value="Cambiar contraseña"/>
                </div>
                <div class="mt-3">
                    <LabelSubTitleForms value="Nueva contraseña"/>
                    <Input type="password" class="w-full" v-model="formPassword.newPassword" placeholder="Nueva contraseña"/>
                </div>
                <div class="mt-3">
                    <LabelSubTitleForms value="Confirmar contraseña"/>
                    <Input type="password" class="w-full" v-model="formPassword.confirmPassword" placeholder="Confirmar contraseña"/>
                </div>

                <div class="mt-5">
                    <Button>
                        Actualizar
                    </Button>
                </div>
            </form>
        </div>
        <FolatMessage v-if="typeMessage" :type="typeMessage" message="Datos actualizados"/>
    </PageBlanck>
</template>
<script>
import Button from '../components/Button.vue'
import LabelSubTitleForms from '../components/LabelSubTitleForms.vue'
import LabelTitleForms from '../components/LabelTitleForms.vue'
import Input from '../components/InputName.vue'
import { RouterLink } from 'vue-router'
import PageBlanck from '../components/pageBlank.vue'
import Authenticated from '../layouts/Authenticate.vue'
import IconBack from '../components/icons/IconBack.vue'
import {userServices} from '../services/userServices'
import FolatMessage from '../components/FloatMessege.vue'
import {useToast} from 'vue-toastification'
export default ({
    components:{
        Input,
        Button,
        IconBack,
        PageBlanck,
        RouterLink,
        FolatMessage,
        Authenticated,
        LabelTitleForms,
        LabelSubTitleForms,
    },
    setup(){
    },
    data(){
        return{
            idUser:'',
            typeMessage:'',
            form:{
                url:'',
                email:'',
                rol_id:'',
                nombre:'',
                apellido:'',
            },
            formPassword:{
                newPassword:'',
                confirmPassword:'',
            },
        }
    },
    methods:{
        updateProfile(){
            let datos=JSON.stringify(this.form)

            userServices.update(this.idUser,datos)
            .then((response)=>{
                this.form.nombre=response.data.nombre
                this.form.apellido=response.data.apellido
                this.form.email=response.data.email
                this.form.url=response.data.url
            })
            .catch((error)=>{
                console.log("Nooo "+error)
            })
        },

        updatePassword(){
            let datos=JSON.stringify(this.formPassword)
        }
    },
    mounted(){
        userServices.show()
        .then((response)=>{
            this.idUser=response.data.id
            this.form.rol_id=response.data.rol_id
            this.form.email=response.data.email
            this.form.nombre=response.data.nombre
            this.form.apellido=response.data.apellido
        })
        .catch((error)=>{

        })
    }
})
</script>
