import { combineReducers } from 'redux'
import bookReducer from './bookReducer'
import medicineTypeReducer from './medicineTypeReducer'

const rootReducer = combineReducers({
    bookReducer: bookReducer,
    medicineTypeReducer: medicineTypeReducer
})

export default rootReducer