import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const ADD_TREATMENT = 'ADD_TREATMENT'
export const EDIT_TREATMENT = 'EDIT_TREATMENT'
export const ADD_BOOK = 'Add_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'
export const ADD_MEDICINE_TYPE = 'ADD_MEDICINE_TYPE'
export const EDIT_MEDICINE_TYPE = 'EDIT_MEDICINE_TYPE'

export function addTreatment (treatment) {
    return {
        type: ADD_TREATMENT,
        treatment: {
            ...treatment,
            id: uuidv4()
        }
    }
}

export function removeTreatment (treatment) {
    return {
        treatment: EDIT_TREATMENT,
        book
    }
}

export function addBook (book) {
    return {
        type: ADD_BOOK,
        book: {
            ...book,
            id: uuidv4()
        }
    }
}

export function removeBook (book) {
    return {
        type: REMOVE_BOOK,
        book
    }
}

export function addMedicineType (medicineType) {
    return {
        type: ADD_MEDICINE_TYPE,
        medicineType: {
            ...medicineType,
            id: uuidv4()
        }
    }
}

export function editMedicineType (medicineType) {
    return {
        type: EDIT_MEDICINE_TYPE,
        medicineType
    }
}