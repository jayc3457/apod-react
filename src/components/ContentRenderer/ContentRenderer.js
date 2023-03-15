import React, { useContext, useEffect, useState } from "react";
import { DateContext } from "../DateContextWrapper/DateContextWrapper";
import { getData } from "../../utils/api";

import './ContentRenderer.css';

const ContentRenderer = () => {
    const { date } = useContext(DateContext);

    const [content, setContent] = useState(null);

    useEffect(() => {
        const handleContentRefresh = async () => {
            setContent(await getData(date));
        }
        handleContentRefresh();
    }, [date]);
    
    if (content) {
        return (
            <div className="content-wrapper">
                <img alt="" src={content.url} />
            </div>
        );
    }
    return <div>LOADING...</div>
};

export default ContentRenderer;