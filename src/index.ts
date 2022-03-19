import React from 'react'
import ReactDOM from 'react-dom'

type Unmount = () => void;

type Render = (unmount: Unmount) => React.ReactElement

interface Options {
  render: Render;
  root?: HTMLElement;
  callback?: () => void;
}

function nowRender (render: Render): Unmount
function nowRender (options: Options): Unmount
function nowRender (options: Render | Options): Unmount {
  if (typeof options === 'function') {
    options = {
      render: options
    }
  }

  const root = options.root || document.body
  const container = document.createElement('div')
  const unmount: Unmount = () => {
    ReactDOM.unmountComponentAtNode(container)
    container.parentNode?.removeChild(container)
  }

  ReactDOM.render(
    options.render(unmount),
    container,
    options.callback
  )

  root.appendChild(container)

  return unmount
}

export default nowRender

