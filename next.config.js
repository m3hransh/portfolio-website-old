module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    CMS_API: process.env.CMS_API, // Pass through env variables
    CMS_AUTH_TOKEN: process.env.CMS_AUTH_TOKEN,
  },
};
