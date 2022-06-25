class AcGameMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<div class="ac-game-menu">
    <div class="ac-game-menu-field">
        <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
            单人模式
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
            多人模式
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-settings">
            退出
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-siasoj">
            siasoj
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-announcement">
            announcement
        </div>
    </div>
</div>
`);
        this.$menu.hide();
        this.root.$ac_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');
        this.$siasoj = this.$menu.find('.ac-game-menu-field-item-siasoj');
        this.$announcement = this.$menu.find('.ac-game-menu-field-item-announcement');

        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$single_mode.click(function(){
            console.log("click signle mode");
            outer.hide();
            outer.root.playground.show();
        });
        this.$multi_mode.click(function(){
            console.log("click multi mode");
        });
        this.$settings.click(function(){
            console.log("click settings");
            outer.root.settings.logout_on_remote();
        });
        this.$siasoj.click(function(){
            console.log("click siasoj");
            outer.hide();
            outer.root.siasoj.show();
        });
        this.$announcement.click(function(){
            console.log("click announcement");
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
