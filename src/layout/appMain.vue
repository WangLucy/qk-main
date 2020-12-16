<template>
  <section class="app-main">      
       <router-view /> 
        <div class="app-main-inner" id="subappContainer">
            <div ref="animateApp" id="subapp-viewport"></div>
        </div> 
  </section>  
</template>

<script>
import {
  registerMicroApps,  // 注册子应用
  start,   // 启动
} from 'qiankun'
import { onMounted } from 'vue'
// import { useRouter} from 'vue-router'
 import { apps} from '../apps'
 import router from '@/router'
export default {
    name: 'AppMain',
    setup() { 
       // const router = useRouter()
        const props = {
            insertType: 'qiankun',
            appRouters: router
        }
        const genActiveRule = routerPrefix => {
            return location => location.pathname.startsWith(routerPrefix)
        }
        
        const subObj = {
            apps: apps.map(app => {
                return {
                    ...app,
                    props,
                    container: '#subapp-viewport',
                    activeRule: genActiveRule(app.href)
                }
            })
        }
        // const loader = loading => render({ loading });
        const registerSubapp = () => {
            if (!window.__POWERED_BY_QIANKUN__) {
                initQiankun()
            } else {
                location.reload()
            }
        }
        const initQiankun = () => {
            const { apps } = subObj
            registerMicroApps(
                apps
            )
            // const defaultApp = apps[2]            
            // setDefaultMountApp(defaultApp.href)            
            // debugger
            start({
                prefetch:false,
                sandbox:true
            })
        }
        onMounted(()=>{
            registerSubapp()
        })
       return {
       }
    }
}
</script>

<style lang="scss">
.app-main {
    /*50 = navbar  */
    min-height: calc(100vh - 16px);
    width: 100%;
    position: relative;
    overflow: hidden;
    background:#ECECEC;
}
.fixed-header+.app-main {
    padding-top: 16px;
    .app-main-inner {
        padding: 16px 6px 16px 16px;
        // overflow: hidden;
    }
}
</style>