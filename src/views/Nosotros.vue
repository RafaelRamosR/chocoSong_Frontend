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
                Nosotros
            </template>
        </ButtonBack>
        <div class="min-h-screen py-10 px-3 items-center">
            <div class="min-w-full">
                <CardAbounts>
                    <LabelTitleForms value="QUIENES SOMOS"/>
                    <div class="mt-4">
                        <p>
                            <b>CHOCOSONG</b> es una aplicacion musical que atiende las necesidades de servicios, como carga, 
                            reproduccion y registro de canciones ancestrales y sus letras.
                        </p>
                    </div>
                </CardAbounts>
                <CardAbounts>
                    <LabelTitleForms value="Mision"/>
                    <div class="mt-4">
                        <p>
                            <b>CHOCOSONG</b> nació con el objetivo de desarrollar un proyecto empresarial basado en 
                            la incorporación de nuevas tendencias musicales que permitieran a sus clientes, la adaptación de 
                            nuevas tecnologías, apostando firmemente por el compromiso, espíritu que le llevó a emprender un proyecto vocacional.
                        </p>
                        <p>
                            Como resultado de la experiencia acumulada durante años y con un cada vez mayor conocimiento de la musica ancestral, 
                            se caracterizada por su seriedad, su servicio, su rigor y compromiso con el cliente, que ha encontrado en las nuevas 
                            tecnologías el soporte idóneo sobre el que poder desarrollar su proyecto musical.
                        </p>
                    </div>
                </CardAbounts>

                <CardAbounts>
                    <LabelTitleForms value="vision"/>
                    <div class="mt-4">
                        <p>
                            Nuestro objetivo es ser un referente en continuo crecimiento, con presencia nacional, reconocido por la calidad del servicio proporcionado 
                            a sus clientes, la rentabilidad sostenida a sus inversores, así como oportunidades de desarrollo profesional musical y personal a sus empleados 
                            y colaboradores , con una contribución positiva a la sociedad en los siguientes ámbitos:
                        </p>

                        <LabelTitle value="Clientes"/> 
                        <p> 
                            Nos ponemos en lugar del cliente, comprendemos su organización y proporcionamos soluciones prácticas a costes 
                            asequibles. Ofrecemos colaboración, no solo provisión: Servicio integral al cliente.
                        </p>

                        <LabelTitle value="Personas"/> 
                        <p>
                            Ser un buen lugar donde trabajar y colaborar, que las personas se sientan inspiradas para dar cada día lo mejor de sí mismas.
                        </p>

                        <LabelTitle value="Servicios"/> 

                        <p>
                            Ofrecer una variada cartera de Servicios de calidad que se anticipen y satisfagan los deseos y necesidades de los clientes y usuarios.
                        </p>

                        <LabelTitle value="Beneficio"/> 

                        <p>
                            Maximizar el rendimiento teniendo presente las responsabilidades generales de la empresa.
                        </p>

                        <LabelTitle value="Productividad"/> 

                        <p>
                            Ser una entidad eficaz y dinámica, comprometida en la acción de difusión de prácticas responsables.
                        </p>
                    </div>
                </CardAbounts>

                <CardAbounts>
                    <LabelTitleForms value="valores"/>
                    <div class="mt-4">
                        <p>
                            El objetivo fundamental de nuestros proyectos es la creación de valor añadido para el cliente final. 
                            El respeto de la estratégía de nuestros clientes, la disciplina de nuestros consultores y la puesta en práctica de las mejores técnicas, son el camino para obtener la excelencia. 
                            Para ello, nos basamos en los siguientes valores:
                        </p>

                        <LabelTitle value="Orientación al cliente"/> 

                        <p>
                            Centramos nuestro esfuerzo en la satisfaccio?n del cliente, aportando soluciones competitivas y de calidad.
                        </p>
                        <LabelTitle value="Conducta ética"/> 
                        <p>
                            Actuamos con liderazgo, profesionalidad, integridad moral, lealtad y respeto a las personas. Todos nuestros consultores esta adheridos al código 
                        </p>

                        <LabelTitle value="Colaboración"/> 
                        <p>
                            Potenciamos el talento colectivo.
                        </p>
                        <LabelTitle value="Diversidad"/> 
                        <p>
                            Deseamos contar con un amplio abanico de referencias normativas y de buenas prácticas.
                        </p>
                        <LabelTitle value="Calidad"/> 
                        <p>
                            Vemos la excelencia como camino para la realización personal, grupal y organizacional.
                        </p>
                        <LabelTitle value="Innovación"/> 
                        <p>
                            Promovemos la mejora continua y la innovacio?n para alcanzar la ma?xima calidad desde criterios de rentabilidad.
                        </p>
                        <LabelTitle value="Orientación a resultados"/> 
                        <p>
                            Dirigimos nuestras actuaciones hacia la consecucio?n de los objetivos del proyecto empresarial y de rentabilidad.
                        </p>
                        <LabelTitle value="Responsabilidad Social"/> 
                        <p>
                            Nos comprometemos socialmente con el pago de nuestros impuestos con la comunidad y adaptamos nuestras estrategias a la preservacio?n del medio ambiente.
                        </p>
                    </div>
                </CardAbounts>
            </div>
        </div>
    </LayoutGuest>
</template>
<script>
import LayoutGuest from '../layouts/guest.vue'
import ButtonBack from '../components/ButtonBack.vue'
import LabelTitleForms from '../components/LabelTitleForms.vue'
import CardAbounts from '../components/CardAbount.vue'
import LabelTitle from '../components/LabelSubTitleForms.vue'

export default ({
    components:{
        ButtonBack,
        LabelTitle,
        CardAbounts,
        LayoutGuest,
        LabelTitleForms,
    }
})
</script>
