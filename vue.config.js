/**
 *
 * @type {boolean}
 */
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  assetsDir: "assets",
  lintOnSave: false,
  chainWebpack: config => {
    config.module.rules.delete("eslint");
  },
  css: {
    sourceMap: !isProduction,
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/global.scss";`
      }
    }
  },
  productionSourceMap: !isProduction
};
