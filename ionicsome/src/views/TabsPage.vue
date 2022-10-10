<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="ticket" />
          <ion-label>Passes</ion-label>
        </ion-tab-button>
        
        <ion-tab-button class="class-tab" tab="tab3" href="/tabs/tab3">
          <ion-icon class="bicycle" :icon="bicycle" />
          <ion-label class="class-text">Class</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon :icon="reader" />
          <ion-label>Instructors</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab5" href="/tabs/tab5">
          <ion-icon :icon="notifications" />
          <ion-label>Notifications</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, triangle, square, bicycle, home, ticket, notifications, book, reader  } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      ellipse,
      triangle,
      square,
      bicycle,
      home,
      notifications,
      book, 
      reader,
      ticket
    }
  }
});
</script>
<style scoped>
  * {
    background:white;
  }

  .class-tab {
    background: black ;
    color:black;
    border-radius: 10rem;
    width:10%;
    height:3rem;
  }
  .class-text{
    background:black;
    color:white;
  }

  .bicycle {
    background: black;
    color:white;
    size: 1.5rem;
  }

</style>
