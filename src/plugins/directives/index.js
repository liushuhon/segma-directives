import { inputNumber, segmaLoading } from '../../directives/index';

const directives = [
    segmaLoading,
    inputNumber
];

export default {
    install (Vue) {
        directives.forEach(directive => {
            Vue.directive(directive.name, directive.directive);
        });
    }
};
