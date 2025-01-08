import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminLayout from '@/views/AdminLayout.vue'
import FrontLayout from '@/views/front/FrontLayout.vue'
import {getToken} from '@/utils/auth'
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: "/admin"
	},
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "welcome" */ '@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "welcome" */ '@/views/front/Register.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'Welcome',
        component: () => import(/* webpackChunkName: "welcome" */ '@/views/Welcome.vue')
      },
      {
        path: 'admin',
        name: 'admin',
        component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin.vue')
      },
      {
        path: 'appointment',
        name: 'appointment',
        component: () => import(/* webpackChunkName: "Appointment" */ '@/views/Appointment.vue')
      },
      {
        path: 'category',
        name: 'category',
        component: () => import(/* webpackChunkName: "Category" */ '@/views/Category.vue')
      },
      {
        path: 'member',
        name: 'member',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member.vue')
      },
      {
        path: 'message',
        name: 'message',
        component: () => import(/* webpackChunkName: "Message" */ '@/views/Message.vue')
      },
      {
        path: 'notice',
        name: 'notice',
        component: () => import(/* webpackChunkName: "Notice" */ '@/views/Notice.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import(/* webpackChunkName: "Orders" */ '@/views/Orders.vue')
      },
      {
        path: 'room',
        name: 'room',
        component: () => import(/* webpackChunkName: "Room" */ '@/views/Room.vue')
      },
      {
        path: 'adminInfo',
        name: 'AdminInfo',
        component: () => import(/* webpackChunkName: "Room" */ '@/views/AdminInfo.vue')
      },
      {
        path: 'addOrders',
        name: 'OrdersAdd',
        component: () => import(/* webpackChunkName: "Room" */ '@/views/OrdersAdd.vue')
      },
    ]
  },
  {
    path: '/front',
    name: 'Front',
    component: FrontLayout, //他这里是二级组件 用的组件里面还有组件
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "welcome" */ '@/views/front/Home.vue')
      },
      {
        path: 'room',
        name: 'Room',
        component: () => import(/* webpackChunkName: "welcome" */ '@/views/front/Room.vue')
      },
      {
        path: 'roomDetails/:id',
        name: 'RoomDetails',
        component: () => import(/* webpackChunkName: "welcome" */ '@/views/front/RoomDetails.vue')
      },
      {
        path: 'notice',
        name: 'Notice',
        component: () => import(/* webpackChunkName: "welcome" */ '@/views/front/Notice.vue')
      },
      {
        path: 'noticeDetails/:id',
        name: 'NoticeDetails',
        component: () => import(/* webpackChunkName: "welcome" */ '@/views/front/NoticeDetails.vue')
      },
      {
        path: 'message',
        name: 'Message',
        component: () => import(/* webpackChunkName: "welcome" */ '@/views/front/Message.vue')
      },
      {
        path: 'userInfo',
        name: 'UserInfo',
        component: () => import(/* webpackChunkName: "welcome" */ '@/views/front/UserInfo.vue')
      },
      {
        path: 'appointment',
        name: 'MyAppointment',
        component: () => import(/* webpackChunkName: "welcome" */ '@/views/front/MyAppointment.vue')
      },
      {
        path: 'orders',
        name: 'MyOrders',
        component: () => import(/* webpackChunkName: "welcome" */ '@/views/front/MyOrder.vue')
      },
    ]
  }

]

const router = new VueRouter({
  routes
})

//无需登录的页面
const whiteList = [//普通路由
  "/login",
  "/register",
  "/front",
  "/front/room",
  "/front/notice",
  "/front/message"
]
const whiteListWithDetails = [//动态路由
  "/front/roomDetails/",
  "/front/noticeDetails/",
]

//路由拦截
router.beforeEach((to, from, next) => {
	//console.log(to);
	//console.log(from);
	/* 路由发生变化修改页面title */
	// if (to.meta.title) {
	//   document.title = to.meta.title
	// };
	const isLogin = getToken()
	if (isLogin) { //登录之后直接放行
		next()
	} else {
		//无需登录的页面放行
		if (whiteList.includes(to.fullPath) || whiteList.includes(to.path) || whiteListWithDetails.some(s => to.fullPath.startsWith(s))) {
			next();
		} else {
			next({
				path: '/login'
			})
		};
	};
})

export default router
