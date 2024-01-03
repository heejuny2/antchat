import styles from "./ListItem.module.css";
import ListItemLayout from "./ListItemLayout";
import React from "react";
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function ListItem(item) {
	let {data} = item.data;
	const location = useLocation()
	console.log(location)
	
	return (
		<ListItemLayout>
			<div>
				<Link to={`/article/${item.data.id}`} state = {data} >

				{/* <Link to={{pathname: `/article/${item.data.id}`, state : {data}}} > */}

					<div className={styles.title}>
						{data.title}
					</div>
				</Link>
				<div className={styles.tag}>#{data.tag}</div>
				<span className={styles.createdAt}>{data.createdAt}</span>
			</div>
		</ListItemLayout>
	);
}
