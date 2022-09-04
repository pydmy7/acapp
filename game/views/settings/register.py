from django.http import JsonResponse
from django.contrib.auth import login
from django.contrib.auth.models import User
from game.models.player.player import Player



def register(request):
    data = request.GET
    username = data.get("username", "").strip()
    password = data.get("password", "").strip()
    password_confirm = data.get("password_confirm", "").strip()
    if not username or not password:
        return JsonResponse({
            'result': "用户名和密码不能为空"
        })
    if password != password_confirm:
        return JsonResponse({
            'result': "两个密码不一致"
        })
    if User.objects.filter(username = username).exists():
        return JsonResponse({
            'result': "用户名已存在"
        })
    user = User(username = username)
    user.set_password(password)
    user.save()
    # 彩蛋, guichu 五人随机头像
    photo_arr = ['guichu0.jpg', 'guichu1.jpg', 'guichu2.jpg', 'guichu3.jpg', 'guichu4.jpg']
    import random
    photo_obj = photo_arr[random.randint(0, 4)]
    #
    Player.objects.create(user = user, photo = "https://pydmy7.top/static/image/photo/" + photo_obj)
    login(request, user)
    return JsonResponse({
        'result': "success"
    })
