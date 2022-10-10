<template>
  <ion-page>
    <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Notifications</ion-title>
        </ion-toolbar>
      </ion-header>
    <ion-content class="ion-padding">
    

      <ion-list class="list">
          <ion-item v-for="item in items" :key="item">
            <ion-avatar slot="start">
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>{{ item }} // Lorem ipsum dolor sit amet.</ion-label>
        </ion-item>
      </ion-list>
    
      <ion-infinite-scroll
        @ionInfinite="loadData($event)" 
        threshold="100px" 
        id="infinite-scroll"
        :disabled="isDisabled"
      >
        <ion-infinite-scroll-content
          loading-spinner="bubbles"
          loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  InfiniteScrollCustomEvent,
  IonContent, 
  IonInfiniteScroll, 
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage
 } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
 
export default defineComponent({
  components: {
    IonContent, 
    IonInfiniteScroll, 
    IonInfiniteScrollContent,
    IonItem,
    IonLabel,
    IonList,
    IonPage
  },
  setup() {
    const isDisabled = ref(false);
    const toggleInfiniteScroll = () => {
      isDisabled.value = !isDisabled.value;
    }
    const items = ref<number[]>([]);
    const pushData = () => {
      const max = items.value.length + 20;
      const min = max - 20;
      for (let i = min; i < max; i++) {
        items.value.push(i);
      }
    }
    
    const loadData = (ev: InfiniteScrollCustomEvent) => {
      setTimeout(() => {
        pushData();
        console.log('Loaded data');
        ev.target.complete();
  
        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (items.value.length === 1000) {
          ev.target.disabled = true;
        }
      }, 500);
    }
    
    pushData();
    
    return {
      isDisabled,
      toggleInfiniteScroll,
      loadData,
      items
    }
  }
});

</script>

<style>
*{
}
.list{
  background: white !important;
  border-radius: 20px;
}

ion-content{
  background:white;
}
</style>