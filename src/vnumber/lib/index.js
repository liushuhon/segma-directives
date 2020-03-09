import onlyNumber from './only_number';

const directives = [
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
