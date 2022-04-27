import Mock from "mockjs";

Mock.mock('/api/recommend', {
    mes: '成功',
    status: 0,
    'data|15': [{
        id: "@guid",
        img: "@image('214x120',@color)",
        createDate: "@Date('T')",
        "price|1-80": 3,
        'comment|1000-15000': 1,
        address: "@cword(2,6)",
        title: "@ctitle(4,9)"
    }]
})