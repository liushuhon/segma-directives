import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import image from '@rollup/plugin-image';

export default {
    input: 'src/directives/index.js',
    output: [
        {
            file: 'dist/index.esm.js',
            format: 'es'
        }
    ],
    external: ['vue'],
    plugins: [
        vue(),
        resolve(),
        image()
    ]
};
