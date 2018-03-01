import Vue from 'vue'
import Router from 'vue-router'
import comparisonSlider from '@/components/comparisonSlider.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'comparisonSlider',
      component: comparisonSlider
    }
  ]
})
