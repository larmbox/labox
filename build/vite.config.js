import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { resolve } from 'path';

const name = 'labox';
const entry = 'index';

export const ssrTransformCustomDir = () => {
  return {
    props: [],
    needRuntime: true,
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        ssr: true,
        compilerOptions: {
          directiveTransforms: { 'open-modal': ssrTransformCustomDir },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, '../src'),
    },
  },
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, `../src/${entry}.ts`),
      name,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
  },
});
