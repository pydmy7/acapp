#! /bin/bash

echo "重启 nginx 服务"
sudo /etc/init.d/nginx -s reload
sudo /etc/init.d/nginx restart

echo "启动 redis 服务"
sudo redis-server /etc/redis/redis.conf

echo "打包项目静态文件"
bash ~/acapp/scripts/compress_game_js.sh

echo "uwsgi 启动项目"
STAT_PATH=~/acapp/scripts/
uwsgi --ini ${STAT_PATH}uwsgi.ini
