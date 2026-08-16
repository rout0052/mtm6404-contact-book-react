import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';

import db from '../utils/db.js';

import AddContactModal from '../components/AddContactModal.jsx';
import ContactListItem from '../components/ContactListItem.jsx';

const Home = () => {
    const [contacts, setContacts] = useState([]);

    const fetchUsers = async () => {
        const docSnapshot = await getDocs(collection(db, 'contacts'))
        const data = docSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        filterContacts(data, true);
    }

    // Leave dependency array empty to run when page loads
    useEffect(() => {
        fetchUsers();
    }, [])


    useEffect(() => {
    }, [contacts])

    // Filters the contacts array. The boolean of filterByLastName changes what the contact array is being filtered by
    const filterContacts = (contacts, filterByLastName) => {
        // In react, arrays in a state are unmutable, and therefore cannot be sorted like a usual JS array, which i found out by reading this part of the react documentation: https://react.dev/learn/updating-arrays-in-state#making-other-changes-to-an-array . So instead, I make a copy of the array, then set the contacts equal to that
        const contactsCopy = [...contacts];
        
        // If filtering by lastName
        if (filterByLastName) {
            // Kinda obvious, but filter by last name
            setContacts(contactsCopy.sort(function (a, b) {
                return a.lastName.localeCompare(b.lastName);
            })) 
            // If filtering by firstName (the only other option)
        } else {
            // Filters by firstName
            setContacts(contactsCopy.sort(function (a, b) {
                return a.firstName.localeCompare(b.firstName);
            })) 
        }
    }

    const filterHandler = (byLastName) => {
        filterContacts(contacts, byLastName);
    }


    return (
        <>
            <div className="px-12 py-8 flex flex-col gap-8 text-center">
                <h3 className="font-extrabold text-5xl text-red-900">Welcome to the Bahumia Contact book!</h3>
                <p className="text-red-900">Update and modify the contact information of all your favourite NADDPOD characters to
                    your heart's desire. Maybe delete the ones you don't like, or add some that I missed!</p>
            </div>


            <ul className="list bg-base-100 rounded-box shadow-md my-12">
                <li className="p-4 flex justify-between items-center flex-wrap gap-4">
                    <div className="flex justify-end items-center flex-wrap gap-4">
                        <p className="text-red-950"><i className="fa-solid fa-filter"></i> </p>
                        <div className="flex flex-wrap justify-end gap-2 filter-controls">
                            <input type="radio" aria-label="Sort by First Name"
                                className="btn checked:bg-red-800 checked:text-white checked:border-red-900 checked:shadow-red-950 "
                                name="filter" onClick={() => (filterHandler(false))}/>
                            <input type="radio" aria-label="Sort by Last Name"
                                className="btn checked:bg-red-800 checked:text-white checked:border-red-900 checked:shadow-red-950 shadow-error"
                                name="filter" id="sortByLastName" onClick={() => (filterHandler(true))} defaultChecked={true} />
                        </div>
                    </div>
                    <button className="btn btn-neutral rounded-full" onClick={() => document.getElementById('addContactModal').showModal()}>
                        <i className="fa-solid fa-plus"></i> Add Contact
                    </button>

                </li>

                {contacts && contacts.map(contact => (
                    <ContactListItem key={contact.id} contact={contact} />
                ))}
            </ul>

            <AddContactModal refreshContacts={fetchUsers}  />

        </>
    )
}



export default Home;