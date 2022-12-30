import { p as promiseResolve, b as bootstrapLazy } from './index-8174ff27.js';

/*
 Stencil Client Patch Browser v2.19.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["webcap-accordion_4",[[1,"webcap-accordion",{"labeltext":[1],"accordiontext":[1],"width":[8],"height":[8],"textcolor":[1],"fontstyle":[1],"backgroundcolor":[1],"bordercolor":[1],"togglecolor":[1],"collapsecolor":[1],"collapsebg":[1],"collapseheight":[8],"togglefalse":[32]}],[1,"webcap-alert",{"alerttext":[1],"textcolor":[1],"fontstyle":[1],"alertboxcolor":[1],"bordercolor":[1],"borderradius":[8],"height":[8],"width":[8],"backgroundcolor":[1],"deletecolor":[1],"togglefalse":[32]}],[1,"webcap-button",{"titlebutton":[1],"bordercolor":[1],"borderradius":[8],"backgroundcolor":[1],"textcolor":[1],"fontsize":[8],"fontstyle":[1],"height":[8],"width":[8]}],[1,"webcap-button-mondriaan",{"titlebutton":[1],"bordercolor":[1],"backgroundcolor":[1],"textcolor":[1],"fontsize":[1],"borderwidth":[1],"bordercorner":[1]}]]]], options);
});
