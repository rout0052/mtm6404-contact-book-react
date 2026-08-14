import { Link } from 'react-router-dom';

// Imports button components
import ViewButton from './buttons/ViewButton.jsx';
import DeleteButton from './buttons/DeleteButton.jsx';
import EditButton from './buttons/EditButton.jsx';

const ContactListItem = ({contact}) => {

    return (
        <li className="list-row items-center hover:bg-neutral-50">
            <Link className="text-lg font-semibold" to={`/contact/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>
            <div className="flex flex-wrap justify-end gap-2">
                <ViewButton id={contact.id} isCircle={ true } />
                <EditButton id={contact.id} isCircle={ true } />
                <DeleteButton id={contact.id} isCircle={ true } />
            </div>
        </li >
    )
}

export default ContactListItem;