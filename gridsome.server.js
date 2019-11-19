// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async action => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createManagedPages(({ createPage }) => {

    const projects = require('./src/assets/js/projects-data.json')
    
    projects.map((project) => {
      createPage({
        path: `/projects/${project.id}`,
        component: './src/layouts/ShowProject.vue',
        context: {project: project}
      })

    })

  })
}
