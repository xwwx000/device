const router =[
    {
        title:'首页',
        icon:'home',
        key:'/index'
    },
    {
        title:'用户管理',
        icon:'laptop',
        key:'/index/user',
        child:[
            {key:'/index/user/list',title:'用户列表',icon:''},
            {key:'/index/user/add',title:'添加用户',icon:''}
        ]
    }
]
export default router;