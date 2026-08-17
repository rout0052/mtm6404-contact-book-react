import { useState, useEffect } from 'react';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import db from '../utils/db.js';

const EditContact = () => {
    const navigate = useNavigate();

    const [contact, setContact] = useState({});

    const { id } = useParams();

    const fetchContactById = async () => {
        const docSnapshot = await getDoc(doc(db, 'contacts', id))

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

    const handleChange = (e) => {
        setContact(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSaveChanges = async (e) => {
        e.preventDefault();

        const docRef = doc(db, "contacts", id);

        try {
            await updateDoc(docRef, contact)
            navigate(-1)
        } catch (err) {
            alert("Your information has not been updated, please try again!");
        }
    }

    const handleDiscard = () => {
        navigate(-1)
    }



    return (
        <>
            <h1 className="text-2xl font-extrabold text-red-700 my-6">Edit Contact Information For {contact?.firstName} {contact?.lastName}</h1>

            <form onSubmit={ handleSaveChanges } >
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <div className="flex flex-wrap sm:grid sm:grid-cols-2 gap-4 inputs">
                        <div>
                            <label className="label block" htmlFor="editFirstName">First Name</label>
                            <input id="editFirstName" name="firstName" type="text" className="input" placeholder="Petri" value={contact?.firstName} onChange={handleChange} required />
                        </div>
                        <div>
                            <label className="label block" htmlFor="editLastName">Last Name</label>
                            <input id="editLastName" name="lastName" type="text" className="input" placeholder="Gump" value={contact?.lastName} onChange={handleChange} required />
                        </div>
                        <div>
                            <label className="label block" htmlFor="editEmail">Email Address</label>
                            <input type="email" name="email" id="editEmail" className="input" placeholder="petri@thecrick.com" value={contact?.email} onChange={handleChange} required />
                        </div>
                        <div>
                            <label className="label block" htmlFor="editSendingStone">Sending Stone Number</label>
                            <input type="tel" name="sendingStoneNumber" id="editSendingStone" className="input" placeholder="123-456-7890" value={contact?.sendingStoneNumber} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="label block" htmlFor="editAge">Age</label>
                            <input type="number" name="age" id="editAge" placeholder="18" className="input" min="0" value={contact?.age} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="label block" htmlFor="editSpecies">Species</label>
                            <input type="text" name="species" id="editSpecies" className="input" placeholder="Crick Elf" value={contact?.species} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="label block" htmlFor="editOccupation">Occupation</label>
                            <input type="text" name="occupation" id="editOccupation" className="input" placeholder="Adventurer" value={contact?.occupation} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="label block" htmlFor="editHometown">Hometown</label>
                            <input type="text" name="hometown" id="editHometown" className="input" placeholder="The Crick" value={contact?.hometown} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="label block" htmlFor="editFavFood">Favourite Food</label>
                            <input type="text" name="favouriteFood" id="editFavFood" className="input" placeholder="Shrimp" value={contact?.favouriteFood} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="label block" htmlFor="editFamiliar">Familiar Name (if applicable)</label>
                            <input type="text" name="familiar" id="editFamiliar" className="input" placeholder="CawCaw" value={contact?.familiar} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button type="submit" className="btn btn-neutral rounded-lg mt-4"><i className="fa-regular fa-floppy-disk"></i> Save Contact</button>
                        <button onClick={ handleDiscard } type="button" className="btn btn-outline btn-error rounded-lg mt-4"><i className="fa-regular fa-trash-can"></i> Discard Changes</button>
                    </div>
                </fieldset >
            </form >
        </>
    )
}



export default EditContact;