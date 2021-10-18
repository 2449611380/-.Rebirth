let audioDom;
class Choice {
    constructor(defaultNum = 0) {
        this.SelectNumBer = defaultNum;
        this.homeSelect();
        $('.main_home_select > li').removeClass('home_select');
        $('.main_home_select > li').eq(this.SelectNumBer).addClass('home_select');
    };

    homeSelect() {
        let end = true;
        window.onkeydown = (ev) => {
            if (end) {
                switch (ev.keyCode) {
                    case 38:
                        // 上
                        audioDom = document.createElement('audio');
                        audioDom.src = './audio/SE/选择.wav';
                        audioDom.play();
                        this.SelectNumBer--;
                        if (this.SelectNumBer < 0) {
                            this.SelectNumBer = 3
                        }
                        break;

                    case 40:
                        // 下
                        audioDom = document.createElement('audio');
                        audioDom.src = './audio/SE/选择.wav';
                        audioDom.play();
                        this.SelectNumBer++;
                        if (this.SelectNumBer > 3) {
                            this.SelectNumBer = 0;
                        }
                        break;

                    case 32:
                        // 空格
                        switch (this.SelectNumBer) {
                            // 新游戏
                            case 0:
                                new View('game', 500);
                                break;

                                // 读取存档
                            case 1:
                                break;

                                // 游戏设置
                            case 2:
                                new home_son_select();
                                break;

                                // 退出游戏
                            case 3:
                                window.location.reload(true);
                                break;
                        }
                        end = !end;
                        break;
                };

                $('.main_home_select > li').removeClass('home_select');
                $('.main_home_select > li').eq(this.SelectNumBer).addClass('home_select');
            }
        };
    };
};

class home_son_select {
    constructor() {
        this.select = 0;
        this.pageShow();
        this.son_select();
    }

    son_select() {
        let column = 0;
        let one_lines = 0;
        let two_lines = 160;
        let end = true;

        window.onkeydown = (ev) => {
            if (end) {
                switch (ev.keyCode) {
                    case 27:
                        // Esc
                        new Choice(2);
                        end = false;
                        $('.son_select').fadeOut(400);
                        break;

                    case 38:
                        // 上
                        audioDom = document.createElement('audio');
                        audioDom.src = './audio/SE/选择.wav';
                        audioDom.play();
                        column--;
                        if (column < 0) column = 2;
                        $('.father_select').removeClass('Select');
                        $('.father_select').eq(column).addClass('Select');
                        if (column == 0) {
                            $('.unified').removeClass('Select_son');
                            $('.select__').eq(one_lines).addClass('Select_son');
                            $('.T_rue').removeClass('Select_son');
                        } else if (column == 1) {
                            $('.BGMNUM').addClass('Select_son');
                            $('.T_rue').removeClass('Select_son');
                        } else if (column == 2) {
                            $('.BGMNUM').removeClass('Select_son');
                            $('.T_rue').addClass('Select_son');
                        }
                        break;

                    case 40:
                        // 下
                        audioDom = document.createElement('audio');
                        audioDom.src = './audio/SE/选择.wav';
                        audioDom.play();
                        column++;
                        if (column > 2) column = 0;
                        $('.father_select').removeClass('Select');
                        $('.father_select').eq(column).addClass('Select');
                        if (column == 0) {
                            $('.select__').eq(one_lines).addClass('Select_son');
                            $('.T_rue').removeClass('Select_son');
                        } else if (column == 1) {
                            $('.BGMNUM').addClass('Select_son');
                            $('.T_rue').removeClass('Select_son');
                        } else if (column == 2) {
                            $('.BGMNUM').removeClass('Select_son');
                            $('.T_rue').addClass('Select_son');
                        }
                        break;

                    case 37:
                        // 左
                        audioDom = document.createElement('audio');
                        audioDom.src = './audio/SE/选择.wav';
                        audioDom.play();
                        if (column == 0) {
                            one_lines--;
                            if (one_lines < 0) one_lines = 1;
                            $('.select__').removeClass('Select_son');
                            $('.select__').eq(one_lines).addClass('Select_son');
                        } else if (column == 1) {
                            two_lines--;
                            $('.BGMNUM').text(two_lines);
                        } else if (column == 2) {
                            $('.F_alsh').removeClass('Select_son');
                            $('.T_rue').addClass('Select_son');
                        }
                        break;

                    case 39:
                        // 右
                        audioDom = document.createElement('audio');
                        audioDom.src = './audio/SE/选择.wav';
                        audioDom.play();
                        if (column == 0) {
                            one_lines++;
                            if (one_lines > 1) one_lines = 0;
                            $('.select__').removeClass('Select_son');
                            $('.select__').eq(one_lines).addClass('Select_son');
                        } else if (column == 1) {
                            two_lines++;
                            $('.BGMNUM').text(two_lines);
                        } else if (column == 2) {
                            $('.T_rue').removeClass('Select_son');
                            $('.F_alsh').addClass('Select_son');

                        }
                        break;

                    case 32:
                        // 空格
                        if (column == 2) {
                            new Choice(2);
                            end = false;
                            $('.son_select').fadeOut(400);
                        }
                        break;
                }
            }
        }
    }

    pageShow() {
        $('.son_select').fadeIn(400);
    }
}