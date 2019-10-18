import React,{useEffect} from 'react';
import { Route } from 'react-router-dom';
import { fetchCollectionStart } from '../../../redux/shop/shop.actions';
import {connect} from 'react-redux'
import collectionOverviewContainer from '../../collection-overview/collection-overview.container';
import collectionContainer from '../collection/collection.container';

const ShopPage = ({updateShopData,match}) => {

    useEffect(() => updateShopData() , [updateShopData],[updateShopData]);

        updateShopData();
        return(
        <div className = 'shop-page'>
        <Route exact path={`${match.path}`} component={collectionOverviewContainer} />
        <Route path = {`${match.path}/:categoryId`} component={collectionContainer}  /> 
        </div>);
        
}

const mapDispatchToProps = dispatch => ({
      updateShopData: () => dispatch(fetchCollectionStart()) 
})
    
export default connect(null,mapDispatchToProps)(ShopPage);

