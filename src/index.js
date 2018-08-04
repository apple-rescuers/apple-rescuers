import { h, app } from "hyperapp"
import * as footer from "./footer"
import * as header from "./header"
import commonStyles from "./styles/index.styl"
import styles from "./styles.styl"

const state = {
    counter: {
        count: 0
    }
}

const actions = {
    counter: {
        down: value => state => ({ count: state.count - value }),
        up: value => state => ({ count: state.count + value })
    }
} 

const view = (state, actions) => (
  <div className={styles.main}>
    <header.view />
    <h1>{state.counter.count}</h1>
    <button onclick={() => actions.counter.down(1)}>-</button>
    <button onclick={() => actions.counter.up(1)}>+</button>
    <footer.view />
  </div>
)

const globalState = {
    ...state,
}

const globalActions = {
    ...actions
}

app(globalState, globalActions, view, document.body)
