import Link from 'next/link';
import { useState, useEffect } from 'react';


function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://192.168.1.19:1337/api/blogs');
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      const data = await response.json();
      setBlogs(data.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Loading blogs...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', color: 'red', marginTop: '2rem' }}>Error: {error}</div>;
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Latest Blog Posts</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
        {blogs.map((blog) => (
          <div key={blog.id} style={{
            width: '300px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{blog.attributes.title}</h2>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>
              {new Date(blog.attributes.createdAt).toLocaleDateString()}
            </p>
            <p style={{ marginBottom: '1rem' }}>{blog.attributes.content}</p>
            <Link href={`/blog/${blog.id}`} style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px'
            }}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;