import {compose} from 'redux';
import {connect} from 'react-redux';
import withSpinner from '../with-spinner/with-spinner.component';
import collectionOverview from './collection-overview.component';
import { selectLoading } from '../../redux/shop/shop.selectors';

const mapStateToProps = (state) => ({
    isLoading: selectLoading(state)
});

const collectionOverviewContainer = connect(mapStateToProps)(withSpinner(collectionOverview))

/* const collectionOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner 
    )(collectionOverview)
 */

export default collectionOverviewContainer;