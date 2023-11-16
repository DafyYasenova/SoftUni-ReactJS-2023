import styles from './Create.module.css';
import * as gameService from '../../services/gameService';
import { useNavigate } from 'react-router-dom';


export default function Create() {
    const navigate = useNavigate();

    const createSubmitHandler = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget))

        console.log(data)

        try {
            await gameService.create(data);

            navigate('/catalog');
        } catch (error) {
            // todo: error notification
            console.log(error)
        }
    }


    return (
        <>
            <section id={styles["create-page"]} className={styles.auth}>
                <form id={styles.create} onSubmit={createSubmitHandler}>
                    <div className={styles.container}>

                        <h1>Create Game</h1>
                        <label htmlFor="leg-title">Legendary title:</label>
                        <input type="text" id="title" name="title" placeholder="Enter game title..." />

                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category" placeholder="Enter game category..." />

                        <label htmlFor="levels">MaxLevel:</label>
                        <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                        <label htmlFor="game-img">Image:</label>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary"></textarea>
                        <input className={styles.submit} type="submit" value="Create Game" />
                    </div>
                </form>
            </section>
        </>
    )
}