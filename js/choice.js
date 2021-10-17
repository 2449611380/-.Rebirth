class Choice {
    constructor() {
        this.SelectNumBer = 0;
        this.homeSelect();
    };

    homeSelect() {
        let end = true;
        document.onkeydown = (ev) => {
            if (end) {
                switch (ev.keyCode) {
                    case 38:
                        // 上
                        this.SelectNumBer -= 1;
                        if (this.SelectNumBer < 0) {
                            this.SelectNumBer = 3
                        }
                        break;

                    case 40:
                        // 下
                        this.SelectNumBer += 1;
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

    }

    pageShow() {}
}