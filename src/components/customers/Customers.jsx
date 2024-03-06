import styles from "./Customers.module.css";
import HorizontalTab from "./HorizontalTab";

function Customers() {
  const data = [
    {
      title: (
        <div className={styles.customerContainer}>
          <div>
            <img src="/jorge.png" alt="jorge" />
          </div>
          <div>
            <h4> Jorge Robertson </h4>
            <p> CS at Google </p>
          </div>
        </div>
      ),
      content: (
        <div className={styles.contentContainer}>
          <h3> Why customers love working with us? </h3>
          <p>
            &ldquo; This tool has been a game-changer for our team. It&#39;s
            really helped us uncover blind spots and make our 1-on-1s more
            efficient. The team is loving it!&rdquo;
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className={styles.customerContainer}>
          <div>
            <img src="/franc.png" alt="franc" />
          </div>
          <div>
            <h4> Francisco Bell </h4>
            <p>Designer at Microsoft </p>
          </div>
        </div>
      ),
      content: (
        <div className={styles.contentContainer}>
          <h3> Why customers love working with us? </h3>
          <p>
            &ldquo; It&apos;s amazing what has helped me learn about my team. I
            don&apos;t worry about blindspots anymore, and 1-on-1s have never
            been more productive. The team loves it.&rdquo;
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className={styles.customerContainer}>
          <div>
            <img src="/beth.png" alt="beth" />
          </div>
          <div>
            <h4>Beth Fox </h4>
            <p>Developer in Airbnb </p>
          </div>
        </div>
      ),
      content: (
        <div className={styles.contentContainer}>
          <h3> Why customers love working with us? </h3>
          <p>
            &ldquo; This tool has been a revelation for our team. It&apos;s
            streamlined our processes,and supercharged our 1-on-1. The feedback
            from the team has been overwhelmingly positive&rdquo;
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <HorizontalTab tabs={data} />
    </div>
  );
}

export default Customers;
