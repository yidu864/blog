import{_ as e,o as a,c as n,e as s}from"./app.7242b02f.js";const t={},p=s(`<h2 id="\u8D77\u56E0" tabindex="-1"><a class="header-anchor" href="#\u8D77\u56E0" aria-hidden="true">#</a> \u8D77\u56E0</h2><p>\u6700\u8FD1\u78B0\u5230\u4E86\u4E00\u4E9B\u4E4B\u524D\u6CA1\u9047\u5230\u8FC7\u7684\u5B57\u7B26\u4E32\u5904\u7406\u9700\u6C42, \u8BB0\u5F55\u4E00\u4E0B</p><p>\u5177\u4F53\u5C31\u662F \u5305\u542B\u4E00\u4E9B\u8BCD\u5E76\u6392\u9664\u4E00\u4E9B\u8BCD</p><p>\u636E\u4E3E\u4E2A\u4F8B\u5B50, <code>\u6211\u771F\u7684\u6000\u7591\u67D0\u4E9B\u4EBA\u95F2\u7684\u7A0B\u5EA6</code></p><p>\u5173\u952E\u8BCD\u662F <code>\u7A0B\u5EA6</code>, \u4F46\u662F\u4E0D\u80FD\u5339\u914D\u5230 <code>\u4E0D\u6000\u7591\uFF0C\u5047\u7684</code> \u5B57\u6837</p><p>\u6B64\u65F6\u5C31\u662F\u6B63\u5219-\u73AF\u89C6\u7684\u4F7F\u7528\u573A\u666F\u4E86</p><h2 id="\u73AF\u89C6\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u73AF\u89C6\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u73AF\u89C6\u662F\u4EC0\u4E48</h2><p>\u7B80\u5355\u8BF4\u5C31\u662F\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u4E00\u79CD\u673A\u5236</p><p>\u5177\u4F53\u4E3A <code>(?=pattern) / (?!pattern) / (?&lt;=pattern) / (?&lt;!pattern)</code></p><p>\u4E0A\u9762\u7684\u8868\u8FBE\u5F0F\u5C31\u662F\u6B63\u5219\u7684\u73AF\u89C6\u5339\u914D\u4E32, \u7528\u4E8E\u786E\u5B9A&quot;\u5468\u56F4\u73AF\u5883&quot;\u3002\u524D\u4E24\u79CD\u662F\u662F\u524D\u77BB\uFF0C\u540E\u4E24\u79CD\u662F\u540E\u987E</p><p>\u6BCF\u79CD\u6709 <code>!/?</code> \u7684\u533A\u5206, \u4E5F\u5C31\u662F\u6EE1\u8DB3\u5219\u5339\u914D\u6210\u529F/\u4E0D\u6EE1\u8DB3\u5219\u5339\u914D\u6210\u529F\u3002</p><h2 id="pattern-pattern" tabindex="-1"><a class="header-anchor" href="#pattern-pattern" aria-hidden="true">#</a> (?=pattern) / (?!pattern)</h2><div class="language-txt ext-txt"><pre class="language-txt"><code>\u5F85\u5339\u914D\u5B57\u7B26\u4E32: ABCDEFG ACDEFH
\u60F3\u5339\u914D\u5230EF
</code></pre></div><p>\u76F4\u63A5\u4F7F\u7528\u6B63\u5219\u5B57\u7B26\u4E32\u5339\u914D</p><div class="language-txt ext-txt"><pre class="language-txt"><code>EF
</code></pre></div><p>\u90A3\u4E48\uFF0C\u4E24\u4E2A\u5B57\u7B26\u4E32\u90FD\u4F1A\u5339\u914D\u5230</p><p>\u4F7F\u7528\u73AF\u89C6\u5339\u914D</p><div class="language-txt ext-txt"><pre class="language-txt"><code>EF(?=G)
</code></pre></div><p>\u6B64\u65F6\u53EA\u4F1A\u5339\u914D\u5230\u7B2C\u4E00\u4E2A <code>ABCDEFG</code>, \u56E0\u4E3A <code>(?=G)</code> \u7684\u4F5C\u7528\u5C31\u662F\u786E\u8BA4 <code>G</code> \u5B58\u5728\u4E8E <code>EF</code> \u4E4B\u540E\uFF0C\u6EE1\u8DB3\u6B64\u6761\u4EF6\u5C31\u53EF\u5339\u914D</p><div class="language-txt ext-txt"><pre class="language-txt"><code>EF(?!G)
</code></pre></div><p>\u4E0A\u9762\u7684\u8868\u8FBE\u5F0F\u4E0E <code>=</code> \u76F8\u53CD\uFF0C\u4E0D\u6EE1\u8DB3\u624D\u53EF\u5339\u914D\uFF0C\u56E0\u6B64\u53EA\u4F1A\u5339\u914D\u5230 <code>ACDEFH</code></p><p>\u6D4B\u8BD5: \u4F7F\u7528\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u6216\u8005\u5728\u7EBF\u5DE5\u5177 <a href="https://c.runoob.com/front-end/854/" target="_blank" rel="noopener noreferrer">https://c.runoob.com/front-end/854/</a></p><h2 id="pattern-pattern-1" tabindex="-1"><a class="header-anchor" href="#pattern-pattern-1" aria-hidden="true">#</a> (?&lt;=pattern) / (?&lt;!pattern)</h2><p>\u8FD9\u4E24\u79CD\u73AF\u89C6\u53EB\u505A\u540E\u987E, <code>?=/?!</code> \u7528\u4E8E\u627E\u5B57\u7B26\u540E\u7684\u5185\u5BB9, \u800C <code>?&lt;=/?&lt;!</code> \u5219\u7528\u4E8E\u627E\u5B57\u7B26\u524D\u7684\u5185\u5BB9</p><p>\u4EE5\u4E0B\u4E3A\u4F8B</p><div class="language-txt ext-txt"><pre class="language-txt"><code>\u5F85\u5339\u914D\u5B57\u7B26\u4E32: ABCDEFG DCBAEFH
\u60F3\u5339\u914D\u5230EF
</code></pre></div><p>\u4F7F\u7528\u540E\u987E</p><div class="language-txt ext-txt"><pre class="language-txt"><code>(?&lt;=CD)EF
</code></pre></div><p>\u8868\u793A\u8981\u5339\u914D\u5230\u524D\u9762\u6709 CD \u7684 EF</p><p>\u53CD\u4E4B <code>(?&lt;!CD)EF</code> \u5219\u662F\u8981\u5339\u914D\u524D\u9762\u6CA1\u6709 CD \u7684</p><h2 id="\u73AF\u89C6\u4E0D\u6D88\u8017\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#\u73AF\u89C6\u4E0D\u6D88\u8017\u5B57\u7B26" aria-hidden="true">#</a> \u73AF\u89C6\u4E0D\u6D88\u8017\u5B57\u7B26</h2><p>\u5B57\u9762\u610F\u601D\u7406\u89E3\u6BD4\u8F83\u56F0\u96BE, \u4E3E\u4E2A\u6817\u5B50\u5C31\u76F4\u89C2\u4E86</p><p><code>AB(?=CD)E</code> \u8FD9\u4E2A\u8868\u8FBE\u5F0F\u662F\u65E0\u6CD5\u5339\u914D\u5230 <code>ABCDE</code> \u7684, \u56E0\u4E3A\u6B63\u5219\u67E5\u627E\u5230 AB \u540E\u4F1A\u5224\u65AD\u540E\u9762\u6709\u65E0 CD , \u505A\u51FA\u5224\u65AD\u540E\u7EE7\u7EED\u4ECE C \u5F00\u59CB\u626B\u63CF, \u5E76\u4E0D\u4F1A\u76F4\u63A5\u8DF3\u5230 E</p><p>\u6545, <strong>\u73AF\u89C6\u672C\u8EAB\u5E76\u4E0D\u5339\u914D\u5B57\u7B26, \u53EA\u5339\u914D\u6587\u672C\u4E2D\u7684\u7279\u5B9A\u4F4D\u7F6E</strong></p><p>\u518D\u4E3E\u4E2A\u4F8B\u5B50</p><p>\u9700\u8981\u5C06\u4E00\u4E32\u6570\u5B57\u6309\u6BCF\u4E09\u4F4D\u52A0\u4E2A\u9017\u53F7<code>11234565 =&gt; 1,123,456</code>, \u4F7F\u7528\u6B63\u5219\u53BB\u5B9E\u73B0\u66FF\u6362</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token string">&#39;11234565&#39;</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;=\\d)(?=(\\d{3})+$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8868\u793A\u8981\u5339\u914D \u524D\u6709\u6570\u5B57, \u540E\u6709\u4E00\u6216\u591A\u7EC4\u4E09\u4F4D\u6570\u5B57\u5E76\u4EE5\u6B64\u7ED3\u5C3E\u7684\u4F4D\u7F6E</p><h2 id="pattern" tabindex="-1"><a class="header-anchor" href="#pattern" aria-hidden="true">#</a> (?:pattern)</h2><p>(?:pattern) \u4E0D\u662F\u73AF\u89C6, \u53EA\u662F\u957F\u5F97\u6BD4\u8F83\u7C7B\u4F3C, \u5339\u914D\u65F6\u6D88\u8017\u5B57\u7B26</p><p><code>(?:pattern)/(pattern)</code> \u662F\u76F8\u5BF9\u7684</p><p>\u8FD9\u4E24\u4E2A\u7684\u533A\u522B\u5C31\u662F <code>xxx(pattern)xxx</code> \u662F\u83B7\u53D6\u5339\u914D, \u4F1A\u5728\u5339\u914D\u7ED3\u679C\u4E2D\u663E\u793A\u5B50\u7EC4 <code>pattern</code></p><p>\u800C <code>(?:pattern)</code> \u662F\u975E\u83B7\u53D6\u5339\u914D, \u4E0D\u4F1A\u5728\u7ED3\u679C\u4E2D\u663E\u793A</p><p>\u5728\u6D4F\u89C8\u5668\u7684\u63A7\u5236\u53F0\u4E2D\u8FD0\u884C\u5982\u4E0B\u4EE3\u7801\u5C31\u80FD\u5F88\u76F4\u89C2\u7684\u770B\u51FA\u533A\u522B\u4E86</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token string">&#39;ABCDEF&#39;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">AB(?:CD)E</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
<span class="token string">&#39;ABCDEF&#39;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">AB(CD)E</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u89E3\u51B3\u6700\u5F00\u59CB\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u6700\u5F00\u59CB\u7684\u95EE\u9898" aria-hidden="true">#</a> \u89E3\u51B3\u6700\u5F00\u59CB\u7684\u95EE\u9898</h2><p>\u61C2\u4E86\u73AF\u89C6\u7684\u7279\u6027, \u5C31\u53EF\u4EE5\u89E3\u51B3\u5F00\u5934\u7684\u95EE\u9898\u4E86</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token string">&#39;\u6211\u771F\u7684\u6000\u7591\u67D0\u4E9B\u4EBA\u95F2\u7684\u7A0B\u5EA6&#39;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;=\u6000\u7591).*(?&lt;=\u95F2\u7684)(?&lt;!(\u4E0D\u95F2\u7684|\u5047\u7684))\u7A0B\u5EA6</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token comment">// \u6709\u7ED3\u679C</span>
<span class="token string">&#39;\u6211\u771F\u7684\u4E0D\u6000\u7591\u67D0\u4E9B\u4EBA\u95F2\u7684\u7A0B\u5EA6&#39;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>
  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;!\u4E0D)\u6000\u7591.*(?&lt;=\u95F2\u7684)(?&lt;!(\u4E0D\u95F2\u7684|\u5047\u7684))\u7A0B\u5EA6</span><span class="token regex-delimiter">/</span></span>
<span class="token punctuation">)</span> <span class="token comment">// \u65E0\u7ED3\u679C</span>
<span class="token string">&#39;\u6211\u771F\u7684\u6000\u7591\u67D0\u4E9B\u4EBA\u5047\u7684\u7A0B\u5EA6&#39;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;!\u4E0D)\u6000\u7591.*(?&lt;=\u95F2\u7684)(?&lt;!(\u4E0D\u95F2\u7684|\u5047\u7684))\u7A0B\u5EA6</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token comment">// \u65E0\u7ED3\u679C</span>
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><p>\u83DC\u9E1F\u5DE5\u5177 <a href="https://c.runoob.com/front-end/854/" target="_blank" rel="noopener noreferrer">https://c.runoob.com/front-end/854/</a></p><p>\u83DC\u9E1F\u6559\u7A0B <a href="https://www.runoob.com/regexp/regexp-metachar.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/regexp/regexp-metachar.html</a></p>`,51),c=[p];function o(r,l){return a(),n("div",null,c)}var i=e(t,[["render",o],["__file","index.html.vue"]]);export{i as default};
