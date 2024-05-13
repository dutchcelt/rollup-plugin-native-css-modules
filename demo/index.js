import styleSheet from './styles.css' with { type: 'css' };
import fooStyles from '@thepassle/css/foo.css' with { type: 'css' };
import { foo } from './foo.js';
import { bar } from './src/bar.js';

const dynamic = await import('./dynamic-import.css', {
  with: { type: 'css' },
});

const dynamicWithVariables = await import(`./dynamic-${1}.css`, {
  with: { type: 'css' },
});

const quux = '';
const dynamicVariable = await import(quux, {
  with: { type: 'css' },
});

const dynamicImportTemplateString = await import(`./template-string.css`, {
  with: { type: 'css' },
});

const externalHttps = await import('https://foo.com/index.css', { with: { type: 'css'} });
const externalHttp = await import('http://foo.com/index.css', { with: { type: 'css'} });
// const dataUri = await import('data:text/bla');
const concatenatedStrings = await import('./my' + 1 + '.css', { with: { type: 'css'} });

console.log(concatenatedStrings);
// console.log(dataUri);
console.log(externalHttp);
console.log(externalHttps);
console.log(dynamicImportTemplateString);
console.log(dynamicVariable);
console.log(dynamicWithVariables);
console.log(dynamic);
console.log(bar);
console.log(foo);
console.log(styleSheet);
console.log(fooStyles);
