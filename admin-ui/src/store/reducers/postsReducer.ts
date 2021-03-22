import {
    GET_POSTS_LIST_REQUEST,
    GET_POSTS_LIST_SUCCESS,
    GET_POSTS_LIST_FAIL
} from '../constants/postsConstants'

type Post = {
    title: string
    description: string
}

interface PostListAction {
    type: string
    payload: Post[] | string
}

export const postsListReducer = (state = { posts: [] }, action: PostListAction) => {
    switch (action.type) {
        case GET_POSTS_LIST_REQUEST:
            return { loading: true }

        case GET_POSTS_LIST_SUCCESS:
            return {
                loading: false,
                posts: action.payload
            }

        case GET_POSTS_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}