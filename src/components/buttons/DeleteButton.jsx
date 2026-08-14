const DeleteButton = ({id, isCircle, children}) => {

    return (
        <button className={`btn btn-soft btn-error ${ isCircle ? 'btn-circle' : 'rounded-full'}`} aria-label="Delete contact">
        { children ? children : ''}<i className="fa-solid fa-trash"></i>
        </button>
    )
}

export default DeleteButton;