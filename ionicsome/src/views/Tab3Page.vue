<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header> -->
      
      <ExploreContainer name="Home" class="background"/>

      <ion-item class="user">
        <ion-avatar slot="start">
          <img alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJAW11U8mBckhFSpg5d1SnQWgN62gbDgCs_FyCzkX7JthbcxJ6Ko-XKnkWru507_2NFA&usqp=CAU" />
        </ion-avatar>
        <ion-label class="name">
          <ion-card-subtitle>Hello,</ion-card-subtitle>
          PRINCE <br> QUITON
        </ion-label>
      
      </ion-item>

      
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Next class in:</ion-card-subtitle>
          <ion-card-title class="status">No Upcoming Classes </ion-card-title>
        </ion-card-header>

        <ion-card-content>
          >  <ion-button 
                @click="presentAlert"
                slot="end" 
                color="medium" 
                class="book-button">
              Book Now
            </ion-button>
        </ion-card-content>
      </ion-card>


      <ion-grid :style="{textAlign:'center',paddingBottom:'1rem', }">
        <ion-title :style="{color:'black', paddingTop:'1rem', paddingRight:'5rem' }" color="white">Class You May Like:</ion-title>
          <ion-row >
            <ion-col size="6">
              <ion-thumbnail :style="{height:'200px', width:'150px'}">
                <img size="large" class="thumbnail" alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </ion-thumbnail>
            </ion-col>
            <ion-col size="6" c >
              <ion-row>Date</ion-row>
              <ion-row>October 17, 2022 SUNDAY</ion-row>
              <ion-row><ion-subtitle>Time</ion-subtitle></ion-row>
              <ion-row>12:00 PM</ion-row>
              <ion-row>Location</ion-row>
              <ion-row>SAN JUAN</ion-row>
            </ion-col>
          </ion-row>
        </ion-grid>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonButton, alertController,IonGrid, IonCol  } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { useRouter } from 'vue-router';



export default defineComponent({
  name: 'Tab2Page',
  components: { 
    ExploreContainer, 
    IonContent, 
    IonPage,
    IonButton,
    IonGrid,
    IonCol
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

  * {
    
  }

  .name{
    font-weight:bold;
    font-size: 2rem;
  }

  .user{
    height:20%;
    background:gray;
  }

  .background{
    background:white;
    height:100%;
  }
  .status{
    font-size:1.5rem;
  }
  
  ion-grid{
    border-radius:5px;
  }
  ion-col{
    margin-top: 10px;
    color:white;
    background:black;
  }
  ion-row{
    padding-top: 10px;
    border-radius:10px;
  }

</style>
