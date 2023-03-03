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

  store.add({ // info entry
      date: new Date('Fri Feb 10 2023 21:08:37 GMT+0100 (Central European Standard Time)'),
      title: "Welcome to My Diary",
      content: "This web app is a simple diary where you can write your thoughts and feelings. You can also edit or delete your entries."
  })

  //#region dummy data

 store.add({
  date: new Date('Mon Feb 21 2022 16:15:00 GMT+0100 (Central European Standard Time)'),
  title: 'Evento 1',
  content: 'Contenido del evento 1'
})
 store.add({
  date: new Date('Mon Feb 21 2022 16:15:00 GMT+0100 (Central European Standard Time)'),
  title: 'Evento 1',
  content: 'Contenido del evento 1'
})
 store.add({
  date: new Date('Thu Mar 10 2022 09:30:00 GMT+0100 (Central European Standard Time)'),
  title: 'Reunión de equipo',
  content: 'Presentación de resultados del trimestre'
})
 store.add({
  date: new Date('Thu Mar 10 2022 09:30:00 GMT+0100 (Central European Standard Time)'),
  title: 'Reunión de equipo',
  content: 'Presentación de resultados del trimestre'
})
 store.add({
  date: new Date('Fri Apr 01 2022 18:00:00 GMT+0100 (Central European Standard Time)'),
  title: 'Fiesta de cumpleaños',
  content: 'Celebración del cumpleaños de Juan'
})
 store.add({
  date: new Date('Fri Apr 01 2022 18:00:00 GMT+0100 (Central European Standard Time)'),
  title: 'Fiesta de cumpleaños',
  content: 'Celebración del cumpleaños de Juan'
})
 store.add({
  date: new Date('Wed May 11 2022 14:45:00 GMT+0100 (Central European Standard Time)'),
  title: 'Entrega de proyecto',
  content: 'Entrega del proyecto final para la clase de ciencias'
})
 store.add({
  date: new Date('Wed May 11 2022 14:45:00 GMT+0100 (Central European Standard Time)'),
  title: 'Entrega de proyecto',
  content: 'Entrega del proyecto final para la clase de ciencias'
})
 store.add({
  date: new Date('Thu Jun 02 2022 20:00:00 GMT+0100 (Central European Standard Time)'),
  title: 'Cena de aniversario',
  content: 'Celebración del aniversario de bodas'
})
 store.add({
  date: new Date('Thu Jun 02 2022 20:00:00 GMT+0100 (Central European Standard Time)'),
  title: 'Cena de aniversario',
  content: 'Celebración del aniversario de bodas'
})
 store.add({
  date: new Date('Sun Jul 17 2022 12:30:00 GMT+0100 (Central European Standard Time)'),
  title: 'Picnic en el parque',
  content: 'Día de campo con amigos y familiares'
})
 store.add({
  date: new Date('Tue Aug 09 2022 10:00:00 GMT+0100 (Central European Standard Time)'),
  title: 'Entrevista de trabajo',
  content: 'Entrevista para el puesto de gerente de ventas'
})
 store.add({
  date: new Date('Tue Aug 09 2022 10:00:00 GMT+0100 (Central European Standard Time)'),
  title: 'Entrevista de trabajo',
  content: 'Entrevista para el puesto de gerente de ventas'
})
 store.add({
  date: new Date('Fri Sep 23 2022 19:15:00 GMT+0100 (Central European Standard Time)'),
  title: 'Concierto de música',
  content: 'Concierto de rock en el estadio local'
})
 store.add({
  date: new Date('Fri Sep 23 2022 19:15:00 GMT+0100 (Central European Standard Time)'),
  title: 'Concierto de música',
  content: 'Concierto de rock en el estadio local'
})
 store.add({
  date: new Date('Sat Oct 15 2022 08:00:00 GMT+0100 (Central European Standard Time)'),
  title: 'Maratón de caridad',
  content: 'Carrera de 10 km para recaudar fondos para la investigación del cáncer'
})
 store.add({
  date: new Date('Sat Oct 15 2022 08:00:00 GMT+0100 (Central European Standard Time)'),
  title: 'Maratón de caridad',
  content: 'Carrera de 10 km para recaudar fondos para la investigación del cáncer'
})
 store.add({
  date: new Date('Mon Nov 07 2022 15:45:00 GMT+0100 (Central European Standard Time)'),
  title: 'Visita al museo',
  content: 'Excursión escolar al museo de historia natural'
})
 store.add({
  date: new Date('Mon Nov 07 2022 15:45:00 GMT+0100 (Central European Standard Time)'),
  title: 'Visita al museo',
  content: 'Excursión escolar al museo de historia natural'
})
 store.add({
  date: new Date('Thu Dec 01 2022 21:30:00 GMT+0100 (Central European Standard Time)'),
  title: 'Cena de navidad',
  content: 'Cena de navidad con la familia extendida'
})
 store.add({
  date: new Date('Thu Dec 01 2022 21:30:00 GMT+0100 (Central European Standard Time)'),
  title: 'Cena de navidad',
  content: 'Cena de navidad con la familia extendida'
})
 store.add({
  date: new Date('Sun Jan 15 2023 17:00:00 GMT+0100 (Central European Standard Time)'),
  title: 'Fiesta de graduación',
  content: 'Celebración de la graduación de la universidad'
})
 store.add({
  date: new Date('Sun Jan 15 2023 17:00:00 GMT+0100 (Central European Standard Time)'),
  title: 'Fiesta de graduación',
  content: 'Celebración de la graduación de la universidad'
})

// #endregion


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