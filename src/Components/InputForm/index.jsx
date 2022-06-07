import React, {useState} from 'react';
import cx from 'classnames';
import s from './style.module.css';
import {calculateMinPairInArraySum} from "../../Services/arrayService";

const Index = () => {
    const [inputValue, setInputValue] = useState("");

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        calculateMinPairInArraySum(inputValue);
    }

    return (
        <form className={cx(s.inputFormContainer)} onSubmit={handleSubmit}>
            <h1 className={cx(s.inputFormContainer__title)}>Введите числа массива через запятую</h1>
            <h1 className={cx(s.inputFormContainer__title)}>Input value : {inputValue}</h1>
            <textarea className={cx(s.inputFormContainer__textarea)} value={inputValue} onChange={handleChange}/>

            <input className={cx(s.inputFormContainer__submit)} type="submit"/>
        </form>
    );
};

export default Index;