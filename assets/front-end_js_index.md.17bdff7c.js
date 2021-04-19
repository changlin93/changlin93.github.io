import{o as n,c as s,a}from"./app.c848934a.js";const t='{"title":"script元素","description":"","frontmatter":{},"headers":[{"level":2,"title":"script元素","slug":"script元素"},{"level":3,"title":"JavaScript在网页中解决的问题","slug":"javascript在网页中解决的问题"},{"level":3,"title":"JavaScript元素中的属性","slug":"javascript元素中的属性"},{"level":3,"title":"标签的位置","slug":"标签的位置"},{"level":3,"title":"推迟执行脚本","slug":"推迟执行脚本"},{"level":3,"title":"异步执行脚本","slug":"异步执行脚本"},{"level":3,"title":"动态加载脚本","slug":"动态加载脚本"},{"level":3,"title":"XHTML中的变化","slug":"xhtml中的变化"},{"level":2,"title":"行内的代码与外部代码","slug":"行内的代码与外部代码"},{"level":2,"title":"文档模式：混杂模式、标准模式和准标准模式","slug":"文档模式：混杂模式、标准模式和准标准模式"},{"level":2,"title":"noscript元素","slug":"noscript元素"}],"relativePath":"front-end/js/index.md","lastUpdated":1618876480297}',p={},o=a('<h2 id="script元素"><a class="header-anchor" href="#script元素" aria-hidden="true">#</a> script元素</h2><h3 id="javascript在网页中解决的问题"><a class="header-anchor" href="#javascript在网页中解决的问题" aria-hidden="true">#</a> JavaScript在网页中解决的问题</h3><blockquote><p>希望将JavaScript引入到html页面的同时，不会导致页面在其他浏览器中渲染出问题</p></blockquote><h3 id="javascript元素中的属性"><a class="header-anchor" href="#javascript元素中的属性" aria-hidden="true">#</a> JavaScript元素中的属性</h3><blockquote><p>async：可选，表示立即下载文件资源，不会阻止页面其他操作；比如下载资源、等待其他脚本加载。此属性只对外部脚本文件有效。 charset：可选，使用src属性指定的代码字符集。 crossorigin：可选，配置相关请求的CORS(跨源资源共享)设置，默认不使用CORS。 <code>corsorigin=&quot;anonymous&quot;</code> 配置文件请求不比设置凭据标志。 <code>corsorigin=&quot;use-credentials&quot;</code> 设置凭据标志，意味着出站请求会包含凭据。 defer：可选，表示文档解析或者显示完成之后再执行脚本；只对外部脚本文件有效，在IE7及更早的浏览器版本中，对行内脚本也可以指定这个属性。 integrity：可选，允许比对接收到资源的签名和指定的加密签名以及验证子资源完整性，如果接收到的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行，这个属性可以用于确保内容分发网络不会提供恶意内容。 language：废弃，最初用于表示代码块的脚本语言(如“JavaScript”、“JavaScript1.2”、或“VBScript”)，大多数浏览器都会忽略这个属性。 src：可选，表示包含要执行的代码的外部文件。 type：可选，代替language，表示代码中脚本语言的内容类型(也称MIME类型)，如果这个值是module，则代码会当成es6模块</p></blockquote><blockquote><p>Tips: script的使用方式有两种：</p><ul><li>通过它直接在网页中嵌入JavaScript代码，但在执行代码中不能有 <code>&lt;/script&gt;</code></li></ul></blockquote><div class="language-javascript"><pre><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n\t\t<span class="token keyword">function</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t\t\t<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;say hi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \t\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;/script&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 报错，js解析时会将其解析为script的结束标签</span>\n\t\t<span class="token punctuation">}</span>  \n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n\n<span class="token comment">// 修改后如下代码</span>\n<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n\t\t<span class="token keyword">function</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t\t\t<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;say hi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \t\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;\\/script&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \\转义</span>\n\t\t<span class="token punctuation">}</span>  \n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre></div><ul><li>src引入外部文件内；例如：</li></ul><div class="language-javascript"><pre><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre></div><h3 id="标签的位置"><a class="header-anchor" href="#标签的位置" aria-hidden="true">#</a> 标签的位置</h3><blockquote><p>之前都将script元素放到head标签内，这样也就意味着要将所有的JavaScript代码都下载、解析和解释完成之后，才能开始渲染页面，，对于需要很多JavaScript的页面，这就会导致页面渲染的明显延迟，在此期间浏览器窗口完全空白，为解决这个问题，现代web应用程序通常将所有的JavaScript引入放在body元素中的页面内容后面。</p></blockquote><h3 id="推迟执行脚本"><a class="header-anchor" href="#推迟执行脚本" aria-hidden="true">#</a> 推迟执行脚本</h3><blockquote><p>在HTML 4.01为script元素定义了一个叫defer的属性，这个属性表示脚本再执行的时候不会改变页面的结构，因此这个脚本完全可以在整个页面解析完成之后再运行，HTML5规范要求脚本应该按照他们出现的顺序执行，因此第一个推迟的脚本会在第二个推迟的脚本之前执行，而且两者都会在DOMContentLoaded事件之前执行；不过在实际当中，推迟脚本不一定总会按照顺序执行或者再DOMContentLoad事件之前执行，因此最好只包含一个这样的脚本。 defer属性只对外部脚本文件才生效，对defer属性的支持是从IE4.0、Firefox3.5、Safari 5和chrome 7开始的，其他浏览器则会忽略这一属性，考虑到这一点、还是把推迟脚本放在页面底部较好</p></blockquote><h3 id="异步执行脚本"><a class="header-anchor" href="#异步执行脚本" aria-hidden="true">#</a> 异步执行脚本</h3><blockquote><p>HTML5为script标签定义了async属性，从改变脚本处理方式上看，async属性与defer类似，两者都是只适用于外部脚本文件，都会告诉浏览器立即开始下载，不过，与defer不同的是标记为async的脚本并不能保证按照他们出现的顺序来依次执行</p></blockquote><h3 id="动态加载脚本"><a class="header-anchor" href="#动态加载脚本" aria-hidden="true">#</a> 动态加载脚本</h3><blockquote><p>通过向dom中动态添加script元素同样可以加载指定的脚本，默认情况下，以这种方式创建的script元素是以异步加载的，相当于添加了async属性，这样可能会导致的问题是，所有浏览器都支持createElement()方法，但不是所有浏览器都支持async属性，因此，如果要统一动态脚本的加载行为，可以明确将其设置为同步加载。</p></blockquote><div class="language-javascript"><pre><code><span class="token keyword">const</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nscript<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&#39;</span><span class="token punctuation">;</span>\nscript<span class="token punctuation">.</span>async <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\ndocument<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><blockquote><p>以这种方式获取的资源对浏览器加载器是不可见的，这回严重影响他们在资源获取队列中的优先级；根据应用程序的工作方式以及怎么使用，赭红方式可能会暗中影响性能，要想让预加载器这些动态请求文件的存在，可以在文档头部显示声明它们：</p></blockquote><div class="language-javascript"><pre><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;preload&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&quot;</span><span class="token operator">&gt;</span>\n</code></pre></div><h3 id="xhtml中的变化"><a class="header-anchor" href="#xhtml中的变化" aria-hidden="true">#</a> XHTML中的变化</h3><blockquote><p>XHTML: 可扩展超文本标记语言（Extentsible HyperText Markup Language）是将HTML作文XML的应用重新包装的结果；与HTML不同的是在XHTML中使用JavaScript必须指定type属性且值为text/javascript；HTML可没有这个属性。</p><h4 id="javascript在xhtml中的解析规则："><a class="header-anchor" href="#javascript在xhtml中的解析规则：" aria-hidden="true">#</a> JavaScript在XHTML中的解析规则：</h4><ul><li>XHTML中嵌套的JavaScript代码，若有比较运算符（&lt;）则会被解析为一个标签的开始，并且由于标签的开始的小于符号后面不能有空格，所以会导致语法错误；解决如上问题的方案有两个：</li></ul></blockquote><div class="language-javascript"><pre><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span><span class="token operator">-</span> \n  在xhtml中会报错的问题：\n\t\t<span class="token number">1</span>、没有type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span>属性值声明\n    <span class="token number">2</span>、小于符号会被解析为一个标签的开始\n<span class="token operator">--</span><span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n<span class="token keyword">function</span> <span class="token function">compare</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a is less than b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a is greater than b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a is equal to b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre></div><blockquote><ul><li>将所有的小于符号都替换成对应的HTML实体形式(&lt;)</li><li>将所有的代码都包含在CDATA中；在XHTML中，CDATA块表示文档可以包含文档的区块，其内容不作为标签来解析，因此可以在其中包含任意字符，包括小于符号，并且不会引起语法错误；</li></ul></blockquote><div class="language-javascript"><pre><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span><span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token punctuation">[</span><span class="token constant">CDATA</span><span class="token punctuation">[</span>\n        <span class="token keyword">function</span> <span class="token function">compare</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a is less than b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a is greater than b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a is equal to b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre></div><blockquote><p>在兼容XHTML的浏览器中，这样能解决问题，但在不支持CDATA块的非XHTML浏览器中则不行；为此CDATA必须使用JavaScript注释来抵消：</p></blockquote><div class="language-javascript"><pre><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span><span class="token operator">&gt;</span>\n    <span class="token comment">//&lt;![CDATA[</span>\n        <span class="token keyword">function</span> <span class="token function">compare</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a is less than b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a is greater than b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a is equal to b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token comment">//]]</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre></div><h2 id="行内的代码与外部代码"><a class="header-anchor" href="#行内的代码与外部代码" aria-hidden="true">#</a> 行内的代码与外部代码</h2><blockquote><p>虽然可以在html文件中嵌套JavaScript代码，但通常认为最佳实践是尽可能将JavaScript代码放在外部文件；不过这个最佳实践并不是明确的强制性规则，不过有一下好处：</p><ul><li>可维护</li><li>缓存</li><li>适应未来</li></ul></blockquote><h2 id="文档模式：混杂模式、标准模式和准标准模式"><a class="header-anchor" href="#文档模式：混杂模式、标准模式和准标准模式" aria-hidden="true">#</a> 文档模式：混杂模式、标准模式和准标准模式</h2><blockquote><p>使用doctype来切换文档模式；混杂模式可以让ie像ie5一样支持一些非标准的特性，标准模式可让ie具有兼容标准的行为；这两种模式的主要区别主要体现在css渲染内容方面，对JavaScript也有一些关联影响，或称为副作用。 混杂模式在所有浏览器中都以省略文档的开头doctype声明作为开关；准标准模式通过过渡性文档类型（Transitional）和框架集文档类型（Frameset）来触发。</p></blockquote><h2 id="noscript元素"><a class="header-anchor" href="#noscript元素" aria-hidden="true">#</a> noscript元素</h2><blockquote><p>针对早期浏览器不支持JavaScript的问题的优雅降级的处理方案 <code>noscript</code> 中可以包含body中的任何元素， &lt;<code>script&gt;</code> 除外，以下情况任意一点出现浏览器将显示其内容：</p><ul><li>浏览器不执行脚本</li><li>浏览器对脚本的支持被关闭</li></ul></blockquote>',33);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};
