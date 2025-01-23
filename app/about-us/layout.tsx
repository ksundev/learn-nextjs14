import styles from "../../styles/about-us.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <div className={styles.bottomLayout}>
        Made by&nbsp;
        <a
          className={styles.githubLink}
          href="https://github.com/ksundev"
          target="_blank"
        >
          @ksundev
        </a>
        &nbsp;with &copy;Next.js v.14
      </div>
    </div>
  );
}
