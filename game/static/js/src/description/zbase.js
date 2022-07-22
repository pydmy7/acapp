class AcGameDescription {
    constructor(root) {
        this.root = root;
        this.$description = $(`
<div class = "ac-game-description">
    <div class = "ac-game-description-title">
        操作说明
    </div>
    <div class = "ac-game-description-content">
        <p>鼠标右键：移动</p>
        <p>鼠标左键：朝目标方向使用技能</p>
        <p>Q：发射火球</p>
        <p>F：闪现</p>
        <p>Enter：打开聊天框</p>
        <p>ECS：关闭聊天框</p>
    </div>
</div>
`);

        this.hide();
        this.root.$ac_game.append(this.$description);

        this.start();
    }

    start() {
    }

    show() {  // show description interface
        this.$description.show();
    }

    hide() {  // hide description interface
        this.$description.hide();
    }
}
