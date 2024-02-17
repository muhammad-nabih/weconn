import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function SkeletonLoading() {
  return (
    <div className="App">
      <SkeletonTheme baseColor="#63cdb4" highlightColor="#4f75dc" height={600}>
        <p>
          <Skeleton width={200} height={200} count={3} enableAnimation={true} />
        </p>
      </SkeletonTheme>
    </div>
  );
}
