import{_ as I,f as y,r as l,o as x,a as B,b as e,e as o,w,F as P,g as t}from"./app.49757a98.js";const S={id:"input",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#input","aria-hidden":"true"},"#",-1),C=t(" Input "),T=e("p",null,"The input element is used to create interactive controls for web-based forms in order to accept data from the user.",-1),D=e("h2",{id:"size",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#size","aria-hidden":"true"},"#"),t(" Size")],-1),V=e("p",null,[t("The input component allows a "),e("code",null,"size"),t(" prop. Labox provides CSS rules for the small, default and large size options.")],-1),F=e("h2",{id:"variant",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variant","aria-hidden":"true"},"#"),t(" Variant")],-1),H=t("Use the "),R=e("code",null,"variant",-1),A=t(" prop to change the input theming according to your configured "),U=t("themes"),E=t("."),M=e("h3",{id:"highlight",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#highlight","aria-hidden":"true"},"#"),t(" Highlight")],-1),N=e("p",null,[t("Set the "),e("code",null,"highlight"),t(" prop to override the default border color with the variant color.")],-1),Y=e("p",null,[t("Highlight is automatically set to "),e("code",null,"true"),t(" if the "),e("a",{href:"#feedback"},"feedback"),t(" prop is populated. Set highlight to "),e("code",null,"false"),t(" to override feedback highlighting.")],-1),G=e("h2",{id:"label",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#label","aria-hidden":"true"},"#"),t(" Label")],-1),O=e("p",null,[t("Use the "),e("code",null,"label"),t(", "),e("code",null,"description"),t(" and "),e("code",null,"help"),t(" props to describe your input field.")],-1),$=e("p",null,[t("You can also use slots for more freedom on label content. Please see the "),e("a",{href:"#slots"},"Slots"),t(" section for information on slot variables.")],-1),j=e("h2",{id:"block",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#block","aria-hidden":"true"},"#"),t(" Block")],-1),q=e("p",null,[t("By default the input component is displayed as an inline element. By adding the "),e("code",null,"block"),t(" prop, the input field will span the whole container width.")],-1),J=e("h2",{id:"disabled",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#"),t(" Disabled")],-1),K=e("p",null,"A disabled input field cannot be interacted with.",-1),Q=e("h2",{id:"readonly",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#readonly","aria-hidden":"true"},"#"),t(" Readonly")],-1),W=e("p",null,[t("Readonly differs from "),e("a",{href:"#disabled"},"Disabled"),t(" by still allowing selecting the text already present in the input field.")],-1),X=e("h2",{id:"prepend-append",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prepend-append","aria-hidden":"true"},"#"),t(" Prepend & Append")],-1),Z=e("p",null,[t("Use the "),e("code",null,"prepend"),t(" and "),e("code",null,"append"),t(" props to add text before or after the input field.")],-1),ee=e("p",null,"You can also use slots for more freedom on prepend or append content:",-1),te=e("h2",{id:"feedback",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#feedback","aria-hidden":"true"},"#"),t(" Feedback")],-1),oe=e("p",null,[t("Use the "),e("code",null,"feedback"),t(" slot to add validation or other form errors to your input field. Labox provides variants for error and success feedback types.")],-1),ae=e("h2",{id:"type",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#type","aria-hidden":"true"},"#"),t(" Type")],-1),le=e("p",null,[t("You can use all native browser HTML5 input types. Default is "),e("code",null,"text"),t(".")],-1),ne=e("h2",{id:"component-reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#component-reference","aria-hidden":"true"},"#"),t(" Component Reference")],-1),de=y({setup(re){const n='<LInput label="Input" help="Please enter something here." />',d=`<div class="grid-3">
  <LInput size="sm" placeholder="Small" />
  <LInput size="md" placeholder="Default" />
  <LInput size="lg" placeholder="Large" />
</div>`,r=`
<div class="grid-4">
  <LInput variant="primary" placeholder="primary" />
  <LInput variant="secondary" placeholder="secondary" />
  <LInput variant="error" placeholder="error" />
  <LInput variant="success" placeholder="success"/>
</div>
`,s=`
<div class="grid-4">
  <LInput highlight variant="primary" placeholder="primary" />
  <LInput highlight variant="secondary" placeholder="secondary" />
  <LInput highlight variant="error" placeholder="error" />
  <LInput highlight variant="success" placeholder="success"/>
</div>
`,i=`
<div class="grid-3">
  <LInput feedback="Error!" placeholder="Feedback"/>
  <LInput :highlight="false" feedback="Error!" placeholder="Override"/>
</div>
`,c=`
<LInput 
  label="Label"
  description="Description"
  help="Help"
  placeholder="Placeholder"
/>
`,p=`
<LInput placeholder="Placeholder">
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
  <template #help>
    <span style="color: purple" v-text="'Help'" />
  </template>
</LInput>
`,h=`
<LInput block label="Block" />
`,u=`
<div class="grid-3">
  <LInput disabled placeholder="Placeholder" />
  <LInput disabled value="Value" placeholder="Placeholder" />
</div>
`,b=`
<template>
  <LInput v-model="text" readonly />
</template>

<script>
export default {
  data() {
    return {
      text: "Value"
    }
  }
}
<\/script>
`,_=`
<LInput block prepend="Prepended" placeholder="Placeholder" />
<LInput block append="Appended" placeholder="Placeholder" />
<LInput block prepend="$" append="\u20AC" placeholder="Placeholder" />`,f=`
<LInput block placeholder="Placeholder">
  <template v-slot:prepend>
    <LButton>Button</LButton>
    <LButton variant="success">Button</LButton>
  </template>
  <template v-slot:append>
    <LButton>Button</LButton>
    <LButton variant="success">Button</LButton>
  </template>
</LInput>
`,m=`
<LInput label="Input" block feedback="Bad!" />
<LInput label="Input" block feedback="Good!" feedback-type="success" />
`,L=`
<div class="grid-3">
  <LInput block label="text" type="text" />
  <LInput block label="number" type="number" />
  <LInput block label="email" type="email" />
  <LInput block label="tel" type="tel" />
  <LInput block label="password" type="password" />
  <LInput block label="search" type="search" />
  <LInput block label="url" type="url" />
  <LInput block label="date" type="date" />
  <LInput block label="time" type="time" />
  <LInput block label="range" type="range" />
  <LInput block label="color" type="color" />
</div>`;return(se,ie)=>{const g=l("Tag"),a=l("Snippet"),v=l("RouterLink"),k=l("ComponentMeta");return x(),B(P,null,[e("h1",S,[z,C,o(g,{text:"<LInput>"})]),T,o(a,{code:n}),D,V,o(a,{code:d}),F,e("p",null,[H,R,A,o(v,{to:"/configuration/themes/"},{default:w(()=>[U]),_:1}),E]),o(a,{code:r}),M,N,o(a,{code:s}),Y,o(a,{code:i}),G,O,o(a,{code:c}),$,o(a,{code:p}),j,q,o(a,{code:h}),J,K,o(a,{code:u}),Q,W,o(a,{code:b}),X,Z,o(a,{code:_}),ee,o(a,{code:f}),te,oe,o(a,{code:m}),ae,le,o(a,{code:L}),ne,o(k,{src:"input"})],64)}}});var pe=I(de,[["__file","input.html.vue"]]);export{pe as default};
