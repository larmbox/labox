import{_ as r,f as h,r as d,o as p,a as m,b as e,e as t,F as u,g as o,c as b}from"./app.49757a98.js";const _={id:"modal",tabindex:"-1"},L=e("a",{class:"header-anchor",href:"#modal","aria-hidden":"true"},"#",-1),f=o(" Modal "),g=e("p",null,"A modal is a dialog box/popup window that is displayed on top of the current page.",-1),v=e("h2",{id:"size",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#size","aria-hidden":"true"},"#"),o(" Size")],-1),w=e("p",null,[o("The modal component allows a "),e("code",null,"size"),o(" prop. Labox provides CSS rules for the small, default and large size options.")],-1),x=e("h2",{id:"data",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#data","aria-hidden":"true"},"#"),o(" Data")],-1),B=e("p",null,"Additional data can be passed to the modal:",-1),M=e("p",null,[o("Or "),e("code",null,"modal.open('modal-with-data', { hello: 'world' })"),o(" if you use the "),e("a",{href:"/labox/getting-started/useLabox"},"useLabox"),o(" composable.")],-1),k=e("h2",{id:"stacking",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stacking","aria-hidden":"true"},"#"),o(" Stacking")],-1),y=e("p",null,"It is possible to open multiple modals. The previous modal is automatically hidden when another modal is opened. When the new modal is closed, the previous will automatically open.",-1),z=b('<h2 id="prevent-closing" tabindex="-1"><a class="header-anchor" href="#prevent-closing" aria-hidden="true">#</a> Prevent closing</h2><p>Prevent the user from closing the modal by setting the <code>closeable</code> prop to <code>false</code>.</p><h2 id="close-with-backdrop" tabindex="-1"><a class="header-anchor" href="#close-with-backdrop" aria-hidden="true">#</a> Close with backdrop</h2><p>Allow the user to close the modal by setting the <code>close-on-backdrop</code> prop to <code>true</code>.</p><h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility" aria-hidden="true">#</a> Accessibility</h2><p>Opening a modal automatically traps the tab focus inside the modal. When the modal is closed, Labox tries to restore focus to the element focused prior to opening the modal.</p><p>The <code>aria-labelledby</code> attribute is automatically set to the modal header element and <code>aria-describedby</code> attribute to the modal body element.</p>',7),H=h({setup(S){const l=`<LButton v-open-modal="'Hello'">Open Modal</LButton>

<LModal id="Hello" title="Hello world!" description="A modal is a dialog box/popup window that is displayed on top of the current page." :closeable="false">
  <p><b>Example modal:</b> This modal has a title and description, and also a footer with a button.</p>
  <template #footer-right="{ close }">
    <LButton @click="close">Close me!</LButton>
  </template>
</LModal>`,s=`
<div class="size-display">
  <LButton v-open-modal="'Hello-sm'">Small</LButton>
  <LButton v-open-modal="'Hello-md'">Default</LButton>
  <LButton v-open-modal="'Hello-lg'">Large</LButton>
</div>

<LModal v-for="size in ['sm', 'md', 'lg']" :size="size" :key="size" :id="\`Hello-\${size}\`" title="Hello world!" close-on-backdrop>
  <p>This modal is size {{ size }}!</p>
</LModal>`,i=`<LButton v-open-modal="{ name: 'modal-with-data', data: { hello: 'world' } }">Open Modal</LButton>

<LModal id="modal-with-data" title="Modal with data" v-slot="{ data }">
  {{ data }}
</LModal>`,n=`<LButton v-open-modal="'stack-1'">Open Modal 1</LButton>

<LModal id="stack-1" title="Modal 1">
  <LButton v-open-modal="'stack-2'">Open Modal 2</LButton>
</LModal>

<LModal id="stack-2" title="Modal 2">
  <LButton v-open-modal="'stack-3'">Open Modal 3</LButton>
</LModal>

<LModal id="stack-3" title="\u{1F999}" no-body />`;return(T,O)=>{const c=d("Tag"),a=d("Snippet");return p(),m(u,null,[e("h1",_,[L,f,t(c,{text:"v-modal"})]),g,t(a,{code:l}),v,w,t(a,{code:s}),x,B,t(a,{code:i}),M,k,y,t(a,{code:n}),z],64)}}});var C=r(H,[["__file","modal.html.vue"]]);export{C as default};
