import{_ as v,f as g,r as a,o as _,a as L,b as t,e as o,F as B,g as e,c as f}from"./app.49757a98.js";const x={id:"tooltip",tabindex:"-1"},y=t("a",{class:"header-anchor",href:"#tooltip","aria-hidden":"true"},"#",-1),b=e(" Tooltip "),T=t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"TIP"),t("p",null,[e("This page covers the Tooltip component. For simple tooltips, you might want to use the "),t("a",{href:"/labox/directives/tooltip"},"Tooltip Directive"),e(".")])],-1),k=e("Tooltips display informative text when users hover over, focus on, or tap an element. Labox uses "),w={href:"https://npmjs.org/package/@popperjs/core",target:"_blank",rel:"noopener noreferrer"},H=e("Popper"),C=e(" for tooltips."),I=t("h2",{id:"reactivity",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reactivity","aria-hidden":"true"},"#"),e(" Reactivity")],-1),S=t("p",null,"All directive arguments are reactive.",-1),F=t("p",null,"This also works when using the object approach:",-1),N=t("h2",{id:"placement",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#placement","aria-hidden":"true"},"#"),e(" Placement")],-1),V=t("p",null,"Below are the possible tooltip placements.",-1),j=f('<h2 id="trigger-types" tabindex="-1"><a class="header-anchor" href="#trigger-types" aria-hidden="true">#</a> Trigger types</h2><p>You can use <code>hover</code> or <code>click</code> to trigger the tooltip. The default is <code>hover</code>.</p><p>If you use <code>hover</code>, touch users must tap and hold the trigger element to show the tooltip.</p>',3),E=t("h2",{id:"slots",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#slots","aria-hidden":"true"},"#"),e(" Slots")],-1),P=t("p",null,[e("Use the "),t("code",null,"trigger"),e(" and "),t("code",null,"content"),e(" slots to use elements in the content displayed in the tooltip.")],-1),M=t("h2",{id:"interactive",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#interactive","aria-hidden":"true"},"#"),e(" Interactive")],-1),R=t("p",null,[e("Set prop "),t("code",null,"interactive"),e(" on the tooltip to allow users to interact with the content without it being closed automatically.")],-1),Y=t("h2",{id:"component-reference",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#component-reference","aria-hidden":"true"},"#"),e(" Component Reference")],-1),A=g({setup(D){const r=`
<LButton v-tooltip="'Hey there!'">Hover me!</LButton>
`,i=`
<template>
  <LButton v-tooltip="n">Hover me!</LButton>
</template>

<script>
export default {
  data() {
    return {
      n: 1
    }
  },
  mounted() {
    setInterval(() => {
      this.n++;
    }, 500)
  }
}
<\/script>
`,s=`
<template>
  <LButton v-tooltip="{ text: variant, variant }">Hover me!</LButton>
</template>

<script>
export default {
  data() {
    return {
      variant: 'primary',
    }
  },
  mounted() {
    setInterval(() => {
      this.variant = this.variant === 'primary' ? 'error' : 'primary';
    }, 500)
  }
}
<\/script>
`,l=`
<template>
  <div style="display: grid; max-width: 300px; gap: 4px">
    <LButton v-tooltip="{ text: 'top-start', placement: 'top-start' }" style="grid-area: 1 / 1 / 2 / 2;">top-start</LButton>
    <LButton v-tooltip="{ text: 'top', placement: 'top' }" style="grid-area: 1 / 2 / 2 / 3;">top</LButton>
    <LButton v-tooltip="{ text: 'top-end', placement: 'top-end' }" style="grid-area: 1 / 3 / 2 / 4;">top-end</LButton>
    <LButton v-tooltip="{ text: 'left-start', placement: 'left-start' }" style="grid-area: 2 / 1 / 3 / 2;">left-start</LButton>
    <LButton v-tooltip="{ text: 'left', placement: 'left' }" style="grid-area: 3 / 1 / 4 / 2;">left</LButton>
    <LButton v-tooltip="{ text: 'left-end', placement: 'left-end' }" style="grid-area: 4 / 1 / 5 / 2;">left-end</LButton>
    <LButton v-tooltip="{ text: 'right-start', placement: 'right-start' }" style="grid-area: 2 / 3 / 3 / 4;">right-start</LButton>
    <LButton v-tooltip="{ text: 'right', placement: 'right' }" style="grid-area: 3 / 3 / 4 / 4;">right</LButton>
    <LButton v-tooltip="{ text: 'right-end', placement: 'right-end' }" style="grid-area: 4 / 3 / 5 / 4;">right-end</LButton>
    <LButton v-tooltip="{ text: 'bottom-start', placement: 'bottom-start' }" style="grid-area: 5 / 1 / 6 / 2;">bottom-start</LButton>
    <LButton v-tooltip="{ text: 'bottom', placement: 'bottom' }" style="grid-area: 5 / 2 / 6 / 3;">bottom</LButton>
    <LButton v-tooltip="{ text: 'bottom-end', placement: 'bottom-end' }" style="grid-area: 5 / 3 / 6 / 4;">bottom-end</LButton>
  </div>
</template>
`,c=`
<div class="button-display">
  <LButton v-tooltip="{ text: 'Hover!', trigger: 'hover' }">Hover</LButton>
  <LButton v-tooltip="{ text: 'Click!', trigger: 'click' }">Click</LButton>
</div>
`,p=`
<LTooltip>
  <template #trigger="{id}">
    <LButton :id="id">Hover me!</LButton>
  </template>
  <template #content>
    <p style="margin: 0"><b>bold</b> <a href="#">link</a> \u{1F999}</p>
  </template>
</LTooltip>
`,d=`
<LTooltip interactive>
  <template #trigger="{id}">
    <LButton :id="id">Hover me!</LButton>
  </template>
  <template #content>
    <p style="margin: 0">You can now click this <a href="#">link</a>.</p>
  </template>
</LTooltip>
`;return(U,q)=>{const h=a("Tag"),u=a("ExternalLinkIcon"),n=a("Snippet"),m=a("ComponentMeta");return _(),L(B,null,[t("h1",x,[y,b,o(h,{text:"<LTooltip>"})]),T,t("p",null,[k,t("a",w,[H,o(u)]),C]),o(n,{code:r}),I,S,o(n,{code:i}),F,o(n,{code:s}),N,V,o(n,{code:l}),j,o(n,{code:c}),E,P,o(n,{code:p}),M,R,o(n,{code:d}),Y,o(m,{src:"tooltip"})],64)}}});var G=v(A,[["__file","tooltip.html.vue"]]);export{G as default};
