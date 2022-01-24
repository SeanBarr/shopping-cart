module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '610c328d68ada1557ee2982f2d4f184b'),
  },
});
