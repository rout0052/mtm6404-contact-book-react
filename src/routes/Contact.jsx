import { useState, useEffect } from 'react';
import { getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
            <h1>{ contact?.firstName } { contact?.lastName }</h1>
        </>
    )
}



export default Contact;