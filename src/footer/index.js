import { h, app } from "hyperapp"
import styles from './styles.styl'

export const state = {
  footer: {
      years: "Apple Rescuers © Since 2018"
  }
}

export const view = () => ({ footer }) => (
    <footer className={styles.main}>
        <h1>{footer.years}</h1>
    </footer>
)
