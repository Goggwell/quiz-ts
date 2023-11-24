import styles from "./DifficultyList.module.scss";
import DifficultyButton from "../DifficultyButton/DifficultyButton";
import { Difficulty } from "../../pages/api/api";

const DifficultyList = () => {
  return (
    <div className={styles.difficulty_list}>
      {/** Mapping difficulties to DifficultyButton component, where the 'difficulty' prop will store the difficulty at the 'key' index */}
      {Object.keys(Difficulty).map((key) => {
        return <DifficultyButton key={key} difficulty={key.toLowerCase()} />;
      })}
    </div>
  );
};

export default DifficultyList;
