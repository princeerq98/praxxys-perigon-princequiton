<template>
  <ion-page>
    <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="medium">Welcome, First Name</ion-title>
        </ion-toolbar>
      </ion-header>
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header> -->
      
      <div class="fullscreen-bg">
        <video :style="{paddingTop:'1px'}" autoplay loop muted webkit-playsinline>
          <source src="../video/fitnessgym.mp4" types='video/mp4; codecs="h.264"'>
        </video>
          <div class="center animated zoomIn">
          <h1>Perigon</h1>
          <h2>The Undercover Athletes</h2>
          </div>
      </div>
      <div class="bottom animated zoomIn">
        <ion-button href="/" color="danger">Logout</ion-button>
      </div>
      
      

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, alertController  } from '@ionic/vue';
import { useRouter } from 'vue-router';



export default defineComponent({
  name: 'Tab1Page',
  components: { 
    IonContent, 
    IonPage,
  },
  setup(){
    const presentAlert = async () => {
        const alert = await alertController.create({
          header: 'UH OH..',
          subHeader: "Looks like you don't have any passes yet to use. Tap the 'Passes' icon below to purchase",
          buttons: ['OKAY, I UNDERSTAND'],
        });
        await alert.present();
      };

    const router = useRouter();
    return{ router, presentAlert };
  },
});
</script>
<style scoped>
ion-content {
    font-family: 'Lobster', cursive;

    h1 {
      font-size: 5rem;
    }
    h1, h2 {
      color: #fff;
      text-shadow: 1px 0 0 gray, -1px 0 0 gray, 0 1px 0 gray, 0 -1px 0 gray, 1px 1px gray, -1px -1px 0 gray, 1px -1px 0 gray, -1px 1px 0 gray;
       
    }
      
    .fullscreen-bg {
        top: 0;
        right: 0;
        bottom: 10rem;
        left: 0;
        overflow:hidden;
        z-index: -100;
    }
      .center {
        top: 50%;
        transform: translateY(-50%);
        position: absolute !important;
        text-align: center;
        width:100%;
    }
}

</style>
