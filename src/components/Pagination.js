import styles from "./Pagination.module.css";

import cx from "clsx";
export default function Pagination({ currentPage, maxPage, onClickPageButton}) {
	return (
		<>
			<div>
				<button className={cx(styles.button, styles.blueButton, {[styles.disabled]: currentPage === 1})}>{"< Previous"}</button>
        {new Array(maxPage).fill(null).map((_, i) => (
          <PageButton number={i+1} onClick={onClickPageButton} selected={i+1 === currentPage} key={i+1}/>
        ))}
				<button className={cx(styles.button, styles.blueButton, {[styles.disabled]: currentPage === maxPage})}>{"Next >"}</button>
			</div>
		</>
	);
}

function PageButton({ onClick, number, selected }) {
	return (
		<button className={cx(styles.button, { [styles.selected]: selected })}
     onClick={() => onClick(number)}>
			{number}
		</button>
	);
}
