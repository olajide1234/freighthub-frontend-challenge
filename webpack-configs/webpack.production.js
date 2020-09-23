import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

export const optimization = {
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
    }),
  ],
};
