// top level imports
import { ReactElement, useEffect } from "react";

// React Redux
import { useDispatch, useSelector } from "react-redux";

// Redux actions
import { extractPosts, fetchPosts, deletePost } from "../../store/reducers/post.slice";
import { AppDispatch } from "../../store";


// Component definition
export function PostsList(): ReactElement {

    const dispatch = useDispatch<AppDispatch>();

    const posts = useSelector(extractPosts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    // main renderer
    return (
        <>
            {posts.map(post => (
                <div
                    data-testid="post"
                    className="container mt-1"
                    key={post.id}
                >
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.description}</p>
                        </div>

                        <div className="card-footer d-flex justify-content-end">
                            <button
                                onClick={() => dispatch(deletePost(post))}
                                className="btn btn-danger"
                                data-testid="delete-post-button"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}