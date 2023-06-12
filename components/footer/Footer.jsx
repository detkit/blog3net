import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
	return (
		<div className={styles.container}>
			<p>
				&copy;2023 <span className={styles.nab}>Quang</span>. All Rights
				reserved.
			</p>
			<div className={styles.social}>
				<Link href='https://facebook.com'>
					<Image
						src='/social1.png'
						width={20}
						height={20}
						className={styles.icon}
						alt='facebook'
					/>
				</Link>
				<Link href='https://www.instagram.com/quan_titaline/'>
					<Image
						src='/social2.png'
						width={20}
						height={20}
						className={styles.icon}
						alt='instagram'
					/>
				</Link>
				<Link href='https://twitter.com/Dang_Quagn'>
					<Image
						src='/social3.png'
						width={20}
						height={20}
						className={styles.icon}
						alt='twitter'
					/>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
