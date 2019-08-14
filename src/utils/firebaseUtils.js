import firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyBGooIZjDzpn-71Wp6JRmXb8qNmbtc-71E",
    authDomain: "siteform-2f846.firebaseapp.com",
    databaseURL: "https://siteform-2f846.firebaseio.com",
    projectId: "siteform-2f846",
    storageBucket: "",
    messagingSenderId: "750810522117",
    appId: "1:750810522117:web:4b727870646d9d6f"
};

const devConfig = {
    apiKey: "AIzaSyBGooIZjDzpn-71Wp6JRmXb8qNmbtc-71E",
    authDomain: "siteform-2f846.firebaseapp.com",
    databaseURL: "https://siteform-2f846.firebaseio.com",
    projectId: "siteform-2f846",
    storageBucket: "",
    messagingSenderId: "750810522117",
    appId: "1:750810522117:web:4b727870646d9d6f"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

//firebase.initializeApp(firebaseConfig);

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
