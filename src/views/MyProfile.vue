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
                Actualizar perfil
            </template>
        </ButtonBack>
        <Card>
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

            <form @submit.prevent="updatePassword()" class="w-full mt-10">
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
        </Card>
        <FolatMessage v-if="typeMessage" :type="typeMessage" message="Datos actualizados"/>
    </Authenticated>
</template>
<script>
import { RouterLink } from 'vue-router'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'
import Input from '../components/InputName.vue'
import {userServices} from '../services/userServices'
import Authenticated from '../layouts/Authenticate.vue'
import IconBack from '../components/icons/IconBack.vue'
import ButtonBack from '../components/ButtonBack.vue'
import FolatMessage from '../components/FloatMessege.vue'
import LabelTitleForms from '../components/LabelTitleForms.vue'
import LabelSubTitleForms from '../components/LabelSubTitleForms.vue'

export default ({
    components:{
        Card,
        Input,
        Button,
        IconBack,
        RouterLink,
        ButtonBack,
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
