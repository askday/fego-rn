webpackJsonp([28],{478:function(n,s){n.exports={content:["article",["h1","Dialog\u5bf9\u8bdd\u6846"],["h2","\u793a\u4f8b"],["pre",{lang:"js",highlighted:'Dialog<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'\u5185\u5bb9\'</span><span class="token punctuation">)</span>\n\nDialog<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'\u6807\u9898\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5185\u5bb9\'</span><span class="token punctuation">)</span>\n\nDialog<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'\u5185\u5bb9\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>btn<span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nDialog<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">\'\u4f60\u5f88\u5e05\u5417\uff1f\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>btn<span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>\n\t<span class="token keyword">if</span><span class="token punctuation">(</span>btn<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">\'yes\'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\tDialog<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'\u4f60\u5f88\u81ea\u4fe1\u561b\uff01\'</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n\t\tDialog<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'\u8fd9\u5c31\u5bf9\u4e86\uff01\'</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nDialog<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>color<span class="token punctuation">:</span> <span class="token string">\'#338811\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\u8fd9\u7a97\u53e3\u70b9\u786e\u5b9a\u662f\u6ca1\u7528\u7684<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span><span class="token punctuation">,</span> <span class="token punctuation">(</span>btn<span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>\n\t<span class="token keyword">if</span><span class="token punctuation">(</span>btn<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">\'yes\'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token boolean">false</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nDialog<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">\'\u52a8\u753b\u7ed3\u675f\u56de\u8c03\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>btn<span class="token punctuation">,</span> aniEnd<span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'\u6309\u94ae\u88ab\u70b9\u51fb\uff0c\u4f46\u52a8\u753b\u672a\u7ed3\u675f\'</span><span class="token punctuation">)</span>\n\t<span class="token function">aniEnd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'\u52a8\u753b\u7ed3\u675f\u540e\u624d\u6267\u884c\'</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nDialog<span class="token punctuation">.</span><span class="token function">tip</span><span class="token punctuation">(</span><span class="token string">\'\u5220\u9664\'</span><span class="token punctuation">,</span> <span class="token string">\'\u786e\u5b9a\u5220\u9664\u4e48???\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>\n\t<span class="token punctuation">{</span> text<span class="token punctuation">:</span> <span class="token string">\'\u4e0d\u597d\'</span><span class="token punctuation">,</span> onPress<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'cancel\'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">{</span> text<span class="token punctuation">:</span> <span class="token string">\'\u53ef\u4ee5\'</span><span class="token punctuation">,</span> onPress<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'ok\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">{</span> fontWeight<span class="token punctuation">:</span> <span class="token string">\'bold\'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>'},["code","Dialog.alert('\u5185\u5bb9')\n\nDialog.alert('\u6807\u9898', '\u5185\u5bb9')\n\nDialog.alert('\u5185\u5bb9', (btn)=>{})\n\nDialog.confirm('\u4f60\u5f88\u5e05\u5417\uff1f', (btn)=>{\n\tif(btn.type === 'yes'){\n\t\tDialog.alert('\u4f60\u5f88\u81ea\u4fe1\u561b\uff01')\n\t}else{\n\t\tDialog.alert('\u8fd9\u5c31\u5bf9\u4e86\uff01')\n\t}\n})\n\nDialog.confirm(<Text style={{color: '#338811'}}>\u8fd9\u7a97\u53e3\u70b9\u786e\u5b9a\u662f\u6ca1\u7528\u7684</Text>, (btn)=>{\n\tif(btn.type === 'yes'){\n\t\treturn false\n\t}\n})\n\nDialog.confirm('\u52a8\u753b\u7ed3\u675f\u56de\u8c03', (btn, aniEnd)=>{\n\tconsole.log('\u6309\u94ae\u88ab\u70b9\u51fb\uff0c\u4f46\u52a8\u753b\u672a\u7ed3\u675f')\n\taniEnd(()=>{\n\t\tconsole.log('\u52a8\u753b\u7ed3\u675f\u540e\u624d\u6267\u884c')\n\t})\n})\n\nDialog.tip('\u5220\u9664', '\u786e\u5b9a\u5220\u9664\u4e48???', [\n\t{ text: '\u4e0d\u597d', onPress: () => console.log('cancel') },\n\t{ text: '\u53ef\u4ee5', onPress: () => console.log('ok'), style: { fontWeight: 'bold' } },\n])"]]],meta:{title:"Dialog",subTitle:"\u5bf9\u8bdd\u6846",filename:"components/ui/Dialog/README.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h1",href:"#Dialog\u5bf9\u8bdd\u6846",title:"Dialog\u5bf9\u8bdd\u6846"},"Dialog\u5bf9\u8bdd\u6846"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u793a\u4f8b",title:"\u793a\u4f8b"},"\u793a\u4f8b"]]]}}});