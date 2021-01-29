import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast, ToastContainer } from 'react-toastify';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Input from './components/Input';

import contactsData from './data/contact.json';

function App() {

    const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem('contacts')) ?? contactsData); 
    const [filter, setFilter] = useState('');

    useEffect(() => window.localStorage.setItem('contacts', JSON.stringify(contacts)), [contacts]);


    function addContact (name, number) {
        const id = uuidv4();
        const normalizedName = name.toLowerCase();
        const hasContact = contacts.find(({name}) => name.toLowerCase() === normalizedName);

        if(hasContact) {
            toast.error(`Контакт с именем ${name} уже существует`)

        } else {
            setContacts([...contacts, {id, name, number}])
            toast.success('Контакт успешно добален')
        }
    }

    function deleteContact (e) {
        const contactDeleteId = e.currentTarget.id;

        setContacts(contacts.filter(contact => contact.id !== contactDeleteId));
        toast.success('Контакт был удалён');
    }

    function getFiltrationContacts () {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(({name}) => name.toLowerCase().includes(normalizedFilter));
    }

    return (
        <>  
            <h1>Phonebook</h1>
            <ContactForm addContact={addContact} />

            {contacts.length !== 0 && 
            <>
                <h2>Contacts</h2>
                <Input  label="Find contacts by name" type="text" name="filter" value={filter} onChange={(e) => {setFilter(e.target.value)}}/>
                <ContactList contacts={getFiltrationContacts()} onDelete={deleteContact}/>
            </>
            }

            <ToastContainer autoClose={2500}/>
        </>
    )
}

export default App;