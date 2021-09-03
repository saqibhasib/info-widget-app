import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, type, selected, onSelectedChange }) => {
    
  const [open, setOpen] = useState(false); 
  
  const ref = useRef();
  
  useEffect(() => {
      
      const onBodyClick = (event) => {
          if(ref.current.contains(event.target)){
              return;
          }
          setOpen(false);

      }
      document.body.addEventListener('click', onBodyClick, { capture: true });
      
      return () => {
          document.body.removeEventListener('click', onBodyClick, { capture: true });
      };
      
  }, []);
    
  const renderedOptions = options.map((option) => {
      if(option.value === selected.value){
          return null;
      }
      
      return (
          <div 
              className='item' 
              key={option.value}
              onClick={e=> {
                      //console.log('item clicked');
                      onSelectedChange(option);
                  }}
              >
              {option.label}
          </div>
     );
  });
  
  //console.log(ref.current);
  
  return (
      <div ref={ref} className='ui form'>
          <div className='field'>
              <label className='label'>Select a {type}</label>
              <div 
                onClick={() => {
                    //console.log('selection clicked');
                    setOpen(!open);
                }} 
                className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                  <i className='dropdown icon'></i>
                  <div className='text'>{selected.label}</div>
                  <div className={`menu ${open ? 'visible transition' : ''}`}>
                      {renderedOptions}
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Dropdown;

// current: 186