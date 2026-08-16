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
                    <EditButton id={ contact.id }>Edit Contact</EditButton>
                    <DeleteButton id={ contact.id }>Delete Contact</DeleteButton>
                </div>
            </div>
            <h1>{contact?.firstName} {contact?.lastName}</h1>
        </>
    )
}



export default Contact;