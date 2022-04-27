import Mock from 'mockjs';

Mock.mock('/api/city', {
    mes: '成功',
    status: 0,
    'data|500': [{
        id: "@guid",
        city: '@city(true)',
    }]
})

Mock.mock('/api/hotCity', {
    'data|11': [{
        id: "@guid",
        hotCity: '@city',
    }]
})

Mock.mock('/api/filterCity', {
    mes: '成功',
    status: 0,
    'data|374': [{
        id: "@guid",
        city: '@city()',
    }]
})