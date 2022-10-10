<template>
    <ion-page >
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Purchase Passes</ion-title>
          </ion-toolbar>
        </ion-header>
  
        <ion-content 
        color="dark"
        :fullscreen="true" class="ion-padding"
        >
        
        <ion-slides :style="{width:'20rem', height:'70%', paddingTop:'7rem'}" pager="true" :options="slideOpts">
          
          <ion-slide :style="{background:'white', boxShadow:'20px 1px black' }">
            <ion-grid >
              <ion-row  :style="{ color:'white',height:'5rem',borderRadius:'10px', background:'black', marginLeft:'1rem', fontWeight:'bold'}" >
                    <ion-icon  :icon="bicycle" />                    
                    <ion-row>
                        <ion-col>
                            <h1 :style="{paddingTop:'1rem'}" size="medium"> 2 Passes</h1>
                        </ion-col>
                    </ion-row>
              </ion-row>
                <ion-row>
                    <ion-row :style="{ marginLeft:'6rem', fontWeight:'bold'}" >
                        <ion-col >
                            <ion-button color="medium" :style="{paddingLeft:'7rem'}">
                              BUY <ion-icon  :style="{ alignItem:'center'}" :icon="addCircleOutline" />      
                            </ion-button> 
                        </ion-col>
                    </ion-row>                    
                </ion-row>
                <ion-row class="detail">Price</ion-row>
                <ion-row class="data">PHP 2785</ion-row>

                <ion-row class="detail">Expiration</ion-row>
                <ion-row class="data">45 DAYS</ion-row>

                <ion-row class="detail" >Pack</ion-row>
                <ion-row class="data">2 PACK</ion-row>

                <ion-row class="detail">Mode</ion-row>
                <ion-row class="data">SHAREABLE</ion-row>
            </ion-grid>
          </ion-slide>

          <ion-slide :style="{background:'white', boxShadow:'20px 1px black' }">
            <ion-grid >
              <ion-row  :style="{ color:'white',height:'5rem',borderRadius:'10px', background:'black', marginLeft:'1rem', fontWeight:'bold'}" >
                    <ion-icon  :icon="bicycle" />                    
                    <ion-row>
                        <ion-col>
                            <h1 :style="{paddingTop:'1rem'}" size="medium"> 5 Passes</h1>
                        </ion-col>
                    </ion-row>
              </ion-row>
                <ion-row>
                    <ion-row :style="{ marginLeft:'6rem', fontWeight:'bold'}" >
                        <ion-col >
                            <ion-button color="medium" :style="{paddingLeft:'7rem'}">
                              BUY <ion-icon  :style="{ alignItem:'center'}" :icon="addCircleOutline" />      
                            </ion-button> 
                        </ion-col>
                    </ion-row>                    
                </ion-row>
                <ion-row class="detail">Price</ion-row>
                <ion-row class="data">PHP 4750</ion-row>

                <ion-row class="detail">Expiration</ion-row>
                <ion-row class="data">45 DAYS</ion-row>

                <ion-row class="detail" >Pack</ion-row>
                <ion-row class="data">5 PACK</ion-row>

                <ion-row class="detail">Mode</ion-row>
                <ion-row class="data">SHAREABLE</ion-row>
            </ion-grid>
          </ion-slide>

          <ion-slide :style="{background:'white', boxShadow:'20px 1px black' }">
            <ion-grid >
              <ion-row  :style="{ color:'white',height:'5rem',borderRadius:'10px', background:'black', marginLeft:'1rem', fontWeight:'bold'}" >
                    <ion-icon  :icon="bicycle" />                    
                    <ion-row>
                        <ion-col>
                            <h1 :style="{paddingTop:'1rem'}" size="medium"> 10 Passes</h1>
                        </ion-col>
                    </ion-row>
              </ion-row>
                <ion-row>
                    <ion-row :style="{ marginLeft:'6rem', fontWeight:'bold'}" >
                        <ion-col >
                            <ion-button color="medium" :style="{paddingLeft:'7rem'}">
                              BUY <ion-icon  :style="{ alignItem:'center'}" :icon="addCircleOutline" />      
                            </ion-button> 
                        </ion-col>
                    </ion-row>                    
                </ion-row>
                <ion-row class="detail">Price</ion-row>
                <ion-row class="data">PHP 9821</ion-row>

                <ion-row class="detail">Expiration</ion-row>
                <ion-row class="data">45 DAYS</ion-row>

                <ion-row class="detail" >Pack</ion-row>
                <ion-row class="data">10 PACK</ion-row>

                <ion-row class="detail">Mode</ion-row>
                <ion-row class="data">SHAREABLE</ion-row>


            </ion-grid>
          </ion-slide>


        </ion-slides>
        

            <div :style="{textAlign : 'center',width:'100%', paddingTop: '8rem'}">
            <ion-button color="light" >CHECKOUT</ion-button>
            </div>
            </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { IonTitle, IonToolbar, IonPage, IonContent,  IonHeader, IonButton, IonIcon } from '@ionic/vue';
  import { bicycle, addCircleOutline } from 'ionicons/icons';

  
  export default defineComponent({
    name: 'Tab2Page',
    components: { 
      IonContent, 
      IonPage,
      IonToolbar,
      IonHeader,
      IonTitle,
      IonButton,
      IonIcon,
    },
    setup() {
      const mySlides = ref(null);
      // Optional parameters to pass to the swiper instance. See https://swiperjs.com/swiper-api for valid options.
      const slideOpts = {
        initialSlide: 1,
        speed: 400
      };
  
    // onMounted(() => {
    //   console.log(mySlides.value);
    // });
  
    // const nextSlide = async () =>{
    //     debugger;
    //     await s = await mySlides?.value?.$el.getSwiper();
    //     console.log(s);
    // }
  
    // const prevSlide = async () =>{
    //     debugger;
    //     // await s = await mySlides?.value?.$el.getSwiper();
    //     // await s.slidePrev();
    // }
  
      return { slideOpts, mySlides, bicycle, addCircleOutline  };
    },
  });
  </script>
  <style scoped>
  
  ion-grid{
    padding-bottom: 10rem;
  }

  ion-icon{
    height: 2rem;
    width:2rem;
  }

.detail{
    font-size: 15px;
    padding-left:1.5rem;
}
.data{
    padding-left:2.5rem;
    font-weight: bold;
}

  </style>
  