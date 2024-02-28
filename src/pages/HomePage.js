import { useEffect, useState } from "react"
import { PostCard } from "../components"
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firbase/config";

export const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const postsRef = collection(db, "posts");
    useEffect(() => {
        async function getPosts() {

            const data = await getDocs(postsRef);
            setPosts(data.docs.map((document) => (
                { ...document.data(), id: document.id }
            )))
        }
        getPosts();
        console.log("--")

    }, []);
    return (
        <section>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </section>
    )
}
