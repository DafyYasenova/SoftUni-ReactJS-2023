import styles from '../Catalog.module.css';
import { Link } from 'react-router-dom';

export default function GameItem({
    _id,
    titile,
    category,
    imageUrl,
}) {
    return (
        <div className={styles.allGames}>
            <div className={styles["allGames-info"]}>
                <img src={imageUrl} />
                <h6>{category}</h6>
                <h2>{titile}</h2>
                <Link to={`/catalog/${_id}`} className={styles["details-button"]}>Details</Link>
            </div>
        </div>
    )
}