import React,{Component} from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './preview-collection.styles.scss';

class CollectionPreview extends Component { 

    constructor(props){
        super(props);
        this.state = {
            items : this.props.items.slice(0,4),
            btnTxt : 'more'
        }
    }
    
showMore = () => {
    if(this.state.btnTxt === 'more')
    {
    this.setState(
        {  
        items: this.props.items,
        btnTxt:'less'
    })
   }
   else if(this.state.btnTxt === 'less') {
    this.setState({
        items: this.props.items.slice(0,4),
        btnTxt:'more'
    }) 
   }
}
render() {
    return (
    <div className='collection-preview'>
        <h1 className='title'>
            {this.props.title.toUpperCase()}
        </h1>
        <div className='preview'>
            {this.state.items.map((item) => (
                <CollectionItem key={item.id} item={item} /> 
            ))}
    {this.props.items.length > 4 && <button onClick = {this.showMore}>{this.state.btnTxt}</button>}
        </div>
    </div>
    );
 }
}
export default CollectionPreview;