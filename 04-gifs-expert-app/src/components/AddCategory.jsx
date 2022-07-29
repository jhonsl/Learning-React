import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');
    const onInputChange = ({ target }) => setinputValue(target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        inputValue.trim() != '' && onNewCategory( inputValue );
        setinputValue('');
    };

    return (
        <form onSubmit={ onSubmit } aria-label='form'>
            <input 
                type="text" 
                placeholder="Search Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}