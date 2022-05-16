import fs from 'fs';
import path from 'path';

/**
 * @see https://github.com/vuejs/vue-next/issues/2860
 */

const file = path.resolve(__dirname, '..', '..', 'dist', 'labox.es.js');

fs.readFile(file, 'utf8', function (err: any, data: any) {
  if (err) {
    return console.log(err);
  }

  const result = data.replace(
    /defineComponent\({/g,
    '/* @__PURE__ */ defineComponent({'
  );

  fs.writeFile(file, result, 'utf8', function (err: any) {
    if (err) return console.log(err);
  });
});
