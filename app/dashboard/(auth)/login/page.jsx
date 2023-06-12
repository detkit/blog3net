'use client';

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './login.module.css';

const Login = ({ url }) => {
	const router = useRouter();
	const session = useSession();
	const params = useSearchParams();
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	useEffect(() => {
		setError(params.get('error'));
		setSuccess(params.get('success'));
	}, [params]);

	if (session.status === 'loading') {
		return <p>Loading...</p>;
	}

	if (session.status === 'authenticated') {
		router?.push('/dashboard');
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;

		signIn('credentials', { email, password });
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				{success ? success : 'Welcome Back'}
			</h1>
			<h2 className={styles.subtitle}>
				Please sign in to see the dashboard.
			</h2>
			{error && error}
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					type='email'
					placeholder='Email'
					className={styles.input}
					required
				/>
				<input
					type='password'
					placeholder='Password'
					className={styles.input}
					required
				/>
				<button className={styles.btn}>Login</button>
			</form>
			<button
				onClick={() => {
					signIn('google');
				}}
				className={styles.btn + ' ' + styles.google}
			>
				Login with Google
			</button>
			<span className={styles.or}>- OR -</span>
			<Link className={styles.link} href='/dashboard/register'>
				Create new account
			</Link>
		</div>
	);
};

export default Login;
