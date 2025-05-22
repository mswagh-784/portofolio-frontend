const config = {
  apiUrl:
    import.meta.env.MODE === 'production'
      ? 'https://portfolio-backend-ai05.onrender.com' // Updated to your deployed backend URL
      : 'http://localhost:5000'
};

export default config;