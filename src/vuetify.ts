import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import './main.css';

const vuetify = createVuetify({
    components,
    directives,
    defaults: {
        VBtn: {
            style: 'border-radius: 5px',
        },
    },
})

export default vuetify;
