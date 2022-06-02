class AcGameMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<div class="ac-game-menu">
    <div class="ac-game-menu-field">
        <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
            single-mode
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
            multi-mode
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-settings">
            settings
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-SIASOJ">
            SIASOJ
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-announcement">
            announcement
        </div>
    </div>
</div>
`);
        this.root.$ac_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');
        this.$SIASOJ = this.$menu.find('.ac-game-menu-field-item-SIASOJ');
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
        });
        this.$SIASOJ.click(function(){
            console.log("click SIASOJ");
        });
        this.$announcement.click(function(){
            console.log("click announcement");
        });
    }

    show() {  // show_menu_interface
        this.$menu.show();
    }

    hide() {  // hide_menu_interface
        this.$menu.hide();
    }
}
