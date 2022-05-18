import{_ as v,f as T,r,o as L,a as k,b as e,e as t,w as y,F as z,g as a,c as w}from"./app.49757a98.js";const S={id:"textarea",tabindex:"-1"},B=e("a",{class:"header-anchor",href:"#textarea","aria-hidden":"true"},"#",-1),C=a(" Textarea "),D=e("p",null,"The Textarea component represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text.",-1),R=e("h2",{id:"size",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#size","aria-hidden":"true"},"#"),a(" Size")],-1),V=e("p",null,[a("The Textarea component allows a "),e("code",null,"size"),a(" prop. Labox provides CSS rules for the small, default and large size options.")],-1),F=e("h2",{id:"variant",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variant","aria-hidden":"true"},"#"),a(" Variant")],-1),N=a("Use the "),H=e("code",null,"variant",-1),P=a(" prop to change the input theming according to your configured "),U=a("themes"),E=a("."),A=e("h3",{id:"highlight",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#highlight","aria-hidden":"true"},"#"),a(" Highlight")],-1),M=e("p",null,[a("Set the "),e("code",null,"highlight"),a(" prop to override the default border color with the variant color.")],-1),G=e("p",null,[a("Highlight is automatically set to "),e("code",null,"true"),a(" if the "),e("a",{href:"#feedback"},"feedback"),a(" prop is populated. Set highlight to "),e("code",null,"false"),a(" to override feedback highlighting.")],-1),O=e("h2",{id:"labels",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#labels","aria-hidden":"true"},"#"),a(" Labels")],-1),Y=e("p",null,[a("Use the "),e("code",null,"label"),a(", "),e("code",null,"description"),a(" and "),e("code",null,"help"),a(" props to describe your input fields.")],-1),j=e("p",null,[a("You can also use slots for more freedom on label content. Please see the "),e("a",{href:"#slots"},"Slots"),a(" section for information on slot variables.")],-1),q=e("h2",{id:"block",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#block","aria-hidden":"true"},"#"),a(" Block")],-1),I=e("p",null,[a("By default the textarea component is displayed as an inline element. By adding the "),e("code",null,"block"),a(" prop, the input will span the whole container width.")],-1),J=e("h2",{id:"disabled",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#"),a(" Disabled")],-1),K=e("p",null,"A disabled textarea field cannot be interacted with.",-1),Q=e("h2",{id:"readonly",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#readonly","aria-hidden":"true"},"#"),a(" Readonly")],-1),W=e("p",null,[a("Readonly differs from "),e("a",{href:"#disabled"},"Disabled"),a(" by still allowing selecting the text already present in the input field.")],-1),X=w('<h2 id="resize" tabindex="-1"><a class="header-anchor" href="#resize" aria-hidden="true">#</a> Resize</h2><p>Use the <code>resize</code> prop to allow or disallow resizing the textarea. Allowed values are <code>horizontal</code>, <code>vertical</code>, <code>none</code> or <code>both</code>. The default value is <code>both</code>.</p>',2),Z=e("h2",{id:"feedback",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#feedback","aria-hidden":"true"},"#"),a(" Feedback")],-1),$=e("p",null,[a("Use the "),e("code",null,"feedback"),a(" slot to add validation or other form errors to your textarea field. Labox provides variants for error and success feedback types.")],-1),ee=e("h2",{id:"component-reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#component-reference","aria-hidden":"true"},"#"),a(" Component Reference")],-1),ae=T({setup(te){const l='<LTextarea label="Textarea" help="Please enter something here." />',d=`
<div class="grid-3">
  <LTextarea size="sm" placeholder="Small" />
  <LTextarea size="md" placeholder="Default" />
  <LTextarea size="lg" placeholder="Large" />
</div>
`,s=`
<div class="grid-4">
  <LTextarea variant="primary" placeholder="primary" />
  <LTextarea variant="secondary" placeholder="secondary" />
  <LTextarea variant="error" placeholder="error" />
  <LTextarea variant="success" placeholder="success"/>
</div>
`,i=`
<div class="grid-4">
  <LTextarea highlight variant="primary" placeholder="primary" />
  <LTextarea highlight variant="secondary" placeholder="secondary" />
  <LTextarea highlight variant="error" placeholder="error" />
  <LTextarea highlight variant="success" placeholder="success"/>
</div>
`,n=`
<div class="grid-3">
  <LTextarea feedback="Error!" placeholder="Feedback"/>
  <LTextarea :highlight="false" feedback="Error!" placeholder="Override"/>
</div>
`,c=`
<LTextarea 
  label="Label"
  description="Description"
  help="Help"
  placeholder="Placeholder"
/>
`,h=`
<LTextarea placeholder="Placeholder">
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
  <template #help>
    <span style="color: purple" v-text="'Help'" />
  </template>
</LTextarea>
`,p=`
<LTextarea block label="Block" />
`,u=`
<LTextarea disabled placeholder="Disabled" />`,_=`
<template>
  <LTextarea v-model="text" readonly />
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
`,b=`
<LTextarea resize="none" placeholder="Not resizeable!" />
`,f=`
<div class="grid-2">
  <LTextarea label="Textarea" block feedback="Bad!" />
  <LTextarea label="Textarea" block feedback="Good!" feedback-type="success" />
</div>
`;return(oe,re)=>{const x=r("Tag"),o=r("Snippet"),m=r("RouterLink"),g=r("ComponentMeta");return L(),k(z,null,[e("h1",S,[B,C,t(x,{text:"<LTextarea>"})]),D,t(o,{code:l}),R,V,t(o,{code:d}),F,e("p",null,[N,H,P,t(m,{to:"/configuration/themes/"},{default:y(()=>[U]),_:1}),E]),t(o,{code:s}),A,M,t(o,{code:i}),G,t(o,{code:n}),O,Y,t(o,{code:c}),j,t(o,{code:h}),q,I,t(o,{code:p}),J,K,t(o,{code:u}),Q,W,t(o,{code:_}),X,t(o,{code:b}),Z,$,t(o,{code:f}),ee,t(g,{src:"textarea"})],64)}}});var de=v(ae,[["__file","textarea.html.vue"]]);export{de as default};
