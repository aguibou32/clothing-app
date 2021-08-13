import firebase from 'firebase/app';
import 'firebase/firestore';


const firestore = firebase.firestore();

firestore.collection("users").doc("FSptqReFLh6GzYrSSeIE").collection('cartItems');
