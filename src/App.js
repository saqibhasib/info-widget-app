import React, { useState } from 'react';

import axios from 'axios';

import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
import Route from './Components/Route';

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
];

const options = [
    {
        label: 'The Colour Red',
        value: 'red'
    },
    {
        label: 'The Colour Green',
        value: 'green'
    },
    {
        label: 'The Colour Blue',
        value: 'blue'
    }
];

// const showAccordion = () => {
//   if(window.location.pathname === '/'){
//     return <Accordion items={items}/>;
//   };
// };

// const showList= () => {
//     if(window.location.pathname === '/list'){
//         return <Search />;
//     };
// };

// const showDropdown = () => {
//     if(window.location.pathname === '/drop') {
//         return (
//             <Dropdown 
//                     type='Colour' 
//                     options={options} 
//                     onSelectedChange={setSelected}
//                     selected={selected}/>
//         );
//     };
// };

// const showTranslate = () => {
//     if(window.location.pathname === '/translate'){
//         return ;
//     };
// };

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/drop">
                <Dropdown 
                    type='Colour' 
                    options={options} 
                    onSelectedChange={setSelected}
                    selected={selected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};