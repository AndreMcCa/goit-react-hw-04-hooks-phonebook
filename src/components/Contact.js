import PropTypes from 'prop-types';
import { RiDeleteBin6Line }  from 'react-icons/ri';
import Button from './Button';

export default function Contact({ contact, onDelete }) {

    const { id, name, number } = contact;

    return (
        <li>
            <p>{name} {number}</p> 
            <Button type='button' onClick={onDelete}>
                <RiDeleteBin6Line size={'20px'} color={'#c41818'}/>
            </Button>
        </li>
    )
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,    
    onDelete: PropTypes.func.isRequired,
}

