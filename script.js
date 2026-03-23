// Inside DOMContentLoaded
const loginForm = document.querySelector('#loginForm');
const loginMessage = document.querySelector('#loginMessage');

if (loginForm && loginMessage) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.querySelector('#username')?.value;
        const password = document.querySelector('#password')?.value;

        if (username === 'admin' && password === 'password123') {
            loginMessage.textContent = 'Login successful!';
            loginMessage.style.color = 'green';
        } else {
            loginMessage.textContent = 'Invalid username or password.';
            loginMessage.style.color = 'red';
        }
    });
}
function filterPosts() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const container = document.getElementById('postsContainer');
    const posts = container.getElementsByClassName('blog-post');

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const title = post.getElementsByTagName('h2')[0];
        const content = post.getElementsByTagName('p')[0];

        const titleText = title.textContent.toLowerCase();
        const contentText = content.textContent.toLowerCase();

        if (titleText.includes(filter) || contentText.includes(filter)) {
            post.style.display = '';
        } else {
            post.style.display = 'none';
        }
    }
}
// Check login status
if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'login.html';
}
function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
}


