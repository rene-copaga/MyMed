import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { ADD_MEDICINE_TYPE, EDIT_MEDICINE_TYPE } from "../actions"

const initialState = {
    medicineTypes: [{ name: 'Capsulas', id:uuidv4() }]
}

const medicineTypeReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MEDICINE_TYPE:
            return {
                medicineTypes: [
                    ...state.medicineTypes,
                    action.medicineType
                ]
            }
        case EDIT_MEDICINE_TYPE:
            const index = state.medicineTypes.findIndex(medicineType => medicineType.id == action.medicineType.id)
            return {
                medicineTypes: [
                    ...state.medicineTypes.slice(0, index),
                    action.medicineType,
                    ...state.medicineTypes.slice(index + 1)
                ]
            }
        default:
            return state
    }
}

export default medicineTypeReducer