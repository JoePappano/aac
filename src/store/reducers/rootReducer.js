import authReducer from './authReducer';
import projectReducer from './projectReducer';
import dogReducer from "./dogReducer"
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    dog: dogReducer,
    firestore: firestoreReducer
})

export default rootReducer