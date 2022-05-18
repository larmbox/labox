import{_ as d,f as h,r as n,o as _,a as m,b as t,e as o,F as u,g as e}from"./app.49757a98.js";const v={id:"tooltip",tabindex:"-1"},x=t("a",{class:"header-anchor",href:"#tooltip","aria-hidden":"true"},"#",-1),f=e(" Tooltip "),y=t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"TIP"),t("p",null,[e("This page covers the Tooltip directive. For advanced tooltips with support for slots or interaction, consider using the "),t("a",{href:"/labox/components/tooltip"},"Tooltip Component"),e(".")]),t("p",null,"The component page also contains additional examples.")],-1),g=e("Tooltips display informative text when users hover over, focus on, or tap an element. Labox uses "),B={href:"https://npmjs.org/package/@popperjs/core",target:"_blank",rel:"noopener noreferrer"},L=e("Popper"),T=e(" for tooltips."),b=t("h2",{id:"syntax",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#syntax","aria-hidden":"true"},"#"),e(" Syntax")],-1),k=t("h2",{id:"reactivity",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reactivity","aria-hidden":"true"},"#"),e(" Reactivity")],-1),I=t("p",null,"All directive arguments are reactive.",-1),w=t("p",null,"This also works when using the object approach:",-1),H=h({setup(j){const r=`
<LButton v-tooltip="'Hey there!'">Hover me!</LButton>
`,i=`
<template>
  <LButton v-tooltip:[trigger]:[position]="[text | options]">Button</LButton>
</template>`,s=`
<template>
  <LButton :variant="variant" v-tooltip="n">Hover me!</LButton>
  {{variant}}
</template>

<script>
export default {
  data() {
    return {
      n: 1,
      variant: 'primary'
    }
  },
  mounted() {
    setInterval(() => {
      this.n++;
      this.variant = this.variant === 'primary' ? 'secondary' : 'primary'
    }, 500)
  }
}
<\/script>
`,p=`
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
`;return(C,E)=>{const c=n("Tag"),l=n("ExternalLinkIcon"),a=n("Snippet");return _(),m(u,null,[t("h1",v,[x,f,o(c,{text:"v-tooltip"})]),y,t("p",null,[g,t("a",B,[L,o(l)]),T]),o(a,{code:r}),b,o(a,{"no-render":"","no-edit":"",code:i}),k,I,o(a,{code:s}),w,o(a,{code:p})],64)}}});var N=d(H,[["__file","tooltip.html.vue"]]);export{N as default};
