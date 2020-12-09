<template>
<div>
  <h1>主系统主页 --- dashboard</h1>
  <ul>
      <li v-for="(app,index) in apps" :key="index" style="width:300px;border: 1px solid #ccc; padding: 10px;">          
          <div @click="tabsClick(app)">
              <h4>子系统{{app.appName}}</h4>
              <span>name：{{app.appName}}</span> <br>
            <span>url：{{app.href}}</span>
          </div>
      </li>
  </ul>
  </div>
</template>

<script>
 import { apps} from '@/apps'
 import { showSubApp } from '@/store/common'
export default {
    setup() {
        const tabsClick = (item) => { 
            showSubApp.value = true
            window.history.pushState(null, item.href, item.href) 
        }
        return {
            apps,
            tabsClick
        }
    }
}
</script>

<style>

</style>