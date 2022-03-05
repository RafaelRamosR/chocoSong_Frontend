<template>
    <LayoutGuest>
        <ButtonBack url="/">
            <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                </svg>
            </template>
            Atras
        </ButtonBack>
        <div class="">
            <div class="min-h-screen flex justify-center items-center">
                <div class="min-w-full">

                    <div class="flex items-center justify-center mb-14">
                        <img class=" w-28" src="../assets/login.svg" alt="">
                    </div>
                    <div class="">
                        <form @submit.prevent="store" enctype="multipart/form-data" class="w-full">
                            <div class="text-center">
                                <LabelTitleForms value="Login"/>
                            </div>
                            <div class="mt-5">
                                <LabelTitle value="Email"/>
                                <InputText type="text" v-model="form.username" class="w-full mt-2" placeholder="Correo electrónico"/>
                                <span v-if="showError['username']" v-text="showError['username']" class="text-sm text-red-500"></span>
                            </div>

                            <div class="mt-6">
                                <LabelTitle value="Contraseña"/>
                                <InputText type="password" v-model="form.password" class="w-full mt-2" placeholder="Contraseña"/>
                                <span v-if="showError['password']" v-text="showError['password']" class="text-sm text-red-500"></span>
                            </div>

                            <div class="mt-10">
                                <ButtonDefault>
                                    Login
                                </ButtonDefault>
                            </div>
                        </form>
                    </div>
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
import {loginServices} from '../services/loginServices'
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
                username:'admin@choquisong.com',
                password:'admin999',
            },
            showError:[],
        }
    },
    methods:{   
        store(){
            var datos = new FormData();
            datos.append('username',this.form.username);
            datos.append('password',this.form.password);
            this.showError=[];
            if (this.form.username=='') {
                this.showError['username']='El compo email es requerido';
                return;
            }
            if (this.form.password=='') {
                this.showError['password']='El compo contraseña es requerido';
                return;
            }

            loginServices.login(datos)
            .then((response) =>{
                if(response.status==200){
                    localStorage.setItem('token',response.data.access_token)
                    localStorage.setItem('identify',JSON.stringify(response.data.data))
                    this.$router.push({name: "dashboard"})
                }
            })
            .catch( (error) =>{
                console.warn(error)
            })
        }
    }
}
</script>
