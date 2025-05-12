const config = {
  apiUrl:
    import.meta.env.MODE === 'production'
      ? 'https://your-render-backend-url.onrender.com' // Replace with your deployed backend URL
      : 'http://localhost:5000'
};

export default config;