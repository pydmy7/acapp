class AcGameSiasoj {
    constructor(root) {
        this.root = root;
        this.$siasoj = $(`


			<divd>
		<metad>
    <meta charset="utf-8">
    <meta name="viewport" id="WebViewport" content="width=100%,initial-scale=1,target-densitydpi=device-dpi,minimum-scale=0.5,maximum-scale=1,user-scalable=1" />
    <title>SIASOJ</title>
    <link rel="stylesheet" type="text/css" href="first.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.css">

</head>

<body>
    <div class="top_info">
        <div class="login"><a href="#">登录</a></div>
        <div class="logo"><img src="picture/logo3.jpg" width="300" height="82"></div>
        <div class="top-text">
            <marquee behavior="scrool" direction="">
                <p>题库平台，难题等你来</p>
            </marquee>
        </div>
        <div class="round_div_all">
            <div class="round_div">
                <div class="r-s01"><img src="http://cdn.psdhtml.cn/wx_images/icon01.png" width="40" height="40"></div>
                <div class="r-s02">首页</div>
            </div>

            <div class="round_div">
                <div class="r-s01"><img src="http://cdn.psdhtml.cn/wx_images/icon02.png" width="40" height="40"></div>
                <div class="r-s02">题库</div>
            </div>

            <div class="round_div">
                <div class="r-s01"><img src="http://cdn.psdhtml.cn/wx_images/icon03.png" width="40" height="40"></div>
                <div class="r-s02">比赛</div>
            </div>

            <div class="round_div">
                <div class="r-s01"><img src="http://cdn.psdhtml.cn/wx_images/icon04.png" width="40" height="40"></div>
                <div class="r-s02">记录</div>
            </div>
        </div>
    </div>

    <div class="mian01">
        <div class="mume markdown-preview">
            <h1 class="mume-header" id="%E8%AF%84%E6%B5%8B%E6%9C%BA%E8%AF%AD%E8%A8%80%E7%8E%AF%E5%A2%83%E4%BF%A1%E6%81%AF">&#x8BC4;&#x6D4B;&#x673A;&#x8BED;&#x8A00;&#x73AF;&#x5883;</h1>

            <!-- <h1 class="mume-header" id="%E7%BC%96%E8%AF%91%E5%8F%82%E6%95%B0ps%E8%BF%99%E9%87%8C%E9%9C%80%E8%A6%81%E5%88%97%E6%88%90%E8%A1%A8%E6%A0%BC%E7%9A%84%E5%BD%A2%E5%BC%8F-markdown%E5%AE%9E%E7%8E%B0">&#x7F16;&#x8BD1;&#x53C2;&#x6570;</h1> -->
            <table>
                <tr>
                    <td>语言</td>
                    <td>编译参数</td>
                </tr>
                <tr>
                    <td>C</td>
                    <td>gcc -DONLINE_JUDGE -Wall -O2 -std=c11</td>
                </tr>
                <tr>
                    <td>C++</td>
                    <td>g++ -DONLINE_JUDGE -Wall -O2 -std=c++17</td>
                </tr>
                <tr>
                    <td>Java8 </td>
                    <td>javac</td>
                </tr>
                <tr>
                    <td>Python3</td>
                    <td>python3</td>
                </tr>

            </table>
            <h1 class="mume-header" id="c-%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B">C &#x4EE3;&#x7801;&#x793A;&#x4F8B;</h1>
            <pre data-role="codeBlock" data-info="c" class="language-c"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h&gt;</span></span>
                  <span class="token keyword keyword-int">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token keyword keyword-int">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
                 <span class="token keyword keyword-while">while</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
                 <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\n&quot;</span><span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token keyword keyword-return">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span>
             </pre>
            <!-- c++ -->
            <h1 class="mume-header" id="c-%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B-1">C++ &#x4EE3;&#x7801;&#x793A;&#x4F8B;</h1>

            <pre data-role="codeBlock" data-info="cpp" class="language-cpp"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream&gt;</span></span>

                 <span class="token keyword keyword-using">using</span> <span class="token keyword keyword-namespace">namespace</span> std<span class="token punctuation">;</span>
                 <span class="token keyword keyword-int">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token keyword keyword-int">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
                 <span class="token keyword keyword-while">while</span><span class="token punctuation">(</span>cin <span class="token operator">&gt;&gt;</span> a <span class="token operator">&gt;&gt;</span> b<span class="token punctuation">)</span>
                 cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">+</span> b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
                 <span class="token keyword keyword-return">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span>
             </pre>
            <!-- java -->
            <h1 class="mume-header" id="java-%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B">Java &#x4EE3;&#x7801;&#x793A;&#x4F8B;</h1>

            <pre data-role="codeBlock" data-info="java" class="language-java"><span class="token keyword keyword-import">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span><span class="token punctuation">;</span>
    
                 <span class="token keyword keyword-public">public</span> <span class="token keyword keyword-class">class</span> <span class="token class-name">Template</span> <span class="token punctuation">{</span>
                 <span class="token keyword keyword-public">public</span> <span class="token keyword keyword-static">static</span> <span class="token keyword keyword-void">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token class-name">Scanner</span> cin <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token keyword keyword-while">while</span><span class="token punctuation">(</span>cin<span class="token punctuation">.</span><span class="token function">hasNextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token keyword keyword-int">int</span> a <span class="token operator">=</span> cin<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token keyword keyword-int">int</span> b <span class="token operator">=</span> cin<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span>
                 <span class="token punctuation">}</span>
                 <span class="token punctuation">}</span>
             </pre>
            <!-- Python -->
            <h1 class="mume-header" id="python3-%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B">python3 &#x4EE3;&#x7801;&#x793A;&#x4F8B;</h1>

            <pre data-role="codeBlock" data-info="python3" class="language-python3"> <span class="token keyword keyword-import">import</span>  sys
                 <span class="token keyword keyword-import">for</span>&nbsp;line&nbsp;<span class="token keyword keyword-import">in</span>&nbsp;sys.stdin:
                 <span class="token keyword keyword-import">print</span>(<span class="token keyword keyword-import">sum</span>(<span class="token keyword keyword-import">map</span>(int, line.split())))   
             </pre>
        </div>
    </div>
    <!-- <footer class="down"><span class="f82">微信安全 | 服务条款 | 使用规范 | 客服中心 | 隐私保护指引</span><br> -->
    <span class="f75">SIASOJ</span></footer>
</body>

</html> charset="utf-8">
    <meta name="viewport" id="WebViewport" content="width=100%,initial-scale=1,target-densitydpi=device-dpi,minimum-scale=0.5,maximum-scale=1,user-scalable=1" />
    <title>SIASOJ</title>
    <link rel="stylesheet" type="text/css" href="first.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.css">

</head>

<body>
    <div class="top_info">
        <div class="login"><a href="#">登录</a></div>
        <div class="logo"><img src="picture/logo3.jpg" width="300" height="82"></div>
        <div class="top-text">
            <marquee behavior="scrool" direction="">
                <p>题库平台，难题等你来</p>
            </marquee>
        </div>
        <div class="round_div_all">
            <div class="round_div">
                <div class="r-s01"><img src="http://cdn.psdhtml.cn/wx_images/icon01.png" width="40" height="40"></div>
                <div class="r-s02">首页</div>
            </div>

            <div class="round_div">
                <div class="r-s01"><img src="http://cdn.psdhtml.cn/wx_images/icon02.png" width="40" height="40"></div>
                <div class="r-s02">题库</div>
            </div>

            <div class="round_div">
                <div class="r-s01"><img src="http://cdn.psdhtml.cn/wx_images/icon03.png" width="40" height="40"></div>
                <div class="r-s02">比赛</div>
            </div>

            <div class="round_div">
                <div class="r-s01"><img src="http://cdn.psdhtml.cn/wx_images/icon04.png" width="40" height="40"></div>
                <div class="r-s02">记录</div>
            </div>
        </div>
    </div>

    <div class="mian01">
        <div class="mume markdown-preview">
            <h1 class="mume-header" id="%E8%AF%84%E6%B5%8B%E6%9C%BA%E8%AF%AD%E8%A8%80%E7%8E%AF%E5%A2%83%E4%BF%A1%E6%81%AF">&#x8BC4;&#x6D4B;&#x673A;&#x8BED;&#x8A00;&#x73AF;&#x5883;</h1>

            <!-- <h1 class="mume-header" id="%E7%BC%96%E8%AF%91%E5%8F%82%E6%95%B0ps%E8%BF%99%E9%87%8C%E9%9C%80%E8%A6%81%E5%88%97%E6%88%90%E8%A1%A8%E6%A0%BC%E7%9A%84%E5%BD%A2%E5%BC%8F-markdown%E5%AE%9E%E7%8E%B0">&#x7F16;&#x8BD1;&#x53C2;&#x6570;</h1> -->
            <table>
                <tr>
                    <td>语言</td>
                    <td>编译参数</td>
                </tr>
                <tr>
                    <td>C</td>
                    <td>gcc -DONLINE_JUDGE -Wall -O2 -std=c11</td>
                </tr>
                <tr>
                    <td>C++</td>
                    <td>g++ -DONLINE_JUDGE -Wall -O2 -std=c++17</td>
                </tr>
                <tr>
                    <td>Java8 </td>
                    <td>javac</td>
                </tr>
                <tr>
                    <td>Python3</td>
                    <td>python3</td>
                </tr>

            </table>
            <h1 class="mume-header" id="c-%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B">C &#x4EE3;&#x7801;&#x793A;&#x4F8B;</h1>
            <pre data-role="codeBlock" data-info="c" class="language-c"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h&gt;</span></span>
                  <span class="token keyword keyword-int">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token keyword keyword-int">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
                 <span class="token keyword keyword-while">while</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
                 <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\n&quot;</span><span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token keyword keyword-return">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span>
             </pre>
            <!-- c++ -->
            <h1 class="mume-header" id="c-%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B-1">C++ &#x4EE3;&#x7801;&#x793A;&#x4F8B;</h1>

            <pre data-role="codeBlock" data-info="cpp" class="language-cpp"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream&gt;</span></span>

                 <span class="token keyword keyword-using">using</span> <span class="token keyword keyword-namespace">namespace</span> std<span class="token punctuation">;</span>
                 <span class="token keyword keyword-int">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token keyword keyword-int">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
                 <span class="token keyword keyword-while">while</span><span class="token punctuation">(</span>cin <span class="token operator">&gt;&gt;</span> a <span class="token operator">&gt;&gt;</span> b<span class="token punctuation">)</span>
                 cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">+</span> b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
                 <span class="token keyword keyword-return">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span>
             </pre>
            <!-- java -->
            <h1 class="mume-header" id="java-%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B">Java &#x4EE3;&#x7801;&#x793A;&#x4F8B;</h1>

            <pre data-role="codeBlock" data-info="java" class="language-java"><span class="token keyword keyword-import">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span><span class="token punctuation">;</span>
    
                 <span class="token keyword keyword-public">public</span> <span class="token keyword keyword-class">class</span> <span class="token class-name">Template</span> <span class="token punctuation">{</span>
                 <span class="token keyword keyword-public">public</span> <span class="token keyword keyword-static">static</span> <span class="token keyword keyword-void">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token class-name">Scanner</span> cin <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token keyword keyword-while">while</span><span class="token punctuation">(</span>cin<span class="token punctuation">.</span><span class="token function">hasNextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token keyword keyword-int">int</span> a <span class="token operator">=</span> cin<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token keyword keyword-int">int</span> b <span class="token operator">=</span> cin<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span>
                 <span class="token punctuation">}</span>
                 <span class="token punctuation">}</span>
             </pre>
            <!-- Python -->
            <h1 class="mume-header" id="python3-%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B">python3 &#x4EE3;&#x7801;&#x793A;&#x4F8B;</h1>

            <pre data-role="codeBlock" data-info="python3" class="language-python3"> <span class="token keyword keyword-import">import</span>  sys
                 <span class="token keyword keyword-import">for</span>&nbsp;line&nbsp;<span class="token keyword keyword-import">in</span>&nbsp;sys.stdin:
                 <span class="token keyword keyword-import">print</span>(<span class="token keyword keyword-import">sum</span>(<span class="token keyword keyword-import">map</span>(int, line.split())))   
             </pre>
        </div>
    </div>
    <!-- <footer class="down"><span class="f82">微信安全 | 服务条款 | 使用规范 | 客服中心 | 隐私保护指引</span><br> -->
    <span class="f75">SIASOJ</span></footer>
</body>

</html>
 class="top_info">
        <div class="login"><a href="#">登录</a></div>
        <div class="logo"><img src="picture/logo3.jpg" width="300" height="82"></div>
        <div class="top-text">
            <marquee behavior="scrool" direction="">
                <p>题库平台，难题等你来</p>
            </marquee>
        </div>
        <div class="round_div_all">
            <div class="round_div">
                <div class="r-s01"><img src="http://cdn.psdhtml.cn/wx_images/icon01.png" width="40" height="40"></div>
                <div class="r-s02">首页</div>
            </div>

            <div class="round_div">
                <div class="r-s01"><img src="http://cdn.psdhtml.cn/wx_images/icon02.png" width="40" height="40"></div>
                <div class="r-s02">题库</div>
            </div>

            <div class="round_div">
                <div class="r-s01"><img src="http://cdn.psdhtml.cn/wx_images/icon03.png" width="40" height="40"></div>
                <div class="r-s02">比赛</div>
            </div>

            <div class="round_div">
                <div class="r-s01"><img src="http://cdn.psdhtml.cn/wx_images/icon04.png" width="40" height="40"></div>
                <div class="r-s02">记录</div>
            </div>
        </div>
    </div>

    <div class="mian01">
        <div class="mume markdown-preview">
            <h1 class="mume-header" id="%E8%AF%84%E6%B5%8B%E6%9C%BA%E8%AF%AD%E8%A8%80%E7%8E%AF%E5%A2%83%E4%BF%A1%E6%81%AF">&#x8BC4;&#x6D4B;&#x673A;&#x8BED;&#x8A00;&#x73AF;&#x5883;</h1>

            <!-- <h1 class="mume-header" id="%E7%BC%96%E8%AF%91%E5%8F%82%E6%95%B0ps%E8%BF%99%E9%87%8C%E9%9C%80%E8%A6%81%E5%88%97%E6%88%90%E8%A1%A8%E6%A0%BC%E7%9A%84%E5%BD%A2%E5%BC%8F-markdown%E5%AE%9E%E7%8E%B0">&#x7F16;&#x8BD1;&#x53C2;&#x6570;</h1> -->
            <table>
                <tr>
                    <td>语言</td>
                    <td>编译参数</td>
                </tr>
                <tr>
                    <td>C</td>
                    <td>gcc -DONLINE_JUDGE -Wall -O2 -std=c11</td>
                </tr>
                <tr>
                    <td>C++</td>
                    <td>g++ -DONLINE_JUDGE -Wall -O2 -std=c++17</td>
                </tr>
                <tr>
                    <td>Java8 </td>
                    <td>javac</td>
                </tr>
                <tr>
                    <td>Python3</td>
                    <td>python3</td>
                </tr>

            </table>
            <h1 class="mume-header" id="c-%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B">C &#x4EE3;&#x7801;&#x793A;&#x4F8B;</h1>
            <pre data-role="codeBlock" data-info="c" class="language-c"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h&gt;</span></span>
                  <span class="token keyword keyword-int">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token keyword keyword-int">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
                 <span class="token keyword keyword-while">while</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
                 <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\n&quot;</span><span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token keyword keyword-return">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span>
             </pre>
            <!-- c++ -->
            <h1 class="mume-header" id="c-%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B-1">C++ &#x4EE3;&#x7801;&#x793A;&#x4F8B;</h1>

            <pre data-role="codeBlock" data-info="cpp" class="language-cpp"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream&gt;</span></span>

                 <span class="token keyword keyword-using">using</span> <span class="token keyword keyword-namespace">namespace</span> std<span class="token punctuation">;</span>
                 <span class="token keyword keyword-int">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token keyword keyword-int">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
                 <span class="token keyword keyword-while">while</span><span class="token punctuation">(</span>cin <span class="token operator">&gt;&gt;</span> a <span class="token operator">&gt;&gt;</span> b<span class="token punctuation">)</span>
                 cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">+</span> b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
                 <span class="token keyword keyword-return">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span>
             </pre>
            <!-- java -->
            <h1 class="mume-header" id="java-%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B">Java &#x4EE3;&#x7801;&#x793A;&#x4F8B;</h1>

            <pre data-role="codeBlock" data-info="java" class="language-java"><span class="token keyword keyword-import">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span><span class="token punctuation">;</span>
    
                 <span class="token keyword keyword-public">public</span> <span class="token keyword keyword-class">class</span> <span class="token class-name">Template</span> <span class="token punctuation">{</span>
                 <span class="token keyword keyword-public">public</span> <span class="token keyword keyword-static">static</span> <span class="token keyword keyword-void">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token class-name">Scanner</span> cin <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token keyword keyword-while">while</span><span class="token punctuation">(</span>cin<span class="token punctuation">.</span><span class="token function">hasNextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token keyword keyword-int">int</span> a <span class="token operator">=</span> cin<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token keyword keyword-int">int</span> b <span class="token operator">=</span> cin<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span>
                 <span class="token punctuation">}</span>
                 <span class="token punctuation">}</span>
             </pre>
            <!-- Python -->
            <h1 class="mume-header" id="python3-%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B">python3 &#x4EE3;&#x7801;&#x793A;&#x4F8B;</h1>

            <pre data-role="codeBlock" data-info="python3" class="language-python3"> <span class="token keyword keyword-import">import</span>  sys
                 <span class="token keyword keyword-import">for</span>&nbsp;line&nbsp;<span class="token keyword keyword-import">in</span>&nbsp;sys.stdin:
                 <span class="token keyword keyword-import">print</span>(<span class="token keyword keyword-import">sum</span>(<span class="token keyword keyword-import">map</span>(int, line.split())))   
             </pre>
        </div>
    </div>
    <!-- <footer class="down"><span class="f82">微信安全 | 服务条款 | 使用规范 | 客服中心 | 隐私保护指引</span><br> -->
    <span class="f75">SIASOJ</span></footer>
</body>

`);

        this.hide();
        this.root.$ac_game.append(this.$siasoj);

        this.start();
    }

    start() {
    }

    show() {  // show sias interface
        this.$siasoj.show();
    }

    hide() {  // hide sias interface
        this.$siasoj.hide();
    }
}
