const path = require("path");

export default {
  devServer: {
    proxy: {
      "/api": {
        target: "http://api.cc0820.top:8090",
        pathRewrite: { "^/api": "" },
      },
    },
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
