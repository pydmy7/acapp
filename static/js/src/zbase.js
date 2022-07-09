export class AcGame {
    constructor(id, AcWingOS) {
        this.id = id;
        this.$ac_game = $('#' + id);
        this.AcWingOS = AcWingOS;

        this.settings = new Settings(this);
        this.menu = new AcGameMenu(this);
        this.playground = new AcGamePlayground(this);
        this.description = new AcGameDescription(this);
        this.announcement = new AcGameAnnouncement(this);

        this.start();
    }

    start() {
    }
}
