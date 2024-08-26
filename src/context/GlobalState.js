import React, { createContext,useReducer} from "react";
import AppReducer from './AppReducer';
// Initial State
const InitialState = {
    transactions:[ 
        {id: 1, text:'flower', amount:-20},
        {id: 2, text:'Salary', amount: 300},
        {id: 3, text:'Camera', amount:-20},
    ]
}


//Create Context
export const GlobalContext = createContext(InitialState);

//Provider component
export const GlobalProvider = ({children}) => {
    const[state,dispatch ] = useReducer(AppReducer, InitialState)

    return (<GlobalContext.Provider value={{transactions: state.transactions}}>
        {children}
    </GlobalContext.Provider>)
}
