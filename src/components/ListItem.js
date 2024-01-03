import styles from "./ListItem.module.css";
import ListItemLayout from './ListItemLayout'


export default function ListItem(item, onClickTitle) {

	let {data} = item.data

	return (
		<ListItemLayout>
				<div>
					<div role="button" onClick={onClickTitle} className={styles.title}>
            {data.title}
					</div>
					<div className={styles.tag}>
						#{data.tag}
          </div>
					<span className={styles.createdAt}>
						{data.createdAt}
					</span>
				</div>
		</ListItemLayout>
	);
}
