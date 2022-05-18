import{_ as m,f as g,r as i,o as k,a as v,b as e,e as o,w as L,F as R,g as a,c as y}from"./app.49757a98.js";const x={id:"radio",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#radio","aria-hidden":"true"},"#",-1),S=a(" Radio "),B=e("p",null,"Radio inputs are normally presented in radio groups (a collection of radio buttons describing a set of related options). Only one radio button in a group can be selected at the same time.",-1),w=e("h2",{id:"size",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#size","aria-hidden":"true"},"#"),a(" Size")],-1),C=e("p",null,[a("The radio component allows a "),e("code",null,"size"),a(" prop. Labox provides CSS rules for the small, default and large size options.")],-1),D=e("h2",{id:"variant",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variant","aria-hidden":"true"},"#"),a(" Variant")],-1),V=a("Use the "),N=e("code",null,"variant",-1),T=a(" prop to change the input theming according to your configured "),F=a("themes"),U=a("."),A=e("h3",{id:"highlight",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#highlight","aria-hidden":"true"},"#"),a(" Highlight")],-1),E=e("p",null,[a("Set the "),e("code",null,"highlight"),a(" prop to override the default border color with the variant color.")],-1),H=y('<p>Highlight is automatically set to <code>true</code> if the <a href="#feedback">feedback</a> prop is populated. Set highlight to <code>false</code> to override feedback highlighting.</p><h2 id="labels" tabindex="-1"><a class="header-anchor" href="#labels" aria-hidden="true">#</a> Labels</h2><p>Use the <code>label</code>, and <code>description</code> props to describe your radio input.</p>',3),M=e("p",null,[a("You can also use slots for more freedom on label content. Please see the "),e("a",{href:"#slots"},"Slots"),a(" section for information on slot variables.")],-1),O=e("h2",{id:"block",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#block","aria-hidden":"true"},"#"),a(" Block")],-1),P=e("p",null,[a("By default the radio component is displayed as an inline element. By adding the "),e("code",null,"block"),a(" prop, the input container will span the whole container width.")],-1),Y=e("h2",{id:"disabled",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#"),a(" Disabled")],-1),j=e("p",null,"A disabled radio cannot be interacted with.",-1),q=e("h2",{id:"feedback",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#feedback","aria-hidden":"true"},"#"),a(" Feedback")],-1),G=e("p",null,[a("Use the "),e("code",null,"feedback"),a(" slot to add validation or other form errors to your radio input. Labox provides variants for error and success feedback types.")],-1),I=e("h2",{id:"component-reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#component-reference","aria-hidden":"true"},"#"),a(" Component Reference")],-1),J=g({setup(K){const l=`
<LRadio name="fruit" value="apple" label="Apple" block />
<LRadio name="fruit" value="banana" label="Banana" block />`,d=`
<LRadio name="size" value="small" size="sm" label="Small" block />
<LRadio name="size" value="default" size="md" label="Default" block />
<LRadio name="size" value="large" size="lg" label="Large" block />
`,s=`
<div class="grid-4">
  <LRadio variant="primary" label="primary" block />
  <LRadio variant="secondary" label="secondary" block />
  <LRadio variant="error" label="error" block />
  <LRadio variant="success" label="success" block />
</div>
`,n=`
<div class="grid-4">
  <LRadio highlight variant="primary" label="primary" block />
  <LRadio highlight variant="secondary" label="secondary" block />
  <LRadio highlight variant="error" label="error" block />
  <LRadio highlight variant="success" label="success" block />
</div>
`,r=`
<LRadio 
  label="Label"
  description="Description"
/>
`,c=`
<LRadio>
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
</LRadio>
`,h=`
<LRadio block label="Block" />
<LRadio block label="Block 2" />
`,b=`
<LRadio disabled label="Disabled" block />
<LRadio disabled checked label="Disabled" block />`,p=`
<LRadio label="Radio" block feedback="Error!" />
<LRadio label="Radio" block feedback="Success!" feedback-type="success" />
`;return(Q,W)=>{const u=i("Tag"),t=i("Snippet"),_=i("RouterLink"),f=i("ComponentMeta");return k(),v(R,null,[e("h1",x,[z,S,o(u,{text:"<LRadio>"})]),B,o(t,{code:l}),w,C,o(t,{code:d}),D,e("p",null,[V,N,T,o(_,{to:"/configuration/themes/"},{default:L(()=>[F]),_:1}),U]),o(t,{code:s}),A,E,o(t,{code:n}),H,o(t,{code:r}),M,o(t,{code:c}),O,P,o(t,{code:h}),Y,j,o(t,{code:b}),q,G,o(t,{code:p}),I,o(f,{src:"radio"})],64)}}});var Z=m(J,[["__file","radio.html.vue"]]);export{Z as default};
