"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateIconProvider = void 0;
const template = `tinymce.IconManager.add('/* name */', {
  icons: {
/* inject */  }
});`;
const populateIconProvider = (svgs, name) => {
    const body = svgs.map((svg) => `    '${svg.name}': '${svg.data}',\n`).join('');
    return template.replace('/* name */', name).replace('/* inject */', body);
};
exports.populateIconProvider = populateIconProvider;
//# sourceMappingURL=IconProvider.js.map