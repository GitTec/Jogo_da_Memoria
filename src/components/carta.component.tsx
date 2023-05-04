import styles from "./carta.module.css"

interface Props {
    estaVisivel: boolean;
    imagem: string;
    nome: string;
}

export function Carta({ estaVisivel, imagem, nome }: Props) {
    return <div className={styles.carta}>
        <div className={styles.conteudo}>
            <div className={styles.frente}>
                <img width={80} src={imagem} />
            </div>
        </div>
    </div>
}