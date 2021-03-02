import app from "../../config/configApp";
import VueGoogleMap from 'vuejs-google-maps';
import { LMap, LTileLayer, LMarker, LWMSTileLayer, LControlLayers  } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import VueSimpleMaps from 'vue-simple-maps';

app.use(VueSimpleMaps);

app.component('l-map', LMap);
app.component('l-tile-layer', LTileLayer);
app.component('l-marker', LMarker);
app.component('l-wms-tile-layer', LWMSTileLayer);
app.component('l-control-layer', LControlLayers);

app.use(VueGoogleMap, {
  load: {
    apiKey: 'AIzaSyCWLSu-IIz-TNFJ7oGbgbP7FXiW14SWk08',
    libraries: ['...']
  }
});