import * as actionTypes from './actionTypes';
export const incCounter = () =>{
    return {
        type:actionTypes.INCREMENT
    }
}
export const decCounter = () =>{
    return {
        type:actionTypes.DECREMENT
    }
}
export const addValue = (e) =>{
    return {
        type:actionTypes.DECREMENT,
        event:e
    }
}