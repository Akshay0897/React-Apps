import React,{Component} from 'react';
import './directory.styles.scss';
import {connect} from 'react-redux'
import Menuitem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/Directory/directory.selectors'

const Directory = ({ sections }) =>{
  
        return(
            <div className='directory-menu'>
                {
                    sections.map(({title,id,imageUrl,size}) => <Menuitem key={id} title = {title} imageUrl={imageUrl} size={size} />)
                }
            </div>
        );
    }

    const mapStateToProps = (state) =>
    { 
     // console.log(state.directory)
      return { sections : state.directory.sections }
    }

export default connect(mapStateToProps)(Directory);