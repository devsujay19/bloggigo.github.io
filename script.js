// Array to store blog posts
var posts = [];

// Function to display blog posts
function displayPosts() {
    var postList = document.getElementById("post-list");
    postList.innerHTML = "";

    // Loop through posts array and create HTML elements for each post
    for (var i = 0; i < posts.length; i++) {
        var post = posts[i];

        var postElement = document.createElement("li");
        postElement.classList.add("post");

        var titleElement = document.createElement("h3");
        titleElement.textContent = post.title;

        var contentElement = document.createElement("p");
        contentElement.textContent = post.content;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);

        postList.appendChild(postElement);
    }
}

// Function to handle form submission
function createPost(event) {
    event.preventDefault();

    var titleInput = document.getElementById("post-title");
    var contentInput = document.getElementById("post-content");

    var newPost = {
        title: titleInput.value,
        content: contentInput.value
    };

    posts.push(newPost);
    displayPosts();

    titleInput.value = "";
    contentInput.value = "";
}

// Event listener for form submission
var postForm = document.getElementById("post-form");
postForm.addEventListener("submit", createPost);
