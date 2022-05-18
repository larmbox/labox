import{_ as m,f as g,r as c,o as C,a as v,b as e,e as t,w as L,F as y,g as o}from"./app.49757a98.js";const w={id:"checkbox",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#checkbox","aria-hidden":"true"},"#",-1),z=o(" Checkbox "),B=e("p",null,"The checkbox is shown as a square box that is ticked (checked) when activated. Checkboxes are used to let a user select one or more options of a limited number of choices.",-1),D=e("h2",{id:"size",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#size","aria-hidden":"true"},"#"),o(" Size")],-1),T=e("p",null,[o("The checkbox component allows a "),e("code",null,"size"),o(" prop. Labox provides CSS rules for the small, default and large size options.")],-1),F=e("h2",{id:"variant",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variant","aria-hidden":"true"},"#"),o(" Variant")],-1),V=o("Use the "),E=e("code",null,"variant",-1),N=o(" prop to change the checkbox theming according to your configured "),R=o("themes"),U=o("."),H=e("h3",{id:"highlight",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#highlight","aria-hidden":"true"},"#"),o(" Highlight")],-1),I=e("p",null,[o("Set the "),e("code",null,"highlight"),o(" prop to override the default border color with the variant color.")],-1),M=e("p",null,[o("Highlight is automatically set to "),e("code",null,"true"),o(" if the "),e("a",{href:"#feedback"},"feedback"),o(" prop is populated. Set highlight to "),e("code",null,"false"),o(" to override feedback highlighting.")],-1),q=e("h2",{id:"labels",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#labels","aria-hidden":"true"},"#"),o(" Labels")],-1),A=e("p",null,[o("Use the "),e("code",null,"label"),o(", and "),e("code",null,"description"),o(" props to describe your checkbox.")],-1),G=e("p",null,[o("You can also use slots for more freedom on label content. Please see the "),e("a",{href:"#slots"},"Slots"),o(" section for information on slot variables.")],-1),O=e("h2",{id:"block",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#block","aria-hidden":"true"},"#"),o(" Block")],-1),P=e("p",null,[o("By default the switch component is displayed as an inline element. By adding the "),e("code",null,"block"),o(" prop, the input container will span the whole container width.")],-1),Y=e("h2",{id:"disabled",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#"),o(" Disabled")],-1),j=e("p",null,"A disabled checkbox cannot be interacted with.",-1),J=e("h2",{id:"indeterminate",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#indeterminate","aria-hidden":"true"},"#"),o(" Indeterminate")],-1),K=e("p",null,"Set the indeterminate prop to render a checkbox in a indeterminate state. This only affects the element visually and the checkbox works like usual.",-1),Q=e("h2",{id:"feedback",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#feedback","aria-hidden":"true"},"#"),o(" Feedback")],-1),W=e("p",null,[o("Use the "),e("code",null,"feedback"),o(" slot to add validation or other form errors to your checkbox input. Labox provides variants for error and success feedback types.")],-1),X=e("h2",{id:"component-reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#component-reference","aria-hidden":"true"},"#"),o(" Component Reference")],-1),Z=g({setup($){const i='<LCheckbox label="Checkbox" />',s=`
<div class="grid-3">
  <LCheckbox size="sm" label="Small" block />
  <LCheckbox size="md" label="Default" block />
  <LCheckbox size="lg" label="Large" block />
</div>
`,l=`
<div class="grid-4">
  <LCheckbox variant="primary" label="primary" />
  <LCheckbox variant="secondary" label="secondary" />
  <LCheckbox variant="error" label="error" />
  <LCheckbox variant="success" label="success" />
</div>
`,n=`
<div class="grid-4">
  <LCheckbox highlight variant="primary" label="primary" />
  <LCheckbox highlight variant="secondary" label="secondary" />
  <LCheckbox highlight variant="error" label="error" />
  <LCheckbox highlight variant="success" label="success" />
</div>
`,h=`
<div class="grid-3">
  <LCheckbox feedback="Error!" label="Feedback" />
  <LCheckbox :highlight="false" feedback="Error!" label="Override" />
</div>
`,r=`
<LCheckbox 
  label="Label"
  description="Description"
/>
`,d=`
<LCheckbox>
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
</LCheckbox>
`,b=`
<LCheckbox block label="Block" />
<LCheckbox block label="Block 2" />
`,k=`
<LCheckbox disabled label="Disabled" block />
<LCheckbox disabled checked label="Disabled" block />`,p=`
<LCheckbox indeterminate label="Indeterminate" />`,_=`
<LCheckbox label="Checkbox" block feedback="Bad!" />
<LCheckbox label="Checkbox" block feedback="Good!" feedback-type="success" />
`;return(ee,oe)=>{const u=c("Tag"),a=c("Snippet"),x=c("RouterLink"),f=c("ComponentMeta");return C(),v(y,null,[e("h1",w,[S,z,t(u,{text:"<LCheckbox>"})]),B,t(a,{code:i}),D,T,t(a,{code:s}),F,e("p",null,[V,E,N,t(x,{to:"/configuration/themes/"},{default:L(()=>[R]),_:1}),U]),t(a,{code:l}),H,I,t(a,{code:n}),M,t(a,{code:h}),q,A,t(a,{code:r}),G,t(a,{code:d}),O,P,t(a,{code:b}),Y,j,t(a,{code:k}),J,K,t(a,{code:p}),Q,W,t(a,{code:_}),X,t(f,{src:"checkbox"})],64)}}});var ae=m(Z,[["__file","checkbox.html.vue"]]);export{ae as default};
