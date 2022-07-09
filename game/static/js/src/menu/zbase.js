class AcGameMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<div class = "ac-game-menu">
    <div class = "ac-game-menu-field">
        <div class = "ac-game-menu-field-item ac-game-menu-field-item-single-mode">
            单人模式
        </div>
        <img class = "ac-game-menu-op-img ac-game-menu-op-img-single" src = "https://app2479.acapp.acwing.com.cn/static/image/menu/single.png">
        <br>
        <div class = "ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
            多人模式
        </div>
        <img class = "ac-game-menu-op-img ac-game-menu-op-img-multi" src = "https://app2479.acapp.acwing.com.cn/static/image/menu/multi.png">
        <br>
        <div class = "ac-game-menu-field-item ac-game-menu-field-item-settings">
            退出
        </div>
        <img class = "ac-game-menu-op-img ac-game-menu-op-img-settings" src = "https://app2479.acapp.acwing.com.cn/static/image/menu/settings.png">
        <br>
        <div class = "ac-game-menu-field-item ac-game-menu-field-item-description">
            游戏说明
        </div>
        <img class = "ac-game-menu-op-img ac-game-menu-op-img-description" src = "https://app2479.acapp.acwing.com.cn/static/image/menu/jiaran.png">
        <br>
        <div class = "ac-game-menu-field-item ac-game-menu-field-item-announcement">
            announcement
        </div>
        <img class = "ac-game-menu-op-img ac-game-menu-op-img-announcement" src = "https://app2479.acapp.acwing.com.cn/static/image/menu/xiangwan.png">
    </div>
</div>
`);
        this.$menu.hide();
        this.root.$ac_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');
        this.$description = this.$menu.find('.ac-game-menu-field-item-description');
        this.$announcement = this.$menu.find('.ac-game-menu-field-item-announcement');

        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$single_mode.click(function(){
            outer.hide();
            outer.root.playground.show("single mode");
        });
        this.$multi_mode.click(function(){
            outer.hide();
            outer.root.playground.show("multi mode");
        });
        this.$settings.click(function(){
            outer.root.settings.logout_on_remote();
        });
        this.$description.click(function(){
            outer.hide();
            outer.root.description.show();
        });
        this.$announcement.click(function(){
            outer.hide();
            outer.root.announcement.show();
        });
    }

    show() {  // show_menu_interface
        this.$menu.show();
    }

    hide() {  // hide_menu_interface
        this.$menu.hide();
    }
}
