import { shopTypes } from './shop.types'


export const fetchCollectionStart = () => ({
    type:shopTypes.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = (collectionmap) => ({
    type:shopTypes.FETCH_COLLECTION_SUCCESS,
    payload:collectionmap
})

export const fetchCollectionFail = (err) => ({
    type:shopTypes.FETCH_COLLECTION_FAILURE,
    payload:err.message
})

