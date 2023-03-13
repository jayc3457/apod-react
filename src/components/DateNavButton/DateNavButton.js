import React, { useContext } from "react";
import { DateContext } from "../DateContextWrapper/DateContextWrapper";

const DateNavButton = ({ isBackward }) => {
    
    const { moveDate } = useContext(DateContext);
    const label = isBackward ? '<' : '>';
    const modifier = isBackward ? -1 : 1;
    const dialog = isBackward ? 'move back one day' : 'move forward one day';

    return (
        <button 
            onClick={() => moveDate(modifier)}
            aria-label={dialog}
            type='button'
        >
            {label}
        </button>
    );
};

export default DateNavButton;