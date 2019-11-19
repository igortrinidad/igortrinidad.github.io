module.exports.projects = [
    {
      id: 'weplanner',
      name: 'We-Planner',
      is_active: false,
      image_url: '/projects/weplanner.png',
      logo_width: '95%',
      year: '2016',
      website: 'https://app.we-planner.com',
      description: 'We Planner was our first project and it was a tool for companies in the event and party industry, where the companies could centralize their resources to manage and sell your services.',
      stack: ['Vue.JS', 'Laravel 5.4', 'MySql']
    },
    {
      id: 'weplaces',
      name: 'We Places',
      is_active: false,
      image_url: '/projects/weplaces.png',
      logo_width: '95%',
      year: '2016',
      website: 'https://weplaces.com.br',
      description: 'A platform that provide for event places tools for exibite their estructure and an online calendar to sell their available dates for costumers.',
      stack: ['Cordova', 'Vue.JS', 'Laravel 5.4', 'MySql']
    },
    {
      id: 'isaudavel',
      name: 'iSaudavel',
      is_active: true,
      image_url: '/projects/isaudavel.png',
      logo_width: '35%',
      year: '2016',
      website: 'https://isaudavel.com',
      description: 'An application to Healthy Professionals sell your services and manager your clients',
      stack: ['Cordova', 'Vue.JS', 'Laravel 5.4', 'MySql']
    },
    {
      id: 'goup',
      name: 'goUp Today',
      is_active: false,
      image_url: '/projects/goup.png',
      logo_width: '45%',
      year: '2017',
      website: 'https://goup.today',
      description: 'An App to people find the hot places to go out today.',
      stack: ['Cordova', 'Vue.JS', 'Laravel 5.4', 'MySql']
    },
    {
      id: 'rootburger-pos',
      name: 'Root Burger POS',
      is_active: true,
      image_url: '/projects/rootburger.png',
      logo_width: '55%',
      year: '2018',
      website: 'https://rootburger.com.br',
      description: 'An POS application with a lot of administration features used for my restaurant, that was integrated directly with Stone over an pinpad bluetooth device',
      stack: ['Cordova', 'Vue.JS', 'Laravel 5.6', 'MySql']
    },
    {
      id: 'rootburger-website',
      name: 'Root Burger Website',
      is_active: true,
      image_url: '/projects/rootburger.png',
      logo_width: '55%',
      year: '2018',
      website: 'https://rootburger.com.br',
      description: 'Website of Root Burger Restaurant and the administration part of the whole system.',
      stack: ['Laravel', 'Vue.js', 'MySql', 'Webpack', 'Stone Payments']
    },
    {
      id: 'simbora.fun',
      name: 'Simbora.fun',
      is_active: true,
      image_url: '/projects/simbora.png',
      logo_width: '55%',
      year: '2019',
      website: 'https://simbora.fun',
      description: 'Simbora.fun is a platform for producer send list of tickets with discount for their clients',
      stack: ['Laravel', 'Vue.js', 'MySql', 'Webpack', 'Stone Payments']
    },
    {
      id: 'simbora.social',
      name: 'Simbora.fun Social',
      is_active: true,
      image_url: '/projects/simbora.png',
      logo_width: '55%',
      year: '2019',
      website: 'https://simbora.fun/social',
      description: 'Simbora Social is whole new feature of Simbora that aim the client final, where they can invite friends and family for your parties and win gifts in money through Simbora.',
      stack: ['Laravel', 'Vue.js', 'MySql', 'Webpack', 'Wirecard', 'Firebase']
    }
  ]


  module.exports.getProjectById = function (id) {
    const project = projects.filter(project => project.id === id)
    return project[0]
  }
  
  module.exports.getLastProjects = function () {
    return [projects[projects.length - 1], projects[projects.length - 2]]
  }
  