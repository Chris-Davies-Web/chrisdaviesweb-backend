module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fcce4823b63d4f33dd8b37fc9a36a74b'),
  },
});
