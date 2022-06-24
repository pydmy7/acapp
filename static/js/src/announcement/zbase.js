class AcGameAnnouncement {
    constructor(root) {
        this.root = root;
        this.$announcement = $(`<div class="liu-jia-hui"></div>`);

        this.hide();
        this.root.$ac_game.append(this.$announcement);

        this.start();
    }

    start() {
    }

    show() {  // show announcement interface
        this.$announcement.show();
    }

    hide() {  // hide announcement interface
        this.$announcement.hide();
    }
}
