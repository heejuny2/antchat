import styles from "./CreateIssue.module.css";
import cx from "clsx";
import { useRef, useState } from "react";
import Button from "../components/Button";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../firebase";
import dayjs from "dayjs";

export default function CreateIssue() {
	const ref = useRef();
  const now  = (dayjs().format('YYYY/MM/DD').toString())
	const [inputValues, setInputValues] = useState({ title: "", tag: "", body: "", createdAt:now });
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
					<input name="title" value={inputValues.title} onChange={onChange} className={cx(styles.input, styles.border)} placeholder="제목" ref={ref}></input>
					<input name="tag" value={inputValues.tag} onChange={onChange} className={cx(styles.input, styles.border)} placeholder="테그"></input>
					<textarea name="body" value={inputValues.body} onChange={onChange} className={cx(styles.input, styles.textarea, styles.border)} placeholder=" 게시물 내용을 입력하세요"></textarea>
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
							게시물 작성
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
