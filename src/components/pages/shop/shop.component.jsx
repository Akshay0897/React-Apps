import React,{Component} from 'react';
import CollectionOveview from '../../collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
    console.log(match)
    return(
            <div className = 'shop-page'>
                
                    <Route exact path={`${match.path}`} component={CollectionOveview} />
                    <Route path = {`${match.path}/:categoryId`} component={CollectionPage} />
                
            </div>
);
     }
export default ShopPage;
