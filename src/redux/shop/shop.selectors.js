import {createSelector} from 'reselect';

// const COLLECTION_ID_PARAM = {
//     'hats' : 1,
//     'sneakers':2,
//     'jackets':3,
//     'womnes': 4,
//     'mens': 5

// };

const selectShop = state => state.shopdata;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop ? shop.collections : null
);

export const selectLoading = createSelector(
    [selectShop],
    (shop) => shop.isFetching
)
export const selectCollectionforPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = (collectionId) => createSelector(
    [selectCollections],
    (collections) => ( collections ? collections[collectionId] : {title:'',items:[]})
);