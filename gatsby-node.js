const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  return new Promise((resolve, reject) => {
    const projectPostTemplate = path.resolve('src/templates/project.js')
    resolve(
      graphql(
        `{
          allContentfulProject (limit:100){
            edges{
              node {
                title
                slug
              }
            }
          }
        }
        `
      ).then((result) => {
        if (result.errors){
          reject(result.errors)
        }
        result.data.allContentfulProject.edges.forEach((edge) => {
          createPage ({
            path: edge.node.slug,
            component: projectPostTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
}
