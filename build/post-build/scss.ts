/* eslint-disable @typescript-eslint/no-var-requires */
import fse from 'fs-extra';

fse.mkdirp('dist/theme');

fse.copy('src/theme', 'dist/theme');

fse.copy('src/components', 'dist/components', {
  filter: (n: any) => {
    if (n.includes('__snapshots__')) return false;
    // Always copy directories.
    if (fse.lstatSync(n).isDirectory()) {
      return true;
    }
    // Copy all files ending with '.scss'.
    return /.*(.scss)$/.test(n);
  },
});

fse.copy('src/common/shared-components', 'dist/common/shared-components', {
  filter: (n: any) => {
    if (n.includes('__snapshots__')) return false;
    // Always copy directories.
    if (fse.lstatSync(n).isDirectory()) {
      return true;
    }
    // Copy all files ending with '.scss'.
    return /.*(.scss)$/.test(n);
  },
});
