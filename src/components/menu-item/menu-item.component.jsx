import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const Menuitem = ({title,imageUrl,size,history,match}) => (
    <div className = {`${size} menu-item`} onClick={() => history.push(`${match.url}${title}`)}> 
        <div className = 'background-image'
         style = {{backgroundImage: `url(${imageUrl})`}}
        ></div>
    <div className='content'>
        <h1 className='title'>
            {title.toUpperCase()}
        </h1>
        <span className='subtitle'>Shop Now</span>
    </div>
</div>

)

export default withRouter(Menuitem);