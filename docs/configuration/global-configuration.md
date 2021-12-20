# Global Configuration

`createLabox` allows you to pass options to Labox.

```ts
createApp(App)
  .use(
    createLabox({
      components: [LButton],
      config: {
        // LConfig - Add options here.
      },
    })
  )
  .mount('#app');
```

## Default configuration

@[code{3-25}](../../src/utils/default-config.ts)
