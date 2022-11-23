"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateGetterDeclarations = exports.populateGetter = void 0;
const getter = `export var getAll = function () { return ({
/* inject */}); };`;
const definitions = `export declare const getAll: () => {
/* inject */};`;
const populateGetter = (svgs) => {
    const body = svgs.map((svg) => `  '${svg.name}': '${svg.data}',\n`).join('');
    return getter.replace('/* inject */', body);
};
exports.populateGetter = populateGetter;
const populateGetterDeclarations = (svgs) => {
    const body = svgs.map((svg) => `  '${svg.name}': string;\n`).join('');
    return definitions.replace('/* inject */', body);
};
exports.populateGetterDeclarations = populateGetterDeclarations;
//# sourceMappingURL=IconGetter.js.map