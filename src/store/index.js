import { createStore } from 'vuex'; 
  
export const store = createStore({ 
    state() { 
      return { 
        jobs :[
            {
              title: 'Front-End developer',
              company: 'AndroMedia',
              featured: true,
              avatarUrl:
                'https://pinpku.umsida.ac.id/wp-content/uploads/2021/11/andromedia-150x150.png',
              conditions: ['1d ago', 'full Time', 'Ergesh'],
              tag1: 'HTML',
              tag2: 'CSS',
              tag3: 'JS',
              tag4: 'REACT',
            },
            {
              title: 'Front-End developer',
              company: 'MadDevs',
              featured: true,
              avatarUrl:
                'https://yt3.ggpht.com/a/AGF-l7_0hk3mv6ab2wsBCKlLKCfnvWQhAoHlv9NSmw=s900-c-k-c0xffffffff-no-rj-mo',
              conditions: ['1d ago', 'full Time', 'KG Only'],
              tag1: 'HTML',
              tag2: 'Tailwind CSS',
              tag3: 'JS',
              tag4: 'Vue',
            },
            {
              title: 'Back-End developer',
              company: 'U.Skillz',
              featured: false,
              avatarUrl: null,
              conditions: ['1d ago', 'full Time', 'KG Only'],
              tag1: 'MongoDB',
              tag2: 'Python',
              tag3: 'SQL',
              tag4: 'Django',
            },
            {
              title: 'Back-End developer',
              company: 'U.Skillz',
              featured: false,
              avatarUrl: null,
              conditions: ['1d ago', 'full Time', 'RU Only'],
              tag1: 'Python',
              tag2: 'Django',
              tag3: 'Fast API',
              tag4: 'ООП',
            },
          ],
        filterdjobs: [],
      }; 
    }, 
mutations: { 
    setFilteredJobs(state) { 
      state.filteredJobs = state.jobs 
    }, 
    filterByCondition(state, data) { 
      state.filteredJobs = state.jobs.filter((item) => 
        item.conditions.includes(data) 
      )  
      },
    }, 
  });