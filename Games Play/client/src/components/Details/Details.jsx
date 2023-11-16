import styles from './Details.module.css';
import {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as gameService from '../../services/gameService';

export default function Details(){
    const [game, setGame] = useState({});
    const { gameId } = useParams({});


    useEffect(() => {
        gameService.getOne(gameId)
        .then(setGame)
    },[gameId])
    return (
        <>
         <section id={styles["game-details"]}>
            <h1>Game Details</h1>
            <div className={styles["info-section"]}>

                <div className={styles["game-header"]}>
                    <img className={styles["game-img"]} src={game.imageUrl} alt={game.title} />
                    <h1>{game.title}</h1>
                    <span className={styles.levels}>MaxLevel: {game.maxLevel}</span>
                    <p className={styles.type}>{game.category}</p>
                </div>

                <p className={styles.text}>{game.summary} </p>

               
                <div className={styles["details-comments"]}>
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}
                        <li className={styles.comment}>
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className={styles.comment}>
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}
                    <p className={styles["no-comment"]}>No comments.</p>
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            {/* <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className={styles["create-comment"]}>
                <label>Add new comment:</label>
                <form className={styles.form}>
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className={styles.submit} type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
        </>
    )
}