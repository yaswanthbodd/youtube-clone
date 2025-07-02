import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = (props)=> {
    const [toggleClicked, setToggleClicked] = useState(true);
    
    // Youtube Category Type
    const [category, setCategory] = useState(0);
    const [videoId, setVideoId] = useState('');
    
    return(
        <AppContext.Provider value={{toggleClicked, setToggleClicked, category, setCategory, videoId, setVideoId}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;