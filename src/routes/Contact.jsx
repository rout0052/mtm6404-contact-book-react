// Imports hooks, functions, and components from node modules
import { useState, useEffect } from 'react';
import { getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Imports components
import DeleteButton from '../components/buttons/DeleteButton.jsx';
import EditButton from '../components/buttons/EditButton.jsx';

// Imports the firebase app database reference
import db from '../utils/db.js';

const Contact = () => {
    // Sets up navigate for programmatic router navigation
    const navigate = useNavigate();

    // Sets up an empty contact state
    const [contact, setContact] = useState({});

    // Fetches the contact's id from the parameters of the dynamic path
    const { id } = useParams();

    // Fetches the contact using the parameter's id
    const fetchContactById = async (contactId) => {
        // Fetches the specific doc from the database
        const docSnapshot = await getDoc(doc(db, 'contacts', contactId))

        // if the doc exists...
        if (docSnapshot.exists()) {
            // Sets the contact through spreading the data and keeping the id
            setContact({
                id: docSnapshot.id,
                ...docSnapshot.data()
            })
        // If the doc doesnt exist
        } else {
            console.error('User does not exist');
        }
    }

    // Leave dependency array empty to fetch the contact when page loads
    useEffect(() => {
        fetchContactById(id);
    }, [])

    return (
        <>
            {/* Action Bar */}
            <div className="flex justify-between my-8">
                {/* Links back to the home page */}
                <Link to="/" className="border-b font-bold text-xl text-red-900 hover:text-red-700"><i
                    className="fa-solid fa-arrow-left-long"></i> Back to Home</Link>

                {/* Adds buttons to edit and delete the contact */}
                <div className="flex flex-wrap gap-4">
                    <EditButton id={contact.id}>Edit Contact</EditButton>
                    <DeleteButton id={contact.id}>Delete Contact</DeleteButton>
                </div>
            </div>

            <article>
                <div className="my-6 flex flex-col gap-2">
                    <h1 className="text-4xl font-extrabold text-red-700">{ contact?.firstName } { contact?.lastName }</h1>

                    {/* Conditionally renders the email if the email entry exists */}
                    { contact.email ? <p className="text-red-950 text-xl"><strong>Email:</strong> <a href={`mailto:${contact?.email}`} className="underline hover:text-red-700">{ contact?.email }</a></p> : ''}
                    
                    { contact.sendingStoneNumber ? <p className="text-red-950 text-xl"><strong>Sending Stone Number:</strong> <a href={`tel:${contact.sendingStoneNumber}`} className="underline hover:text-red-700">{ contact?.sendingStoneNumber }</a></p> : ''}
                </div>

                <div>
                    <h2 className="text-2xl font-extrabold text-red-800">More Information</h2>
                        {/* If any of the "bonus details" exists, render the table, else add an alert prompting the user to edit the contact and add them */}
                        { contact.age || contact.species || contact.occupation || contact.hometown || contact.favouriteFood || contact.familiar ?
                        <div 
                            className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 my-4">
                            <table className="table table-zebra">
                                <tbody>
                                    {/* Conditionally renders the row based on whether it exists */}
                                    { contact.age ? <tr className="hover:bg-base-300">
                                        <th>Age:</th>
                                        <td>{ contact.age }</td>
                                    </tr> : ''}

                                    { contact.species ? <tr className="hover:bg-base-300">
                                        <th>Species:</th>
                                        <td>{ contact.species }</td>
                                    </tr> : ''}

                                    { contact.occupation ? <tr className="hover:bg-base-300">
                                        <th>Occupation:</th>
                                        <td>{ contact.occupation }</td>
                                    </tr> : ''}

                                    { contact.hometown ? <tr className="hover:bg-base-300">
                                        <th>Hometown:</th>
                                        <td>{ contact.hometown }</td>
                                    </tr> : ''}

                                    { contact.favouriteFood ? <tr className="hover:bg-base-300">
                                        <th>Favourite Food:</th>
                                        <td>{ contact.favouriteFood }</td>
                                    </tr> : ''}

                                    { contact.familiar ? <tr className="hover:bg-base-300">
                                        <th>Familiar:</th>
                                        <td>{ contact.familiar }</td>
                                    </tr> : ''}
                                </tbody>
                            </table>
                        </div>
                    : <div role="alert"
                        className="alert alert-error alert-soft border-red-500 border-2 max-w-lg mx-auto text-center my-6">
                        <i className="fa-solid fa-circle-question text-2xl"></i>
                        <p><strong>Uh oh! </strong>Looks like there's no more information about this contact. Maybe add some more with the <span className="font-bold">Edit Contact <i className="fa-solid fa-pencil"></i></span> button above.</p>
                    </div> }   
                </div>
            </article>
        </>
    )
}

export default Contact;