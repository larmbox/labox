import{_,f as p,r as t,o as m,a as g,b as e,e as n,w as L,F as u,g as o}from"./app.49757a98.js";const v={id:"loading",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#loading","aria-hidden":"true"},"#",-1),x=o(" Loading "),b=e("p",null,"The loading component is used to show users that an activity is happening in the background.",-1),y=e("h2",{id:"size",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#size","aria-hidden":"true"},"#"),o(" Size")],-1),z=e("p",null,[o("The loading component allows a "),e("code",null,"size"),o(" prop. Labox provides CSS rules for the small, default and large size options.")],-1),C=e("h2",{id:"mode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mode","aria-hidden":"true"},"#"),o(" Mode")],-1),k=e("p",null,[o("Labox provides two loading animation modes, "),e("code",null,"spinner"),o(" and "),e("code",null,"dots"),o(".")],-1),w=e("h2",{id:"variant",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#variant","aria-hidden":"true"},"#"),o(" Variant")],-1),S=o("Use the "),T=e("code",null,"variant",-1),V=o(" prop to change the button theming according to your configured "),B=o("themes"),M=o("."),N=e("h2",{id:"component-reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#component-reference","aria-hidden":"true"},"#"),o(" Component Reference")],-1),R=p({setup(F){const i=`
<LLoading />
`,s=`
<div class="icon-display">
  <LLoading size="sm" />
  <LLoading size="md" />
  <LLoading size="lg" />
</div>
`,d=`
<div class="loading-display">
  <LLoading mode="spinner" />
  <LLoading mode="dots" />
</div>
`,r=`
<div class="loading-display">
  <LLoading variant="primary" mode="spinner" />
  <LLoading variant="secondary" mode="spinner" />
  <LLoading variant="error" mode="spinner" />
  <LLoading variant="success" mode="spinner" />
  <LLoading variant="primary" mode="dots" />
  <LLoading variant="secondary" mode="dots" />
  <LLoading variant="error" mode="dots" />
  <LLoading variant="success" mode="dots" />
</div>
`;return(E,U)=>{const c=t("Tag"),a=t("Snippet"),h=t("RouterLink"),l=t("ComponentMeta");return m(),g(u,null,[e("h1",v,[f,x,n(c,{text:"<LLoading>"})]),b,n(a,{code:i}),y,z,n(a,{code:s}),C,k,n(a,{code:d}),w,e("p",null,[S,T,V,n(h,{to:"/configuration/themes/"},{default:L(()=>[B]),_:1}),M]),n(a,{code:r}),N,n(l,{src:"loading"})],64)}}});var q=_(R,[["__file","loading.html.vue"]]);export{q as default};
