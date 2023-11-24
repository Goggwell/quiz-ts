import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import styles from "./Container.module.scss";

const Container = (props: any) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { children } = props;

  // wait for component to mount
  useEffect(() => setMounted(true), []);

  return (
    <div className={styles.container}>
      <div className={styles.container__page}>
        <nav className={styles.container__nav}>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className={styles.theme_toggle}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {/** wait until mounted before allowing theme rendering to avoid hydration mismatch */}
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className={styles.theme_toggle__icon}
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
          <h3 className={styles.logo}>OpenTDB Quiz</h3>
        </nav>
        <main className={styles.container__content}>{children}</main>
      </div>
    </div>
  );
};

export default Container;
