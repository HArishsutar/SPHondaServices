import firebase from 'firebase';

var firebaseApp = firebase.initializeApp(
{
        apiKey: "AIzaSyCvANOY9M9xUFRABCgC_NVv2JHw1DkZFjQ",
        authDomain: "fir-p-honda-service-website.firebaseapp.com",
        databaseURL: "https://fir-p-honda-service-website-default-rtdb.firebaseio.com",
        projectId: "fir-p-honda-service-website",
        storageBucket: "fir-p-honda-service-website.appspot.com",
        messagingSenderId: "327060768045",
        appId: "1:327060768045:web:345ebeeda387eacd23ffa4"
 
}
);
var db=firebaseApp.firestore();
export {db};
