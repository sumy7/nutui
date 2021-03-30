import{c as t,o as d,A as e}from"./vendor.3b1206fa.js";const o={class:"markdown-body"},u=e('<h1>Input 输入框组件</h1><h3>介绍</h3><p>单行输入框</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Input } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Input);\n\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><p>双向绑定</p><pre><code class="language-html">&lt;nut-input\n      v-model=&quot;state.val1&quot;\n      @change=&quot;change&quot;\n      @focus=&quot;focus&quot;\n      @blur=&quot;blur&quot;\n      label=&quot;文本&quot;\n    /&gt;\n&lt;nut-input placeholder=&quot;请输入文本&quot;\n      @change=&quot;change&quot;\n      v-model=&quot;state.val0&quot;\n      :require-show=&quot;true&quot;\n      label=&quot;文本&quot;\n      @clear=&quot;clear&quot;\n    /&gt;\n</code></pre><h3>禁用和只读</h3><pre><code class="language-html">&lt;nut-input v-model=&quot;state.val2&quot; @change=&quot;change&quot;  disabled=&quot;true&quot; label=&quot;标题：&quot;/&gt;\n&lt;nut-input v-model=&quot;state.val3&quot; @change=&quot;change&quot; readonly=&quot;true&quot;  label=&quot;标题：&quot;/&gt;\n</code></pre><h3>限制输入长度</h3><pre><code class="language-html"> &lt;nut-input v-model=&quot;state.val4&quot; @change=&quot;change&quot; max-length=&quot;7&quot; label=&quot;限制7&quot; /&gt;\n</code></pre><h3>其他类型</h3><pre><code class="language-html">&lt;nut-input v-model=&quot;state.val0&quot; @change=&quot;change&quot; type=&quot;password&quot; label=&quot;密码&quot;/&gt;\n&lt;nut-input v-model=&quot;state.val5&quot; @change=&quot;change&quot; type=&quot;number&quot; label=&quot;整数&quot; /&gt;\n&lt;nut-input v-model=&quot;state.val6&quot; @change=&quot;change&quot; type=&quot;digit&quot; placeholder=&quot;支持小数点的输入&quot; label=&quot;数字&quot;/&gt;\n</code></pre><h3>Prop</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型，可选值为 <code>text</code> <code>number</code> 等</td><td>String</td><td><code>text</code></td></tr><tr><td>value</td><td>输入值，双向绑定</td><td>String</td><td>-</td></tr><tr><td>placeholder</td><td>为空时占位符</td><td>String</td><td>-</td></tr><tr><td>label</td><td>左侧文案</td><td>String</td><td>-</td></tr><tr><td>require-show</td><td>左侧*号是否展示</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>readonly</td><td>是否只读</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>max-length</td><td>限制最长输入字符</td><td>String、Number</td><td>-</td></tr><tr><td>disable-clear</td><td>禁止展示清除icon</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>text-align</td><td>文本位置,可选值<code>left</code>,<code>center</code>,<code>right</code></td><td>String</td><td><code>left</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>输入内容时触发</td><td>val</td></tr><tr><td>focus</td><td>聚焦时触发</td><td>val</td></tr><tr><td>blur</td><td>失焦时触发</td><td>val</td></tr><tr><td>clear</td><td>点击清空时触发</td><td>val</td></tr></tbody></table>',19),a={expose:[],setup:e=>(e,a)=>(d(),t("div",o,[u]))};export default a;
