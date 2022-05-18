import{_ as m,f as g,r as o,o as S,a as y,b as e,e as l,w as L,F as k,g as a}from"./app.49757a98.js";const x={id:"select",tabindex:"-1"},B=e("a",{class:"header-anchor",href:"#select","aria-hidden":"true"},"#",-1),C=a(" Select "),z=e("p",null,"The select component represents an input control that provides a menu of options.",-1),w=e("h2",{id:"size",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#size","aria-hidden":"true"},"#"),a(" Size")],-1),A=e("p",null,[a("The select component allows a "),e("code",null,"size"),a(" prop. Labox provides CSS rules for the small, default and large size options.")],-1),F=e("h2",{id:"variant",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variant","aria-hidden":"true"},"#"),a(" Variant")],-1),T=a("Use the "),D=e("code",null,"variant",-1),E=a(" prop to change the input theming according to your configured "),H=a("themes"),V=a("."),N=e("h3",{id:"highlight",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#highlight","aria-hidden":"true"},"#"),a(" Highlight")],-1),R=e("p",null,[a("Set the "),e("code",null,"highlight"),a(" prop to override the default border color with the variant color.")],-1),U=e("p",null,[a("Highlight is automatically set to "),e("code",null,"true"),a(" if the "),e("a",{href:"#feedback"},"feedback"),a(" prop is populated. Set highlight to "),e("code",null,"false"),a(" to override feedback highlighting.")],-1),M=e("h2",{id:"labels",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#labels","aria-hidden":"true"},"#"),a(" Labels")],-1),P=e("p",null,[a("Use the "),e("code",null,"label"),a(", "),e("code",null,"description"),a(" and "),e("code",null,"help"),a(" props to describe your select fields.")],-1),Y=e("p",null,[a("You can also use slots for more freedom on label content. Please see the "),e("a",{href:"#slots"},"Slots"),a(" section for information on slot variables.")],-1),O=e("h2",{id:"block",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#block","aria-hidden":"true"},"#"),a(" Block")],-1),$=e("p",null,[a("By default the select component is displayed as an inline element. By adding the "),e("code",null,"block"),a(" prop, the select element will span the whole container width.")],-1),j=e("h2",{id:"disabled",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#"),a(" Disabled")],-1),q=e("p",null,"A disabled select field cannot be interacted with.",-1),G=e("h2",{id:"feedback",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#feedback","aria-hidden":"true"},"#"),a(" Feedback")],-1),I=e("p",null,[a("Use the "),e("code",null,"feedback"),a(" slot to add validation or other form errors to your select field. Labox provides variants for error and success feedback types.")],-1),J=e("h2",{id:"component-reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#component-reference","aria-hidden":"true"},"#"),a(" Component Reference")],-1),K=g({setup(Q){const r=`<template>
  <LSelect
    v-model="selected"
    label="Select"
    :options="[
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cranberry', value: 'cranberry' }
    ]"
    :help="selected ? \`You selected \${selected}.\` : \`Please select something.\`"
  />
</template>

<script>
export default {
  data() {
    return {
      selected: null
    }
  }
}
<\/script>
`,s=`<template>
  <div class="grid-3">
    <LSelect size="sm" :options="options" label="Small" />
    <LSelect size="md" :options="options" label="Default" />
    <LSelect size="lg" :options="options" label="Large" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cranberry', value: 'cranberry' }
      ]
    }
  }
}
<\/script>
`,n=`
<div class="grid-4">
  <LSelect variant="primary" placeholder="primary" />
  <LSelect variant="secondary" placeholder="secondary" />
  <LSelect variant="error" placeholder="error" />
  <LSelect variant="success" placeholder="success"/>
</div>
`,c=`
<div class="grid-4">
  <LSelect highlight variant="primary" placeholder="primary" />
  <LSelect highlight variant="secondary" placeholder="secondary" />
  <LSelect highlight variant="error" placeholder="error" />
  <LSelect highlight variant="success" placeholder="success"/>
</div>
`,i=`
<div class="grid-3">
  <LSelect feedback="Error!" placeholder="Feedback"/>
  <LSelect :highlight="false" feedback="Error!" placeholder="Override"/>
</div>
`,d=`
<LSelect 
  label="Label"
  description="Description"
  help="Help"
  :options="[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cranberry', value: 'cranberry' }
  ]"
/>
`,h=`
<LSelect 
  :options="[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cranberry', value: 'cranberry' }
  ]">
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
  <template #help>
    <span style="color: purple" v-text="'Help'" />
  </template>
</LSelect>
`,p=`
<LSelect 
  block
  label="Block" 
  :options="[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cranberry', value: 'cranberry' }
  ]"
/>
`,b=`
<template>
<LSelect 
  v-model="selected" 
  :options="[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cranberry', value: 'cranberry' }
  ]"
  disabled
/>
</template>

<script>
export default {
  data() {
    return {
      selected: "cranberry"
    }
  }
}
<\/script>
`,u=`
<div class="grid-2">
  <LSelect label="Select" block feedback="Error!" />
  <LSelect label="Select" block feedback="Success!" feedback-type="success" />
</div>
`;return(W,X)=>{const _=o("Tag"),t=o("Snippet"),f=o("RouterLink"),v=o("ComponentMeta");return S(),y(k,null,[e("h1",x,[B,C,l(_,{text:"<LSelect>"})]),z,l(t,{code:r}),w,A,l(t,{code:s}),F,e("p",null,[T,D,E,l(f,{to:"/configuration/themes/"},{default:L(()=>[H]),_:1}),V]),l(t,{code:n}),N,R,l(t,{code:c}),U,l(t,{code:i}),M,P,l(t,{code:d}),Y,l(t,{code:h}),O,$,l(t,{code:p}),j,q,l(t,{code:b}),G,I,l(t,{code:u}),J,l(v,{src:"select"})],64)}}});var ee=m(K,[["__file","select.html.vue"]]);export{ee as default};
