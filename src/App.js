import React from "react";
import Accordion from "./Components/Accordion";

const items = [
    {
        title: 'Mindful',
        content: 'Android app that shows inspection report on restaurants in Surrey.'
    },
    {
        title: 'Yelp clone',
        content: 'Clone of the popular website Yelp.'
    },
    {
        title: 'Media Player',
        content: 'Android app for playing media on your phone.'
    }
]

export default () => {
    return(
        <div>
            <Accordion items={items}/>
        </div>
    );
};