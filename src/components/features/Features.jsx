import FeaturesBlock from "./FeaturesBlock";
import styles from "./Features.module.css";
import { useLayoutEffect, useState } from "react";
function Features() {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 500);
    };
    checkScreenWidth();
  }, []);

  return (
    <>
      <h3 className={styles.title}>Make your work easier</h3>
      <div className={styles.container}>
        <FeaturesBlock
          srcImg={"../../../src/img/icon1.png"}
          title={"Team Surveys & Reports"}
        >
          Short, anonymous surveys track your <br />
          team’s needs weekly so you can focus.
        </FeaturesBlock>
        <FeaturesBlock
          srcImg={"../../../src/img/icon2.png"}
          title={"Collaborative 1:1 "}
        >
          Build relationships by planning <br />
          1-on-1s and start meetings.
        </FeaturesBlock>

        <FeaturesBlock
          srcImg={"../../../src/img/icon3.png"}
          title={"Learning Center"}
        >
          Quickly get solutions tailored to your <br /> personal challenges from
          the manager.
        </FeaturesBlock>

        {isMobile ? (
          <a
            className={styles.mobile_button}
            onClick={() => setIsMobile(!isMobile)}
          >
            View more benefits
          </a>
        ) : (
          <>
            <FeaturesBlock
              srcImg={"../../../src/img/icon4.png"}
              title={"Anonymous Messaging"}
            >
              Develop trust in a safe channel for <br /> important
              conversations.{" "}
            </FeaturesBlock>
            <FeaturesBlock
              srcImg={"../../../src/img/icon5.png"}
              title={"Conversation Engine"}
            >
              Communicate confidently with <br /> recommended talking points.{" "}
            </FeaturesBlock>
            <FeaturesBlock
              srcImg={"../../../src/img/icon6.png"}
              title={"Exclusives Manager"}
            >
              Access manager tips, activities and <br /> best practices from our
              team of experts.
            </FeaturesBlock>
            <a
              className={styles.mobile_button}
              onClick={() => setIsMobile(!isMobile)}
            >
              Show Less
            </a>
          </>
        )}
      </div>
    </>
  );
}

export default Features;
