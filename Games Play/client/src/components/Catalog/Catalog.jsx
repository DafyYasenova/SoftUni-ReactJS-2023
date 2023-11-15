import styles from './Catalog.module.css';


export default function Catalog(){
    return(
        <>
            <section id={styles["catalog-page"]}>
            <h1>All Games</h1>
           
            <div className={styles.allGames}>
                <div className={styles["allGames-info"]}>
                    <img src="/images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Cover Fire</h2>
                    <a href="#" className={styles["details-button"]}>Details</a>
                </div>

            </div>
           
        
            <h3 className={styles["no-articles"]}>No articles yet</h3>
        </section>
        </>
    )
}