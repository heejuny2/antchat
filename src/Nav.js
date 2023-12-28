import styles from "./Nav.module.css";
import Button from "./components/Button";
import { Link } from "react-router-dom";
export default function Nav() {
	return (
		<div className={styles.nav}>
			<Link className={styles.logo} to={"/"}>
				<div className={styles.logo}>Ant_Chat</div>
			</Link>
			<div className={styles.userLogin}>
				<Button
					style={{
						fontSize: "14px",
						color: "black",
					}}
				>
					로그인
				</Button>
				<Space></Space>
				<Button
					style={{
						fontSize: "14px",
						color: "black",
					}}
				>
					회원가입
				</Button>
			</div>
		</div>
	);
}

function Space() {
	return <div className={styles.space}></div>;
}
