import Mock from "mockjs";

Mock.mock("/api/likes", {
    mes: "成功",
    status: 0,
    "data|10": [{
        id: "@guid",
        img: "@image('190x106',@color)",
        createDate: "@Date('T')",
        "price|1-80": 3,
        "comment|1000-15000": 1,
        address: "@cword(2,6)",
        title: "@ctitle(4,9)",
    }, ],
});

Mock.mock("/api/products", {
    status: "0",
    msg: "成功",
    "data|30": [{
        itemId: "@guid",
        title: "井格重庆火锅（哈西万达店）",
        image: "@image('220x125',@color)",
        type: "food",
        'score|3-5': 5,
        "commentNum|500-40000": 2555,
        comment: [{
            username: "匿名用户",
            image: "https://www.dpfile.com/ugc/user/anonymous.png",
            rate: 5,
            pics: ["http://p0picxxxxx", "http://picxxxxx"],
            evalaute: "xxxx",
        }, ],
        tab: ["重庆火锅", "哈西万达"],
        address: "南岗区中兴大街168号万达广场3层3055",
        phone: "0451-85717159",
        businessTime: "周一至周日 09:30-21:00",
        service: ["提供wifi"],
        recommend: ["现炸酥肉", "井格毛肚"],
        "avgPrice|50-300": 95,
        dealItems: [{
            title: "100元代金券1张",
            "price|20-50": 28.9,
            "counterPrice|100-200": 100,
            "saleNum|500-5000": 3409,
            priceType: "元",
        }, ],
    }],
});