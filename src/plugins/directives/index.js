import { onlyNumber,segmaLoading }  from 'directives';

const directives = [
    {
        name: 'segma-loading',
        directive: segmaLoading
    },
    {
        name: 'number',
        directive: onlyNumber
    }
];

export default {
    install(Vue) {
        directives.forEach(directive => {
            Vue.directive(directive.name, directive.directive);
        });
    }
};
