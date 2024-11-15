const discountCodeExample = require('./modules/discount-code/webpack.config');
const splitExample = require('./modules/discount-redemption-split/webpack.config');

module.exports = function(env, argv) {
    // Modify the configs to ensure they output to public directory
    const discountConfig = discountCodeExample(env, argv);
    const splitConfig = splitExample(env, argv);

    // Update output paths
    discountConfig.output = {
        ...discountConfig.output,
        path: path.resolve(__dirname, 'public/discount-code')
    };

    splitConfig.output = {
        ...splitConfig.output,
        path: path.resolve(__dirname, 'public/split')
    };

    return [discountConfig, splitConfig];
};