from django.http import HttpResponse

def index(request) -> str :
    line1 = '<h1 style = "text-align: center"> SIASOJ </h1>'
    line2 = '<img src = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fzhengxin-pub.cdn.bcebos.com%2Fmark%2F3f7c1047683de82d96848265a1af21ee_fullsize.jpeg&refer=http%3A%2F%2Fzhengxin-pub.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656583695&t=7dc9280582416c572b013b95afe20ed1">'
    line3 = '<hr>'
    line4 = '<a href = "/play/"> enter game memu </a>'
    return HttpResponse(line1 + line4 + line3 + line2)

def  play(request) -> str :
    line1 = '<h1 style = "text-align: center"> youxijiemain </h1>'
    line2 = '<img = src = "https://tse1-mm.cn.bing.net/th/id/R-C.eaeacb7f50fac904c7d1b907c69b68ff?rik=wmxUqQ3w5md0lw&riu=http%3a%2f%2fimg.zcool.cn%2fcommunity%2f01d358591bc7b5a801216a3e5b2488.jpg%401280w_1l_2o_100sh.jpg&ehk=fYc538DsKZZPb%2f6YqmJ0wu20dDKPFceAs1rQ1knEUZM%3d&risl=&pid=ImgRaw&r=0">'
    line3 = '<hr>'
    line4 = '<a href = "/"> return to main page </a>'
    return HttpResponse(line1 + line4 + line3 + line2)
