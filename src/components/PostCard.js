

export const PostCard = ({post}) => {
  return (
    <div className="card">
        <p className="title">{post.tital}</p>
        <p className="description">{post.description}</p>
        <div className="control">
            <span className="author">author</span>
            <span className="delete"><i className="bi bi-trash3"></i></span>
        </div>
    </div>
  )
}
