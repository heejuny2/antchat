import styles from "./Register.module.css";
import cx from "clsx";
import { useRef, useState } from "react";
import Button from "../components/Button";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../firebase";


export default function Register() {
	const ref = useRef();
  // const now  = dayjs()
	const [inputValues, setInputValues] = useState({ userId: "", password: "", body: "" });
	async function handleSubmit(e) {
    e.preventDefault();
		if (e.target.elements.title.value === "") {
      alert("타이틀은 필수 입력입니다.");
			ref.current.focus();
		}
		const collectionRef = collection(db, "posts");
		// const payload = { title: "lg", tag: "kospi", body: "should i buy" };
		await addDoc(collectionRef, inputValues);
	}
  
	function onChange(e) {
    const { name, value } = e.target;
		setInputValues({ ...inputValues, [name]: value });
	}

	return (
		<div className={styles.container}>
			<div className={styles.avatar}></div>
			<div className={cx(styles.inputWrapper, styles.border)}>
				<form onSubmit={handleSubmit}>
					<label>아이디 (닉네임)</label>
					<input name="userId" value={inputValues.title} onChange={onChange} className={cx(styles.input, styles.border)} placeholder="아이디" ref={ref}></input>
					<label>비밀번호</label>
					<input name="password" value={inputValues.tag} onChange={onChange} className={cx(styles.input, styles.border)} placeholder="비밀번호"></input>
					<input name="password" value={inputValues.tag} onChange={onChange} className={cx(styles.input, styles.border)} placeholder="비밀번호 확인"></input>
					<div className={styles.buttonWrapper}>
						<Button
							type="submit"
							style={{
								fontSize: "14px",
								backgroundColor: "green",
								color: "white",
								border: "none",
							}}
						>
							회원가입
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
