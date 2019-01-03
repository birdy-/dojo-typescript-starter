const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = env => {
  if (!env) env = { production: false };
  const tsConfig = path.join(__dirname, './tsconfig.json');
  return {
    mode: env.production ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, './dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.ts', '.tsx', '.js', '.json'],
      plugins: [
        // Allow ts-loader to resolve modules according to baseUrl and paths in tsconfig.json
        new TsconfigPathsPlugin({
          configFile: tsConfig,
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: [/node_modules/, /test/],
          loader: ['babel-loader', { loader: 'ts-loader', options: { configFile: tsConfig } }],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'typings-for-css-modules-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                sourceMap: true,
              },
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(ttf|eot|svg|woff|woff2|png|jpg|jpeg)(\?.+)?$/,
          loader: 'file-loader?name=[hash:12].[ext]',
        },
        // ** STOP ** Are you adding a new loader?
        // Make sure to add the new loader(s) before the "file" loader.
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles/[name].css',
      }),
      new HtmlWebpackPlugin({
        template: 'src/assets/template.html',
      }),
    ],
    devServer: {
      allowedHosts: ['localhost'],
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      contentBase: '/dist',
      historyApiFallback: true,
    },
    externals: {},
    target: 'web',
  };
};
