import React, { useContext } from "react";
import { DateContext } from "../DateContextWrapper/DateContextWrapper";

const ContentRenderer = () => {
    const { date } = useContext(DateContext);
    
    return <div role="status">{date.toString()}</div>;
};

export default ContentRenderer;