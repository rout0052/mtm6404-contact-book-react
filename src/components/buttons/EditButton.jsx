import { Link } from 'react-router-dom';

const EditButton = ({id, isCircle, children}) => {

    return (
        <Link to={`/contact/${id}/edit`} className={`edit-btn btn btn-soft btn-primary ${ isCircle ? 'btn-circle' : 'rounded-full'}`} aria-label="Edit contact">
        { children ? children : ''} <i className="fa-solid fa-pencil"></i>
        </Link>
    )
}

export default EditButton;