// Imports Link component to navigate without reloading the app
import { Link } from 'react-router-dom';

const ViewButton = ({id, isCircle, children}) => {
    return (
        // Links to the contact's page, using the id for a dynamic path. isCircle determines whether the button is a circle or just rounded. Children is used if the parent wants to add text content to the button
        <Link to={`/contact/${id}`} className={`btn btn-soft btn-info ${ isCircle ? 'btn-circle' : 'rounded-full'}`} aria-label="View contact">
        { children ? children : ''} <i className="fa-solid fa-eye"></i>
        </Link>
    )
}

export default ViewButton;