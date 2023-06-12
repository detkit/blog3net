import Button from '@/components/button/Button';
import Image from 'next/image';
import styles from './contact.module.css';

export const metadata = {
	title: 'Contact Infomation',
	description: 'This is infomation',
};

const Contact = () => {
	return (
		<>
			<h1 className={styles.title}>Let's Keep in Touch</h1>
			<div className={styles.content}>
				<div className={styles.imgContainer}>
					<Image
						src='/contact.png'
						alt='contact'
						fill={true}
						className={styles.img}
					/>
				</div>
				<div className={styles.form}>
					<input
						type='text'
						placeholder='Name'
						className={styles.input}
					/>
					<input
						type='email'
						placeholder='Email'
						className={styles.input}
					/>
					<textarea
						className={styles.textArea}
						placeholder='message'
						cols='30'
						rows='10'
					></textarea>
					<Button url='#' text='Send' />
				</div>
			</div>
		</>
	);
};

export default Contact;
