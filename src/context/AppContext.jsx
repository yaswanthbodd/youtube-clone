import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = (props)=> {
    const [toggleClicked, setToggleClicked] = useState(true);
    
    return(
        <AppContext.Provider value={{toggleClicked, setToggleClicked}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;