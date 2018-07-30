import { h, app } from "hyperapp"
import * as footer from "./footer"

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
  <div>
    <h1>Hello, Apple Rescuers!</h1>
    <h1>{state.counter.count}</h1>
    <button onclick={() => actions.counter.down(1)}>-</button>
    <button onclick={() => actions.counter.up(1)}>+</button>
    <footer.view />
  </div>
)

const globalState = {
    ...state,
    ...footer.state,
}

const globalActions = {
    ...actions
}

app(globalState, globalActions, view, document.body)
