const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/jwhang627/Desktop/codes/html/jwhang627.github.io/.cache/dev-404-page.js"))),
  "component---src-templates-advanced-js": hot(preferDefault(require("/home/jwhang627/Desktop/codes/html/jwhang627.github.io/src/templates/advanced.js"))),
  "component---src-templates-blog-js": hot(preferDefault(require("/home/jwhang627/Desktop/codes/html/jwhang627.github.io/src/templates/blog.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/home/jwhang627/Desktop/codes/html/jwhang627.github.io/src/templates/page.js"))),
  "component---src-templates-portfolio-js": hot(preferDefault(require("/home/jwhang627/Desktop/codes/html/jwhang627.github.io/src/templates/portfolio.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/home/jwhang627/Desktop/codes/html/jwhang627.github.io/src/templates/post.js"))),
  "component---src-templates-project-js": hot(preferDefault(require("/home/jwhang627/Desktop/codes/html/jwhang627.github.io/src/templates/project.js")))
}

