import { deleteObject, ref } from "firebase/storage";
import { storage } from "../config/firebase.config";

export const filters = [
  { id: 2, name: "Original Composition", value: "Original Composition" },
  { id: 3, name: "Cover", value: "Cover" },
  // { id: 4, name: "Melody", value: "Melody" },
  // { id: 5, name: "Pop", value: "Pop" },
];

export const filterByLanguage = [
  { id: 1, name: "french", value: "French" },
  { id: 2, name: "English", value: "English" },
 { id: 3, name: "None", value: "None" },

 
];

export const deleteAnObject = (referenceUrl) => {
  const deleteRef = ref(storage, referenceUrl);
  deleteObject(deleteRef)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};
