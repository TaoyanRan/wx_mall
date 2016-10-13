//获取应用实例
var app = getApp();

Page({
    data: {
        mask : false,
        cart : false,
        number : 1,
        slider : [
            {
                img : "http://o86ac3exs.bkt.clouddn.com/89336def-f1f5-4663-99ad-5a77a1c358f4.jpg",
                url : "../../pages/wx/index"
            },
            {
                img : "http://o86ac3exs.bkt.clouddn.com/fe0ac8a8-f4dd-43cc-88bd-d85864b7cb0d.jpg",
                url : "../../pages/wx/index"
            },
            {
                img : "http://o86ac3exs.bkt.clouddn.com/9c691f1d-b3c3-4d1d-99b5-142d797db4e3.jpg",
                url : "../../pages/wx/index"
            }
        ],
        category : [
            {
                img : "../../icon/category_logo.png",
                text: "分类",
                url : "../../pages/wx/index"
            },
            {
                img : "../../icon/category_logo.png",
                text: "分类",
                url : "../../pages/wx/index"
            },
            {
                img : "../../icon/category_logo.png",
                text: "分类",
                url : "../../pages/wx/index"
            },
            {
                img : "../../icon/category_logo.png",
                text: "分类",
                url : "../../pages/wx/index"
            },
            {
                img : "../../icon/category_logo.png",
                text: "分类",
                url : "../../pages/wx/index"
            },
            {
                img : "../../icon/category_logo.png",
                text: "分类",
                url : "../../pages/wx/index"
            },
            {
                img : "../../icon/category_logo.png",
                text: "分类",
                url : "../../pages/wx/index"
            },
            {
                img : "../../icon/category_logo.png",
                text: "分类",
                url : "../../pages/wx/index"
            }
        ],
        hot : [
            {
                url : "../../pages/wx/index",
                text: "热点轮播1"
            },
            {
                url : "../../pages/wx/index",
                text: "热点轮播2"
            },
            {
                url : "../../pages/wx/index",
                text: "热点轮播3"
            },
            {
                url : "../../pages/wx/index",
                text: "热点轮播4"
            }
        ],
        product : [
            {
                url : "../../pages/wx/index",
                img : "http://o86ac3exs.bkt.clouddn.com/1c0319e5-1a53-4637-ac26-6c8d456c69cd.jpg?imageView2/1/w/200/h/200",
                name: "商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称",
                cost: "9999"
            },
            {
                url : "../../pages/wx/index",
                img : "http://o86ac3exs.bkt.clouddn.com/1c0319e5-1a53-4637-ac26-6c8d456c69cd.jpg?imageView2/1/w/200/h/200",
                name: "商品名称商品名称商品名称",
                cost: "9999"
            },
            {
                url : "../../pages/wx/index",
                img : "http://o86ac3exs.bkt.clouddn.com/1c0319e5-1a53-4637-ac26-6c8d456c69cd.jpg?imageView2/1/w/200/h/200",
                name: "商品名称商品名称商品名称",
                cost: "9999"
            },
            {
                url : "../../pages/wx/index",
                img : "http://o86ac3exs.bkt.clouddn.com/1c0319e5-1a53-4637-ac26-6c8d456c69cd.jpg?imageView2/1/w/200/h/200",
                name: "商品名称商品名称商品名称",
                cost: "9999"
            },
            {
                url : "../../pages/wx/index",
                img : "http://o86ac3exs.bkt.clouddn.com/1c0319e5-1a53-4637-ac26-6c8d456c69cd.jpg?imageView2/1/w/200/h/200",
                name: "商品名称商品名称商品名称",
                cost: "9999"
            },
            {
                url : "../../pages/wx/index",
                img : "http://o86ac3exs.bkt.clouddn.com/1c0319e5-1a53-4637-ac26-6c8d456c69cd.jpg?imageView2/1/w/200/h/200",
                name: "商品名称商品名称商品名称",
                cost: "9999"
            },
            {
                url : "../../pages/wx/index",
                img : "http://o86ac3exs.bkt.clouddn.com/1c0319e5-1a53-4637-ac26-6c8d456c69cd.jpg?imageView2/1/w/200/h/200",
                name: "商品名称商品名称商品名称",
                cost: "9999"
            },
            {
                url : "../../pages/wx/index",
                img : "http://o86ac3exs.bkt.clouddn.com/1c0319e5-1a53-4637-ac26-6c8d456c69cd.jpg?imageView2/1/w/200/h/200",
                name: "商品名称商品名称商品名称",
                cost: "9999"
            },
            {
                url : "../../pages/wx/index",
                img : "http://o86ac3exs.bkt.clouddn.com/1c0319e5-1a53-4637-ac26-6c8d456c69cd.jpg?imageView2/1/w/200/h/200",
                name: "商品名称商品名称商品名称",
                cost: "9999"
            }
        ]
    },
    /*点击遮罩层/商品选择界面点击关闭按钮 隐藏商品选择*/
    maskHidden : function(){
        this.setData({
            mask : false,
            cart : false
        })
    },
    /*点击购物车 显示商品选择*/
    addCost : function(){
        this.setData({
            mask : true,
            cart : true
        })
    },
    /*选择完商品 点击确认*/
    cartSure : function(){
        this.setData({
            mask : false,
            cart : false
        })
    },
    /*增加商品数量*/
    up : function(){
        var number = this.data.number;
        number++;
        if(number >= 99){
            number = 99
        }
        this.setData({
            number : number
        })
    },
    /*减少商品数量*/
    down : function(){
        var number = this.data.number;
        number--;
        if(number <= 1){
            number = 1
        }
        this.setData({
            number : number
        })
    },
    /*手动输入商品*/
    import : function(e){
        var number = Math.floor(e.detail.value);

        if(number <= 1){
            number = 1
        }

        if(number >= 99){
            number = 99
        }

        this.setData({
            number : number
        })
    }
});