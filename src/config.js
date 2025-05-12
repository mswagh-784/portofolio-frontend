const config = {
  apiUrl:
    import.meta.env.MODE === 'production'
      ? 'https://portfolio-backend-beta-lemon.vercel.app' // Updated to your deployed backend URL
      : 'http://localhost:5000'
};

export default config;