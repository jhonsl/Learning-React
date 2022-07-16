import PropTypes from 'prop-types';

const message = {
    title: 'hola mundo',
    subTitle: 'mi nombre es jhon'
};
const numeros = [1,2,3,4,5,6,7,8,9];
const sumar = (numero1, numero2) => numero1 + numero2;

export const HellowWorldApp = ({ title, subTitle }) => {
    return (
        <>
            <h1>{ message.title }</h1>
            <code>{ JSON.stringify(message) }</code>
            <p>{ message.subTitle }</p>
            <p>{ numeros }</p>

            <hr />

            <h2>El resultado de la suma es: { sumar(4,5) }</h2>
            <h2>{ title }</h2>
            <h3>{ subTitle }</h3>
        </>
    )
}

HellowWorldApp.defaultProps = {
    title: 'mil años de soledad',
    subTitle: 2002
}

HellowWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}