import { Link } from 'react-router-dom';

const ViewButton = ({id, isCircle, children}) => {

    return (
        <Link to={`/contact/${id}`} className={`btn btn-soft btn-info ${ isCircle ? 'btn-circle' : 'rounded-full'}`} aria-label="View contact">
        { children ? children : ''} <i className="fa-solid fa-eye"></i>
        </Link>
    )
}

export default ViewButton;