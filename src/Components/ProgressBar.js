import React from 'react';

const ProgressBar = ({data,BackgroundColors, pokemon}) => {
 
    return (
        <div className='progress'>
            <div className='progress-done'
            style={{
                opacity: 1,
                width:`${data}%`,
                background: `${BackgroundColors(pokemon.types?.[0].type.name)}`
            }}
            >
                {data} %

            </div>
            
        </div>
    );
};

export default ProgressBar;