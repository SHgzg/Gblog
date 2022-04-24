<template>
  <el-button @click="add">Add Item</el-button>
  <el-button @click="onDelete">Delete Item</el-button>
  <el-scrollbar max-height="900px" align='center'>
    <div v-for="item in count" :key="item" class="scrollbar-demo-item">
    
     <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>

      <el-space wrap align-items='stretch'>
    <el-card v-for="i in 6" :key="i" class="box-card" style="width: 270px">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" type="text">Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </el-space>

      </el-main>
    </el-container>
    </div>
    
    </div>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(3)

const add = () => {
  count.value++
}
const onDelete = () => {
  if (count.value > 0) {
    count.value--
  }
}
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 900px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
