# react-now-render
Now render the React component

## Interface
```ts
import React from 'react';

declare type Unmount = () => void;

declare type Render = (unmount: Unmount) => React.ReactElement;

interface Options {
    render: Render;
    root?: HTMLElement;
    callback?: () => void;
}

declare function nowRender(render: Render): Unmount;

declare function nowRender(options: Options): Unmount;

```
