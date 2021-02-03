import React, { useState } from 'react';

export const UserContext = React.createContext();
export const UserProvider = (props) => {
    const [utente, setUtente] = useState(null);

    //Oggetto da fornire all'esterno
    const sessione = {
        getUser: () => {
            return utente;
        },
        setUser: (userObject) => {
            setUtente(userObject)
        }
    };
    
    return (
        <UserContext.Provider value={sessione}>
            {props.children}
        </UserContext.Provider>
    )
}