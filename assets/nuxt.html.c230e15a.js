import{_ as n,c as s}from"./app.49757a98.js";const a={},t=s(`<h1 id="nuxt" tabindex="-1"><a class="header-anchor" href="#nuxt" aria-hidden="true">#</a> Nuxt</h1><p>Labox supports Nuxt.js <code>&gt;3.0.0</code>.</p><p>Add <code>plugins/labox.ts</code> to you project with the following content:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineNuxtPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  createLabox<span class="token punctuation">,</span>
  LButton <span class="token comment">/* Add all components you would like to use here. */</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@larmbox/labox&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Labox <span class="token operator">=</span> <span class="token function">createLabox</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">[</span>LButton <span class="token comment">/* Add all components you would like to use here. */</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtPlugin</span><span class="token punctuation">(</span><span class="token punctuation">(</span>nuxtApp<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  nuxtApp<span class="token punctuation">.</span>vueApp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Labox<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Stylesheets are loaded <a href="/labox/getting-started/introduction#stylesheet">just like in Vue</a>.</p>`,5);function p(e,o){return t}var u=n(a,[["render",p],["__file","nuxt.html.vue"]]);export{u as default};
