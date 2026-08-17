// Imports hooks, functions, and components from node modules
import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';

// Imports the firebase app database reference
import db from '../utils/db.js';

// Imports components
import AddContactModal from '../components/AddContactModal.jsx';
import ContactListItem from '../components/ContactListItem.jsx';

const Home = () => {
    // Sets up state to hold the contacts
    const [contacts, setContacts] = useState([]);

    // Sets up a state for the search input, by default an empty string
    const [searchText, setSearchText] = useState('');

    // Leave dependency array empty to run when page loads
    useEffect(() => {
        fetchUsers();
    }, [])

    // Updates the searchText state every time there is a change in the search text
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    }

    // Fetches the user from the database, and uses the filterContacts to setContacts
    const fetchUsers = async () => {
        // Fetches the docs
        const docSnapshot = await getDocs(collection(db, 'contacts'))

        // Maps each doc into the object structure, using the id then spreading the data. The fullName key value pair is added to make the filtering later easier. 
        const data = docSnapshot.docs.map(doc => ({
            id: doc.id,
            fullName: `${doc.data().firstName} ${doc.data().lastName}`,
            ...doc.data()
        }));

        filterContacts(data)
    }

    // Filters the contacts array.
    const filterContacts = (contacts) => {
        // In react, arrays in a state are unmutable, and therefore cannot be sorted like a usual JS array, which i found out by reading this part of the react documentation: https://react.dev/learn/updating-arrays-in-state#making-other-changes-to-an-array . So instead, I make a copy of the array, then set the contacts equal to that
        const contactsCopy = [...contacts];

        setContacts(contactsCopy.sort(function (a, b) {
            return a.lastName.localeCompare(b.lastName);
        }))
    }

    return (
        <>
            <div className="px-12 py-8 flex flex-col gap-8 text-center">
                <h3 className="font-extrabold text-5xl text-red-900">Welcome to the Bahumia Contact book!</h3>
                <p className="text-red-900">Update and modify the contact information of all your favourite NADDPOD characters to your heart's desire. Maybe delete the ones you don't like, or add some that I missed!</p>
            </div>


            <ul className="list bg-base-100 rounded-box shadow-md my-12">
                <li className="p-4 flex justify-between items-center flex-wrap gap-4">
                    {/* Opens the Add Contact modal */}
                    <button className="btn btn-neutral rounded-full" onClick={() => document.getElementById('addContactModal').showModal()}>
                        <i className="fa-solid fa-plus"></i> Add Contact
                    </button>

                    <label className="input">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="search" className="grow" placeholder="Search" value={searchText} onChange={handleSearchChange} />
                    </label>
                </li>

                {/* When contacts exists, filter the array by the search team using the added fullName entry (set to lower case to ignore case), then map through the remaining contacts making a list item  */}
                {contacts && contacts.filter(contact => (contact.fullName.toLowerCase().includes(searchText.toLowerCase()))).map(contact => (
                    <ContactListItem key={contact.id} contact={contact} refreshContacts={fetchUsers} />
                ))}
            </ul>

            {/* Adds the modal, and passes down the fetchUsers function for the deletebutton */}
            <AddContactModal refreshContacts={fetchUsers} />
        </>
    )
}

export default Home;