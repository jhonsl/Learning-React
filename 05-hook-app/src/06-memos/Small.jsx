import React from 'react';

export const Small = React.memo(({ value }) => {
    console.log('me regenere');
    return (
        <small>{ value }</small>  
    )
})
