import styles from "./styles.module.css";

function Login() {
	const googleAuth = () => {
		window.open(
			`https://auto-assess.onrender.com/auth/google/callback`,
			"_self"
		);
	};
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Automated Assessments</h1>
			<div className={styles.form_container}>
				<div className={styles.content}>
					<h2 className={styles.form_heading}>Log in</h2>
					<button className={styles.google_btn} onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sign in with Google</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Login;
