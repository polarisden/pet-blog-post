module.exports = {
  apps: [
    {
      name: 'pet-blog-api',
      cwd: './pet-blog-post-db',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'pet-blog-frontend',
      cwd: './pet-blog-post',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 5173,
      },
    },
  ],
};
