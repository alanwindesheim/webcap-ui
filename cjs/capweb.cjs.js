'use strict';

const index = require('./index-d7aa1fe2.js');

/*
 Stencil Client Patch Browser v2.19.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('capweb.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["webcap-accordion_4.cjs",[[1,"webcap-accordion",{"labeltext":[1],"accordiontext":[1],"width":[8],"height":[8],"textcolor":[1],"fontstyle":[1],"backgroundcolor":[1],"bordercolor":[1],"togglecolor":[1],"collapsecolor":[1],"collapsebg":[1],"collapseheight":[8],"togglefalse":[32]}],[1,"webcap-alert",{"alerttext":[1],"textcolor":[1],"fontstyle":[1],"alertboxcolor":[1],"bordercolor":[1],"borderradius":[8],"height":[8],"width":[8],"backgroundcolor":[1],"deletecolor":[1],"togglefalse":[32]}],[1,"webcap-button",{"titlebutton":[1],"bordercolor":[1],"borderradius":[8],"backgroundcolor":[1],"textcolor":[1],"fontsize":[8],"fontstyle":[1],"height":[8],"width":[8]}],[1,"webcap-button-mondriaan",{"titlebutton":[1],"bordercolor":[1],"backgroundcolor":[1],"textcolor":[1],"fontsize":[1],"borderwidth":[1],"bordercorner":[1]}]]]], options);
});
