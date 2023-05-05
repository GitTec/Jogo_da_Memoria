import styles from "./jogo.module.css";
import { useState, useEffect } from "react"
import cartasDoBaralho from "../baralho.json"
import { Carta } from "../components/carta.component";
import { embaralharArray } from "../helpers/embaralhar.helper";
import { ICarta } from "../interface/carta.interface";


interface ICartaComIndex extends ICarta {
    index: number;
}
export function Jogo() {

    const [podeClicar, setPodeClicar] = useState<boolean>(true)
    const [baralho, setBaralho] = useState<ICarta[]>(embaralharArray(cartasDoBaralho))
    const [ultimaVirada, setUltimaVirada] = useState<ICartaComIndex>()

    useEffect(() => {
        verificarVitoria()
    }, [baralho])

    function verificarVitoria() {
        setTimeout(() => {
            const desviradas = [...baralho.filter(c => !c.estaVisivel)]
            if (desviradas.length === 0)
                alert("Parabéns!! Você venceu")
        }, 1000)
    }

    function virarCarta(indice: number) {
        if (ultimaVirada?.index === indice) {
            return
        }
        setPodeClicar(false)
        const novoBaralho = [...baralho]
        novoBaralho[indice] = {
            ...novoBaralho[indice],
            estaVisivel: !novoBaralho[indice].estaVisivel
        }
        setBaralho(novoBaralho)

        if (ultimaVirada) {
            if (ultimaVirada?.nome === baralho[indice].nome) {
                setUltimaVirada(undefined)
                setPodeClicar(true)
            } else {
                setTimeout(() => {
                    const novoBaralho = [...baralho]
                    novoBaralho[indice] = {
                        ...novoBaralho[indice],
                        estaVisivel: false
                    }
                    novoBaralho[ultimaVirada.index] = {
                        ...novoBaralho[ultimaVirada.index],
                        estaVisivel: false
                    }
                    setUltimaVirada(undefined)
                    setBaralho(novoBaralho)
                    setPodeClicar(true)
                }, 1500)
            }
        } else {
            setUltimaVirada({
                ...baralho[indice],
                index: indice
            })
            setPodeClicar(true)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.cabecalho}>
                <h1>JOGO DA MEMÓRIA</h1>
            </div>
            <section className={styles.espacoCartas}>
                {
                    baralho.map((carta, index) => {
                        return <div className={styles.gridItem}>
                            <Carta
                                nome={carta.nome}
                                imagem={carta.imagem}
                                estaVisivel={carta.estaVisivel}
                                onClick={() => {
                                    if (podeClicar)
                                        virarCarta(index)
                                }}
                                key={index}
                            />
                        </div>
                    })
                }
            </section>
        </div >
    )
}