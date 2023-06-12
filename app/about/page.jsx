import Button from '@/components/button/Button';
import Image from 'next/image';
import styles from './about.module.css';

export const metadata = {
	title: 'About Us',
	description: 'This is about us for me',
};

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					src='https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					fill={true}
					alt='/'
					className={styles.img}
				/>
				<div className={styles.imgText}>
					<h1 className={styles.imgTitle}>Digital Storytellers</h1>
					<h2 className={styles.imgDesc}>
						Handcrafting award winning digital experiences
					</h2>
				</div>
			</div>
			<div className={styles.textContainer}>
				<div className={styles.item}>
					<h1>Who Are We?</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dolorum mollitia veritatis inventore, error officiis
						natus magnam laboriosam, quidem odit aliquam saepe eos
						quod asperiores impedit ea. Pariatur, facilis unde
						maxime eveniet porro placeat? Et nulla ea saepe fugiat
						fugit debitis illum recusandae quam explicabo eos ipsum
						atque deserunt omnis quos, placeat ipsam similique!
						Placeat, recusandae provident
						<br />
						<br />
						harum minima quibusdam ut itaque quo nesciunt doloribus,
						rem architecto! Eligendi facere, tenetur non similique
						quo quod exercitationem dolore dolorum voluptatibus
						rerum nobis veniam consequatur commodi animi. Quibusdam
						asperiores saepe sit ipsum harum itaque. Debitis
						doloribus rem placeat beatae, rerum illum perferendis
						magni tenetur.
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.title}>What We Do?</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ducimus quae dolor, optio voluptatibus magnam iure esse
						tempora beatae, a suscipit eos. Animi quibusdam cum
						omnis officiis voluptatum quo ea eveniet? Lorem ipsum
						dolor sit amet consectetur adipisicing elit. - Creative
						Illustrations
						<br />
						<br /> - Dymaic Websites
						<br />
						<br /> - Fast and Handy
						<br />
						<br /> - Mobile Apps
					</p>
					<Button url='/contact' text='Contact' />
				</div>
			</div>
		</div>
	);
};

export default About;
