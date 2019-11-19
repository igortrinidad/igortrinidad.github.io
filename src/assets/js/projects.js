export const getProjects = function () {
  return require('./projects-data.json')
}

export const getProjectById = function (id) {
  const projects = require('./projects-data.json')
  const project = projects.filter(project => project.id === id)
  return project[0]
}

export const getLastProjects = function () {
  const projects = require('./projects-data.json')
  return [projects[projects.length - 1], projects[projects.length - 2]]
}