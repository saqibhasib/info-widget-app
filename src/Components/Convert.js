import React , { useState, useEffect } from 'react';
import axios from 'axios';

const key = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({ language, text }) => {
    
    const [translated, setTranslated] = useState('');
    
    useEffect(()=>{
        
        axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                q: text,
                target: language.value,
                key: key
            }
        })
        .then(response=>{
            //console.log(response.data.data.translations[0]);
            setTranslated(response.data.data.translations[0].translatedText);
        });
    
        
        //setTranslated(data.data.translations[0]);
        
        //doTranslation();
        
    }, [language, text]);
    
    return (
        <div>
            <h2 className='ui header'>{translated}</h2>
        </div>
    );
};

export default Convert;