import { useNavigate } from 'react-router-dom';
import { doc, deleteDoc } from 'firebase/firestore';

import db from '../../utils/db.js';

const DeleteButton = ({ id, isCircle, refreshContacts, children }) => {
    const navigate = useNavigate();

    const deleteContact = async (id) => {
        const docRef = doc(db, "contacts", id);

        try {
            // Uses a confirm window to check if the user is sure
            if (window.confirm("Are you sure you want to delete this contact? This action cannot be undone")) {
                // Set the value of contacts to all of the contacts, minus the id 
                console.log("Deletes the contact:" + id)
                await deleteDoc(docRef);

                if(refreshContacts) {
                    refreshContacts();
                    document.getElementById('sortByLastName').click();
                }

                navigate('/');
            }
        } catch (err) {
            // Sends an alert that the deletion failed
            alert('The user was unable to be deleted, please try again');
            console.error(err);
        }
    }

    return (
        <button className={`btn btn-soft btn-error ${isCircle ? 'btn-circle' : 'rounded-full'}`} aria-label="Delete contact" onClick={() => deleteContact(id)}>
            {children ? children : ''}<i className="fa-solid fa-trash"></i>
        </button>
    )
}

export default DeleteButton;