import styles from './styles/404.module.scss';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h2>404</h2>
      <p>Congratulations! You found a page that doesn't exist.</p>
    </div>
  )
}