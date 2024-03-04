import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./PageLoading.module.css";
export default function PageLoading() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className={styles.container}>
      {cards.map((card, index) => (
        <div key={index} className={styles.content}>
          <SkeletonTheme
            baseColor="var(--baseColorSketelon)"
            highlightColor="var(--highlightColorSketelon)"
            height={600}
            borderRadius={12}
            duration={2.5}
            width={300}
          >
            <Skeleton
              height={"200px"}
              enableAnimation={true}
              count={1}
              containerClassName="flex-1"
              borderRadius={6}
            />

            {/* title  */}
            <div>
              <Skeleton
                width={"100%"}
                height={"15px"}
                count={1}
                containerClassName="flex-1"
                enableAnimation={true}
                inline={true}
                borderRadius={1}
              />
              <Skeleton
                height={"15px"}
                count={0.8}
                containerClassName="flex-1"
                enableAnimation={true}
                borderRadius={2}
              />
            </div>

            {/* description */}
            <Skeleton
              width={"100%"}
              height={"15px"}
              count={0.1}
              borderRadius={6}
              enableAnimation={true}
              inline={true}
            />
            <Skeleton
              width={"100%"}
              height={"15px"}
              count={0.1}
              borderRadius={6}
              enableAnimation={true}
              style={{ margin: "0", marginLeft: "10px" }}
            />
            {/* title  */}
            <div>
              <Skeleton
                height={"1px"}
                count={1}
                containerClassName="flex-1"
                enableAnimation={true}
                borderRadius={6}
              />
              <Skeleton
                height={"20px"}
                count={0.1}
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
                style={{ marginLeft: "10px" }}
              />
            </div>
          </SkeletonTheme>
        </div>
      ))}
    </div>
  );
}
