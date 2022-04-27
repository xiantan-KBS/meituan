import Mock from 'mockjs';

Mock.mock('/api/menu', {
    mes: '成功',
    status: 0,
    data: [{
            title: "美食",
            icon: "food",
            hot: false,
            'children|1-3': [{
                category: "@cword(2,4)",
                'type|2-20': [{
                    name: '@cword(2,6)',
                    href: "@url(http)",
                }]
            }]
        },
        {
            title: "外卖",
            icon: "takeout",
            hot: false,
            'children|1-3': [{
                category: "@cword(2,4)",
                'type|2-20': [{
                    name: '@cword(2,6)',
                    href: "@url(http)",
                }]
            }]
        },
        {
            title: "酒店",
            icon: "hotel",
            hot: true,
            'children|1-3': [{
                category: "@cword(2,4)",
                'type|2-20': [{
                    name: '@cword(2,6)',
                    href: "@url(http)",
                }]
            }]
        },
        {
            title: "民宿",
            icon: "homestay",
            hot: false,
            'children|1-3': [{
                category: "@cword(2,4)",
                'type|2-20': [{
                    name: '@cword(2,6)',
                    href: "@url(http)",
                }]
            }]
        },
        {
            title: "猫眼电影",
            icon: "movie",
            hot: false,
            'children|1-3': [{
                category: "@cword(2,4)",
                'type|2-20': [{
                    name: '@cword(2,6)',
                    href: "@url(http)",
                }]
            }]
        },
        {
            title: "机票 / 火车票",
            icon: "airport",
            hot: false,
            'children|1-3': [{
                category: "@cword(2,4)",
                'type|2-20': [{
                    name: '@cword(2,6)',
                    href: "@url(http)",
                }]
            }]
        },
        {
            title: "休闲娱乐 / KTV",
            icon: "ktv",
            hot: false,
            'children|1-3': [{
                category: "@cword(2,4)",
                'type|2-20': [{
                    name: '@cword(2,6)',
                    href: "@url(http)",
                }]
            }]
        },
        {
            title: "生活服务",
            icon: "life",
            hot: false,
            'children|1-3': [{
                category: "@cword(2,4)",
                'type|2-20': [{
                    name: '@cword(2,6)',
                    href: "@url(http)",
                }]
            }]
        },
        {
            title: "丽人 / 美发 / 医学美容",
            icon: "hair",
            hot: false,
            'children|1-3': [{
                category: "@cword(2,4)",
                'type|2-20': [{
                    name: '@cword(2,6)',
                    href: "@url(http)",
                }]
            }]
        },
        {
            title: "结婚 / 婚纱摄影 / 婚宴",
            icon: "marry",
            hot: false,
            'children|1-3': [{
                category: "@cword(2,4)",
                'type|2-20': [{
                    name: '@cword(2,6)',
                    href: "@url(http)",
                }]
            }]
        },
        {
            title: "亲子 / 儿童乐园 / 幼教",
            icon: "offspring",
            hot: false,
            'children|1-3': [{
                category: "@cword(2,4)",
                'type|2-20': [{
                    name: '@cword(2,6)',
                    href: "@url(http)",
                }]
            }]
        },
        {
            title: "运动健身 / 健身中心",
            icon: "sport",
            hot: false,
            'children|1-3': [{
                category: "@cword(2,4)",
                'type|2-20': [{
                    name: '@cword(2,6)',
                    href: "@url(http)",
                }]
            }]
        },
        {
            title: "家装 / 建材 / 家居",
            icon: "furniture",
            hot: false,
            'children|1-3': [{
                category: "@cword(2,4)",
                'type|2-20': [{
                    name: '@cword(2,6)',
                    href: "@url(http)",
                }]
            }]
        },
        {
            title: "学习培训 / 音乐培训",
            icon: "study",
            hot: false,
            'children|1-3': [{
                category: "@cword(2,4)",
                'type|2-20': [{
                    name: '@cword(2,6)',
                    href: "@url(http)",
                }]
            }]
        },
        {
            title: "医疗健康 / 宠物 / 爱车",
            icon: "health",
            hot: false,
            'children|1-3': [{
                category: "@cword(2,4)",
                'type|2-20': [{
                    name: '@cword(2,6)',
                    href: "@url(http)",
                }]
            }]
        },
        {
            title: "酒吧 / 密室逃脱",
            icon: "bar",
            hot: false,
            'children|1-3': [{
                category: "@cword(2,4)",
                'type|2-20': [{
                    name: '@cword(2,6)',
                    href: "@url(http)",
                }]
            }]
        }
    ]

})