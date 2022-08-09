class AcGameAnnouncement {
    constructor(root) {
        this.root = root;
        this.$announcement = $(`
<div class = "liu-jia-hui">
    <div class = "ac-game-announcement-return">
        返回
    </div>
</div>
`);

        this.$return = this.$announcement.find('.ac-game-announcement-return');

        this.$announcement.hide();
        this.root.$ac_game.append(this.$announcement);

        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$return.click(function() {
            outer.hide();
            outer.root.menu.show();
        });
    }

    show() {  // show announcement interface
        this.$announcement.show();
    }

    hide() {  // hide announcement interface
        this.$announcement.hide();
    }
}
