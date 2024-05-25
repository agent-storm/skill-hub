import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "../components/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>What's in it for you</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">->Collaboration</span>
            <span className="chip">->Competittion among peers</span>
            <span className="chip">->Access to CalSet</span>
            <span className="chip">->User Friendly Access</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};      