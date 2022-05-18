import{_,f as b,r as a,o as g,a as m,b as t,e,w as B,F as L,g as o,c as f}from"./app.49757a98.js";const x={id:"button",tabindex:"-1"},v=t("a",{class:"header-anchor",href:"#button","aria-hidden":"true"},"#",-1),y=o(" Button "),S=t("p",null,"The button component represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality.",-1),k=t("h2",{id:"size",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#size","aria-hidden":"true"},"#"),o(" Size")],-1),z=t("p",null,[o("The button component allows a "),t("code",null,"size"),o(" prop. Labox provides CSS rules for the small, default and large size options.")],-1),w=t("h2",{id:"variant",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#variant","aria-hidden":"true"},"#"),o(" Variant")],-1),T=o("Use the "),C=t("code",null,"variant",-1),N=o(" prop to change the button theming according to your configured "),V=o("themes"),I=o("."),D=t("h3",{id:"outline",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#outline","aria-hidden":"true"},"#"),o(" Outline")],-1),E=t("p",null,[o("Add the "),t("code",null,"outline"),o(" prop to change the button to a outline variant.")],-1),R=t("h2",{id:"block",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#block","aria-hidden":"true"},"#"),o(" Block")],-1),A=t("p",null,[o("By default the button component is displayed as an inline element. By adding the "),t("code",null,"block"),o(" prop, the button will span the whole container width.")],-1),F=t("h2",{id:"disabled",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#"),o(" Disabled")],-1),M=t("p",null,[o("Set the "),t("code",null,"disabled"),o(" prop to disable button default functionality.")],-1),P=t("h2",{id:"icons",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#icons","aria-hidden":"true"},"#"),o(" Icons")],-1),U=t("p",null,[o("Use the "),t("code",null,"icon-left"),o(" and "),t("code",null,"icon-right"),o(" props to add an icon according to your "),t("a",{href:"/labox/components/icon"},"LIcon"),o(" settings. If your button has no text, use the "),t("code",null,"icon"),o(" prop instead.")],-1),O=f('<p>Icons are automatically scaled to button size.</p><h2 id="loading" tabindex="-1"><a class="header-anchor" href="#loading" aria-hidden="true">#</a> Loading</h2><p>Add the <code>loading</code> prop to show the <a href="/labox/components/loading">Loading</a> component inside the button. <strong>Note:</strong> The Loading component&#39;s variant is set to <code>inherit</code>, inheriting the text color of the button.</p>',3),j=t("p",null,"The button will maintain its width when changed from non-loading to loading:",-1),q=t("h2",{id:"component-reference",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#component-reference","aria-hidden":"true"},"#"),o(" Component Reference")],-1),G=b({setup(H){const i=`
<div class="size-display">
  <LButton size="sm">Small</LButton>
  <LButton size="md">Default</LButton>
  <LButton size="lg">Large</LButton>
</div>
`,s=`
<div class="grid-4">
  <LButton variant="primary">Primary</LButton>
  <LButton variant="secondary">Secondary</LButton>
  <LButton variant="error">Error</LButton>
  <LButton variant="success">Success</LButton>
</div>
`,d=`
<div class="grid-4">
  <LButton variant="primary" outline>Primary</LButton>
  <LButton variant="secondary" outline>Secondary</LButton>
  <LButton variant="error" outline>Error</LButton>
  <LButton variant="success" outline>Success</LButton>
</div>
`,c=`
<div class="button-display">
  <LButton icon-left="box">Text</LButton>
  <LButton icon-right="mailbox">Text</LButton>
  <LButton icon="bounding-box-circles"></LButton>
</div>
`,r=`
<template>
  <LButton :loading="loading">Loading</LButton>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    }
  }
}
<\/script>
`,l=`
<template>
  <LButton 
    :loading="loading"
    @click="loading = !loading"
  >
    Click to toggle loading state!
  </LButton>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  }
}
<\/script>
`;return(J,K)=>{const u=a("Tag"),n=a("Snippet"),h=a("RouterLink"),p=a("ComponentMeta");return g(),m(L,null,[t("h1",x,[v,y,e(u,{text:"<LButton>"})]),S,e(n,{code:"<LButton>Button</LButton>"}),k,z,e(n,{code:i,class:"sizes"}),w,t("p",null,[T,C,N,e(h,{to:"/configuration/themes/"},{default:B(()=>[V]),_:1}),I]),e(n,{code:s}),D,E,e(n,{code:d}),R,A,e(n,{code:"<LButton block>Block</LButton>"}),F,M,e(n,{code:"<LButton disabled>Disabled</LButton>"}),P,U,e(n,{code:c}),O,e(n,{code:r}),j,e(n,{code:l}),q,e(p,{src:"button"})],64)}}});var W=_(G,[["__file","button.html.vue"]]);export{W as default};
