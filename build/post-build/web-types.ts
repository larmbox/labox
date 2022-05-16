import fs from 'fs-extra';
import path from 'path';

const dir = path.join(__dirname, '..', '..', 'src', 'components');
const dist = path.join(__dirname, '..', '..', 'dist');

const kebabify = (str: string) =>
  str.replace(/[A-Z]/g, (letter, index) => {
    return index == 0 ? letter.toLowerCase() : '-' + letter.toLowerCase();
  });

function findFiles(dir: string) {
  const metas: any[] = [];

  const find = async (dir: string) => {
    fs.readdirSync(dir).forEach(async (filename: string) => {
      const abPath = path.join(dir, filename);
      if (fs.statSync(abPath).isDirectory()) {
        return find(abPath);
      } else {
        if (filename === 'meta.ts') {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          metas.push(await import(abPath));
        }
      }
    });
  };

  find(dir);
  return metas;
}

/**
 * Creates vetur-tags.json.
 *
 * "<component-name>": {
 *   "description": "<description>",
 *   "attributes": [
 *     "<prop-1>",
 *     "<prop-2>"
 *   ]
 * }
 *
 * @param metas
 */
function createVeturTags(metas: any[]) {
  const filename = 'vetur-tags.json';
  const filename2 = 'vetur-attributes.json';
  const attributes: any = {};
  const tags: any = {};
  metas.forEach((m) => {
    if (!m) {
      return;
    }
    const { name, description, props } = m;
    const obj = {
      description: description,
      attributes: props.map(({ name }: any) => name),
    };
    tags[name] = obj;
    tags[kebabify(name)] = obj; // Lowercase component alias.

    props.forEach((element: any) => {
      attributes[kebabify(name) + '/' + element.name] = {
        description: element.description,
      };
    });
  });

  fs.writeFileSync(`${dist}/${filename}`, JSON.stringify(tags, null, 2));
  fs.writeFileSync(`${dist}/${filename2}`, JSON.stringify(attributes, null, 2));
}

fs.writeFileSync(`${dist}/web-types.json`, '{}');
fs.writeFileSync(`${dist}/web-attributes.json`, '{}');

const metas = findFiles(dir);
createVeturTags(metas);
