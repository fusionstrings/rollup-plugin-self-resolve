import plugin from './mod.js';

export default {
    input: './fixture.js',
    output: {
        dir: 'dist',
        format: 'esm',
        sourcemap: true
    },
    plugins: [
        plugin()
    ]
};