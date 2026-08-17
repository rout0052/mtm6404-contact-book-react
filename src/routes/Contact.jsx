import { useState, useEffect } from 'react';
import { getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import DeleteButton from '../components/buttons/DeleteButton.jsx';
import EditButton from '../components/buttons/EditButton.jsx';

import db from '../utils/db.js';

const Contact = () => {
    const navigate = useNavigate();

    const [contact, setContact] = useState({});

    const { id } = useParams();

    const fetchContactById = async (contactId) => {
        const docSnapshot = await getDoc(doc(db, 'contacts', contactId))

        if (docSnapshot.exists()) {
            setContact({
                id: docSnapshot.id,
                ...docSnapshot.data()
            })

        } else {
            console.error('User does not exist');
        }

    }

    useEffect(() => {
        fetchContactById(id);
    }, [])

    return (
        <>
            <div className="flex justify-between my-8">
                <Link to="/" className="border-b font-bold text-xl text-red-900 hover:text-red-700"><i
                    className="fa-solid fa-arrow-left-long"></i> Back to Home</Link>

                <div className="flex flex-wrap gap-4">
                    <EditButton id={contact.id}>Edit Contact</EditButton>
                    <DeleteButton id={contact.id}>Delete Contact</DeleteButton>
                </div>
            </div>

            <article>
                <div className="my-6 flex flex-col gap-2">
                    <h1 className="text-4xl font-extrabold text-red-700">{ contact?.firstName } { contact?.lastName }</h1>

                    { contact.email ? <p className="text-red-950 text-xl"><strong>Email:</strong> <a href={`mailto:${contact?.email}`} className="underline hover:text-red-700">{ contact?.email }</a></p> : ''}
                    
                    { contact.sendingStoneNumber ? <p className="text-red-950 text-xl"><strong>Sending Stone Number:</strong> <a href={`tel:${contact.sendingStoneNumber}`} className="underline hover:text-red-700">{ contact?.sendingStoneNumber }</a></p> : ''}
                </div>

                <div>
                    <h2 className="text-2xl font-extrabold text-red-800">More Information</h2>

                        { contact.age || contact.species || contact.occupation || contact.hometown || contact.favouriteFood || contact.familiar ?
                        <div 
                            className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 my-4">
                            <table className="table table-zebra">
                                <tbody>
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