import styles from './Register.module.css';


export default function Register(){
    return(
        <>
        <section id={styles["register-page"]} className={styles["content auth"]}>
        <form id={styles.register}>
            <div className={styles.container}>
                <div className={styles["brand-logo"]}></div>
                <h1>Register</h1>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="maria@email.com" />

                <label htmlFor="pass">Password:</label>
                <input type="password" name="password" id="register-password" />

                <label htmlFor="con-pass">Confirm Password:</label>
                <input type="password" name="confirm-password" id="confirm-password" />

                <input className={styles.submit} type="submit" value="Register" />

                <p className={styles.field}>
                    <span>If you already have profile click <a href="#">here</a></span>
                </p>
            </div>
        </form>
    </section>
    </>
    )
}