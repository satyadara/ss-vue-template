
import { firebaseConfig } from '../config'
import * as firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp(firebaseConfig);
const $database = firebase.database();

export const getAllInformation = () => {
    return $database.ref('/').once('value').then(function (snapshot) {
        return snapshot.val()
    });
}