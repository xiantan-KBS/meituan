import Mock from "mockjs";

Mock.mock("/api/classify", {
    status: "0",
    msg: "成功",
    data: [{
            title: "美食",
            id: '@guid',
            "subList|10-20": [{
                name: "@cword(2,6)",
                id: "@guid",
            }, ],
        },
        {
            title: "酒店住宿",
            id: '@guid',
            "subList|10-20": [{
                name: "@cword(2,6)",
                id: "@guid",
            }, ],
        },
    ],
});

Mock.mock("/api/area", {
    status: "0",
    msg: "成功",
    data: [{
            title: "推荐商圈",
            id: '@guid',
            "subList|10-20": [{
                name: "@cword(2,6)",
                id: "@guid",
            }, ],
        },
        {
            title: "福田区",
            id: '@guid',
            "subList|10-20": [{
                name: "@cword(2,6)",
                id: "@guid",
            }, ],
        },
        {
            title: "罗湖区",
            id: '@guid',
            "subList|10-20": [{
                name: "@cword(2,6)",
                id: "@guid",
            }, ],
        },
        {
            title: "南山区",
            id: '@guid',
            "subList|10-20": [{
                name: "@cword(2,6)",
                id: "@guid",
            }, ],
        },
        {
            title: "龙华区",
            id: '@guid',
            "subList|10-20": [{
                name: "@cword(2,6)",
                id: "@guid",
            }, ],
        },
        {
            title: "盐田区",
            id: '@guid',
            "subList|10-20": [{
                name: "@cword(2,6)",
                id: "@guid",
            }, ],
        },
        {
            title: "宝安区",
            id: '@guid',
            "subList|10-20": [{
                name: "@cword(2,6)",
                id: "@guid",
            }, ],
        },
        {
            title: "龙岗区",
            id: '@guid',
            "subList|10-20": [{
                name: "@cword(2,6)",
                id: "@guid",
            }, ],
        },
    ],
});