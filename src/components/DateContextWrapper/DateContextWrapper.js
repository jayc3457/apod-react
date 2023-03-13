import React, { createContext, useState } from "react";

export const DateContext = createContext();

const DateContextWrapper = ({ children }) => {
    
    const [date, setDate] = useState(new Date());

    const moveDate = (modifier) => {
        setDate(new Date(date.setDate(date.getDate() + modifier)));
    };

    return (
        <DateContext.Provider value={{ date, moveDate }}>
            {children}
        </DateContext.Provider>
    );
};

export default DateContextWrapper;