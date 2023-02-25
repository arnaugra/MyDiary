let db


export function debugLog(label, data = '') {
  if (import.meta.env.DEV) {
    console.log(label, data)
  }
}

const request = window.indexedDB.open("MyDiary", 1)

request.onupgradeneeded = (event) => {
  db = event.target.result

  debugLog("no database found or not to date")
  debugLog("creating database...")

  const store = db.createObjectStore("entries", { keyPath: "id", autoIncrement: true })
  store.createIndex("date", "date")
  store.createIndex("title", "title")
  store.createIndex("content", "content")

  // store.add({ // test
  //     date: new Date('Fri Jan 10 2022 21:09:06 GMT+0100 (Central European Standard Time)'),
  //     title: "second test",
  //     content: "This is the second test"
  // })
  // store.add({ // test
  //     date: new Date('Fri Jan 10 2022 21:09:06 GMT+0100 (Central European Standard Time)'),
  //     title: "Second test",
  //     content: "This is the second test"
  // })
  // store.add({ // test
  //     date: new Date('Fri Jan 10 2023 21:09:06 GMT+0100 (Central European Standard Time)'),
  //     title: "Second test",
  //     content: "This is the second test"
  // })
  store.add({ // info entry
      date: new Date('Fri Feb 10 2023 21:08:37 GMT+0100 (Central European Standard Time)'),
      title: "Welcome to My Diary",
      content: "This is the first entry"
  })

  store.transaction.oncomplete = (event) => {
    debugLog("database created")
  }

  store.transaction.onerror = (error) => {
    debugLog("database creation error: ", error)
  }
}


request.onsuccess = (event) => {
  db = event.target.result
  debugLog("database found and up to date:", db)
}

request.onerror = (error) => {
  debugLog("connection error: ", error)
}


//========== Methods ==========//

/**
 * Adds new data to database
 * @status working
 * @param {Object} newEntry Object w/ new entry data
*/
export function addEntry(newEntry) {
  const request = window.indexedDB.open("MyDiary", 1)
  request.onsuccess = (event) => {

    const db = event.target.result
    const transaction = db.transaction(["entries"], "readwrite")
    const collection = transaction.objectStore("entries")
    const req = collection.add(newEntry)

    req.onerror = (error) => {
      debugLog('add error', error)
    }

    req.onsuccess = (event) => {
      db.close()
    }
  }
  request.onerror = (error) => {
    debugLog("connection error: ", error)
  }
}

/**
 * Gets data from database by id
 * @param {Number} idEntry Id of entry to get
 * @returns {Promise} Entry data
 */
export function getEntry(idEntry) {
  const request = window.indexedDB.open("MyDiary", 1);

  return new Promise((resolve, reject) => {
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(["entries"], "readonly");
      const collection = transaction.objectStore("entries");
      const req = collection.get(idEntry);

      req.onerror = (error) => {
        reject(error);
      };

      req.onsuccess = (event) => {
        if (event.target.result) {
          resolve(event.target.result);
        } else {
          reject('Entry not found');
        }
        db.close();
      };
    };

    request.onerror = (error) => {
      reject(error);
    }
  });
}

/**
 * Updates data from database by id (the `Object` must have the id property)
 * @param {Object} updateEntry Object w/ data to update
 * @returns {Promise} Success message
 */
export function updateEntry(updateEntry) {
  const request = window.indexedDB.open("MyDiary", 1);

  return new Promise((resolve, reject) => {
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(["entries"], "readwrite");
      const objectStore = transaction.objectStore("entries");
      const putRequest = objectStore.put(updateEntry);

      putRequest.onsuccess = (event) => {
        resolve("Entry updated successfully");
        db.close();
      };

      putRequest.onerror = (event) => {
        reject("Error updating entry");
      };
    };

    request.onerror = (event) => {
      reject("Error opening database");
    };
  });
}

/**
 * Deletes data from database by id
 * @param {Number} idEntry Id of entry to delete
 * @returns {Promise} Success message
 */
export function destroyEntry(idEntry) {
  const request = window.indexedDB.open("MyDiary", 1);

  return new Promise((resolve, reject) => {
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(["entries"], "readwrite");
      const objectStore = transaction.objectStore("entries");
      const deleteRequest = objectStore.delete(idEntry);

      deleteRequest.onsuccess = (event) => {
        resolve("Entry deleted successfully");
        db.close();
      };

      deleteRequest.onerror = (event) => {
        reject("Error deleting entry");
      };
    };

    request.onerror = (event) => {
      reject("Error opening database");
    };
  });
}

/**
* Gets all data from database
* @returns {Promise} All entries data
*/
export function getAllEntries() {
  const request = window.indexedDB.open("MyDiary", 1);

  return new Promise((resolve, reject) => {
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(["entries"], "readonly");
      const objectStore = transaction.objectStore("entries");
      const getAllRequest = objectStore.getAll();

      getAllRequest.onsuccess = (event) => {
        resolve(event.target.result);
        db.close();
      };

      getAllRequest.onerror = (event) => {
        reject("Error getting entries");
      };
    };

    request.onerror = (event) => {
      reject("Error opening database");
    };
  });
}