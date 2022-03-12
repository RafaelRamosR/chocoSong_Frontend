<template>
    <LayoutGuest>
        <ButtonBack url="/">
            <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                </svg>
            </template>
            Atras
            <template #title>
                Regístrarse
            </template>
        </ButtonBack>
        <div class="min-h-screen py-10 px-3 items-center">
            <div class="min-w-full">
                <div class="flex items-center justify-center mb-14">
                    <img class=" w-28" src="../assets/login.svg" alt="">
                </div>
                <div class="">
                    <form @submit.prevent="store" enctype="multipart/form-data" class="w-full">
                        <div class="text-center">
                            <LabelTitleForms value="Registrate"/>
                        </div>
                        <div class="mt-5">
                            <LabelTitle value="Nombres"/>
                            <InputText type="text" v-model="form.nombre" class="w-full mt-2" placeholder="Nombres"/>
                            <span v-if="showError['nombre']" v-text="showError['nombre']" class="text-sm text-red-500"></span>
                        </div>
                        <div class="mt-5">
                            <LabelTitle value="Apellidos"/>
                            <InputText type="text" v-model="form.apellido" class="w-full mt-2" placeholder="Apellidos"/>
                            <span v-if="showError['apellido']" v-text="showError['apellido']" class="text-sm text-red-500"></span>
                        </div>
                        <div class="mt-5">
                            <LabelTitle value="Email"/>
                            <InputText type="text" v-model="form.email" class="w-full mt-2" placeholder="Correo electrónico"/>
                            <span v-if="showError['email']" v-text="showError['email']" class="text-sm text-red-500"></span>
                        </div>
                        <div class="mt-5">
                            <LabelTitle value="Contraseña"/>
                            <InputText type="password" v-model="form.password" class="w-full mt-2" placeholder="Contraseña"/>
                            <span v-if="showError['password']" v-text="showError['password']" class="text-sm text-red-500"></span>
                        </div>
                        <div class="mt-6">
                            <LabelTitle value="Confirmar contraseña"/>
                            <InputText type="password" v-model="confirm_password" class="w-full mt-2" placeholder="Confirmar contraseña"/>
                            <span v-if="showError['confirm_password']" v-text="showError['confirm_password']" class="text-sm text-red-500"></span>
                        </div>

                        <div class="mt-10">
                            <ButtonDefault>
                                Registrar
                            </ButtonDefault>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </LayoutGuest>
</template>
<script>
import LayoutGuest from '../layouts/guest.vue'
import InputText from '../components/InputName.vue'
import IconBack from '../components/icons/IconBack.vue'
import LabelTitle from '../components/LabelSubTitleForms.vue'
import LabelTitleForms from '../components/LabelTitleForms.vue'
import ButtonDefault from '../components/Button.vue'
import {userServices} from '../services/userServices'
import ButtonBack from '../components/ButtonBack.vue'
export default{
    components:{
        IconBack,
        InputText,
        ButtonBack,
        LabelTitle,
        LayoutGuest,
        ButtonDefault,
        LabelTitleForms,
    },
    data(){
        return{
            form:{
                nombre:'',
                apellido:'',
                email:'',
                rol_id:4,
                password:'',
            },
            confirm_password:'',
            showError:[],
        }
    },
    methods:{   
        store(){
            this.showError=[]
            if(this.form.nombre==''){
                this.showError['nombre']='El campo nombre es requerido.'
                return
            }
            if(this.form.apellido==''){
                this.showError['apellido']='El campo apellido es requerido.'
                return
            }
            if(this.form.email==''){
                this.showError['email']='El campo email es requerido.'
                return
            }
            if(this.form.password==''){
                this.showError['password']='El campo contraseña es requerido.'
                return
            }
     
            if(this.confirm_password == ''){
                this.showError['confirm_password']='La confirmación de la contraseña es requerida.'
                return
            }
            if(this.confirm_password !== this.form.password){
                this.showError['password']='Las contraseñas no coinciden.'
                return
            }
            let datos=JSON.stringify(this.form)
            userServices.register(datos)
            .then((response)=>{
                if (response.status==200) {
                    console.log(response)
                    this.$router.push({name: "login"})
                }
            })
            .catch((error)=>{
                console.log(error)
            })
            

        }
    }
}
</script>