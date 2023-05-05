import { ICarta } from "../interface/carta.interface"
import styles from "./carta.module.css"

interface Props extends ICarta {
    onClick: () => void;
}

export function Carta({ estaVisivel, imagem, nome, onClick }: Props) {
    return <div className={styles.carta} onClick={onClick}>
        <div className={styles.conteudo}>
            {
                estaVisivel ? <div className={styles.frente}>
                    <img width={80} src={imagem} />
                </div> : <div className={styles.verso}>
                    <img width={80} src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png" />
                </div>
            }
        </div>
    </div>
}