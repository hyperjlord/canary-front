<template>
  <div style="margin-left: 50px;margin-right:50px;text-align: left;width: 100%;">
    <div style="width: 250px;">
      <h1>单元测试</h1>
      <div class="select">
        <el-select v-model="selectItem" placeholder="请选择" @change="changeSelect">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
        <el-select v-model="selectSubItem" placeholder="请选择" :style="{display: ifUserDisplay}">
          <el-option>
          </el-option>
        </el-select>
      </div>
      <div>
        <input type="file" name="fileDemo" id="fileDemo" multep/>
        <input type="button" value="readAsText"  id="readAsText" @click="showDataByText"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"unitTest",
  data() {
    return {
      options: ['User', 'Exam'],
      selectItem: '',
      ifUserDisplay: "none",
      fileList: []
    }
  },
  methods: {
    changeSelect() {
      console.log(this.selectItem);
      if(this.selectItem == "User")
      {
        this.ifUserDisplay = "block";
      }
      else if(this.selectItem == "Exam")
      {
        this.ifUserDisplay = "none";
      }
    },
    showDataByText() {
      var resultFile = document.getElementById("fileDemo").files[0];
      const fileReader = new FileReader();
      fileReader.readAsText(resultFile);
      fileReader.onload = function() {
        let data = this.result.split("\n");
        let variables = [];
        data.map(v => {
          if (v) {
            variables.push(v.split(","));
          }
        });
      console.log(data)
      console.log(variables)
      };
    }
  }
}
</script>

<style>

</style>