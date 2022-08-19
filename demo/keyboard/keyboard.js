Page({
    data: {
        content: [], // 输入的金额
        defaultContent: '请输入金额', // 默认内容
        KeyboardKeys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'back'],
        keyShow: true, // 是否展示键盘
        cursorIndex: -1, // 插入光标位置
        contentLengthMax: 9 // 最大长度9(不包含.)
    },
    //点击界面键盘消失
    hindKeyboard() {
        this.setData({
            keyShow: false,
            cursorIndex: -1
        });
    },
    //点击输入框，键盘显示
    showKeyboard() {
        this.setData({
            keyShow: true
        });
    },
    // 获取插入光标位置
    getStrPosition(e) {
        let {
            strIndex
        } = e.currentTarget.dataset
        const { keyShow } = this.data;
        let config = {
            cursorIndex: Number(strIndex)
        };
        if (!keyShow) {
            config = {
                ...config,
                keyShow: !keyShow
            };
        }
        this.setData(config)
    },
    keyTap(e) {
        let { keys } = e.currentTarget.dataset,
        content = this.data.content.join(''), // 转为字符串 
        strLen = content.length, { cursorIndex, contentLengthMax } = this.data;
        switch (keys) {
            case 'back':
                if (cursorIndex === 0) {
                    return null;
                }
                if (cursorIndex > 0 && cursorIndex !== strLen) {
                    // 从插入光标开始删除元素
                    this.data.content.splice(cursorIndex - 1, 1)
                    content = this.data.content.join('')
                } else {
                    content = content.substr(0, content.length - 1)
                }
                if (!strLen) {
                    cursorIndex = -1
                }
                if (cursorIndex > 0) {
                    cursorIndex -= 1;
                }
                break
            case '.':
            default:
                if (strLen < contentLengthMax) {
                    if (cursorIndex >= 0 && cursorIndex !== strLen) {
                        // 从插入光标开始添加元素
                        const start = this.data.content.slice(0, cursorIndex)
                        const end = this.data.content.slice(cursorIndex, this.data.content.length)
                        content = start.join('') + keys + end.join('');
                        cursorIndex += 1;
                    } else {
                        content += keys;
                        cursorIndex = -1;
                    }
                }
                break
        }
        this.setData({
            content: content.split(''),
            cursorIndex
        });
    }
})