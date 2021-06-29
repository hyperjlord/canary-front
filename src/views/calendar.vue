<template>
  <div style="margin-left: 50px;margin-right:50px;text-align: left;width: 100%;">
    <div style="width: 250px;">
      <h1>Question4: 万年历问题</h1>
      <el-upload
          class="upload-demo"
          action="http://localhost:5000/question4"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="100"
          :on-exceed="handleExceed"
          :on-success="Success"
          :file-list="fileList">
        <el-button size="small" type="primary">上传测试用例</el-button>
        <div class="el-upload__tip">只能上传csv文件，且不超过500kb</div>
      </el-upload>
    </div>
    <div>
      <el-table
          :data="tableData"
          stripe
          style="width: 100%">
        <el-table-column
            prop=0
            label="序号">
        </el-table-column>
        <el-table-column
            prop=1
            label="年">
        </el-table-column>
        <el-table-column
            prop=2
            label="月">
        </el-table-column>
        <el-table-column
            prop=3
            label="日">
        </el-table-column>
        <el-table-column
            prop=4
            label="预期输出">
        </el-table-column>
        <el-table-column
            prop=5
            label="实际输出">
        </el-table-column>
        <el-table-column
            prop=6
            label="是否通过">
        </el-table-column>

      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "computerSell",
  data() {
    return {
      tableData: [],
      fileList: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 100 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    // eslint-disable-next-line no-unused-vars
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    // eslint-disable-next-line no-unused-vars
    Success(response, file, fileList) {
      this.tableData = response;
    }
  }
}
</script>

<style scoped>

</style>
