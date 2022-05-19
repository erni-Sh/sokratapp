require("babel-register")({
  presets: ["es2015", "react"]
});

const router = require('./components/app/app').default;
const Sitemap = require('react-router-sitemap').default;

(
  new Sitemap(router)
    .build('http://localhost:3000/')
    .save('./public/sitemap.xml')
);