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
        const commentData = await extractData('https://dummyjson.com/comments?limit=251');

        const posts = postsData.posts
        const users = usersData.users
        const comments = commentData.comments

        posts.forEach(post => {
            post.user = users.find(user => user.id === post.userId);
            
            console.log(comments.length)

            // declare empty array for all the fitting comments
            const commentsForPost = [];

            let index = 0;

            // iterate all the comments
            for (let i = 0; i < comments.length; i++) {
                console.log("comments[i].id == " + comments[i].postId + " and post.id == " + post.id)

                // if the comment's postId matches the current post's id
                if (comments[i].postId === post.id) {
                    // If it matches, put it to the array of comments
                    commentsForPost[index] = comments[i];
                }

                index++;
            }
            
            console.log(commentsForPost)
            
            // push current post with all the comments to post together
            generatePostHTML(post,  commentsForPost)
        });
    } catch (error) {
        console.log(error)
    }
}())
