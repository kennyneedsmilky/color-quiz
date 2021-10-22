// vue.config.js


module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",

  // pwa: {
  //   name: "Color Quiz",
  //   short_name: "Color Quiz",
  //   display: "standalone",
  //   themeColor: "#000000",
  //   msTileColor: "#000000",
  //   appleMobileWebAppCapable: "yes",
  //   appleMobileWebAppStatusBarStyle: "black",

  //   // configure the workbox plugin
  //   workboxPluginMode: "GenerateSW",
  //   workboxOptions: {
  //     // swSrc is required in InjectManifest mode.
  //     swSrc: "dev/sw.js",
  //     // ...other Workbox options...
  //   }
  // }
};
