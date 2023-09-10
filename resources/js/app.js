import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp, Link } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VTable from '@/Components/Table/VTable.vue';
import { VueGoodTable } from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";

import {faFloppyDisk, faChevronDown, faList, faCog, faUser,faHouse, faPlus, faPen, faTrash, faEye, faUsers, faMinus, faSignOutAlt, faUserCog, faPercent, faRotate} from "@fortawesome/free-solid-svg-icons";

library.add(faFloppyDisk, faChevronDown, faList, faCog, faUser,faHouse, faPlus, faPen, faTrash, faEye, faUsers, faMinus, faSignOutAlt, faUserCog, faPercent, faRotate);

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(VueSweetalert2)
            .component('Link', Link)
            .component('v-table', VTable)
            .component('vg-table', VueGoodTable)
            .component("icon", FontAwesomeIcon)
            .mount(el);
    },
    progress: {
        color: '#064469',
    },
});
