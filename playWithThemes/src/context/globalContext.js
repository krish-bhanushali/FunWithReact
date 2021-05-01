import React , {createContext, useReducer, useContext} from "react";

//Define context
const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

//Reducer

const globalReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_THEME' : {
            
            return {
                ...state,
                currentTheme : action.theme } 
        }
        default : {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}


//LocalStorage to remember which theme was hence on refresh the browser can know the predefinied theme

export const GlobalProvider = ( {children}) => {

    //default theme is dark
    const [state, dispatch] = useReducer(globalReducer, {
        currentTheme : window.localStorage.getItem('theme') == null ? 'dark' : window.localStorage.getItem('theme')
    })

    return (
        <GlobalDispatchContext.Provider value={dispatch} >
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>

        </GlobalDispatchContext.Provider>

    )
}


export const useGlobalStateContext = () => useContext(GlobalStateContext)

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)