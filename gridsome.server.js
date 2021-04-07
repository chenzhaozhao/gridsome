// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const { title, des, project, journal } = require('./src/data/data.json')
    const theme = addCollection({
      typeName: 'theme'
    })
    theme.addNode({
      id: '1',
      title,
      des,
    })
    const PROJECT = addCollection({
      typeName: 'project'
    })
    for (let i of project) {
      PROJECT.addNode({
        ...i
      })
    }
    const JOURNAL = addCollection({
      typeName: 'journal'
    })
    for (let i of journal) {
      JOURNAL.addNode({
        ...i
      })
    }

  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
