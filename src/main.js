import { createApp } from 'vue'

import 'remixicon/fonts/remixicon.css'
import './style.css'

import {
  addEntry,
  getEntry,
  getAllEntries,
  updateEntry,
  destroyEntry
} from './db.js'

import App from './App.vue'

// addEntry({ date: 'Mon Feb 21 2022 16:15:00 GMT+0100 (Central European Standard Time)', title: 'Evento 1', content: 'Contenido del evento 1' })
// addEntry({ date: 'Mon Feb 21 2022 16:15:00 GMT+0100 (Central European Standard Time)', title: 'Evento 1', content: 'Contenido del evento 1' })
// addEntry({ date: 'Thu Mar 10 2022 09:30:00 GMT+0100 (Central European Standard Time)', title: 'Reunión de equipo', content: 'Presentación de resultados del trimestre' })
// addEntry({ date: 'Thu Mar 10 2022 09:30:00 GMT+0100 (Central European Standard Time)', title: 'Reunión de equipo', content: 'Presentación de resultados del trimestre' })
// addEntry({ date: 'Fri Apr 01 2022 18:00:00 GMT+0100 (Central European Standard Time)', title: 'Fiesta de cumpleaños', content: 'Celebración del cumpleaños de Juan' })
// addEntry({ date: 'Fri Apr 01 2022 18:00:00 GMT+0100 (Central European Standard Time)', title: 'Fiesta de cumpleaños', content: 'Celebración del cumpleaños de Juan' })
// addEntry({ date: 'Wed May 11 2022 14:45:00 GMT+0100 (Central European Standard Time)', title: 'Entrega de proyecto', content: 'Entrega del proyecto final para la clase de ciencias' })
// addEntry({ date: 'Wed May 11 2022 14:45:00 GMT+0100 (Central European Standard Time)', title: 'Entrega de proyecto', content: 'Entrega del proyecto final para la clase de ciencias' })
// addEntry({ date: 'Thu Jun 02 2022 20:00:00 GMT+0100 (Central European Standard Time)', title: 'Cena de aniversario', content: 'Celebración del aniversario de bodas' })
// addEntry({ date: 'Thu Jun 02 2022 20:00:00 GMT+0100 (Central European Standard Time)', title: 'Cena de aniversario', content: 'Celebración del aniversario de bodas' })
// addEntry({ date: 'Sun Jul 17 2022 12:30:00 GMT+0100 (Central European Standard Time)', title: 'Picnic en el parque', content: 'Día de campo con amigos y familiares' })
// addEntry({ date: 'Tue Aug 09 2022 10:00:00 GMT+0100 (Central European Standard Time)', title: 'Entrevista de trabajo', content: 'Entrevista para el puesto de gerente de ventas' })
// addEntry({ date: 'Tue Aug 09 2022 10:00:00 GMT+0100 (Central European Standard Time)', title: 'Entrevista de trabajo', content: 'Entrevista para el puesto de gerente de ventas' })
// addEntry({ date: 'Fri Sep 23 2022 19:15:00 GMT+0100 (Central European Standard Time)', title: 'Concierto de música', content: 'Concierto de rock en el estadio local' })
// addEntry({ date: 'Fri Sep 23 2022 19:15:00 GMT+0100 (Central European Standard Time)', title: 'Concierto de música', content: 'Concierto de rock en el estadio local' })
// addEntry({ date: 'Sat Oct 15 2022 08:00:00 GMT+0100 (Central European Standard Time)', title: 'Maratón de caridad', content: 'Carrera de 10 km para recaudar fondos para la investigación del cáncer' })
// addEntry({ date: 'Sat Oct 15 2022 08:00:00 GMT+0100 (Central European Standard Time)', title: 'Maratón de caridad', content: 'Carrera de 10 km para recaudar fondos para la investigación del cáncer' })
// addEntry({ date: 'Mon Nov 07 2022 15:45:00 GMT+0100 (Central European Standard Time)', title: 'Visita al museo', content: 'Excursión escolar al museo de historia natural' })
// addEntry({ date: 'Mon Nov 07 2022 15:45:00 GMT+0100 (Central European Standard Time)', title: 'Visita al museo', content: 'Excursión escolar al museo de historia natural' })
// addEntry({ date: 'Thu Dec 01 2022 21:30:00 GMT+0100 (Central European Standard Time)', title: 'Cena de navidad', content: 'Cena de navidad con la familia extendida' })
// addEntry({ date: 'Thu Dec 01 2022 21:30:00 GMT+0100 (Central European Standard Time)', title: 'Cena de navidad', content: 'Cena de navidad con la familia extendida' })
// addEntry({ date: 'Sun Jan 15 2023 17:00:00 GMT+0100 (Central European Standard Time)', title: 'Fiesta de graduación', content: 'Celebración de la graduación de la universidad' })
// addEntry({ date: 'Sun Jan 15 2023 17:00:00 GMT+0100 (Central European Standard Time)', title: 'Fiesta de graduación', content: 'Celebración de la graduación de la universidad' })

// getEntry(106)
// .then((entry) => {
//   console.log(entry)
// })
// .catch((error) => {
//   console.log(error)
// })

createApp(App).mount('#app')
