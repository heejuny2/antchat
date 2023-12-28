import styles from "./ListContainer.module.css";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import { useState, useEffect } from "react";
import axios from "axios";
import db from './firebase'
import ListItemLayout from "./components/ListItemLayout";
import Pagination from "./components/Pagination";
import { useSearchParams } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";

export default function ListContainer() {
	
	const [inputValue, setInputValue] = useState("");
	const [list, setList] = useState([]);
	// const [page, setPage] = useState(1);
	const MAX_PAGE = 5;
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') ?? '1', 10)
	// const MAX_PAGE = getData().totalCount// = ;

	async function getData(pageParam) {
		const { data } = await axios.get("https://api.github.com/repos/facebook/react/issues", {params: {page:pageParam}});
		setList(data);
    // console.log(data)
	}
	useEffect(() => {
		getData(page);
		onSnapshot(collection(db, 'posts'), (snapshot) =>{
			console.log(snapshot.docs.map((doc)=> doc.data()))
		})
	}, [page]);

	return (
		<>
			<div className={styles.listContainer}>
				<div className={styles.topSection}>
					<input className={styles.input} value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="#테마 또는 제목을 검색하세요"></input>
					<Button
						style={{
							fontSize: "14px",
							color: "black",
						}}
					>
						Search
					</Button>
				</div>
				<div className={styles.container}>
					<ListItemLayout className={styles.listFilter}>
						<div className={styles.filterLists}>
							<span>Post</span>
							<span>Author</span>
							<span>Tags</span>
							<span>Date</span>
						</div>
					</ListItemLayout>
					{list.map((item) => (
						<ListItem data={item} key={item.id}/>
					))}
				</div>
			</div>
			<div className={styles.paginationContainer}>
				<Pagination maxPage={MAX_PAGE} currentPage={page} onClickPageButton={(pageNumber) => setSearchParams({page: pageNumber})} />
			</div>
		</>
	);
}
