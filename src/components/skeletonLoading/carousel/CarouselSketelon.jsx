import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./Carousel.module.css";
export default function CarouselSketelon() {
  const boxes = [1, 2, 3, 4,5,6];
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
          {boxes.map((box, i) => {
            return (
              <div key={i} className={styles.box}>
                <div className={styles.image}>
                  <Skeleton
                    width={"100%"}
                    height={"220px"}
                    count={1}
                    containerClassName="flex-1"
                    enableAnimation={true}
                  />
                </div>

                {/* title  */}
                <div className={styles.title}>
                  <Skeleton
                    width={"100%"}
                    height={"20px"}
                    borderRadius={"3px"}
                    count={0.8}
                    containerClassName="flex-1"
                    enableAnimation={true}
                    inline={true}
                  />
                </div>

                {/* title  */}
                <div>
                  <Skeleton
                    height={"20px"}
                    count={0.2}
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
                <Skeleton
                  width={"100%"}
                  height={"1px"}
                  count={1}
                  borderRadius={6}
                  enableAnimation={true}
                />
                {/* description */}
                <Skeleton
                  width={"100%"}
                  height={"20px"}
                  count={0.1}
                  borderRadius={6}
                  enableAnimation={true}
                  inline={true}
                />
                <Skeleton
                  width={"100%"}
                  height={"20px"}
                  count={0.1}
                  borderRadius={6}
                  enableAnimation={true}
                  style={{ marginLeft: "10px" }}
                />
              </div>
            );
          })}
        </SkeletonTheme>
      </div>
    </div>
  );
}
