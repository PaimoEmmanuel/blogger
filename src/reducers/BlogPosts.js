//Blog post reducer
const blogPostsReducer = (state = [], action) => {
    switch (action.type) {
        case "CREATE_BLOG":
            return [
                ...state,
                action.blogPost
            ];
        case "EDIT_BLOG":
            return state.map((blogPost) => {
                if (blogPost.id === action.id) {
                    return {
                        ...blogPost,
                        ...action.updates
                    };
                } else { return blogPost }
            });
        case "DELETE_BLOG":
            return state.filter(({ id }) => id != action.id)
        case "SET_BLOGPOSTS":
            return action.blogPosts

        default:
            return state;
    }
};
export default blogPostsReducer;