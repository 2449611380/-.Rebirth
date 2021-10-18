window.onload = function() {
    let frame = new Frame();
    // 空格开始游戏
    let start = 0;
    $(document).on('keydown', ev => {
        if (ev.keyCode == 32 && start == 0) {
            start = 1;
            $('.play_img').fadeOut(800, () => {
                $('._play_img').fadeIn(800, () => {
                    new View('home', 1300);
                    frame.start_animate();
                    document.querySelector('.theme').play();
                });
            });
            return;
        };
    });

    // frame.start_animate();
}