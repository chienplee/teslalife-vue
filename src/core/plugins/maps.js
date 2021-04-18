import app from '../../config/configApp';
// import VueGoogleMap from 'vuejs-google-maps';
import { LMap, LTileLayer, LMarker, LWMSTileLayer, LControlLayers } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
// import VueSimpleMaps from 'vue-simple-maps';
import VueMasonry from 'vue-masonry-css';

app.use(VueMasonry);

// app.use(VueSimpleMaps);

app.component('l-map', LMap);
app.component('l-tile-layer', LTileLayer);
app.component('l-marker', LMarker);
app.component('l-wms-tile-layer', LWMSTileLayer);
app.component('l-control-layer', LControlLayers);
