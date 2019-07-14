const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.extend(
    'pug',
    new class {
        webpackRules() {
            return {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
            }
        }
    }()
)

mix.js('resources/js/about_client.js', 'public/js')
    .js('resources/js/about_server.js', 'public/js')
    .js('resources/js/users_client.js', 'public/js')
    .js('resources/js/users_server.js', 'public/js')
    .pug()
    .sass('resources/sass/app.scss', 'public/css')
    .version()

mix.options({
    hmrOptions: {
        host: '127.0.0.1',
        port: 3001
    }
})

// mix.listen('configReady', (webpackConfig) => {
//     if (mix.isUsing('hmr')) {
//         // Remove leading '/' from entry keys
//         webpackConfig.entry = Object.keys(webpackConfig.entry).reduce((entries, entry) => {
//         entries[entry.replace(/^\//, '')] = webpackConfig.entry[entry];
//         return entries;
//         }, {});

//         // Remove leading '/' from ExtractTextPlugin instances
//         webpackConfig.plugins.forEach((plugin) => {
//         if (plugin.constructor.name === 'ExtractTextPlugin') {
//             plugin.filename = plugin.filename.replace(/^\//, '');
//         }
//         });
//     }
// });
