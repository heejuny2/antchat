import styles from "./ListItem.module.css";
import ListItemLayout from './ListItemLayout'
import dayjs from "dayjs";

export default function ListItem(item, onClickTitle) {
  const date = item.created_at;
  var relativeTime = require('dayjs/plugin/relativeTime')
  dayjs.extend(relativeTime)
	let {data} = item.data
	console.log(data)

	return (
		<ListItemLayout>
				<div>
					<div role="button" onClick={onClickTitle} className={styles.title}>
            {data.title}
					</div>
					<div className={styles.description}>
						{data.tag}
          </div>
				</div>
		</ListItemLayout>
	);
}
