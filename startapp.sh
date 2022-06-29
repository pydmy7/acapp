#! /bin/bash

STAT_PATH=~/acapp/scripts/

bash ${STAT_PATH}compress_game_js.sh

uwsgi --ini ${STAT_PATH}uwsgi.ini
