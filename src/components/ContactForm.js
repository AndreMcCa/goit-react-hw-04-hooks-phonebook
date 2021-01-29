
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Input from './Input';
import Button from './Button';

export default function ContactForm({ addContact }) {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');


    function handleNameChange (e) {
        const value = e.target.value;
        setName(value);
    }

    function handleNamberChange (e) {
        const value = e.target.value;
        setNumber(value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (name.trim() === '' || number.trim() === '') {
            toast.error('Заполните поле');
            return
        }
        
        addContact(name, number);
        reset();
    }

    function reset () {
        setName('');
        setNumber('');
    }


    return (
        <form key='AddContactForm' onSubmit={handleSubmit}>
            <Input label="Name" type="text" name="name" value={name} onChange={handleNameChange} />
            <Input label="Number" type="text" name="number" value={number} onChange={handleNamberChange} />
            <Button type='submit'  children='Add contact'/>
        </form>
    )
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
}