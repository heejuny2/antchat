import styles from "./Article.module.css";
import cx from "clsx";
import React  from "react";
import { useLocation } from "react-router-dom";

export default function Article() {

  const location = useLocation()
  let data = location.state

	return (
		<div className={styles.container}>
			<div className={cx(styles.inputWrapper, styles.border)}>
				<div  className={cx(styles.title, styles.border, styles.title)}>
          {data.title}
          <span className={styles.createdAt}>
            작성일: {data.createdAt}
          </span>
        </div>
				<div className={cx(styles.border, styles.tagbox)}>
          
          관련 테마: 
          <span className={styles.tag}>
          #{data.tag}
          </span>
        </div>
				<div className={cx(styles.body, styles.border)}>
          {data.body}
        </div>

			</div>
		</div>
	);
}
