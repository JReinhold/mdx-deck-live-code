# mdx-deck-live-code 🤯

A component for mdx-deck for live coding directly in your slides. 🤯

<!-- gif -->

<!-- badges -->

```bash
npm install --save-dev mdx-deck-live-code
```

<!-- list of features -->

## [Check out a live demo here 🎭](google.dk)

⚠️ This library is ONLY intended to work with your [mdx-deck](https://github.com/jxnblk/mdx-deck) slides. It doesn't magically add live coding abilities to your PowerPoint or Keynote slides.

## Installation 🏗

```bash
npm install --save-dev mdx-deck-live-code
```

## Usage 🏃‍♀️

<!-- eventually link to a CodeSandbox here -->

## Current issues ⚠️

- Editing the code currently doesn't sync between the presenter and observer instances. Therefore **you need to edit the code in the observer window, if you want your audience to see it**❗️❗️❗️
- The carret often becomes invisible, if it is moved outside the non-scrolled area. Still investigating, help wanted.

## Related / Credits 🙏

- [mdx-deck](https://github.com/jxnblk/mdx-deck) by the incredible [Brent Jackson](https://jxnblk.com/)
- [react-live](https://github.com/FormidableLabs/react-live) which this library uses internally, by the astonishing [Formidable Labs](https://formidable.com/)
- [CodeSurfer](https://github.com/pomber/code-surfer) (React component for scrolling, zooming and highlighting _static_ code) which inspired this library, by the fantastic [Rodrigo Pombo](https://twitter.com/pomber)
- [Component Playground in Spectacle](https://github.com/FormidableLabs/spectacle#component-playground) which is similar to this library, but for [slides built with Spectacle](https://github.com/FormidableLabs/spectacle) instead of mdx-deck slides. Also by the astonishing [Formidable Labs](https://formidable.com/)

## Contributing 🤝

Ideas and feedback are ALWAYS welcome, just submit an issue.
Pull Requests are also very welcome.

The library is built using [TypeScript](https://www.typescriptlang.org), formatted with [Prettier](https://prettier.io/), linted with [TSLint](https://palantir.github.io/tslint/), packaged with [yarn](https://yarnpkg.com) and developed with love ❤️.

1. `yarn dev` starts the TypeScript building of the library.
2. `yarn example` starts the demo in the `example/` folder.
3. I recommend that you use the example to test your changes, as that contains all the relevant use cases of the library. To do that, run `yarn setup-dev`, which takes care of installing and linking the necessary dependencies.
4. Then run `yarn start` to start the development transpiler and the example in watch mode concurrently.
5. Submit awesome PRs.

## License 📝

Released under the [Do No Harm License (draft)](https://github.com/raisely/NoHarm)
