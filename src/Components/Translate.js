import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: "Afrikaans",
        value: 'af'
    },
    {
        label: "Bangla",
        value: "bn"
    },
    {
        label: "Spanish",
        value: "es"
    }
]

const Translate = () => {
    
    const [language, setLanguage] = useState(options[1]);
    const [text, setText] = useState('');
    
    return (
        <div>
            <div className="ui form">
                <div className='field'>
                    <label>Text to translate</label>
                    <input
                        value={text}
                        onChange={e=> setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
                type="Language"
            />
            <hr/>
            <h3>Translation</h3>
            <Convert 
                language={language}
                text={text}
            />
        </div>
    );
};

export default Translate;

// current: 192