const config = {
  apiUrl:
    import.meta.env.MODE === 'production'
      ? 'https://portfolio-backend-sage-seven.vercel.app/' // Updated to your deployed backend URL
      : 'http://localhost:5000'
};

export default config;