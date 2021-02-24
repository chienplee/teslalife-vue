import Vue from 'vue'
import VueGoogleMap from 'vuejs-google-maps';
import { LMap, LTileLayer, LMarker, LWMSTileLayer, LControlLayers  } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import VueSimpleMaps from 'vue-simple-maps';

Vue.use(VueSimpleMaps);

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-wms-tile-layer', LWMSTileLayer);
Vue.component('l-control-layer', LControlLayers);

Vue.use(VueGoogleMap, {
  load: {
    apiKey: 'AIzaSyCWLSu-IIz-TNFJ7oGbgbP7FXiW14SWk08',
    libraries: ['...']
  }
});