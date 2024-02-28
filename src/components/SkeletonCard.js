import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
export const SkeletonCard = () => {
    return (
        <div className="card">
            <p className="title">{<Skeleton />}</p>
            <p className="description">{<Skeleton count={3} />}</p>
            <div className="control">
                {<Skeleton width="70px"/>}
            </div>
        </div>
    )
}
