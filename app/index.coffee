"use strict"

yeoman = require "yeoman-generator"

module.exports = yeoman.generators.Base.extend(
  constructor: ->
    yeoman.generators.Base.apply @, arguments

  packageJSON: ->
    @template "_package.json", "package.json"

  git: ->
    @template "gitignore", ".gitignore"

  bower: ->
    @template "_bower.json", "bower.json"
    @template "bowerrc", ".bowerrc"

  gulp: ->
    @template "gulpfile.js", "gulpfile.js"

  index: ->
    @template "index.html", "app/index.html"

  app: ->
    @directory "app"
    @mkdir "app/scripts"
    @mkdir "app/styles"
    @mkdir "app/images"
    @template "styles/main.css", "app/styles/main.css"
    @template "scripts/main.js", "app/scripts/main.js"

  install: ->
    @on "end", -> console.log "Enjoy your coding!"
    @installDependencies()
)