import './collection-overview.styles.scss';
import React from 'react';
import PreviewCollection from '../preview-collection/preview-collection.component';
import {connect} from 'react-redux'
import {selectCollectionforPreview} from '../../redux/shop/shop.selectors';


const collectionOveview = ({itemList}) => 
{
    return(
            <div className = 'collection-overview'>
                {
                    itemList.map(({id, ...otherCollection}) => (
                        <PreviewCollection key={id} {...otherCollection}/>
                    ))
                }
            </div>
);
}
const mapStateToProps = (state) =>
{ 
    console.log('overview',selectCollectionforPreview(state))
  return { itemList : selectCollectionforPreview(state) }
}

export default connect(mapStateToProps)(collectionOveview);



