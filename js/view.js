class View {
    constructor(name, time = 1000) {
        if (this.name === name) return;
        this.name = name;

        $('.page').fadeOut(time);
        $(`.${name}-page`).fadeIn(time);
    };
};