# mdx-deck-live-code 🤯 [reinhold.is/live-coding-in-slides](https://reinhold.is/live-coding-in-slides)

<!-- gif -->

A component for [mdx-deck](https://github.com/jxnblk/mdx-deck) for live coding directly in your slides. 🤯

<!-- build status badge -->

[![Version](https://img.shields.io/npm/v/mdx-deck-live-code.svg?style=flat-square)](https://www.npmjs.com/package/mdx-deck-live-code)
![Dependency Status](https://img.shields.io/librariesio/github/jreinhold/mdx-deck-live-code.svg?style=flat-square)

```bash
npm install --save-dev mdx-deck-live-code
```

- ⚛️ Live edit and render React components or other JavaScript directly in slides - **no window switching necessary**
- ↕️ Supports
  [different](https://reinhold.is/live-coding-in-slides/#2)
  [sizes](https://reinhold.is/live-coding-in-slides/#3)
  [out of](https://reinhold.is/live-coding-in-slides/#4)
  [the box](https://reinhold.is/live-coding-in-slides/#5)
- 🖼 Start live edits with a blank canvas - or with some code pre-filled
- 🎨 Fully supports custom styles - either [directly on the individual components](https://reinhold.is/live-coding-in-slides/#6) or [using the global theme](https://reinhold.is/live-coding-in-slides/#7)
- 👏 ... and [everything else](https://reinhold.is/live-coding-in-slides/#11) [react-live](https://github.com/FormidableLabs/react-live) does!

> Follow [@DrReinhold](https://twitter.com/DrReinhold) for updates

⚠️ This library is ONLY intended to work with your [mdx-deck](https://github.com/jxnblk/mdx-deck) slides. It doesn't magically add live coding abilities to your PowerPoint or Keynote slides, even though that would be pretty slick.

## [🎭 Check out a live demo here](https://reinhold.is/live-coding-in-slides)

The code for demo is located in the [`/example`](/example) directory.

## 🐣 Getting started

Import the `LiveCode` component at the top of your `deck.mdx` file (or in a slide if you're only using it once).

```js
import { LiveCode } from 'mdx-deck-live-code';
```

Use the `<LiveCode />` component as a top-level component in a slide

```jsx
---
<LiveCode
  title="How to greet people"
  size="small"
  code="<p>Hello World!</p>"
/>
---
```

## 🐓 Usage

The `<LiveCode />` is intended to be used as its own slide.
It supports the following props:

| Prop          | Type                                                   | Default                                                                                                                        | Description                                                                                                                                                      |
| ------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `code`        | string                                                 | `'<p>🙋‍♀️ 🌍</p>'`                                                                                                               | The initial code that is pre-filled in the editor and preview. See [Importing code from external files](#-importing-code-from-external-files) on advanced usage. |
| `title`       | string                                                 |                                                                                                                                | Title of the slide, shown in the top. Is not shown if `size` is set to `fullscreen`                                                                              |
| `size`        | `'small'` \| `'medium'` \| `'large'` \| `'fullscreen'` | `'medium'`                                                                                                                     | The size of the live code component, relative to the viewport size.                                                                                              |
| errors        | boolean                                                | `true`                                                                                                                         | Whether the error panel at the bottom should be shown or not on parse errors                                                                                     |
| providerProps | object                                                 | Any additional props to pass to the [`<LiveProvider />` component](https://github.com/FormidableLabs/react-live#liveprovider-) |
| editorProps   | object                                                 | Any additional props to pass to the [`<LiveEditor />` component](https://github.com/FormidableLabs/react-live#liveeditor-)     |
| previewProps  | object                                                 | Any additional props to pass to the [`<LivePreview />` component](https://github.com/FormidableLabs/react-live#livepreview-)   |
| errorProps    | object                                                 | Any additional props to pass to the [`<LiveError />` component](https://github.com/FormidableLabs/react-live#liveerror-)       |

Under the hood this `<LiveCode />` uses [react-live](https://github.com/FormidableLabs/react-live), So if you want to get super fancy, take a look at the [react-live API](https://github.com/FormidableLabs/react-live#api).

See the [example `deck.mdx`](/example/deck.mdx) for examples on using the different features.

### ⤴ Importing code from external files

Your `deck.mdx` file can become quite a mess if you intend to have large chunks of code in your `code` props. Luckily the `raw-loader` library is supported out-of-the-box, so you can declare the code in external files, instead of writing it as an inline string.

To do that, first install the raw-loader package.

```bash
npm install --save-dev raw-loader
```

Then, in the `code` prop, reference another file using the `require('!raw-loader!PATH-TO-FILE')`-syntax.

```jsx
<LiveCode code={require('!raw-loader!./external-file.js')} />
```

## ⚠️ Current issues

- Editing the code currently doesn't sync between the presenter and observer instances. Therefore **you need to edit the code in the observer window, if you want your audience to see it**❗️❗️❗️
- The carret often becomes invisible, if it is moved outside the non-scrolled area. Still investigating, help wanted.

## 🙏 Related / Credits

- [mdx-deck](https://github.com/jxnblk/mdx-deck) by the incredible [Brent Jackson](https://jxnblk.com/)
- [react-live](https://github.com/FormidableLabs/react-live) which this library uses internally, by the astonishing [Formidable Labs](https://formidable.com/)
- [CodeSurfer](https://github.com/pomber/code-surfer) (React component for scrolling, zooming and highlighting _static_ code) which inspired this library, by the fantastic [Rodrigo Pombo](https://twitter.com/pomber)
- [Component Playground in Spectacle](https://github.com/FormidableLabs/spectacle#component-playground) which is similar to this library, but for [slides built with Spectacle](https://github.com/FormidableLabs/spectacle) instead of mdx-deck slides. Also by the astonishing [Formidable Labs](https://formidable.com/)

## 🤝 Contributing

Ideas and feedback are ALWAYS welcome, just submit an issue.
Pull Requests are also very welcome.

The library is built using [TypeScript](https://www.typescriptlang.org), formatted with [Prettier](https://prettier.io/), linted with [TSLint](https://palantir.github.io/tslint/) and [markdownlint](https://github.com/DavidAnson/markdownlint), packaged with [yarn](https://yarnpkg.com) and developed with love ❤️.

1. `yarn dev` starts the TypeScript building of the library.
2. `yarn example` starts the demo in the `example/` folder.
3. I recommend that you use the example to test your changes, as that contains all the relevant use cases of the library. To do that, run `yarn setup-dev`, which takes care of installing and linking the necessary dependencies.
4. Then run `yarn start` to start the development transpiler and the example in watch mode concurrently.
5. Submit awesome PRs.

## 📝 License

Released under the [Do No Harm License (draft)](https://github.com/raisely/NoHarm)

By [@DrReinhold](https://twitter.com/DrReinhold)
