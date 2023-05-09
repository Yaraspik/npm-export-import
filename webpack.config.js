const { merge } = require ( 'webpack-merge' );

const commonConfig = require ( './webpack.common.config.js' );

const productionConfig = require ( './webpack.production.config.js' );

const developmentConfig = require ( './webpack.development.config.js' );

module.exports = (env) => {
    console.log(env)
  if(env.production) {
      return merge(commonConfig, productionConfig);
    } else if (env.development) {
      return merge(commonConfig, developmentConfig);
    } else {
        throw new Error('No matching configuration was found!');
    }
}