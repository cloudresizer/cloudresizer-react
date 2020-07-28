# cloudresizer-react

A React component to resize and cache images via CloudResizer.

## Installation
```
$ npm install --save cloudresizer-react
```

## How to use
Wrap the `<img>` element with the `<CloudResizer>` component containing your `username` and any transformations you want.

```
import { CloudResizer } from 'cloudresizer-react';

<CloudResizer username="your_username" width="600">
  <img src="https://example.com/bird.html alt="Bird" />
</CloudResizer>
```

Required:
- `username`

Optional:
- `width`, `height`, `fit`, `background`, `format`. Please refer to [CloudResizer documentation](https://cloudresizer.com/documentation) for full details.


## Publishing

To compile the code once, run

- `npm run build`

To compile the code once and refresh on file change, run

- `npm run start`

To publish the package to npm, make sure you're logged in the correct account by running

- `npm login`

Compile by running

- `npm run build`

Update the package version accordingly by using

- [`npm version [patch | minor | major]`](https://docs.npmjs.com/about-semantic-versioning)

Then publish your package by running

- `npm publish`
