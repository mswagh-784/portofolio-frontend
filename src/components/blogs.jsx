import React from 'react';
import './css/blog.css';

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="section-title">Blog</h2>
        <div className="blog-grid">
          <div className="blog-post">
            <h3>Blog Post Title</h3>
            <p>Short description of the blog post.</p>
            <a href="#">Read more</a>
          </div>
          <div className="blog-post">
            <h3>Blog Post Title</h3>
            <p>Short description of the blog post.</p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;