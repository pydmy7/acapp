class AcGameDescription {
    constructor(root) {
        this.root = root;
        this.$description = $(`
<div class = "ac-game-description">
    <div class = "ac-game-description-title">
        HR速来！我要找工作！！！
    </div>
    <div class = "ac-game-description-title">
        BGM：星瞳 - Shining You
    </div>
    <div class = "ac-game-description-title">
        操作说明
    </div>
    <div class = "ac-game-description-content">
        <p>鼠标右键：移动</p>
        <p>鼠标左键：朝目标方向使用技能</p>
        <p>Q：发射火球</p>
        <p>F：闪现</p>
        <p>Enter：问候家人</p>
        <p>ECS：关闭聊天框</p>
    </div>
    <div class = "ac-game-description-return">
        返回
    </div>
</div>
`);

        this.$return = this.$description.find('.ac-game-description-return');

        this.$description.hide();
        this.root.$ac_game.append(this.$description);

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

    show() {  // show description interface
        this.$description.show();
    }

    hide() {  // hide description interface
        this.$description.hide();
    }
}
