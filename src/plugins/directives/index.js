import { inputNumber, segmaLoading } from '../../../dist/index.esm.js'

// import { inputNumber, segmaLoading } from "../../directives";

const directives = [
    segmaLoading,
    inputNumber
];

export default {
    install(Vue) {
        directives.forEach(directive => {
            Vue.directive(directive.name, directive.directive);
        });
    }
};
