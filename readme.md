# Jsx To Png

A react library to convert react jsx svg component to image dataurl.

## Motivation

I wrote many react svg components. Practically, I need to convert origin svg element to png for the sake of protect svg source file from been taken by user. Besides, I need some pngs as thumbnail images. This library is designed to do exactly the thing.

## Install

```
npm i jsx-to-png
```

## Usage

```jsx
import { jsxToPng } from 'jsx-to-png';

const Icon = (props: { name: string }) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      y="50"
      x="50"
      style={{
        dominantBaseline: "middle",
        textAnchor: "middle",
      }}
    >
      Hello {props.name} !
    </text>
  </svg>
);

jsxToPng(<Icon name={props.name}></Icon>, { height: 100, width: 100 })
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    console.error(error);
    throw new Error(error);
  })
```

## Contribute

U can create new issue to contribute.