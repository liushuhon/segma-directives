import onlyNumber from './only_number';
import SegmaLoading from './segma_loading';

const directives = [
    {
        name: 'number',
        directive: onlyNumber
    },
    {
        name: 'segma-loading',
        directive: SegmaLoading
    }
];

export default {
    install(Vue) {
        directives.forEach(directive => {
            Vue.directive(directive.name, directive.directive);
        });
    }
};
