class AcGame {
    constructor(id) {
        this.id = id;
        this.$ac_game = $('#' + id);
        this.menu = new AcGameMenu(this);
        this.playground = new AcGamePlayground(this);
        this.siasoj = new AcGameSiasoj(this);
        this.announcement = new AcGameAnnouncement(this);

        this.start();
    }

    start() {
    }
}
