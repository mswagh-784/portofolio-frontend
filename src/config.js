const config = {  apiUrl:
    import.meta.env.MODE === 'production'
      ? 'https://portfolio-psi-tan-53.vercel.app/' // Your Render backend URL
      : 'http://localhost:5000'
};

export default config;