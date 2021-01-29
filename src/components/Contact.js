import PropTypes from 'prop-types';
import { RiDeleteBin6Line }  from 'react-icons/ri';

export default function Contact({ contact, onDelete }) {

    const { id, name, number } = contact;
    console.log(RiDeleteBin6Line);

    return (
        <li>
            <p>{name} {number}</p> 
            <button id={id} onClick={onDelete}>
                <RiDeleteBin6Line size={'20px'} color={'#c41818'}/>
            </button>
        </li>
    )
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,    
    onDelete: PropTypes.func.isRequired,
}