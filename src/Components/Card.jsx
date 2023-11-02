import styles from '../Styles/card.module.css'

const Card = ({nombre, apellido}) => {
    return (
        <div className={styles.contenedor}>
            <h3>Bienvenido!!!</h3>
            <p className={styles.parrafo}>{nombre} {apellido}</p>
        </div>
    )
}

export default Card