import { BookText, Baby } from "lucide-react";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <div className={`${styles.navbar} w-screen flex bg-slate-300`}>
      <div className={`${styles.start} flex`}>
        <div className="inline-block">
          <BookText className={`${styles.logo}`} />
        </div>
      </div>
      <div className={`${styles.profile} flex`}>
        <div className="inline-block">
          <Baby className={`${styles["profile-logo"]}`} />
        </div>
      </div>
    </div>
  );
}
