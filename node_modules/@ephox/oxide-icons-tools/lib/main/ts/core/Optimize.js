"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimizeSvgs = void 0;
const svgo_1 = require("svgo");
const isError = (optimizedSvg) => typeof optimizedSvg.error === 'string';
const optimizeSvgs = (svgs, svgoOptions) => Promise.all(svgs.map((svg) => {
    const optimizedSvg = (0, svgo_1.optimize)(svg.data, svgoOptions);
    if (isError(optimizedSvg)) {
        return Promise.reject(optimizedSvg.error);
    }
    else {
        return Promise.resolve({
            name: svg.name,
            data: optimizedSvg.data
        });
    }
}));
exports.optimizeSvgs = optimizeSvgs;
//# sourceMappingURL=Optimize.js.map