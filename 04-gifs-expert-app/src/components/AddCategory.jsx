import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');
    const onInputChange = ({ target }) => setinputValue(target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        inputValue.trim() != '' && onNewCategory( inputValue );
        setinputValue('');
    };

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Search Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
