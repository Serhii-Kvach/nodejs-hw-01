import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const allContacts = await readContacts();
    if (allContacts.length === 0) {
      console.log('Contact list is empty.');
      return [];
    }
    return allContacts;
  } catch (error) {
    console.log('Error get all contacts:', error.message);
  }
};

console.log(await getAllContacts());
