import Home from '../components/Home.vue'
import Follow from '../components/Follow.vue'
import Column from '../components/Column.vue'
import UserInfo from '../components/UserInfo.vue'
import Article from '../components/Article.vue'
export default[
	//首页默认打开
	{
		path:"/",
		redirect:"/home"
	},
	 {
      path: '/home',
      component: Home,
   },
    {
      path: '/follow',
      component: Follow
    },
     {
      path: '/column',
      component: Column
     },
     {
     	path:'/article/:id',
     	component: Article
     }
     ,
     {
      path: '/userinfo',
      component: UserInfo
     }
]
