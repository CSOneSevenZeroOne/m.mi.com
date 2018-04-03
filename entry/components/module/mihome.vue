<template>
    <div>
        <header class="header">
        <a href="#/user" class="header_back" @click="vipcenterback"><img src="../../images/user/icon/icon_06.jpg" alt=""></a>
        <div class="header_title">
            <p v-text="'选择名字'"></p>
        </div>
        <a href="" class="header_search"><img src="../../images/user/icon/icon_03.jpg" alt=""></a>
    </header>
  <div class="page-indexlist list">
    <div class="page-indexlist-wrapper">
      <mt-index-list>
        <mt-index-section v-for="item in alphabet" :index="item.initial">
          <mt-cell v-for="(cell,index) in item.cells" :key="index" :title="cell"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
    </div>
</template>
<script>
import Vue from 'vue';
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';
const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];
  export default {
    data() {
      return {
        alphabet: []
      };
    },
    methods:{
        vipcenterback(){
        this.$store.state.index = true;
        this.$store.state.discounts_active = true;
        }
    },
    created() {
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
        let cells = NAMES.filter(name => name[0] === initial);
        this.alphabet.push({
          initial,
          cells
        });
      });
    }
  };
</script>
<style scoped>
.list{
    padding-top: .6rem;
}
.header {
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0.5rem;
  font-size: 0.16rem;
  color: #666;
  width: 100%;
  position: fixed;
  top: 0;
}
.header_back {
  margin-left: 0.18rem;
}
.header_search {
  margin-right: 0.16rem;
}
</style>

