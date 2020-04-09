export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8ec38b7d3a39aac2826291',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-iweqyhiv',
                  apiId: 'de7bcc5a-a1d5-45cd-b2ce-6e6c44f30091'
                },
                {
                  buildHookId: '5e8ec38b285c40307999a665',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-qggt1x93',
                  apiId: '11e189db-d352-478a-916f-6280ed4eda65'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brandiqa/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-qggt1x93.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
