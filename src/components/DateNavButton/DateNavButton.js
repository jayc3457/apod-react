import React, { useContext } from "react";
import { DateContext } from "../DateContextWrapper/DateContextWrapper";
import { isToday } from "../../utils/api";

import './DateNavButton.css';

const DateNavButton = ({ isBackward }) => {
    
    const { date, moveDate } = useContext(DateContext);
    const label = isBackward ? '<' : '>';
    const modifier = isBackward ? -1 : 1;
    const dialog = isBackward ? 'move back one day' : 'move forward one day';
    const isDisabled = !isBackward && isToday(date);

    return (
        <button 
            className={isDisabled ? 'disabled' : 'enabled'}
            onClick={() => moveDate(modifier)}
            aria-label={dialog}
            type='button'
            disabled={isDisabled}
        >
            {label}
        </button>
    );
};

export default DateNavButton;