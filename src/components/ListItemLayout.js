import styles from "./ListItemLayout.module.css";
import cx from 'clsx';

export default function ListItemLayout({children, className}) {
	return (
			<div className={cx(styles.wrapper, className)}>
        {children}
			</div>

	);
}
