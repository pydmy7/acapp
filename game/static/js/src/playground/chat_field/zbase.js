class ChatField {
    constructor(playground) {
        this.playground = playground;

        this.$history = $(`<div class = "ac-game-chat-field-history"></div>`);
        this.$input = $(`<input type = "text" class = "ac-game-chat-field-input">`);
    }
}
