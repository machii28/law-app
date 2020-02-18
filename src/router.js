import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu-page',
      component: require('@/components/MenuPage.vue').default
    },
    {
      path: '/list',
      name: 'list-page',
      component: require('@/components/ListPage.vue').default
    },
    {
      path: '/law-page',
      name: 'law-page',
      component: require('@/components/LawPage.vue').default
    }
  ]
})