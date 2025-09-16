'use client';

import Link from 'next/link';
import './BlogSection.css';
import React, { useEffect, useState } from 'react';

const BlogSection = ({ page }) => {
    const baseUrl = 'https://backblog.kusheldigi.com';
    const allowedDomain = 'kusheldigi.com';
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    const fetchAllBlog = async () => {
        try {
            const response = await fetch(`${baseUrl}/api/v1/auth/allcatBlogs`);
            const data = await response.json();

            if (response.ok && data?.data) {
                // All categories ke saare blogs ikattha kar lo
                const allBlogs = data.data.flatMap(category => category.blogs || []);

                // Domain ke hisaab se filter karo
                const domainFiltered = allBlogs.filter(
                    (blog) =>
                        Array.isArray(blog.domain) && blog.domain.includes(allowedDomain)
                );

                // Duplicates hatao
                const uniqueBlogs = [];
                const blogIds = new Set();
                domainFiltered.forEach((blog) => {
                    if (!blogIds.has(blog._id)) {
                        blogIds.add(blog._id);
                        uniqueBlogs.push(blog);
                    }
                });

                // Latest date ke hisaab se sort karo
                uniqueBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));

                // Sirf latest 1 le lo
                setFilteredBlogs(uniqueBlogs.slice(0, 3));
            } else {
                console.error('Failed to fetch categories:', data?.message);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        fetchAllBlog();
    }, []);


    return (
        <div className="blog-section-outer-container">
            <div className="blog-section-inner-container">
                <div className="blog-section-header">
                    <div className="blog-section-left-div">
                        <h3 className="primary-heading">Our Insights</h3>
                        <p className="secondary-heading">
                            Want to work with some of the best global talent and build software used by all the companies you know and love?
                        </p>
                    </div>
                    <Link href="/blog">
                        <button className="viewAllBtnKcom">View More</button>
                    </Link>
                </div>

                <div className="blog-section-blogs-wrapper">
                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.map((blog, index) => (
                            <Link key={index} href={`/blog/${blog?.slug}`} className="blog-section-blog">
                                <img src={blog.images?.[0]} alt="blogs" className="blog-section-blog-image" />

                                <div className="blog-section-content">
                                    <h3 className="blog-section-blog-title">{blog.title}</h3>
                                    <p className="blog-section-blog-desc">{blog.subdescription}</p>

                                    <div className="blog-section-author-details">
                                        <div className="blog-section-blog-autorname">
                                            <span className="blog-section-author">{blog.author}</span>
                                            <span className="blog-section-date">
                                                {new Date(blog.date).toLocaleDateString('en-GB', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p>No blogs available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
