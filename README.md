# sphinxDemo
        一个sphinx Python 生成文档的demo,包括国际化,里面的参数都是我已经配置好的.
    可以通过两个文件对页面进行操作.
    关于国际化,sphinx-intl只提供了文字的国际化,并没有图片引用的国际化(也可能是我没有找到解决方法,如果有大神知道,欢迎来赐教一番),所以我在引入的default.js文件中对引用的图片进行了处理,通过判断url来判断应该引入哪种语言的图片所以图片只需要放入对应的文件夹就可以,必须保证各种语言的图片名称一致.

下面是具体的安装及使用方法.

# 由于国内pip下载资源过慢建议使用清华的镜像下载
    例如：pip install -i https://pypi.tuna.tsinghua.edu.cn/simple sphinx，这样就会从清华这边的镜像去安装 sphinx 库, 亲测速度杠杠的.


# 安装sphinx
    pip install sphinx



# 使用Sphinx的向导quickstart自动生成默认的项目
    sphinx-quickstart




# 安装read  the  doc  主题
    pip install sphinx_rtd_theme  (如果不想用这个主题可以不安装 ,conf.py中将html_theme值改为alabaster即可)
    



# 安装国际化模块
    pip install sphinx-intl //安装国际化




# 安装中文分词搜索
    pip install jieba



# 生成国际化文件及编译
    具体语法可以参考这个网站 :http://lijiancheng0614.github.io/2016/02/16/2016_02_16_Python_Sphinx/
    
    进入到项目根目录运行命令:

    make gettext && 
    sphinx-intl update -p build/gettext -l zh -l tw -l en &&
    sphinx-build -D language=zh_CN -b html ./source build/html-zh && 
    sphinx-build -D language=zh_TW -b html ./source ./build/html-tw && 
    sphinx-build -D language=en -b html ./source ./build/html-en

* 执行上面命令在 source/locale/ 下会生成对应的三种语言的文件,打开对应的.po文件填入对应的国际化即可 如:

        msgid "常见问题"

        msgstr "FAQ"

* 填写完国际化后然后再运行上面的命令即可,编译后的文件都在build下.