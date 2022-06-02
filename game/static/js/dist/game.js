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
        });
        this.$siasoj.click(function(){
            console.log("click siasoj");
            outer.hide();
            outer.root.siasoj.show();
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
class AcGamePlayground {
    constructor(root) {
        this.root = root;
        this.$playground = $(`<div>game_interface</div>`);

        this.hide();
        this.root.$ac_game.append(this.$playground);

        this.start();
    }

    start() {
    }

    show() {  // show playground interface
        this.$playground.show();
    }

    hide() {  // hide playground interface
        this.$playground.hide();
    }
}
class AcGameSiasoj {
    constructor(root) {
        this.root = root;
        this.$siasoj = $(`<div>siasoj_dev</div>`);

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
class AcGame {
    constructor(id) {
        this.id = id;
        this.$ac_game = $('#' + id);
        this.menu = new AcGameMenu(this);
        this.playground = new AcGamePlayground(this);
        this.siasoj = new AcGameSiasoj(this);

        this.start();
    }

    start() {
    }
}
