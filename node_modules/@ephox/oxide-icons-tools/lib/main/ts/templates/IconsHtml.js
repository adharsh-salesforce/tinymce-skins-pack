"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateIconsHtml = void 0;
const template = `<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif;
      margin: 2rem;
    }
    section {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    article {
      margin: 3px;
    }
    svg {
      display: block;
    }
  </style>
</head>
<body>
  <h1>Tiny Oxide Theme Icons</h1>
  <p>Hover over an icon to display it's name</p>
  <section>
  /* inject */
  </section>
</body>
</html>`;
const createArticle = (svg) => `  <article title="${svg.name}">\n    ${svg.data}\n  </article>\n\n`;
const populateIconsHtml = (svgs) => {
    const body = svgs.map(createArticle).join('');
    return template.replace('/* inject */', body);
};
exports.populateIconsHtml = populateIconsHtml;
//# sourceMappingURL=IconsHtml.js.map