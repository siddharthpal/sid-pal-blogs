export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5edce0ce2908fe284d99cce5',
                  title: 'Sanity Studio',
                  name: 'sid-pal-blogs-studio',
                  apiId: '1bce2c80-aef7-446d-b5ba-1b05b7973733'
                },
                {
                  buildHookId: '5edce0ce22763e4842a03db7',
                  title: 'Blog Website',
                  name: 'sid-pal-blogs',
                  apiId: 'a10455d0-f774-42fc-89a6-6a8ded6587f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/siddharthpal/sid-pal-blogs',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sid-pal-blogs.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
