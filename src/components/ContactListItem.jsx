// Imports Link component to navigate without reloading the app
import { Link } from 'react-router-dom';

// Imports button components
import ViewButton from './buttons/ViewButton.jsx';
import DeleteButton from './buttons/DeleteButton.jsx';
import EditButton from './buttons/EditButton.jsx';

// Props = the contact itself for the information needed, and refreshContacts to pass down to the delete button
const ContactListItem = ({contact, refreshContacts}) => {
    return (
        <li className="list-row items-center hover:bg-neutral-50">
            {/* Links to the contact page */}
            <Link className="text-lg font-semibold" to={`/contact/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>
            {/* Button div */}
            <div className="flex flex-wrap justify-end gap-2">
                {/* Adds buttons, the circle version for each, passing down the id. */}
                <ViewButton id={contact.id} isCircle={ true } />
                <EditButton id={contact.id} isCircle={ true } />
                {/* Refresh contacts is used in the delete button to re fetch the contacts after deleting one */}
                <DeleteButton id={contact.id} isCircle={ true } refreshContacts={refreshContacts} />
            </div>
        </li >
    )
}

export default ContactListItem;