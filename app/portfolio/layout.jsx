import styles from './portfolio.module.css';

export const metadata = {
	title: 'Portfolio Works',
	description: 'This is works portfolio',
};

const Layout = ({ children }) => {
	return (
		<div>
			<h1 className={styles.mainTitle}>Our Works</h1>
			{children}
		</div>
	);
};

export default Layout;
