export class AcGame {
    constructor(id, AcWingOS) {
        this.id = id;
        this.$ac_game = $('#' + id);
        this.AcWingOS = AcWingOS;

        this.settings = new Settings(this);  // settings 要在 menu 之前被 new 出来
        this.menu = new AcGameMenu(this);  // 因为后面 menu 会调用 settings 里面的东西
        this.siasoj = new AcGameSiasoj(this);
        this.announcement = new AcGameAnnouncement(this);
        this.playground = new AcGamePlayground(this);  // 把所有的准备工作做完，开始渲染主页面

        this.start();
    }

    start() {
    }
}
