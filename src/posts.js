import {
    generateUsersHTML, generateCommentsHTML, generateUserAvatarHTML,
    generatePostHTML
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


(async function posts() {
    try {

        const postsData = await extractData('https://dummyjson.com/posts?limit=251');
        const usersData = await extractData('https://dummyjson.com/users?limit=251');
        const commentData = await extractData('https://dummyjson.com/comments?limit=10');
        const posts = postsData.posts
        const users = usersData.users
        const comments = commentData.comments




        users.forEach(user => {

        })

        posts.forEach(post => {
            post.user = users.find(user => user.id === post.userId);

            generatePostHTML(post)
        });

        comments.forEach(comment => {
            comment.post = posts.find(post => post.id === comment.postId)
            comment.user = comments.find(user => user.id === comment.user.id);

            generateCommentsHTML(comment)
        });



    } catch (error) {
        console.log(error)
    }
}())
