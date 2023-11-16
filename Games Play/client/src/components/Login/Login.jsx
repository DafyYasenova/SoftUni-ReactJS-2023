import styles from './Login.module.css';


export default function Login(){
    return(
        <>
        <section id={styles["login-page"]} className={styles.auth} > 
        <form id={styles.login} >

            <div className={styles.container} >
                <div className={styles["brand-logo"]}></div>
                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                <label htmlFor="login-pass">Password:</label>
                <input type="password" id="login-password" name="password" />
                <input type="submit" className={styles.submit} value="Login" />
                <p className={styles.field}>
                    <span>If you don't have profile click <a href="#">here</a></span>
                </p>
            </div>
        </form>
    </section>
    </>
    )
}