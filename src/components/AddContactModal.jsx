

const AddContactModal = () => {
    
    
    
    return (
    <dialog id="addContactModal" className="modal modal-middle">
        <div className="modal-box max-w-3xl w-full">
            <form method="dialog" className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold">Add New Contact</h3>
                <button className="btn btn-circle btn-ghost" aria-label="Close add contact modal"><i
                        className="fa-solid fa-x"></i></button>
            </form>
            <form >
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <div className="flex flex-wrap sm:grid sm:grid-cols-2 gap-4 inputs">
                        <div>
                            <label className="label" htmlFor="newFirstName">First Name</label>
                            <input id="newFirstName" name="firstName" type="text" className="input" placeholder="Petri"
                                required/>
                        </div>

                        <div>
                            <label className="label" htmlFor="newLastName">Last Name</label>
                            <input id="newLastName" name="lastName" type="text" className="input" placeholder="Gump"
                                required />
                        </div>

                        <div>
                            <label htmlFor="newEmail">Email Address</label>
                            <input type="email" name="email" id="newEmail" className="input"
                                placeholder="petri@thecrick.com" required/>
                        </div>

                        <div>
                            <label htmlFor="newSendingStone">Sending Stone Number</label>
                            <input type="tel" name="sendingStone" id="newSendingStone" className="input"
                                placeholder="123-456-7890" />
                        </div>

                        <div>
                            <label htmlFor="newAge">Age</label>
                            <input type="number" name="age" id="newAge" placeholder="18" className="input" min="0" />
                        </div>

                        <div>
                            <label htmlFor="newSpecies">Species</label>
                            <input type="text" name="species" id="newSpecies" className="input" placeholder="Crick Elf" />
                        </div>

                        <div>
                            <label htmlFor="newOccupation">Occupation</label>
                            <input type="text" name="occupation" id="newOccupation" className="input"
                                placeholder="Adventurer" />
                        </div>

                        <div>
                            <label htmlFor="newHometown">Hometown</label>
                            <input type="text" name="hometown" id="newHometown" className="input" placeholder="The Crick" />
                        </div>

                        <div>
                            <label htmlFor="newFavFood">Favourite Food</label>
                            <input type="text" name="favouriteFood" id="newFavFood" className="input" placeholder="Shrimp" />
                        </div>

                        <div>
                            <label htmlFor="newFamiliar">Familiar Name (if applicable)</label>
                            <input type="text" name="familiar" id="newFamiliar" className="input" placeholder="CawCaw" />
                        </div>

                    </div>

                    <button type="submit" className="btn btn-neutral rounded-lg mt-4"><i className="fa-regular fa-floppy-disk"
                            onClick={()=>document.getElementById('addContactModal').close()}></i> Save new contact</button>
                </fieldset>
            </form>
        </div>
    </dialog>
    )
}

export default AddContactModal;