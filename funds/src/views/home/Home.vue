<template>
  <div class="home">
    <div class="container">
      <h1 class="title">TEXAS HOLD'EM POKER!!</h1>
      <p class="lead">kasper's private online game</p>
      <el-popover
        width="200"
        trigger="click"
        content="stack">
        <el-input v-model="name" placeholder="nickname" />
        <el-input v-model="stack" placeholder="your stack" />
        <el-button>seat</el-button>
        <template #reference>
          <el-button class="seat">player1</el-button>
        </template>
      </el-popover>
      <el-popover
        width="200"
        trigger="click"
        content="stack">
        <el-input v-model="name" placeholder="nickname" />
        <el-input v-model="stack" placeholder="your stack" />
        <el-button>seat</el-button>
        <template #reference>
          <el-button class="seat">player2</el-button>
        </template>
      </el-popover>
      <el-popover
        width="200"
        trigger="click"
        content="stack">
        <el-input v-model="name" placeholder="nickname" />
        <el-input v-model="stack" placeholder="your stack" />
        <el-button>seat</el-button>
        <template #reference>
          <el-button class="seat">player3</el-button>
        </template>
      </el-popover>
      <el-popover
        width="200"
        trigger="click"
        content="stack">
        <el-input v-model="name" placeholder="nickname" />
        <el-input v-model="stack" placeholder="your stack" />
        <el-button>seat</el-button>
        <template #reference>
          <el-button class="seat">player4</el-button>
        </template>
      </el-popover>
      <el-popover
        width="200"
        trigger="click"
        content="stack">
        <el-input v-model="name" placeholder="nickname" />
        <el-input v-model="stack" placeholder="your stack" />
        <el-button>seat</el-button>
        <template #reference>
          <el-button class="seat">player5</el-button>
        </template>
      </el-popover>
      <el-popover
        width="200"
        trigger="click"
        content="stack">
        <el-input v-model="name" placeholder="nickname" />
        <el-input v-model="stack" placeholder="your stack" />
        <el-button>seat</el-button>
        <template #reference>
          <el-button class="seat">player6</el-button>
        </template>
      </el-popover>

      <div class="card">
        <div class="cover">
          <img src="../../assets/images/card/poker.jpg">
        </div>
        <div class="back">
          <img src="../../assets/images/card/poker.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const name = ref('') 
  const stack = ref('')
</script>

<style lang="less" scoped>
.home {
  margin-left: 200px;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #a8edea 0%, #fed6e3 100%);
  background-size: 100% 100%;

  .container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    text-align: center;
    color: #fff;
    position: relative;

    .title {
      font-size: 30px;
      box-sizing: border-box;
      margin: 0px auto;
    }

    .lead {
      box-sizing: border-box;
      margin-top: 20px ;
      margin-left: auto;
      margin-right: auto;
      font-size: 22px;
    }
    .seat {
      position: relative;
      z-index: 1;
      float: left;
      margin: 40px;
      width: 80px;
      // 把字往左移动 不对！！！
      // padding-left: 500px;
      height: 80px;
      border: 2px solid #278722;
      border-radius: 50%;
      background-color: #1b599e;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color 0.3s ease;
      color: #fff;
    }
    .card{
      position: relative;
      .cover{

      }
      .back{
        
      }
    }
  }
}
img{
  margin-left: -200px;
  width: 1000px;
  height: 500px;
}
</style>
