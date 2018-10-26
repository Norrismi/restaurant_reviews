const config = {
  production: {
    SECRET: "process.env.SECRET",
    DATABASE: "process.env.MONGODB_URI"
  },
  default: {
    SECRET: "GQLnyt1ENGJfjZrzD2sYnEE5ZyxwS8PdL6AxyZWLjJ9wl1lyRU",
    DATABASE: "mongodb://localhost:27017/Restaurant-DB"
  }
};

exports.get = function get(env) {
  return config[env] || config.default;
};
