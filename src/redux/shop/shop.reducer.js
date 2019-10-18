import { shopTypes } from './shop.types';

const INITIAL_STATE = {
  collections:null,
  isFetching:false,
  message:''
}

const shopReducer = ( state = INITIAL_STATE , action ) => {

    switch(action.type){

      case shopTypes.SHOP_DATA:

      /*   return {
        ...state,
        collections: action.payload
        } */

      case shopTypes.FETCH_COLLECTION_START:

        return {
          ...state,
          isFetching: true
        }

      case shopTypes.FETCH_COLLECTION_SUCCESS:
  
        return {
          
          ...state,
          collections: action.payload,
          isFetching: false

          }

      case shopTypes.FETCH_COLLECTION_FAILURE:

        return {
          ...state,
          isFetching:false,
          message : action.payload 
        }


        default:
            return state
    } 
}  

export default shopReducer;