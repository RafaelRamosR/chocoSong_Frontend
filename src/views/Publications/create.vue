<template>
    <Authenticated>
        <ButtonBack :url="{name:'users.publications'}">
            <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                </svg>
            </template>
            Atras
            <template #title>
                Agregar canción
            </template>
        </ButtonBack>

        <Card>
            <form @submit.prevent="store" enctype="multipart/form-data" class="w-full">
                <div class="mt-5">
                    <LabelTitle value="Nombre"/>
                    <InputText type="text" v-model="form.nombre" class="w-full mt-2" placeholder="Nombre"/>
                    <span v-if="showError['nombre']" v-text="showError['nombre']" class="text-sm text-red-500"></span>
                </div>
                <div class="mt-5">
                    <LabelTitle value="Letra"/>
                    <Textarea type="text" v-model="form.letra" class="w-full mt-2" placeholder="Letra"/>
                    <span v-if="showError['letra']" v-text="showError['letra']" class="text-sm text-red-500"></span>
                </div>

                <div class="mt-5">
                    <LabelTitle value="Audio"/>
                    <InputText type="file" @input="form.audio = $event.target.files[0]"  class="w-full mt-2" placeholder="Audio"/>
                    <span v-if="showError['audio']" v-text="showError['audio']" class="text-sm text-red-500"></span>
                </div>

                <div class="mt-5">
                    <LabelTitle value="Autor"/>
                    <InputText type="text" v-model="form.autor" class="w-full mt-2" placeholder="Autor de la cancion"/>
                    <span v-if="showError['autor']" v-text="showError['autor']" class="text-sm text-red-500"></span>
                </div>

                <div class="mt-5">
                    <LabelTitle value="Categoria"/>
                    <BreezeSelect :datas="categorias" v-model="form.categoria_id" class="w-full mt-2"/>
                    <span v-if="showError['categoria_id']" v-text="showError['categoria_id']" class="text-sm text-red-500"></span>
                </div>

                 <div class="mt-5">
                    <LabelTitle value="Departamento"/>
                    <BreezeSelect :datas="departamentos" v-model="departamento_id" class="w-full mt-2"/>
                    <span v-if="showError['departamento_id']" v-text="showError['departamento_id']" class="text-sm text-red-500"></span>
                </div>

                <div class="mt-5">
                    <LabelTitle value="Municipio"/>
                    <BreezeSelect :datas="municipios" v-model="form.municipio_id" class="w-full mt-2"/>
                    <span v-if="showError['municipio_id']" v-text="showError['municipio_id']" class="text-sm text-red-500"></span>
                </div>

                <div class="mt-10">
                    <ButtonDefault id="sendButton">
                        Guardar
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
import Authenticated from '../../layouts/Authenticate.vue'
import {userServices} from '../../services/userServices'
import LabelTitle from '../../components/LabelSubTitleForms.vue'
import LabelTitleForms from '../../components/LabelTitleForms.vue'
import {municipiosServices} from '../../services/municipiosServices'
import {categoriesServices} from '../../services/categoriesServices'
import {cancionesServices} from '../../services/cancionesServices'
import {departamentosServices} from '../../services/departamentosServices'
export default ({
    components:{
        Card,
        Textarea,
        InputText,
        ButtonBack,
        LabelTitle,
        BreezeSelect,
        ButtonDefault,
        Authenticated,
        LabelTitleForms
    },
    data(){
        return{
            form:{
                audio:'',
                nombre:'',
                letra:'',
                autor:'',
                categoria_id:'',
                municipio_id:'',
                usuario_id:'',
            },
            showError:[],
            categorias:[],
            municipios:[],
            departamentos:[],
            departamento_id:'',
        }
    },
    methods:{
        store(){
            let datos=new FormData()
            let id=userServices.getDataUserAuthenticated()

            datos.append('audio',this.form.audio)
            datos.append('nombre',this.form.nombre)
            datos.append('letra',this.form.letra)
            datos.append('autor',this.form.autor)
            datos.append('categoria_id',this.form.categoria_id)
            datos.append('municipio_id',this.form.municipio_id)
            datos.append('usuario_id', id.id)

            document.querySelector('#sendButton').innerHTML='Subiendo......'
            document.querySelector('#sendButton').disabled=true
            cancionesServices.create(datos)
            .then((response)=>{
                document.querySelector('#sendButton').innerHTML='Guardar'
                document.querySelector('#sendButton').disabled=false
                
                this.form.audio=''
                this.form.nombre=''
                this.form.letra=''
                this.form.autor=''
                this.form.categoria_id=''
                this.form.municipio_id=''
                this.form.usuario_id=''
            })
            .catch((error)=>{
                console.log(error)
            })   
        },
        getDepartamentos(){
            departamentosServices.index()
            .then((response)=>{
                if (response.status==200) {
                    this.departamentos=response.data
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        getCategories(){
            categoriesServices.index()
            .then((response)=>{
                if (response.status==200) {
                    this.categorias=response.data
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        },
    },
    mounted(){
        this.getDepartamentos()
        this.getCategories()
    },
    watch:{
        departamento_id: {
            handler() {
                if (this.departamento_id=='') {
                    this.municipios=[]
                }
                if (this.departamento_id!='') {
                    municipiosServices.getMunicipios(this.departamento_id)
                    .then((response)=>{
                        this.municipios=response.data
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
                }
            },
            deep: true
        }
    }
})
</script>