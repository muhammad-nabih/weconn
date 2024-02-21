import styles from "./SketelonLoading.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function SkeletonLoading() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <SkeletonTheme
          baseColor="var(--baseColorSketelon)"
          highlightColor="var(--highlightColorSketelon)"
          height={600}
          borderRadius={12}
          duration={2.5}
        >
          <div className={styles.image}>
            <Skeleton
              width={"100%"}
              height={"300px"}
              count={1}
              containerClassName="flex-1"
              enableAnimation={true}
            />
          </div>

          {/* title  */}
          <div className={styles.title}>
            <Skeleton
              width={"160%"}
              height={"20px"}
              count={1}
              containerClassName="flex-1"
              enableAnimation={true}
              inline={true}
              borderRadius={6}
            />
            <Skeleton
              height={"20px"}
              count={0.4}
              containerClassName="flex-1"
              enableAnimation={true}
              borderRadius={6}
              style={{ marginLeft: "60%" }}
            />
          </div>

          {/* description */}
          <Skeleton
            width={"100%"}
            height={"20px"}
            count={0.1}
            borderRadius={6}
            enableAnimation={true}
          />
          {/* title  */}
          <div>
            <Skeleton
              height={"20px"}
              count={.1}
              containerClassName="flex-1"
              enableAnimation={true}
              inline={true}
              borderRadius={6}

            />
            <Skeleton
              height={"20px"}
              count={0.2}
              containerClassName="flex-1"
              enableAnimation={true}
              borderRadius={6}
              style={{marginLeft:"10px"}}
             
            />
          </div>
        </SkeletonTheme>
      </div>
    </div>
  );
}
