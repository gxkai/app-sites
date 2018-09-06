import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '对话',
      component: () => import('./views/Dialogue.vue')
    },
    {
      path: '/communication',
      name: '通讯录',
      component: () => import('./views/Communication.vue')
    },
    {
      path: '/information',
      name: '咨询流',
      component: () => import('./views/Information.vue')
    },
    {
      path: '/collection',
      name: '收藏',
      component: () => import('./views/Collection.vue')
    },
    {
      path: '/center',
      name: '个人中心',
      component: () => import('./views/Center.vue')
    },
    {
      path: '/login',
      name: '登陆',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: '注册',
      component: () => import('./views/Register.vue')

    }

  ]
});
