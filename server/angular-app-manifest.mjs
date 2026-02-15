
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/solar-link",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/solar-link"
  },
  {
    "renderMode": 2,
    "route": "/hya-naqraa"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 434, hash: 'ceba0c7026217c9529b9a4f1ff17db04f891deb0685ad022229bf70dc360e737', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 947, hash: '1f277bd0890f496b72952f600e0e8e29147a69063826d25ed363b5dac24f71b3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'hya-naqraa/index.html': {size: 26591, hash: '510e030ce3b01157837818324c582d877e7458c14e689db5cc314bce4d094b93', text: () => import('./assets-chunks/hya-naqraa_index_html.mjs').then(m => m.default)},
    'solar-link/index.html': {size: 17502, hash: 'ac1c3abe5ed114a6349ae1217fdae6840c1dcf43baf31fec742b617dbbc61f95', text: () => import('./assets-chunks/solar-link_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
