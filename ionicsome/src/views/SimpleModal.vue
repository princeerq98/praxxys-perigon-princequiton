<template>
  <ion-modal
    :is-open="isOpen"
    @onDidDismiss="handleDidDismiss(true)">
    <ion-page color="primary" class="page">
        <ion-header>
          <ion-toolbar>
            <ion-title><h1>Learn More</h1></ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-header class="header"></ion-header>
        <ion-content color="dark" >
                <ion-button @click="handleDidDismiss(false)" >CLOSE</ion-button>
                <!-- <ion-button color="danger" @click="handleDidDismiss(true)" >CANCEL</ion-button> -->
        

        <ion-slides :style="{width:'20rem', height:'70%', paddingTop:'7rem'}" pager="true" :options="slideOpts">
          <ion-slide>
            <ion-grid>
              <ion-row>
                    <ion-img src="https://www.nicepng.com/png/detail/335-3355441_ticket-icon-white-png.png"></ion-img>
              </ion-row>
              <ion-row :style="{marginLeft:'6rem', fontWeight:'bold'}" >BUY PASSES</ion-row>
              <ion-row>Lorem ipsum dolor sit amet.</ion-row>
              
            </ion-grid>
          </ion-slide>
          <ion-slide>
            <ion-grid>
              <ion-row>
                    <ion-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanGXXLhOb4X8SvLh5a2zc41s35GujM5Z7yw&usqp=CAU"></ion-img>
              </ion-row>
              <ion-row :style="{marginLeft:'6rem', fontWeight:'bold'}" >BOOK A RIDE</ion-row>
              <ion-row>Lorem ipsum dolor sit amet.</ion-row>
              
            </ion-grid>          </ion-slide>
          <ion-slide>
            <ion-grid>
              <ion-row>
                    <ion-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbxp9tKFuo0RGH9tyDcoN9_Pb0FPn4F8ieOmpSHdqWBGPgrNFpvXSfqA2xbXbEmyySDKA&usqp=CAU"></ion-img>
              </ion-row>
              <ion-row :style="{marginLeft:'4rem',width:'2rem', fontWeight:'bold'}" >PAY AT YOUR CONVENIENCE</ion-row>
              <ion-row>Lorem ipsum dolor sit amet.</ion-row>
            </ion-grid> 
          </ion-slide>
        </ion-slides>

        <ion-item color="dark"><h1>Swipe to see next ➡⬅ </h1></ion-item>


        </ion-content>
    </ion-page>
  </ion-modal>
</template>
    
<script lang="ts">

    import { defineComponent, SetupContext } from 'vue';
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonModal } from '@ionic/vue';    
    import { IonSlide, IonSlides} from '@ionic/vue';
    import 'swiper/css'

    
    export default  defineComponent({
      name: 'LearnMore',
      components: { 
        // ExploreContainer,
        IonModal,
        IonContent, 
        IonHeader,
        IonTitle, 
        IonToolbar,
        IonSlide,
        IonSlides,
        IonPage
      },
      props:{
        isOpen : {
          default : false,
          required : true,
        },
      },
      setup(props: any, ctx: SetupContext){
        const handleDidDismiss = (isCancelled: boolean) => {
          console.log(isCancelled);
          ctx.emit('modal-closed', { isCancelled })
        };
        const slideOpts = {
        initialSlide: 0,
        speed: 400
        };
        
    return{ 
      handleDidDismiss,
      slideOpts
    };
  },
    });
    </script>


    <style scoped>
      swiper-slide{
        height:3rem;
        width:3rem;
      }
    </style>