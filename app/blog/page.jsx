import Image from 'next/image';
import Link from 'next/link';
import styles from './blog.module.css';

export const metadata = {
	title: 'Blog',
	description: 'This is blog',
};

async function getData() {
	const res = await fetch('http://localhost:3000/api/posts', {
		cache: 'no-store',
	});
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

const Blog = async () => {
	const data = await getData();

	return (
		<>
			{data.map((item) => (
				<Link
					href={`/blog/${item._id}`}
					className={styles.container}
					key={item.id}
				>
					<div className={styles.imgContainer}>
						<Image
							width={400}
							height={250}
							className={styles.img}
							src={item.image}
							alt=''
						/>
					</div>
					<div className={styles.content}>
						<h1 className={styles.title}>{item.title}</h1>
						<p className={styles.desc}>{item.description}</p>
					</div>
				</Link>
			))}
		</>
	);
};

export default Blog;
