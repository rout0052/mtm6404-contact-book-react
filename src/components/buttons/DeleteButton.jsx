// Imports functions from node modules
import { useNavigate } from 'react-router-dom';
import { doc, deleteDoc } from 'firebase/firestore';

// Imports the firebase app database reference
import db from '../../utils/db.js';

// Refresh contacts is only passed when the contacts need to be refreshed on delete (the homepage)
const DeleteButton = ({ id, isCircle, refreshContacts, children }) => {
    // Sets up navigate for programmatic router navigation
    const navigate = useNavigate();

    // Deletes the contact using the id prop
    const deleteContact = async (id) => {
        // Stores the document reference
        const docRef = doc(db, "contacts", id);

        try {
            // Uses a confirm window to check if the user is sure they want to delete
            if (window.confirm("Are you sure you want to delete this contact? This action cannot be undone")) {
                // Deletes the document using the doc ref
                await deleteDoc(docRef);

                // If refreshContacts exists, refresh the contacts
                if(refreshContacts) {
                    refreshContacts();
                }

                // Uses router navigation to go to home page
                navigate('/');
            }
        // If unsuccessful, send error information
        } catch (err) {
            // Sends an alert that the deletion failed
            alert('The user was unable to be deleted, please try again');
            console.error(err);
        }
    }

    // isCircle determines whether the button is a circle or just rounded. Children is used if the parent wants to add text content to the button.
    return (
        <button className={`btn btn-soft btn-error ${isCircle ? 'btn-circle' : 'rounded-full'}`} aria-label="Delete contact" onClick={() => deleteContact(id)}>
            {children ? children : ''}<i className="fa-solid fa-trash"></i>
        </button>
    )
}

export default DeleteButton;