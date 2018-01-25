/**
 * Created by thram on 18/01/17.
 */
import { resolve } from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlwebpackPlugin from 'html-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { optimize, LoaderOptionsPlugin, DefinePlugin } from 'webpack';

const isProd = process.env.NODE_ENV === 'production';
const include = [resolve(__dirname, './src'), resolve(__dirname, './stories')];
const exclude = [resolve(__dirname, './node_modules/')];

const getRule = (test, use, includeModules) => ({
  test,
  use,
  include: includeModules ? [...include, ...exclude] : include,
  exclude: includeModules ? undefined : exclude,
});

const INDEX_HTML_SETUP = {
  template: 'node_modules/html-webpack-template/index.ejs',
  title: 'Starter Kit React',
  appMountId: 'app',
  meta: [
    {
      name: 'viewport',
      content: 'user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1',
    },
  ],
  links: [ 
    isProd ? 
    {
      rel: "stylesheet",
      href: "https://unpkg.com/purecss@1.0.0/build/pure-min.css",
      integrity: "sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w", 
      crossorigin: "anonymous"
    } 
    : './node_modules/purecss/build/pure-min.css'
  ],
  inject: false,
};

const plugins = [
  new ProgressBarPlugin(),
  new optimize.CommonsChunkPlugin({
    name: 'vendor',
    // this assumes your vendor imports exist in the node_modules directory
    minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
  }),
  new optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity,
  }),
  new optimize.CommonsChunkPlugin({
    async: true,
    children: true,
    minChunks: 4,
  }),
  new ExtractTextPlugin('styles.css'),
  new DefinePlugin({
    'process.env': {
      NODE_ENV: `"${process.env.NODE_ENV}"`,
    },
  }),
];

if (isProd) {
  plugins.push(
    /**
     * Options to pass to all loaders
     */
    new LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    /**
     * Minify JS
     */
    new optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
  );
}

const module = {
  rules: [
    getRule(
      /\.jsx?$/,
      [
        {
          loader: 'babel-loader',
          exclude: /(node_modules)/,
          options: {
            compact: isProd,
            cacheDirectory: true,
          },
        },
      ],
      true,
    ),
    getRule(/\.json$/i, ['json-loader']),
    getRule(/\.ya?ml$/i, ['json-loader', 'yaml-loader']),
    getRule(/\.(jpe?g|png|gif|svg|webp)$/i, 'file-loader?name=images/[name].[ext]'),
    getRule(/\.(mp4|webm|ogv)$/i, 'file-loader?name=video/[name].[ext]'),
    getRule(/\.(mp3|ogg|wav)$/i, 'file-loader?name=audio/[name].[ext]'),
    getRule(/\.(eot|otf|ttf|woff|woff2)$/i, 'file-loader?name=fonts/[name].[ext]'),
    getRule(
      /\.css$/i,
      isProd
        ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        })
        : ['style-loader', 'css-loader'],
    ),
  ],
};

export default function (env = {}) {
  plugins.push(new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|css|html)$/,
    threshold: 10240,
    minRatio: 0.8,
  }));
  plugins.push(new HtmlwebpackPlugin({
    ...INDEX_HTML_SETUP,
    inject: false,
    chunks: ['vendor', 'manifest', 'app'],
    filename: `${__dirname}/${env.qa ? 'qa' : 'release'}/index.html`,
  }));
  if (env.analyze) plugins.push(new BundleAnalyzerPlugin());
  return {
    cache: true,
    entry: {
      app: `${__dirname}/src/index`,
    },
    output: {
      path: `${__dirname}/${env.qa ? 'qa' : 'release'}`,
      filename: '[name].[chunkhash].js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devtool: !isProd && 'source-map',
    module,
    plugins,
    performance: {
      hints: false,
    },
  };
}
