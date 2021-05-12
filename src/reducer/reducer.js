import * as actionTypes from '../action/actionTypes';
const initialState=0;
const reducer = ( state=initialState, action) =>{
    switch (action.type) {
        case actionTypes.INCREMENT:
            return state+=1
    
        case actionTypes.DECREMENT:
            if (state===0){
                return state
            }
            return state-=1
        case actionTypes.ADD_VALUE:
            return state=action.event.target.value
            

        default:
            return state
    }
}

export default reducer;