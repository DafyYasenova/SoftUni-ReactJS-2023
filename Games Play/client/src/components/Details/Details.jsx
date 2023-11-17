import styles from './Details.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as gameService from '../../services/gameService';
import * as commentService from '../../services/commentService';


export default function Details() {
    const [game, setGame] = useState({});
    const { gameId } = useParams({});
    const [comments, setComments] = useState([]);


    useEffect(() => {
        gameService.getOne(gameId)
            .then(setGame)
        commentService.getAllComments(gameId)
            .then(setComments)
    }, [gameId]);

    const addCommentHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.createComment(
            gameId,

            formData.get('username'),
            formData.get('comment')
        );
        setComments(state => [...state, newComment]);

        console.log(newComment)
    }
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
                            {comments.map(({ _id, username, text }) => (
                                <li className={styles.comment} key={_id}>
                                    <p>{username}: {text}</p>
                                </li>
                            ))}

                        </ul>
                        {comments.length === 0 && <p className={styles["no-comment"]}>No comments.</p>}

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
                    <form className={styles.form} onSubmit={addCommentHandler}>
                        <input type="text" name="username" placeholder="username" />
                        <textarea name="comment" placeholder="Comment......"></textarea>
                        <input className={styles.submit} type="submit" value="Add Comment" />
                    </form>
                </article>

            </section>
        </>
    )
}