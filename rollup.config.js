import css from './index.js';

export default {
  input: 'demo/index.js',
  output: {
    dir: 'demo/dist',
    format: 'esm',
    importAttributesKey: 'with'
  },
  plugins: [
    css({
      transform: code => {
        return `${code} .bar { color: red;}`;
      }
    })
  ]
};