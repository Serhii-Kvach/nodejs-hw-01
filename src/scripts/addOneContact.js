import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const createNewContact = createFakeContact();
    contacts.push(createNewContact);
    await writeContacts(contacts);
    console.log('One contact added successfully');
  } catch (error) {
    console.error('Error adding one contact:', error.message);
  }
};

addOneContact();
