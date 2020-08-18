import { onlyNumber }  from '../../directives/index';
import segmaLoading from '../../directives/lib/segma_loading/index'

const directives = [
    segmaLoading,
    {
        name: 'number',
        directive: onlyNumber
    },
];

export default {
    install(Vue) {
        directives.forEach(directive => {
            Vue.directive(directive.name, directive.directive);
        });
    }
};
