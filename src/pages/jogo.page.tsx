import styles from "./jogo.module.css";
import { useState, useEffect } from "react"
import cartasDoBaralho from "../baralho.json"
import { Carta } from "../components/carta.component";
import { embaralharArray } from "../helpers/embaralhar.helper";

export function Jogo() {
    const [baralho, SetBaralho] = useState<any[]>([])

    useEffect(() => {
        const novaSequencia = embaralharArray(cartasDoBaralho)
        SetBaralho(novaSequencia)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.cabecalho}>
                <h1>Jogo da memória</h1>
            </div>
            <section className={styles.espacoCartas}>
                {
                    baralho.map((carta) => {
                        return <Carta
                            nome={carta.nome}
                            imagem={carta.imagem}
                            estaVisivel={carta.estaVisivel}
                        />
                    })
                }
                <span>Você está jogando agora...</span>
            </section>
        </div >
    )
}