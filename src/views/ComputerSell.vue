<template>
  <el-upload
      class="upload-demo"
      ref="upload"
      action="http://imsty.cn:5000/question2"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="100"
      :on-exceed="handleExceed"
      :on-success="Success"
      :file-list="fileList"

      :auto-upload="false">

    <template #trigger>
      <el-button size="small" type="primary">选取用例文件</el-button>
    </template>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    <template #tip>
      <div class="el-upload__tip">
        测试用例文件格式应为.csv
      </div>
    </template>
  </el-upload>
  <div>
    <el-table
        :data="tableData"
        :row-class-name="tableRowClassName"
        style="width: 100%">
      <el-table-column
          prop=0
          label="序号"
          width="180">
      </el-table-column>
      <el-table-column
          prop=1
          label="本月通话的分钟数"
          width="180">
      </el-table-column>
      <el-table-column
          prop=2
          label="通话时间段的最大容许不按时缴费次数">
      </el-table-column>
      <el-table-column
          prop=3
          label="预期输出">
      </el-table-column>
      <el-table-column
          prop=4
          label="实际输出">
      </el-table-column>
      <el-table-column
          prop=c5
          label="是否通过">
      </el-table-column>

    </el-table>
  </div>
</template>
<style>
.el-table .warning-row {
  background: #e35459;
}
.el-table .success-row {
  background: #f0f9eb;
}

</style>
<script>
export default {
  name: 'ComputerSell',
  data() {
    return {
      tableData: [],
      uploadActionUrl: '',
      tableRowClassName({row, rowIndex}) {
        if (row.c5 === "通过测试") {
          return 'success-row';
        } else if (row.c5 === "未通过测试") {
          return 'warning-row';
        }
        return '';
      },
      form: {
        edge1: '',
        edge2: '',
        edge3: '',
      },
      fileList: []
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
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
      for (let i = 0; i < response.length; i++) {
        let res=response[i];
        let val=res['5'];
        delete(res['5']);
        res['c5']=val;
      }
      this.tableData = response;
    }
  }
};
</script>