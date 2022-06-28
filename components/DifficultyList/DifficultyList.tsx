import styles from "./DifficultyList.module.scss";
import DifficultyButton from "../DifficultyButton/DifficultyButton";
import { Difficulty } from "../../pages/api/api";

const DifficultyList = () => {
  return (
    <div className={styles.difficulty_list}>
      {Object.keys(Difficulty).map((key) => {
        return <DifficultyButton key={key} difficulty={Difficulty[key]} />;
      })}
    </div>
  );
};

export default DifficultyList;
