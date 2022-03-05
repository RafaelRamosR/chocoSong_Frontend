<template>
    <Authenticated>
        <div class=" bg-gray-200">
            Hola desdel componente de Authenticated

            <ion-card>
                Hola
            </ion-card>
        </div>
    </Authenticated>
</template>
<script>
import Authenticated from '../layouts/Authenticate.vue'
import {IonCard} from '@ionic/vue'
export default{
    components:{
        Authenticated,
        IonCard,
        
    }
}
</script>
