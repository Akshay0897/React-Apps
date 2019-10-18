import { takeLatest,call,put } from 'redux-saga/effects';
import { shopTypes }from './shop.types';
import {fetchCollectionSuccess,fetchCollectionFail } from './shop.actions'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';


export function* fetchCollectionStartAsync() {
    yield console.log('I am Fired');
    try{
    const collectionref = firestore.collection('collection');
    const snapshot = yield collectionref.get();
    const collectionmap = yield call(
        convertCollectionsSnapshotToMap,
        snapshot
    );
    
    yield put(fetchCollectionSuccess(collectionmap));

    } catch(err){
          yield put(fetchCollectionFail(err.message))
    }
}

export function* fetchCollectionStart () {
    yield takeLatest(
        shopTypes.FETCH_COLLECTION_START,
        fetchCollectionStartAsync
    )

}