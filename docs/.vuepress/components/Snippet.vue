<template>
  <div>
    <Vuelr class="snippet" :code="code" v-slot="{ target }">
      <div v-if="!noRender" :id="target" />
      <div class="outer" @mousedown="onClick">
        <LButton
          v-if="!noEdit"
          @click="toggle"
          variant="gray"
          size="sm"
          outline
          :icon-left="editing ? 'check-square' : 'pencil-square'"
        >
          {{ editing ? 'Done' : 'Edit' }}
        </LButton>
        <div v-if="!expanded" class="fade" />
        <pre
          :id="id"
          class="hljs-code language-html"
          :class="expanded ? 'expanded' : undefined"
          :contenteditable="editing"
          @input="onInput"
        />
      </div>
    </Vuelr>
  </div>
</template>
<script lang="ts">
import hljs from 'highlight.js';
import { useLabox } from '../../../src';

import { defineComponent, nextTick, onMounted, ref } from 'vue';

export default defineComponent({
  props: {
    code: {
      type: String,
      default: '',
    },
    noRender: {
      type: Boolean,
    },
    noEdit: {
      type: Boolean,
    },
  },
  setup(props, contxt) {
    const { uuid } = useLabox();
    const id = uuid();

    const editing = ref(false);
    const expanded = ref(false);

    const code = ref(props.code.replace(/^\s+|\s+$/g, ''));

    onMounted(() => {
      nextTick(() => {
        const editor = document.getElementById(id);
        if (!editor) {
          return;
        }
        editor.textContent = code.value;
        editor.spellcheck = false;

        hljs.configure({ ignoreUnescapedHTML: true });

        // first, find all the div.code blocks
        document.querySelectorAll('pre.hljs-code').forEach((el) => {
          // then highlight each
          hljs.highlightElement(el);
        });
        nextTick(() => {
          const smallEnough = editor.scrollHeight;
          if (smallEnough < 200) {
            expanded.value = true;
          }
        });
      });
    });

    const onInput = (event: any) => {
      code.value = event.target.textContent;
    };

    const toggle = () => {
      onClick();
      editing.value = !editing.value;
    };

    const onClick = () => {
      expanded.value = true;
    };

    return { id, code, editing, onInput, toggle, onClick, expanded };
  },
});

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
</script>

<style lang="scss">
.snippet {
  .outer {
    position: relative;
    button {
      position: absolute;
      top: 0.66rem;
      right: 0.66rem;
    }

    .fade {
      position: absolute;
      bottom: 1px;
      left: 1px;
      width: calc(100% - 2px);
      height: 64px;
      background: var(--code-fade);
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
      transition: background var(--t-color);
    }
  }

  .hljs-code {
    padding: 1rem;
    overflow-y: hidden !important;
    max-height: 140px;
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 14px;
    border: 1px solid transparent;

    &.expanded {
      max-height: none;
    }

    &[contenteditable='true'] {
      box-shadow: 0 0 0 var(--lx-focus-shadow-size) var(--lx-primary-T20);
      border: 1px solid var(--lx-primary-6);
      outline: none;
    }
  }
}
</style>
