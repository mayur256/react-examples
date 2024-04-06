// top level imports
import { ReactElement, useEffect } from "react";

// React Redux
import { useDispatch, useSelector } from "react-redux";

// Redux actions
import { extractPosts, fetchPosts } from "../../store/reducers/post.slice";
import { AppDispatch } from "../../store";

export function PostsList(): ReactElement {

    const dispatch = useDispatch<AppDispatch>();

    const posts = useSelector(extractPosts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    return (
        <>
            {posts.map(post => (
                <div className="container mt-1" key={post.id}>
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}