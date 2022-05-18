import{_ as h,f as p,r as l,o as m,a as u,b as e,e as t,F as _,g as o}from"./app.49757a98.js";const L={id:"modal",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#modal","aria-hidden":"true"},"#",-1),f=o(" Modal "),M=e("p",null,"A modal is a dialog box/popup window that is displayed on top of the current page.",-1),g=e("h2",{id:"size",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#size","aria-hidden":"true"},"#"),o(" Size")],-1),B=e("p",null,[o("The modal component allows a "),e("code",null,"size"),o(" prop. Labox provides CSS rules for the small, default and large size options.")],-1),x=e("h2",{id:"data",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#data","aria-hidden":"true"},"#"),o(" Data")],-1),v=e("p",null,"Additional data can be passed to the modal:",-1),w=e("p",null,[o("Or "),e("code",null,"modal.open('modal-with-data', { hello: 'world' })"),o(" if you use the "),e("a",{href:"/labox/getting-started/useLabox"},"useLabox"),o(" composable.")],-1),y=e("h2",{id:"stacking",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stacking","aria-hidden":"true"},"#"),o(" Stacking")],-1),k=e("p",null,"It is possible to open multiple modals. The previous modal is automatically hidden when another modal is opened. When the new modal is closed, the previous will automatically open.",-1),z=e("h2",{id:"accessibility",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessibility","aria-hidden":"true"},"#"),o(" Accessibility")],-1),H=e("p",null,"Opening a modal automatically traps the tab focus inside the modal. When the modal is closed, Labox tries to restore focus to the element focused prior to opening the modal.",-1),T=e("p",null,[o("The "),e("code",null,"aria-labelledby"),o(" attribute is automatically set to the modal header element and "),e("code",null,"aria-describedby"),o(" attribute to the modal body element.")],-1),C=e("h2",{id:"component-reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#component-reference","aria-hidden":"true"},"#"),o(" Component Reference")],-1),O=p({setup(S){const d=`<LButton v-open-modal="'Hello'">Open Modal</LButton>

<LModal id="Hello" title="Hello world!" description="A modal is a dialog box/popup window that is displayed on top of the current page." :closeable="false">
  <p><b>Example modal:</b> This modal has a title and description, and also a footer with a button.</p>
  <template #footer-right="{ close }">
    <LButton @click="close()">Close me!</LButton>
  </template>
</LModal>`,n=`
<div class="size-display">
  <LButton v-open-modal="'Hello-sm'">Small</LButton>
  <LButton v-open-modal="'Hello-md'">Default</LButton>
  <LButton v-open-modal="'Hello-lg'">Large</LButton>
</div>

<LModal v-for="size in ['sm', 'md', 'lg']" :size="size" :key="size" :id="\`Hello-\${size}\`" title="Hello world!" close-on-backdrop>
  <p>This modal is size {{ size }}!</p>
</LModal>`,s=`<LButton v-open-modal="{ name: 'modal-with-data', data: { hello: 'world' } }">Open Modal</LButton>

<LModal id="modal-with-data" title="Modal with data" v-slot="{ data }">
  {{ data }}
</LModal>`,i=`<LButton v-open-modal="'stack-1'">Open Modal 1</LButton>

<LModal id="stack-1" title="Modal 1">
  <LButton v-open-modal="'stack-2'">Open Modal 2</LButton>
</LModal>

<LModal id="stack-2" title="Modal 2">
  <LButton v-open-modal="'stack-3'">Open Modal 3</LButton>
</LModal>

<LModal id="stack-3" title="\u{1F999}" no-body />`;return(A,F)=>{const c=l("Tag"),a=l("Snippet"),r=l("ComponentMeta");return m(),u(_,null,[e("h1",L,[b,f,t(c,{text:"<LModal>"})]),M,t(a,{code:d}),g,B,t(a,{code:n}),x,v,t(a,{code:s}),w,y,k,t(a,{code:i}),z,H,T,C,t(r,{src:"modal"})],64)}}});var V=h(O,[["__file","modal.html.vue"]]);export{V as default};
