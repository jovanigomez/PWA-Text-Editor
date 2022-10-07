import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  export const putDb = async (content) => {
    console.error('putDb not implemented');
  
    // Creates connection to database
    const jateDb = await openDB('jate', 1);
  
    // Creates a new transaction and specify  the database and data privileges
    const tx = jateDb.transaction('jate', 'readwrite');
  
    // Open up the desired object store.
    const store = tx.objectStore('jate');
  
    // Use the .add() method on the store and pass in the content.
    const request = store.put({ id: 1, value: content });
  
    // Get confirmation of the request.
    const result = await request;
    console.log('🚀 - data saved to the database', result.value);
  };
  ;
  
  export const getDb = async () => {
    console.log('GET from the database');
  
    
    const jateDb = await openDB('jate', 1);
  
  
    const tx = jateDb.transaction('jate', 'readonly');
  
   
    const store = tx.objectStore('jate');
  
    const request = store.getAll();
  
   
    const result = await request;
    console.log('result.value', result.value);
    return result.value;
  };
  
  initdb();