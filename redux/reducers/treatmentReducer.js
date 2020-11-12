import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { ADD_TREATMENT, EDIT_TREATMENT } from "../actions"

const initialState = {
    treatments: [{ title: 'Treatment 1', description: 'Description 1', active: false, id:uuidv4() }]
}

const treatmentReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TREATMENT:
            return {
                treatments: [
                    ...state.treatments,
                    action.treatment
                ]
            }
        case EDIT_TREATMENT:
            const index = state.treatments.findIndex(treatment => treatment.id == action.treatment.id)
            return {
                treatments: [
                    ...state.treatments.slice(0, index),
                    action.treatment,
                    ...state.treatments.slice(index + 1)
                ]
            }
        default:
            return state
    }
}

export default treatmentReducer