class AcGameSiasoj {
    constructor(root) {
        this.root = root;
        this.$siasoj = $(`<div>SIASOJ-dev</div>`);

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
