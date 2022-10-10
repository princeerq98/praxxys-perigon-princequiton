<template>
        <ion-page>
        <ion-header>
        <ion-toolbar>
            <ion-title>Welcome</ion-title>
        </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
        <ion-card color="light">
            <div class="fullscreen-bg">
            <video :style="{paddingTop:'1px'}" autoplay loop muted webkit-playsinline>
            <source src="../video/neonblue.mp4" types='video/mp4; codecs="h.264"'>
            </video>
        </div>
            <ion-card-header>
            <ion-card-title>  Perigon </ion-card-title>
            <ion-card-subtitle> Login Account / Sign Up </ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
            <form
                @submit.prevent="
                mode === AuthMode.SignIn
                    ? signInWithEmailAndPassword(email, password)
                    : signUpWithEmailAndPassword(name, email, password)
                "
            >
                <ion-item v-if="mode === AuthMode.SignUp">
                <ion-label position="floating">Name</ion-label>
                <ion-input v-model="name"></ion-input>
                </ion-item>
                <ion-item>
                <ion-label position="floating">Email</ion-label>
                <ion-input v-model="email"></ion-input>
                </ion-item>
                <ion-item>
                <ion-label position="floating">Password</ion-label>
                <ion-input v-model="password" type="password"></ion-input>
                </ion-item>
                <ion-button
                expand="block"
                color="primary"
                class="ion-margin-top"
                type="submit"
                >
                {{ mode === AuthMode.SignIn ? "Sign In" : "Sign Up" }}
                </ion-button>
                <ion-button
                expand="block"
                color="secondary"
                class="ion-margin-top"
                @click="mode = mode === AuthMode.SignIn ? AuthMode.SignUp : AuthMode.SignIn "
                >
                {{ mode === AuthMode.SignIn ? "Sign Up" : "Cancel" }}
                </ion-button>
            </form>
            </ion-card-content>
            <ion-card-content v-if="errorMsg" class="error-message">
                {{errorMsg}}
            </ion-card-content>
        </ion-card>

        </ion-content>
    </ion-page>

</template>
    
<script lang="ts">
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonButton,
    IonLabel,
    IonItem,
} from "@ionic/vue";

import { auth, db } from "../main";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

enum AuthMode {
    SignIn,
    SignUp,
}

export default {
    name:   "AuthPage",
    components:{
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonCard,
        IonCardHeader,
        IonCardSubtitle,
        IonCardTitle,
        IonCardContent,
        IonInput,
        IonButton,
        IonLabel,
        IonItem,
    },
    setup() {
    const router = useRouter();
    const state = reactive({
        name: "",
        email: "",
        password: "",
        mode: AuthMode.SignIn,
        errorMsg: "",
    });

        const signInWithEmailAndPassword = async (
        email: string,
        password: string
    ) => {
        try {
            if (!email || !password) {
            state.errorMsg = "Email and password required!";
            return;
        }

        await auth.signInWithEmailAndPassword(email, password);
        router.push("/tabs/tab1");
        } catch (err) {
            if(err instanceof Error) {
                state.errorMsg = err.message;
            } else {
                console.log('Unexpected error', err);
            }

        }
    };

    const signUpWithEmailAndPassword = async (
        name: string,
        email: string,
        password: string
    ) => {
        try {
            if (!name || !email || !password) {
            state.errorMsg = "Name, email, and password required!";
            return;
        }

        const authRes = await auth.createUserWithEmailAndPassword(
            email,
            password
        );

        db.collection("users").doc(authRes.user?.uid).set({
            name,
            email,
        });

        router.push("/tabs/tab1");
        } catch (err) {
            if(err instanceof Error){
                state.errorMsg = err.message;
            } else {
                console.log('Unexpected error', err);
            }
        }
    };

    return {
        ...toRefs(state),
        signInWithEmailAndPassword,
        signUpWithEmailAndPassword,
        AuthMode,
    };
    },
};
</script>

<style>
    .center {
    display: flex;
    height: 90vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    }
    .error-message {
    color: #842029;
    background-color: #f8d7da;
    border-color: #f5c2c7;
    text-align: center;
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
</style>