import React, { useContext } from "react";
import { DateContext } from "../DateContextWrapper/DateContextWrapper";
import { isToday } from "../../utils/api";

const DateNavButton = ({ isBackward }) => {
    
    const { date, moveDate } = useContext(DateContext);
    const label = isBackward ? '<' : '>';
    const modifier = isBackward ? -1 : 1;
    const dialog = isBackward ? 'move back one day' : 'move forward one day';

    return (
        <button 
            onClick={() => moveDate(modifier)}
            aria-label={dialog}
            type='button'
            disabled={!isBackward && isToday(date)}
        >
            {label}
        </button>
    );
};

export default DateNavButton;