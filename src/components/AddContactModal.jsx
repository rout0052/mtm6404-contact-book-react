// Imports hooks and functions from the node modules
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';

// Imports the firebase app database reference
import db from '../utils/db.js';

const AddContactModal = ({ refreshContacts }) => {
    // Adds empty form data as a state to update with the form
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        sendingStoneNumber: '',
        age: '',
        species: '',
        occupation: '',
        hometown: '',
        favouriteFood: '',
        familiar: ''
    });

    // Handler function on changing the forms content to update the contact
    const handleChange = (e) => {
        // Sets the contact using the event target's name and value, while spreading the rest of the data that is unchanged
        setFormData(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    // Handler function to add the new contact to the database
    const handleSaveContact = (e) => {
        // Prevents the form from submitting and refreshing the page
        e.preventDefault();
        
        // Gets the collection from the db
        const col = collection(db, "contacts")

        // Adds a new document to the col, passing the formData
        addDoc(col, formData);

        // Clears the form data
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            sendingStoneNumber: '',
            age: '',
            species: '',
            occupation: '',
            hometown: '',
            favouriteFood: '',
            familiar: ''
        })

        // Refreshes the contacts to sort them
        refreshContacts();

        // Clicks the sort button to sort the refreshed list by last name
        document.getElementById('sortByLastName').click();

        // Closes the modal
        document.getElementById('addContactModal').close();
    }

    return (
        <dialog id="addContactModal" className="modal modal-middle">
            <div className="modal-box max-w-3xl w-full">
                <form method="dialog" className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold">Add New Contact</h3>
                    <button className="btn btn-circle btn-ghost" aria-label="Close add contact modal"><i
                        className="fa-solid fa-x"></i></button>
                </form>
                <form onSubmit={ handleSaveContact }>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <div className="flex flex-wrap sm:grid sm:grid-cols-2 gap-4 inputs">
                            <div>
                                <label className="label" htmlFor="newFirstName">First Name</label>
                                <input id="newFirstName" name="firstName" type="text" className="input" placeholder="Petri" value={formData.firstName} onChange={handleChange} required />
                            </div>

                            <div>
                                <label className="label" htmlFor="newLastName">Last Name</label>
                                <input id="newLastName" name="lastName" type="text" className="input" placeholder="Gump" value={formData.lastName} onChange={handleChange}
                                    required />
                            </div>

                            <div>
                                <label htmlFor="newEmail">Email Address</label>
                                <input type="email" name="email" id="newEmail" className="input"
                                    placeholder="petri@thecrick.com" value={formData.email} onChange={handleChange} required />
                            </div>

                            <div>
                                <label htmlFor="newSendingStone">Sending Stone Number</label>
                                <input type="tel" name="sendingStoneNumber" id="newSendingStone" className="input" placeholder="123-456-7890" value={formData.sendingStoneNumber} onChange={handleChange} />
                            </div>

                            <div>
                                <label htmlFor="newAge">Age</label>
                                <input type="number" name="age" id="newAge" placeholder="18" className="input" min="0" value={formData.age} onChange={handleChange} />
                            </div>

                            <div>
                                <label htmlFor="newSpecies">Species</label>
                                <input type="text" name="species" id="newSpecies" className="input" placeholder="Crick Elf" value={formData.species} onChange={handleChange} />
                            </div>

                            <div>
                                <label htmlFor="newOccupation">Occupation</label>
                                <input type="text" name="occupation" id="newOccupation" className="input"
                                    placeholder="Adventurer" value={formData.occupation} onChange={handleChange} />
                            </div>

                            <div>
                                <label htmlFor="newHometown">Hometown</label>
                                <input type="text" name="hometown" id="newHometown" className="input" placeholder="The Crick" value={formData.hometown} onChange={handleChange} />
                            </div>

                            <div>
                                <label htmlFor="newFavFood">Favourite Food</label>
                                <input type="text" name="favouriteFood" id="newFavFood" className="input" placeholder="Shrimp" value={formData.favouriteFood} onChange={handleChange} />
                            </div>

                            <div>
                                <label htmlFor="newFamiliar">Familiar Name (if applicable)</label>
                                <input type="text" name="familiar" id="newFamiliar" className="input" placeholder="CawCaw" value={formData.familiar} onChange={handleChange} />
                            </div>

                        </div>

                        <button type="submit" className="btn btn-neutral rounded-lg mt-4"><i className="fa-regular fa-floppy-disk"
                            onClick={ () => document.getElementById('addContactModal').close() }></i> Save new contact</button>
                    </fieldset>
                </form>
            </div>
        </dialog>
    )
}


export default AddContactModal;