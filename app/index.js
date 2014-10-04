// Generated by CoffeeScript 1.7.1
"use strict";
var yeoman;

yeoman = require("yeoman-generator");

module.exports = yeoman.generators.Base.extend({
  constructor: function() {
    return yeoman.generators.Base.apply(this, arguments);
  },
  packageJSON: function() {
    return this.template("_package.json", "package.json");
  },
  git: function() {
    return this.template("gitignore", ".gitignore");
  },
  bower: function() {
    this.template("_bower.json", "bower.json");
    return this.template("bowerrc", ".bowerrc");
  },
  gulp: function() {
    return this.template("gulpfile.js", "gulpfile.js");
  },
  index: function() {
    return this.template("index.html", "app/index.html");
  },
  app: function() {
    this.directory("app");
    this.mkdir("app/scripts");
    this.mkdir("app/styles");
    this.mkdir("app/images");
    this.template("styles/main.css", "app/styles/main.css");
    return this.template("scripts/main.js", "app/scripts/main.js");
  },
  install: function() {
    this.on("end", function() {
      return console.log("Enjoy your coding!");
    });
    return this.installDependencies();
  }
});