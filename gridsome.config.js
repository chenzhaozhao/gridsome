// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [

  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('tailwindcss')(),
          require('autoprefixer')(),
        ]
      }
    }
  },
  templates: {
    project: [
      {
        path: "/project/:id",
        component: './src/templates/project.vue'
      }
    ],
    journal:[{
      path:'/journal/:id',
      component: './src/templates/journal.vue'
    }]
  },

}
