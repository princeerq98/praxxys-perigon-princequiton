<template>
  <ion-page >
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Instructors</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content 
      color="dark"
      :fullscreen="true" class="ion-padding"
      >
        <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
          <ion-button color="danger" :style="{paddingRight:'1px'}">❤</ion-button>
          <ion-avatar>
            <img alt="coach image" src="../images/coach1.jpg" />
          </ion-avatar>
        </ion-slide>
        <ion-slide>
          <ion-button color="danger" :style="{paddingRight:'1px'}">❤</ion-button>
          <ion-avatar>
            <img alt="coach image" src="../images/coach8.jpg" />
          </ion-avatar>
        </ion-slide>
        
        <ion-slide>
          <ion-button color="danger" :style="{paddingRight:'1px'}">❤</ion-button>
          <ion-avatar>
            <img alt="coach image" src="../images/coach4.jpg" />
          </ion-avatar>
        </ion-slide>

          </ion-slides>
            
          <div :style="{textAlign : 'center', paddingTop: '16px'}">
          <ion-button color="light" > 📃 View Favorite Instructors</ion-button>
          </div>
          </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonTitle, IonToolbar, IonPage, IonContent,  IonHeader, IonButton } from '@ionic/vue';


export default defineComponent({
  name: 'Tab4Page',
  components: { 
    IonContent, 
    IonPage,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonButton
  },
  setup() {
    const mySlides = ref(null);
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };

    return { slideOpts, mySlides,  };
  },
});
</script>
<style scoped>


ion-slide {
  margin: 4.5rem 1.5rem;
  border-radius:25px;
  height: 250px;
  background-color: white;
}

ion-avatar{
  height:200px;
  width:500px;
}

ion-button{
  border-radius: 25px;
}

</style>
