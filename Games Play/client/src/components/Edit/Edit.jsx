import styles from './Edit.module.css';


export default function Edit(){
    return (
        <>
         <section id={styles["edit-page"]} className={styles.auth}>
            <form id={styles.edit}>
                <div className={styles.container}>

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value="" />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value="" />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value="" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value="" />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className={styles.submit} type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
        </>
    )
}