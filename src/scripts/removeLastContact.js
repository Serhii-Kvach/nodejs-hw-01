import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const allContacts = await readContacts();
    if (allContacts.length === 0) {
      console.log('Contact list is empty.');
      return [];
    }
    const updatedContacts = allContacts.slice(0, allContacts.length - 1);
    await writeContacts(updatedContacts);
    console.log('Last contact successfully deleted');
  } catch (error) {
    console.log(
      'An error occurred while deleting the last contact:',
      error.message,
    );
  }
};

removeLastContact();
