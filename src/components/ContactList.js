import PropTypes from 'prop-types';

import Contact from './Contact';

export default function ContactsList({ contacts, onDelete }) {

    return (
        <ul>
            {contacts.map(contact => <Contact key={contact.id} contact={ contact } onDelete={ onDelete }/>)}
        </ul>
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object,).isRequired,
    onDelete: PropTypes.func.isRequired,
}