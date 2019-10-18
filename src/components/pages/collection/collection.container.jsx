import { compose } from 'redux';
import { connect } from 'react-redux';
import WithSpinner from '../../with-spinner/with-spinner.component';
import Collection from './collection.component';
import { selectLoading } from '../../../redux/shop/shop.selectors';

const mapStateToProps = (state) => ({
    isLoading: selectLoading(state)
})

const collectionOverviewContainer = connect(mapStateToProps)(WithSpinner(Collection)) 

/* const collectionContainer = compose(
   connect(mapStateToProps),
   WithSpinner 
   )(Collection) */

export default collectionOverviewContainer