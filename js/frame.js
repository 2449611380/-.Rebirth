class Frame {
    constructor() {};

    start_animate() {
        let stop = true;
        setTimeout(() => {
            $('.home_animate').animate({
                left: 0
            }, 5000, () => {
                $('.logo').animate({
                    top: 100,
                    opacity: 1
                }, 1200, () => {
                    if (stop) {
                        stop = !stop;
                        new Choice();
                    }
                });
                $('.main_home_select').animate({
                    top: 225,
                    opacity: 1
                }, 1000);
            });
        }, 1000);

    };


};