import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryreducer from './Directory/directory.reducer';
import  shopReducer  from './shop/shop.reducer'

const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']  
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryreducer,
    shopdata : shopReducer
})

export default persistReducer(persistConfig,rootReducer);