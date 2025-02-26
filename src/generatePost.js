export const generateUsersHTML = (userData) => {
    const posts = document.getElementById('posts')

    const post = document.createElement('section');
    post.className = 'post';
    posts.appendChild(post);

    const firstName = document.createElement('p');
    firstName.className = 'firstName';
    firstName.textContent = userData.firstName
    post.appendChild(firstName);

    const lastName = document.createElement('p');
    lastName.className = 'lastName';
    lastName.textContent = userData.lastName
    post.appendChild(lastName);

    const age = document.createElement('p');
    age.className = 'age';
    age.textContent = "age: " + userData.age
    post.appendChild(age);

    const username = document.createElement('p');
    username.className = 'username';
    username.textContent = userData.username
    post.appendChild(username);

    const email = document.createElement('p');
    email.className = 'email';
    email.textContent = userData.email
    post.appendChild(email);

    const image = document.createElement('img');
    image.className = 'image';
    image.src = userData.image
    post.appendChild(image);
}

export const generateUserAvatarHTML = (post, userData) => {
    const user = document.createElement('p');
    user.className = 'user';
    post.appendChild(user);

    const userName = document.createElement('p');
    userName.className = 'userName';
    userName.textContent = userData.username
    user.appendChild(userName);

    const userImageLink = document.createElement('a');
    userImageLink.className = 'ImageLink';
    userImageLink.href = userData.image
    user.appendChild(userImageLink);

    const userImage = document.createElement('img');
    userImage.className = 'image';
    userImage.src = userData.image
    userImageLink.appendChild(userImage);
}


export const generateCommentsHTML = (commentData) => {

    const comments = document.getElementsByClassName('comments');
    console.log(comments);

    const body = document.createElement('p');
    body.className = 'body';
    body.textContent = commentData.body
    comments.appendChild(body);

    const likes = document.createElement('p');
    likes.className = 'likes';
    likes.textContent = "likes: " + commentData.likes
    comments.appendChild(likes);

    const user = document.createElement('div');
    user.className = 'user';
    comments.appendChild(user);

    const username = document.createElement('p');
    username.className = 'username';
    username.textContent = commentData.user.username
    user.appendChild(username);
}

export const generatePostHTML = (postData) => {
    const posts = document.getElementById('posts')

    const post = document.createElement('section');
    post.className = 'post';
    posts.appendChild(post);

    generateUserAvatarHTML(post, postData.user);

    // generateCommentsHTML(post, commentData);

    const title = document.createElement('h3');
    title.className = 'title';
    title.textContent = postData.title;
    post.appendChild(title);

    const categories = document.createElement('p');
    categories.className = 'categories';
    categories.textContent = 'Categories: ' + postData.tags;
    post.appendChild(categories);

    const paragraph = document.createElement('p');
    paragraph.className = 'paragraph';
    paragraph.textContent = postData.body;
    post.appendChild(paragraph);

    const metrics = document.createElement('div');
    metrics.className = 'metrics';
    post.appendChild(metrics)

    const views = document.createElement('p');
    views.className = 'views';
    views.textContent = "Views: " + postData.views;
    metrics.appendChild(views);

    const likes = document.createElement('p');
    likes.className = 'likes';
    likes.textContent = "likes: " + postData.reactions.likes;
    metrics.appendChild(likes);

    const dislikes = document.createElement('p');
    dislikes.className = 'dislikes';
    dislikes.textContent = "dislikes: " + postData.reactions.dislikes;
    metrics.appendChild(dislikes);


    const comments = document.createElement('div');
    comments.className = 'comments';
    post.appendChild(comments)

    const comment = document.createElement('a');
    comment.className = 'button-comment';
    comment.setAttribute('href', 'comments')
    comment.textContent = 'Comments';
    comments.appendChild(comment);
}


