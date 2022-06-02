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
