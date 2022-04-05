module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a1c33079b15aa916b40e6bb29e731ed6'),
  },
});
