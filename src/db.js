let db

export function debugLog (label, data = '') {
  if (import.meta.env.DEV) {
    console.log(label, data)
  }
}

const request = window.indexedDB.open('MyDiary', 1)

request.onupgradeneeded = (event) => {
  db = event.target.result

  debugLog('no database found or not to date')
  debugLog('creating database...')

  const store = db.createObjectStore('entries', { keyPath: 'id', autoIncrement: true })
  store.createIndex('date', 'date')
  store.createIndex('title', 'title')
  store.createIndex('content', 'content')

  store.add({ // info entry
    date: new Date('Fri Feb 10 2023 21:08:37 GMT+0100 (Central European Standard Time)'),
    title: 'Hello new user!',
    content: '<h1>My Diary!</h1><p>Welcome to <strong><em>My Diary</em></strong>, the app to write down everithing you want, whithout a cloud storage, and <strong><u>free</u></strong> of leaking data, your secrets are safe in your pocket.📱</p><p>You can add new entries and edit them with your <s>own</s> <em>awesome</em> style.✨</p><p>Also you can erase them if you want.🗑️</p><h2>Hi dev!</h2><p>Feel free to check the repo and suggest/add a new feature! </p><p>👇</p><p><a href="https://github.com/arnaugra/MyDiary">Soon</a></p>'
  })

  if (localStorage.getItem('MyDiaryPaginate') === null) {
    localStorage.setItem('MyDiaryPaginate', 10)
  }
/*
  // #region dummy data
  store.add({ date: new Date('Thu Aug 05 2021 12:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Fri Aug 06 2021 10:30:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })
  store.add({ date: new Date('Sat Aug 07 2021 14:15:00 GMT+0100'), title: 'Evento 3', content: 'Contenido del evento 3' })
  store.add({ date: new Date('Mon Aug 09 2021 16:45:00 GMT+0100'), title: 'Evento 4', content: 'Contenido del evento 4' })
  store.add({ date: new Date('Tue Aug 10 2021 09:00:00 GMT+0100'), title: 'Evento 5', content: 'Contenido del evento 5' })

  store.add({ date: new Date('Sun Sep 05 2021 15:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Mon Sep 06 2021 18:30:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })
  store.add({ date: new Date('Tue Sep 07 2021 09:45:00 GMT+0100'), title: 'Evento 3', content: 'Contenido del evento 3' })
  store.add({ date: new Date('Thu Sep 09 2021 13:15:00 GMT+0100'), title: 'Evento 4', content: 'Contenido del evento 4' })
  store.add({ date: new Date('Fri Sep 10 2021 11:00:00 GMT+0100'), title: 'Evento 5', content: 'Contenido del evento 5' })

  store.add({ date: new Date('Sat Oct 02 2021 10:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Sun Oct 03 2021 16:30:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })
  store.add({ date: new Date('Tue Oct 05 2021 14:15:00 GMT+0100'), title: 'Evento 3', content: 'Contenido del evento 3' })
  store.add({ date: new Date('Thu Oct 07 2021 11:00:00 GMT+0100'), title: 'Evento 4', content: 'Contenido del evento 4' })
  store.add({ date: new Date('Fri Oct 08 2021 08:45:00 GMT+0100'), title: 'Evento 5', content: 'Contenido del evento 5' })

  store.add({ date: new Date('Mon Nov 01 2021 18:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Wed Nov 03 2021 10:30:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })
  store.add({ date: new Date('Thu Nov 04 2021 12:45:00 GMT+0100'), title: 'Evento 3', content: 'Contenido del evento 3' })
  store.add({ date: new Date('Sat Nov 06 2021 16:15:00 GMT+0100'), title: 'Evento 4', content: 'Contenido del evento 4' })
  store.add({ date: new Date('Sun Nov 07 2021 09:30:00 GMT+0100'), title: 'Evento 5', content: 'Contenido del evento 5' })

  store.add({ date: new Date('Tue Dec 07 2021 14:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Thu Dec 09 2021 09:30:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })
  store.add({ date: new Date('Fri Dec 10 2021 12:45:00 GMT+0100'), title: 'Evento 3', content: 'Contenido del evento 3' })
  store.add({ date: new Date('Sun Dec 12 2021 16:15:00 GMT+0100'), title: 'Evento 4', content: 'Contenido del evento 4' })
  store.add({ date: new Date('Mon Dec 13 2021 08:30:00 GMT+0100'), title: 'Evento 5', content: 'Contenido del evento 5' })

  store.add({ date: new Date('Sun Jan 02 2022 10:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Mon Jan 03 2022 16:30:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })
  store.add({ date: new Date('Wed Jan 05 2022 14:15:00 GMT+0100'), title: 'Evento 3', content: 'Contenido del evento 3' })
  store.add({ date: new Date('Fri Jan 07 2022 11:00:00 GMT+0100'), title: 'Evento 4', content: 'Contenido del evento 4' })
  store.add({ date: new Date('Sat Jan 08 2022 08:45:00 GMT+0100'), title: 'Evento 5', content: 'Contenido del evento 5' })

  store.add({ date: new Date('Tue Feb 01 2022 18:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Thu Feb 03 2022 10:30:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })
  store.add({ date: new Date('Fri Feb 04 2022 12:45:00 GMT+0100'), title: 'Evento 3', content: 'Contenido del evento 3' })
  store.add({ date: new Date('Sun Feb 06 2022 16:15:00 GMT+0100'), title: 'Evento 4', content: 'Contenido del evento 4' })
  store.add({ date: new Date('Mon Feb 07 2022 09:30:00 GMT+0100'), title: 'Evento 5', content: 'Contenido del evento 5' })

  store.add({ date: new Date('Tue Mar 01 2022 14:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Thu Mar 03 2022 09:30:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })
  store.add({ date: new Date('Fri Mar 04 2022 12:45:00 GMT+0100'), title: 'Evento 3', content: 'Contenido del evento 3' })
  store.add({ date: new Date('Sun Mar 06 2022 16:15:00 GMT+0100'), title: 'Evento 4', content: 'Contenido del evento 4' })
  store.add({ date: new Date('Mon Mar 07 2022 08:30:00 GMT+0100'), title: 'Evento 5', content: 'Contenido del evento 5' })

  store.add({ date: new Date('Sat Apr 02 2022 10:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Sun Apr 03 2022 16:30:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })
  store.add({ date: new Date('Tue Apr 05 2022 14:15:00 GMT+0100'), title: 'Evento 3', content: 'Contenido del evento 3' })
  store.add({ date: new Date('Sun Apr 10 2022 16:15:00 GMT+0100'), title: 'Evento 4', content: 'Contenido del evento 4' })
  store.add({ date: new Date('Mon Apr 11 2022 08:30:00 GMT+0100'), title: 'Evento 5', content: 'Contenido del evento 5' })

  store.add({ date: new Date('Tue May 03 2022 18:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Thu May 05 2022 10:30:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })
  store.add({ date: new Date('Fri May 06 2022 12:45:00 GMT+0100'), title: 'Evento 3', content: 'Contenido del evento 3' })
  store.add({ date: new Date('Sun May 08 2022 16:15:00 GMT+0100'), title: 'Evento 4', content: 'Contenido del evento 4' })
  store.add({ date: new Date('Mon May 09 2022 09:30:00 GMT+0100'), title: 'Evento 5', content: 'Contenido del evento 5' })

  store.add({ date: new Date('Tue Jun 07 2022 14:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Thu Jun 09 2022 09:30:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })
  store.add({ date: new Date('Fri Jun 10 2022 12:45:00 GMT+0100'), title: 'Evento 3', content: 'Contenido del evento 3' })
  store.add({ date: new Date('Sun Jun 12 2022 16:15:00 GMT+0100'), title: 'Evento 4', content: 'Contenido del evento 4' })
  store.add({ date: new Date('Mon Jun 13 2022 08:30:00 GMT+0100'), title: 'Evento 5', content: 'Contenido del evento 5' })

  store.add({ date: new Date('Sat Jul 02 2022 10:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Tue Aug 01 2022 18:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Thu Aug 03 2022 10:30:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })
  store.add({ date: new Date('Fri Aug 04 2022 12:45:00 GMT+0100'), title: 'Evento 3', content: 'Contenido del evento 3' })
  store.add({ date: new Date('Sun Aug 06 2022 16:15:00 GMT+0100'), title: 'Evento 4', content: 'Contenido del evento 4' })
  store.add({ date: new Date('Mon Aug 07 2022 09:30:00 GMT+0100'), title: 'Evento 5', content: 'Contenido del evento 5' })

  store.add({ date: new Date('Tue Sep 05 2022 14:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Thu Sep 07 2022 09:30:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })
  store.add({ date: new Date('Fri Sep 08 2022 12:45:00 GMT+0100'), title: 'Evento 3', content: 'Contenido del evento 3' })
  store.add({ date: new Date('Sun Sep 10 2022 16:15:00 GMT+0100'), title: 'Evento 4', content: 'Contenido del evento 4' })
  store.add({ date: new Date('Mon Sep 11 2022 08:30:00 GMT+0100'), title: 'Evento 5', content: 'Contenido del evento 5' })

  store.add({ date: new Date('Sat Oct 02 2022 10:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Sun Oct 03 2022 16:30:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })
  store.add({ date: new Date('Tue Oct 05 2022 14:15:00 GMT+0100'), title: 'Evento 3', content: 'Contenido del evento 3' })
  store.add({ date: new Date('Sun Oct 10 2022 16:15:00 GMT+0100'), title: 'Evento 4', content: 'Contenido del evento 4' })
  store.add({ date: new Date('Mon Oct 11 2022 08:30:00 GMT+0100'), title: 'Evento 5', content: 'Contenido del evento 5' })

  store.add({ date: new Date('Tue Nov 01 2022 18:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Thu Nov 03 2022 10:30:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })
  store.add({ date: new Date('Fri Nov 04 2022 12:45:00 GMT+0100'), title: 'Evento 3', content: 'Contenido del evento 3' })
  store.add({ date: new Date('Sun Nov 06 2022 16:15:00 GMT+0100'), title: 'Evento 4', content: 'Contenido del evento 4' })
  store.add({ date: new Date('Mon Nov 07 2022 09:30:00 GMT+0100'), title: 'Evento 5', content: 'Contenido del evento 5' })

  store.add({ date: new Date('Tue Dec 05 2022 14:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Thu Dec 07 2022 09:30:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })
  store.add({ date: new Date('Fri Dec 08 2022 12:45:00 GMT+0100'), title: 'Evento 3', content: 'Contenido del evento 3' })
  store.add({ date: new Date('Sun Dec 10 2022 16:15:00 GMT+0100'), title: 'Evento 4', content: 'Contenido del evento 4' })
  store.add({ date: new Date('Mon Dec 11 2022 08:30:00 GMT+0100'), title: 'Evento 5', content: 'Contenido del evento 5' })

  store.add({ date: new Date('Sat Jan 02 2023 10:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Tue Jan 05 2023 14:00:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })
  store.add({ date: new Date('Thu Jan 07 2023 09:30:00 GMT+0100'), title: 'Evento 3', content: 'Contenido del evento 3' })
  store.add({ date: new Date('Fri Jan 08 2023 12:45:00 GMT+0100'), title: 'Evento 4', content: 'Contenido del evento 4' })
  store.add({ date: new Date('Sun Jan 10 2023 16:15:00 GMT+0100'), title: 'Evento 5', content: 'Contenido del evento 5' })

  store.add({ date: new Date('Tue Feb 01 2023 18:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Thu Feb 03 2023 10:30:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })
  store.add({ date: new Date('Fri Feb 04 2023 12:45:00 GMT+0100'), title: 'Evento 3', content: 'Contenido del evento 3' })
  store.add({ date: new Date('Sun Feb 06 2023 16:15:00 GMT+0100'), title: 'Evento 4', content: 'Contenido del evento 4' })
  store.add({ date: new Date('Mon Feb 07 2023 09:30:00 GMT+0100'), title: 'Evento 5', content: 'Contenido del evento 5' })

  store.add({ date: new Date('Tue Mar 01 2023 18:00:00 GMT+0100'), title: 'Evento 1', content: 'Contenido del evento 1' })
  store.add({ date: new Date('Thu Mar 03 2023 10:30:00 GMT+0100'), title: 'Evento 2', content: 'Contenido del evento 2' })

  // #endregion dummy data
*/
  store.transaction.oncomplete = (event) => {
    debugLog('database created')
  }

  store.transaction.onerror = (error) => {
    debugLog('database creation error: ', error)
  }
}

request.onsuccess = (event) => {
  db = event.target.result
  debugLog('database found and up to date:', db)
}

request.onerror = (error) => {
  debugLog('connection error: ', error)
}

// #region Methods IndexedBD

/**
 * Adds new data to database
 * @status working
 * @param {Object} newEntry Object w/ new entry data
*/
export function addEntry (newEntry) {
  const request = window.indexedDB.open('MyDiary', 1)
  request.onsuccess = (event) => {
    const db = event.target.result
    const transaction = db.transaction(['entries'], 'readwrite')
    const collection = transaction.objectStore('entries')
    const req = collection.add(newEntry)

    req.onerror = (error) => {
      debugLog('add error', error)
    }

    req.onsuccess = (event) => {
      db.close()
    }
  }
  request.onerror = (error) => {
    debugLog('connection error: ', error)
  }
}

/**
 * Gets data from database by id
 * @param {Number} idEntry Id of entry to get
 * @returns {Promise} Entry data
 */
export function getEntry (idEntry) {
  const request = window.indexedDB.open('MyDiary', 1)

  return new Promise((resolve, reject) => {
    request.onsuccess = (event) => {
      const db = event.target.result
      const transaction = db.transaction(['entries'], 'readonly')
      const collection = transaction.objectStore('entries')
      const req = collection.get(idEntry)

      req.onerror = (error) => {
        reject(error)
      }

      req.onsuccess = (event) => {
        if (event.target.result) {
          resolve(event.target.result)
        } else {
          reject('Entry not found ')
        }
        db.close()
      }
    }

    request.onerror = (error) => {
      reject(error)
    }
  })
}

/**
 * Updates data from database by id (the `Object` must have the id property)
 * @param {Object} updateEntry Object w/ data to update
 * @returns {Promise} Success message
 */
export function updateEntry (updateEntry) {
  const request = window.indexedDB.open('MyDiary', 1)

  return new Promise((resolve, reject) => {
    request.onsuccess = (event) => {
      const db = event.target.result
      const transaction = db.transaction(['entries'], 'readwrite')
      const objectStore = transaction.objectStore('entries')
      const putRequest = objectStore.put(updateEntry)

      putRequest.onsuccess = (event) => {
        resolve('Entry updated successfully')
        db.close()
      }

      putRequest.onerror = (event) => {
        reject('Error updating entry')
      }
    }

    request.onerror = (event) => {
      reject('Error opening database')
    }
  })
}

/**
 * Deletes data from database by id
 * @param {Number} idEntry Id of entry to delete
 * @returns {Promise} Success message
 */
export function destroyEntry (idEntry) {
  const request = window.indexedDB.open('MyDiary', 1)

  return new Promise((resolve, reject) => {
    request.onsuccess = (event) => {
      const db = event.target.result
      const transaction = db.transaction(['entries'], 'readwrite')
      const objectStore = transaction.objectStore('entries')
      const deleteRequest = objectStore.delete(idEntry)

      deleteRequest.onsuccess = (event) => {
        resolve('Entry deleted successfully')
        db.close()
      }

      deleteRequest.onerror = (event) => {
        reject('Error deleting entry')
      }
    }

    request.onerror = (event) => {
      reject('Error opening database')
    }
  })
}

/**
* Gets all data from database
* @returns {Promise} All entries data
*/
export function getAllEntries () {
  const request = window.indexedDB.open('MyDiary', 1)

  return new Promise((resolve, reject) => {
    request.onsuccess = (event) => {
      const db = event.target.result
      const transaction = db.transaction(['entries'], 'readonly')
      const objectStore = transaction.objectStore('entries')
      const getAllRequest = objectStore.getAll()

      getAllRequest.onsuccess = (event) => {
        const entries = event.target.result
        entries.sort((a, b) => a.date - b.date)
        const sortedEntries = entries.map((entry) => (entry))
        resolve(sortedEntries)
        db.close()
      }

      getAllRequest.onerror = (event) => {
        reject('Error getting entries')
      }
    }

    request.onerror = (event) => {
      reject('Error opening database')
    }
  })
}
// #endregion Methods IndexedBD

// #region Methods Localstorage

export function setPaginateNumber (entriesPerPage) {
  localStorage.setItem('MyDiaryPaginate', entriesPerPage)
}

export function getPaginateNumber () {
  return localStorage.getItem('MyDiaryPaginate')
}

// #endregion Methods Localstorage