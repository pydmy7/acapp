from django.urls import path, include
from game.view.index import index

urlpatterens = [
    path("", index, name="index"),
    path("menu/", include("game.urls.menu.index")),
    path("playground/", include("game.urls.playground.index")),
    path("settings/", include("game.urls.setting.index"))
]
