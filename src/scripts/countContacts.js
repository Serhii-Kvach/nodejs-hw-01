import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const allContacts = await readContacts();
    console.log('Total contacts:');
    return allContacts.length;
  } catch (error) {
    console.log('Contact count error:', error.message);
  }
};

console.log(await countContacts());
