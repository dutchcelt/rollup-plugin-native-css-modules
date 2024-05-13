import css from './index.js';
//import { cssModules } from 'rollup-plugin-css-modules';

export default {
  input: 'demo/index.js',
  output: {
    dir: 'demo/dist',
    format: 'esm',
    importAttributesKey: 'with',
  },
  plugins: [
   // cssModules(),
    css({
      transform: code => {
        return `${code} .bar { color: red;}`;
      }
    })
  ]
};