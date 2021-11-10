import Counter from '../components/Counter'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Counter amount={0} />
    </div>
  )
}
