import styles from "./Header.module.scss";
import DifficultyList from "../DifficultyList/DifficultyList";

const Header = () => {
  return (
    <div className={styles.header}>
      <h2>Welcome to my OpenTDB quiz!</h2>
      <p>
        This quiz will consist of 10 questions, but there is no time limit so
        take as much time as you need!
        <br />
        <br />
        Select a difficulty below to get started:
      </p>
      <DifficultyList />
    </div>
  );
};

export default Header;
