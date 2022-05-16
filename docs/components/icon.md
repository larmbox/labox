# Icon <Tag text="<LIcon>" />

The icon component provides an easy way to use various **font-based** icon libraries.

Labox does not include an icon font library.

<Snippet :code="example" />

## Size

The icons automatically inherit the font size of the parent container.

<Snippet :code="sizes" />

## Example Configuration

Below are some configurations for popular icon libraries.

### Bootstrap Icons

Please check the [Bootstrap Icons documentation](https://icons.getbootstrap.com/) for the latest version.

Import in your .scss file:

```scss
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css');
```

Set [global configuration](/labox/configuration/global-configuration) for Icon:

```ts
LIcon: {
  config: { tag: 'i', type: 'class', prefix: 'bi-', className: '' }
}
```

### Material Icons

Import in your .scss file:

```scss
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
```

Set [global configuration](/labox/configuration/global-configuration) for Icon:

```ts
LIcon: {
  config: { tag: 'span', type: 'inline', prefix: '', className: 'material-icons' }
}
```

## Component Reference

<ComponentMeta src="icon" />

<script lang="ts" setup>
import {ref} from 'vue';

const example = `
<LIcon icon="box" />
`

const sizes = `
<div class="icon-display">
  <LIcon icon="box" />
  <LIcon style="font-size: 2rem" icon="box" />
  <LIcon style="font-size: 4rem" icon="box" />
</div>
`

</script>
