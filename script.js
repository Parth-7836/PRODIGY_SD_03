// Array to store contacts
let contacts = [];

// Function to add a new contact
function addContact(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Create a new contact object
    const contact = { name, phone, email };
    contacts.push(contact); // Add the contact to the array
    displayContacts(); // Update the contact list
    document.getElementById('addContactForm').reset(); // Reset the form
}

// Function to display contacts
function displayContacts() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = ''; // Clear the existing list

    contacts.forEach((contact, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${contact.name}</strong><br>
            Phone: ${contact.phone}<br>
            Email: ${contact.email}<br>
            <button onclick="editContact(${index})">Edit</button>
            <button onclick="deleteContact(${index})">Delete</button>
        `;
        contactList.appendChild(listItem);
    });
}

// Function to edit a contact
function editContact(index) {
    const newName = prompt('Enter new name:');
    const newPhone = prompt('Enter new phone:');
    const newEmail = prompt('Enter new email:');
    
    if (newName && newPhone && newEmail) {
        contacts[index].name = newName;
        contacts[index].phone = newPhone;
        contacts[index].email = newEmail;
        displayContacts(); // Update the contact list
    }
}

// Function to delete a contact
function deleteContact(index) {
    if (confirm('Are you sure you want to delete this contact?')) {
        contacts.splice(index, 1); // Remove the contact from the array
        displayContacts(); // Update the contact list
    }
}

// Event listener for form submission
document.getElementById('addContactForm').addEventListener('submit', addContact);

// Initial display of contacts
displayContacts();

