exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: "js/app.js"
    },
    stylesheets: {
      joinTo: "css/app.css",
      order: {
        before: /normalize/
      }
    },
    templates: {
      joinTo: "js/app.js"
    }
  },

  conventions: {
    ignored: [
      /[\\/]_/,
      /.*\.d\.ts$/
    ]
  },

  paths: {
    // Dependencies and current project directories to watch
    watched: [
      "app",
      "assets"
    ],

    // Where to compile files to
    public: "docs"
  },

  plugins: {
    sass: {
      options: {
        // Use includePaths to allow sass to load files outside your tree
        // For example, from node_modules
        //includePaths: ['app/css']
      }
    },
    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions'])
      ]
    },
    brunchTypescript: {
      ignoreErrors: [
        // https://github.com/baptistedonaux/brunch-typescript/issues/18
        2503 // Cannot find namespace {0}
      ]
    }
  },

  modules: {
    autoRequire: {
      "js/app.js": ["js/app"]
    }
  },

  npm: {
    enabled: true
  }
};
