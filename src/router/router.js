import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Happy from '@/components/Happy'
import News from '@/components/News'
import Music from '@/components/Music'
import Movie from '@/components/Movie'
import NotFound from '@/components/NotFound'
Vue.use(Router)
var router = new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', name: 'Home', component: Home},
    {path: '/happy', name: 'Happy', component: Happy, redirect: '/happy/movie'},
    {path: '*', name: 'NotFound', component: NotFound},
    {
      path: '/happy',
      name: 'Happy',
      component: Happy,
      children: [
        {path: 'news', name: 'News', component: News},
        {path: 'music', name: 'Music', component: Music},
        {path: 'movie', name: 'Movie', component: Movie}
      ]}
  ]
})
export default router
