const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allWorkshopsJson {
          edges {
            node {
              id
              startDate
              endDate
              path
              speakers {
                name
                pic
                bio
                twitterHandle
                topic
                date
                startTime
                endTime
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allWorkshopsJson.edges.forEach(({ node }) => {
        createPage({
          path: node.path,
          component: path.resolve(`./src/templates/confrence.js`),
        })
      })

      resolve()
    })
  })
}
