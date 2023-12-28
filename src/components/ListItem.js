import styles from "./ListItem.module.css";
import ListItemLayout from './ListItemLayout'
import dayjs from "dayjs";

export default function ListItem(data, onClickTitle) {
  const date = data.data.created_at;
  var relativeTime = require('dayjs/plugin/relativeTime')
  dayjs.extend(relativeTime)

	return (
		<ListItemLayout>
				<div>
					<div role="button" onClick={onClickTitle} className={styles.title}>
            {data.data.title}
					</div>
					<div className={styles.description}>
            #{data.data.number} {dayjs(date).fromNow()} by {data.data.user.login}
          </div>
				</div>
		</ListItemLayout>
	);
}
