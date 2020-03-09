import directives from './lib/index';

const plugins = [directives];

export default {
    install(Vue) {
        plugins.forEach(plugin => {
            Vue.use(plugin);
    });
    }
};
