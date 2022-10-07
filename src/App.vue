<template>
  <div class="wraps">
    <header class="header">
      <div>left</div>
      <div>center</div>
      <div>right</div>
    </header>
    <main class="main">
      <div v-for="item in 50">
        <div>
        
        </div>
        <div>
          <div>测试{{item}}</div>
          <div>测试demo</div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class='footer-item' v-for="item in footer">
        <div>{{item.icon}}</div>
        <div>{{item.text}}</div>
      </div>
    </footer>
  </div>
</template>

<script setup lang='ts'>
import { reactive, toRefs, ref } from 'vue';
type Footer<T>={
  icon:T,
  text:T
}
const footer=reactive<Footer<string>[]>([
  {icon:'1',
    text:'首页'},
  {
    icon: '2',
    text: '首页2'
  }, {
    icon: '3',
    text: '首页3'
  }, {
    icon: '4',
    text: '首页4'
  }, {
    icon: '5',
    text: '首页5'
  }
])
</script>

<style scoped lang='scss'>
* {
  margin: 0;
  padding: 0;
}

body,
html,
#app {
  overflow: hidden;
  height: 100%;
}

.wraps {
  height: inherit;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.header{
  display: flex;
  background:pink;
  justify-content: space-around;
  padding: 5px;
}
.main{
  flex: 1;
  overflow:auto;
}
.footer{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  border-top: 1px solid chocolate;
  &-item{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3px;
    div:last-child{
      margin-top: 5px;
    }
  }
}
</style>
