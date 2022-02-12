<template>
  <div>
    <Vuelr class="snippet" :code="code" v-slot="{ target }">
      <div :id="target" />
      <div class="outer" @mousedown="onClick">
        <LButton
          @click="setEditable"
          variant="gray"
          size="sm"
          outline
          v-tooltip:hover:left="'Toggle editing'"
          icon-left="pencil-square"
          >Edit</LButton
        >
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
import 'highlight.js/styles/xcode.css';
import { useLabox } from '../../../src';

import { defineComponent, nextTick, onMounted, ref } from 'vue';

export default defineComponent({
  props: {
    code: {
      type: String,
      default: '',
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

    const setEditable = () => {
      onClick();
      editing.value = !editing.value;
    };

    const onClick = () => {
      expanded.value = true;
    };

    return { id, code, editing, onInput, setEditable, onClick, expanded };
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
