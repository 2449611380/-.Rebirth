class Frame {
    constructor() {};

    start_animate() {
        setTimeout(() => {
            $('.home_animate').animate({
                left: 0
            }, 5000, () => {
                $('.logo').animate({
                    top: 100,
                    opacity: 1
                }, 1200, () => {
                    let choice = new Choice();
                    choice.homeSelect();
                });
                $('.main_home_select').animate({
                    top: 225,
                    opacity: 1
                }, 1000);
            });
        }, 1000);
    };


};