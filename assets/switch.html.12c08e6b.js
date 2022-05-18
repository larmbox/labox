import{_ as g,f as m,r as i,o as k,a as S,b as e,e as a,w as v,F as L,g as t}from"./app.49757a98.js";const x={id:"switch",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#switch","aria-hidden":"true"},"#",-1),z=t(" Switch "),B=e("p",null,[t("The switch works just like a "),e("a",{href:"/labox/components/checkbox"},"checkbox"),t(" but has a different appearance.")],-1),C=e("h2",{id:"size",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#size","aria-hidden":"true"},"#"),t(" Size")],-1),D=e("p",null,[t("The switch component allows a "),e("code",null,"size"),t(" prop. Labox provides CSS rules for the small, default and large size options.")],-1),F=e("h2",{id:"variant",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variant","aria-hidden":"true"},"#"),t(" Variant")],-1),T=t("Use the "),E=e("code",null,"variant",-1),V=t(" prop to change the switch theming according to your configured "),H=t("themes"),N=t("."),R=e("h3",{id:"highlight",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#highlight","aria-hidden":"true"},"#"),t(" Highlight")],-1),U=e("p",null,[t("Set the "),e("code",null,"highlight"),t(" prop to override the default border color with the variant color.")],-1),M=e("p",null,[t("Highlight is automatically set to "),e("code",null,"true"),t(" if the "),e("a",{href:"#feedback"},"feedback"),t(" prop is populated. Set highlight to "),e("code",null,"false"),t(" to override feedback highlighting.")],-1),P=e("h2",{id:"labels",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#labels","aria-hidden":"true"},"#"),t(" Labels")],-1),j=e("p",null,[t("Use the "),e("code",null,"label"),t(", and "),e("code",null,"description"),t(" props to describe your switch.")],-1),A=e("p",null,[t("You can also use slots for more freedom on label content. Please see the "),e("a",{href:"#slots"},"Slots"),t(" section for information on slot variables.")],-1),O=e("h2",{id:"block",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#block","aria-hidden":"true"},"#"),t(" Block")],-1),Y=e("p",null,[t("By default the checkbox component is displayed as an inline element. By adding the "),e("code",null,"block"),t(" prop, the input container will span the whole container width.")],-1),q=e("h2",{id:"disabled",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#"),t(" Disabled")],-1),G=e("p",null,"A disabled switch cannot be interacted with.",-1),I=e("h2",{id:"feedback",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#feedback","aria-hidden":"true"},"#"),t(" Feedback")],-1),J=e("p",null,[t("Use the "),e("code",null,"feedback"),t(" slot to add validation or other form errors to your switch input. Labox provides variants for error and success feedback types.")],-1),K=e("h2",{id:"component-reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#component-reference","aria-hidden":"true"},"#"),t(" Component Reference")],-1),Q=m({setup(W){const c='<LSwitch label="Switch" />',s=`
<div class="grid-3">
  <LSwitch size="sm" label="Small" block />
  <LSwitch size="md" label="Default" block />
  <LSwitch size="lg" label="Large" block />
</div>
`,l=`
<div class="grid-4">
  <LSwitch variant="primary" label="primary" />
  <LSwitch variant="secondary" label="secondary" />
  <LSwitch variant="error" label="error" />
  <LSwitch variant="success" label="success" />
</div>
`,n=`
<div class="grid-4">
  <LSwitch highlight variant="primary" label="primary" />
  <LSwitch highlight variant="secondary" label="secondary" />
  <LSwitch highlight variant="error" label="error" />
  <LSwitch highlight variant="success" label="success" />
</div>
`,r=`
<div class="grid-3">
  <LSwitch feedback="Error!" label="Feedback" />
  <LSwitch :highlight="false" feedback="Error!" label="Override" />
</div>
`,h=`
<LSwitch 
  label="Label"
  description="Description"
/>
`,d=`
<LSwitch placeholder="Placeholder">
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
</LSwitch>
`,b=`
<LSwitch block label="Block" />
<LSwitch block label="Block 2" />
`,p=`
<LSwitch disabled label="Disabled" block />
<LSwitch checked disabled label="Disabled" block />`,_=`
<LSwitch label="Switch" block feedback="Error!" description="Hello world!" />
<LSwitch label="Switch" block feedback="Success!" feedback-type="success" />
`;return(X,Z)=>{const u=i("Tag"),o=i("Snippet"),f=i("RouterLink"),w=i("ComponentMeta");return k(),S(L,null,[e("h1",x,[y,z,a(u,{text:"<LSwitch>"})]),B,a(o,{code:c}),C,D,a(o,{code:s}),F,e("p",null,[T,E,V,a(f,{to:"/configuration/themes/"},{default:v(()=>[H]),_:1}),N]),a(o,{code:l}),R,U,a(o,{code:n}),M,a(o,{code:r}),P,j,a(o,{code:h}),A,a(o,{code:d}),O,Y,a(o,{code:b}),q,G,a(o,{code:p}),I,J,a(o,{code:_}),K,a(w,{src:"switch"})],64)}}});var ee=g(Q,[["__file","switch.html.vue"]]);export{ee as default};
