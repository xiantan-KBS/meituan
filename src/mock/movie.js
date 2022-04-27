import Mock from "mockjs";

//正在热映
Mock.mock("/api/movie", {
    mes: "成功",
    status: 0,
    data: [{
            title: "正在热映",
            movies: [{
                    "id": "@guid",
                    img: "https://p0.pipi.cn/mmdb/25bfd69a9235bfecd8b535cb9e40b04b22831.jpg?imageMogr2/thumbnail/2500x2500%3E",
                    mk: 8,
                    nm: "新蝙蝠侠",
                    IMAX: true,
                },
                {
                    "id": "@guid",
                    img: "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageMogr2/thumbnail/2500x2500%3E",
                    mk: 8.5,
                    nm: "月球陨落",
                    IMAX: true,
                },
                {
                    "id": "@guid",
                    img: "https://p0.pipi.cn/mmdb/25bfd69ad7c3385bf180779c8ca665bf97ce5.jpg?imageMogr2/thumbnail/2500x2500%3E",
                    mk: 8.6,
                    nm: "神秘海域",
                    IMAX: true,
                },
                {
                    "id": "@guid",
                    img: "https://p0.pipi.cn/mmdb/25bfd6beddd51b39dd030c27835be90047695.jpg?imageMogr2/thumbnail/2500x2500%3E",
                    mk: 8.0,
                    nm: "大国粮仓",
                    IMAX: false,
                }
            ]
        },
        {
            title: "即将上映",
            movies: [{
                    "id": "@guid",
                    img: "https://p0.pipi.cn/mmdb/25bfd69a338ddd16bdc7edb4bebd52c966b25.jpg?imageMogr2/thumbnail/2500x2500%3E",
                    mk: 343,
                    nm: "杨得操家的幸福",
                },
                {
                    "id": "@guid",
                    img: "https://p0.pipi.cn/mmdb/d2dad5927a39abbe2abe12c8592c35d38b9fc.jpg?imageMogr2/thumbnail/2500x2500%3E",
                    mk: 202,
                    nm: "草台班子：套路奇兵",
                },
                {
                    "id": "@guid",
                    img: "https://p0.pipi.cn/mmdb/d2dad52fc69f2abe2a030ca982cd661a8e5cf.jpg?imageMogr2/thumbnail/2500x2500%3E",
                    mk: 100389,
                    nm: "被害人",
                },
                {
                    "id": "@guid",
                    img: "https://p0.pipi.cn/mmdb/d2dad5927a32ff339e7df539e811577c25513.jpg?imageMogr2/thumbnail/2500x2500%3E",
                    nm: "最后的真相",
                    mk: 50550,
                },
                {
                    "id": "@guid",
                    img: "https://p0.pipi.cn/mmdb/25bfd69a030338ddd2300b1f3b191305438ba.jpg?imageMogr2/thumbnail/2500x2500%3E",
                    nm: "密室逃生2",
                    mk: 21346,
                },
                {
                    "id": "@guid",
                    img: "https://p0.pipi.cn/mmdb/25bfd69ae7a7e151ba339e265e510c0090de9.jpg?imageMogr2/thumbnail/2500x2500%3E",
                    nm: "镜世界",
                    mk: 2094,
                },
                {
                    "id": "@guid",
                    img: "https://p0.pipi.cn/mmdb/25bfd69ad7c51b71f71789bba71e041d3018a.jpg?imageMogr2/thumbnail/2500x2500%3E",
                    nm: "精灵旅社4：变身大冒险",
                    mk: 101304,
                },
                {
                    "id": "@guid",
                    img: "https://p0.pipi.cn/mmdb/25bfd69a7a3f2ae5bc281e167fbec66855174.jpg?imageMogr2/thumbnail/2500x2500%3E",
                    nm: "草原大作战",
                    mk: 1933,
                },
                {
                    "id": "@guid",
                    img: "https://p0.pipi.cn/mmdb/25bfd69a9ab5bfb86051ba86de382e799a79e.png?imageMogr2/thumbnail/2500x2500%3E",
                    nm: "永不独行",
                    mk: 160,
                },
                {
                    "id": "@guid",
                    img: "https://p0.pipi.cn/mmdb/25bfd69ad7cdddd2368ea330e1cfd760cd4ab.jpg?imageMogr2/thumbnail/2500x2500%3E",
                    nm: "神奇动物:邓布利多之谜",
                    mk: 200442,
                },
            ]
        }
    ]
});


//即将上映
// Mock.mock("/api/comingFilms", {
//     mes: "成功",
//     status: 0,
//     data: ,
// });