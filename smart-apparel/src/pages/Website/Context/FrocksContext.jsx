import React,{createContext} from 'react';
import all_product from '../../../Assets/WebAssets/WAssets/all_product';


export const FrocksContext = createContext(null);

const FrocksContext = (props) => {

    const contextValue = {all_product};

    return(
        <FrocksContext.Provider value ={contextValue}>
            {props.children}
        </FrocksContext.Provider>
        //FrockContext tab should be include in to index.js
    )
}
export default FrocksContextProvider;
