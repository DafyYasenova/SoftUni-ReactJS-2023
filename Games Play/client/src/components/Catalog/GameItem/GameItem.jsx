import styles from '../Catalog.module.css';


export default function GameItem({
titile, 
category,
imageUrl,
}) {
    return(
        <div className={styles.allGames}>
        <div className={styles["allGames-info"]}>
            <img src={imageUrl} />
            <h6>{category}</h6>
            <h2>{titile}</h2>
            <a href="#" className={styles["details-button"]}>Details</a>
        </div>
        </div>
    )
}