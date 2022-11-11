import { useState } from "react";
import { db } from '../configuration/firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

export const COLLECTION = collection(db, 'animals');


export async function addNewAnimal(model) {

    await addDoc(COLLECTION, model);

}


export async function getAnimals() {
    const data = await getDocs(COLLECTION);

    const list = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return list;

}


export function getSpecificAnimal(id) {
    // todo
}

export async function deleteAnimal(id) {
    const dataDoc = doc(db, 'animals', id)
    await deleteDoc(dataDoc).then(() => {
        window.location.reload()
    });
}