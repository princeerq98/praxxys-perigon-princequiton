<template>
    

    <ion-content>
      <ion-header collapse="condense">
            <ion-toolbar>
              <ion-title size="large"></ion-title>
            </ion-toolbar>
          </ion-header>
    
      <div class="background-container">
        
        <div class="fullscreen-bg">
          <div class="background-filter">
        <ion-card>
          <img src="https://t4.ftcdn.net/jpg/01/82/42/25/360_F_182422577_3VYwjOArcEdVgyn5jcYGhEQw6pnCBsj5.jpg" />
         <ion-card-header>
           <ion-card-title class="perigon">
            Perigon
           </ion-card-title>
            <ion-subtitle class="perigon-subtitle">
              The Undercover Athletes
             </ion-subtitle>
         </ion-card-header>
         <ion-card-content>
            <ion-button class="dark" @click="() => router.push('/auth')">Login / Sign Up</ion-button>
          
            <simple-modal :is-open="modalInfo.show" @modal-closed="handleModalClosed"/>
            <ion-button @click="showModal">Learn More</ion-button>

         </ion-card-content>
        </ion-card>
        </div>
        
          
      </div>
      </div>

      
    
    </ion-content>
    </template>
    
    <script lang="ts">
    
    import { defineComponent, reactive } from 'vue';
    import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
    import SimpleModal from './SimpleModal.vue';
    import { useRouter } from 'vue-router';

    export default  defineComponent({
      name: 'SplashScreen',
      components: { 
        IonContent, 
        IonHeader,
        IonTitle, 
        IonToolbar, 
        IonButton,
        SimpleModal
      },
      setup(){
    const router = useRouter();
    const modalInfo = reactive<{ show: boolean; data: any;}>({
      show: false,
      data: null,
    });
    const showModal = () => {
      modalInfo.show = true;
    };
    const handleModalClosed = (eventData: any) => {
      modalInfo.show = false;
      alert(JSON.stringify(eventData));
    } ;
    return{ router, showModal, modalInfo, handleModalClosed };
  },
    });
    </script>
    <style scoped>
      * {
        background:black ;
    
      }
    
      .explore{
        background : gray;
        height: 100%;
      }
    
      .start-button {
         border-radius: 20px ;
         background: gray;
      }
    
      .perigon{
        font-size:5rem;
      }
      .perigon-subtitle {
        font-size:1.5rem;
      }
    </style>