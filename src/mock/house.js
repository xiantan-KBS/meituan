import Mock from 'mockjs';
// Mock.mock('/api/house', function(options) {
//     return Mock.mock({
//         mes: '成功',
//         status: 0,
//         "data|6": [{
//             'id': "@guid",
//             'title': "@ctitle(10,20)",
//             'price|70-320': 1,
//             'address': "@county",
//             'maxGuestNumber|1-3': 3,
//             'img': "@image('370*208', @color )",
//             'createDate': `@date('T')`,
//         }]
//     })
// })

Mock.mock('/api/house', {
        mes: '成功',
        status: 0,
        "data|6": [{
            'id': "@guid",
            'title': "@ctitle(10,26)",
            'price|70-320': 1,
            'address': "@county",
            'maxGuestNumber|1-3': 3,
            'img': "@image('370x208', @color )",
            'createDate': `@date('T')`,
        }]
    })
    // region 中国大陆
    // province 省份
    // city 城市
    // county 县城

Mock.mock('/api/houseCity', {
    mes: '成功',
    status: 0,
    'data|10': [{
        id: "@guid",
        title: '@city',
    }]
})