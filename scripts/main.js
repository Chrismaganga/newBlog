// Sample data for blog posts
const blogPosts = [
    {
        id: 1,
        title: "Blog Post Title 1",
        content: "This is the content of the first blog post. It provides insight into various topics and interesting facts. Enjoy reading!",
        author: "John Doe",
        date: "2024-10-10"
    },
    {
        id: 2,
        title: "Blog Post Title 2",
        content: "This is the content of the second blog post. Here, we explore more advanced topics and provide valuable information.",
        author: "Jane Smith",
        date: "2024-10-09"
    },
    // Add more posts as needed
];

// Function to load blog posts on the homepage
function loadBlogPosts() {
    const postsContainer = document.querySelector('.posts');
    postsContainer.innerHTML = ''; // Clear existing content

    blogPosts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <h2><a href="post.html?id=${post.id}">${post.title}</a></h2>
            <p>${post.content.substring(0, 100)}...</p>
            <p>By ${post.author} on ${post.date}</p>
        `;

        postsContainer.appendChild(postElement);
    });
}

// Function to load a specific blog post
function loadSinglePost(postId) {
    const post = blogPosts.find(p => p.id == postId);
    if (post) {
        document.querySelector('main').innerHTML = `
            <h1>${post.title}</h1>
            <p>${post.content}</p>
            <p>By ${post.author} on ${post.date}</p>
            <p><a href="index.html">Back to Home</a></p>
        `;
    } else {
        document.querySelector('main').innerHTML = '<h1>Post not found</h1>';
    }
}

// Check if we are on a single post page
function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postId) {
        loadSinglePost(postId);
    } else {
        loadBlogPosts();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Toggle active class to show/hide links
    });
});
// Initialize the script
document.addEventListener('DOMContentLoaded', init);
