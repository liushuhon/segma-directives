
let plugin = [];
if(process.env["ENV"] === "test") {
    plugin.push('istanbul');

}
module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],

    plugins: ['istanbul']
};
