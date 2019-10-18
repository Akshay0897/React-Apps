import React,{Component} from 'react';
import { SpinnerContainer,SpinnerOverlay } from './with-spinner.styles'

const WithSpinner = WrappedComponent => ({ isLoading , ...otherprops }) => {

    console.log('wrapped component is',WrappedComponent)

    return isLoading  ?
    (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ):
    (
        <WrappedComponent {...otherprops} />
    )   
}

export default WithSpinner;