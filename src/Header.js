import styles from "./Header.module.css";
import Button from "./components/Button";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className={styles.header}>
			<Link className={styles.link} to="/new">
				<Button
					style={{
						fontSize: "14px",
						backgroundColor: "green",
						color: "white",
						border: "none",
					}}
				>
					게시물 작성
				</Button>
			</Link>
		</div>
	);
}
