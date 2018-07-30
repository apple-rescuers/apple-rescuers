import { h, app } from "hyperapp"

export const state = {
  footer: {
      years: "Apple Rescuers © Since 2018"
  }
}

export const view = () => ({ footer }) => (
    <footer>
        <h1>{footer.years}</h1>
    </footer>
)
