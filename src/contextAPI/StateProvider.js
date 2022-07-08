import React, {createContext,useContext,useReducer} from "react"

//preparing the datalayer

export const StateContext=createContext()

//wrapping the app and exporting the datalayer
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

//pull information from the data layer

export const useStateValue=()=>useContext(StateContext)