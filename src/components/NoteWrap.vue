<template>
  <el-space wrap id="notewrap">
    <el-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default{
  name:'NoteWrap',
  data() {
      return {

      }
  }
}
</script>