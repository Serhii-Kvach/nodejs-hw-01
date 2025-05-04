import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    for (let i = 0; i < number; i++) {
      const createNewContact = createFakeContact();
      contacts.push(createNewContact);
    }
    await writeContacts(contacts);
    console.log(`${number} contacts added successfully`);
  } catch (error) {
    console.error('Error generated contacts:', error.message);
  }
};

generateContacts(5);
