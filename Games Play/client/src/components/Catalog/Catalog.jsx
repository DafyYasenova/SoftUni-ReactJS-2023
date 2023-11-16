import styles from './Catalog.module.css';
import { useEffect, useState } from 'react';
import * as gameService from '../../services/gameService';
import GameItem from './GameItem/GameItem';


export default function Catalog(){
    const [games, setGames] = useState([]);

    useEffect(() =>{
        gameService.getAll()
        .then(result => setGames(result))
    }, [])


    return(
        <>
            <section id={styles["catalog-page"]}>
            <h1>All Games</h1>
           
        {games.map(game => (
            <GameItem key={game._id} {...game}/>
        ))}

        {games.length === 0 && <h3 className={styles["no-articles"]}>No articles yet</h3>}
            
        </section>
        </>
    )
}