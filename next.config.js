// const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  //   if (phase === PHASE_DEVELOPMENT_SERVER) {
  //     return {
  //       env: {
  //         mongodb_username: "shaqayeq",
  //         mongodb_password: "96Shaqayeq*b",
  //         mongodb_clustername: "cluster0",
  //         mongodb_database: "auth-demo-dev",
  //       },
  //     };
  //   }

  return {
    env: {
      mongodb_username: "shaqayeq",
      mongodb_password: "96Shaqayeq*b",
      mongodb_clustername: "cluster0",
      mongodb_database: "auth-demo",
    },
  };
};
