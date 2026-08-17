// Imports Link component to navigate without reloading the app
import { Link } from 'react-router-dom';

const EditButton = ({id, isCircle, children}) => {
    return (
        // Links to the contact's edit page, using the id for a dynamic path. isCircle determines whether the button is a circle or just rounded. Children is used if the parent wants to add text content to the button
        <Link to={`/contact/${id}/edit`} className={`edit-btn btn btn-soft btn-primary ${ isCircle ? 'btn-circle' : 'rounded-full'}`} aria-label="Edit contact">
        { children ? children : ''} <i className="fa-solid fa-pencil"></i>
        </Link>
    )
}

export default EditButton;