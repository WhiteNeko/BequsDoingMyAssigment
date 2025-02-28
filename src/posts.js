import {
    generateUsersHTML, generateCommentsHTML, generateUserAvatarHTML, generatePostHTML
} from "./generatePost.js";


const extractData = async (http) => {
    try {
        const post = await fetch(http);
        const data = await post.json();
        return await data;
    } catch (error) {
        console.log(error);
    }
}


function filterUsers(users) {
    return users.map((({id, age, username, image, email, firstName, lastName}) => ({
        id,
        age,
        username,
        image,
        email,
        firstName,
        lastName
    })))
}


(async function posts() {
    try {

        const postsData = await extractData('https://dummyjson.com/posts?limit=251');
        const usersData = await extractData('https://dummyjson.com/users?limit=251');
        const commentData = await extractData('https://dummyjson.com/comments?limit=251');
        const posts = postsData.posts
        const users = filterUsers(usersData.users)
        const comments = commentData.comments

        console.log(users)


        posts.forEach(post => {
            post.user = users.find(user => user.id === post.userId);
            post.comment = comments.filter(u => u.postId === post.id);

            generatePostHTML(post)
            post.comment.forEach(comment => {
                generateCommentsHTML(comment, post.id - 1)
            })
        });
    } catch (error) {
        console.log(error)
    }
}())