import styles from './Title.module.scss'

type Props = {
  title: string
}

const Title = ({ title }: Props) => (
    <h1 className={styles.title}>{title}</h1>
)

export default Title;
