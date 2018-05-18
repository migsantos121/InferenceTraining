// config file.
module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  secrets: {
    jwtUser: process.env.JWT_USER || 'podiesJobBoard',
  },
  sparkPost: '3fcfc8abcb7966bd5ae01ede3779810a760c949f' //podies.io
};