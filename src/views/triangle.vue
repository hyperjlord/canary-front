<template>
  <el-upload
      class="upload-demo"
      ref="upload"
      action="http://imsty.cn:5000/question2/"
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
        stripe
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
          prop=5
          label="是否通过">
      </el-table-column>

    </el-table>
  </div>
</template>

<style>


</style>

<script>
export default {
  name: 'triangle',
  data() {
    return {
      uploadActionUrl:'',
      form: {
        edge1: '',
        edge2: '',
        edge3: '',
      },
      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }, {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }]
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
      this.tableData = response;
    }
  }
};
</script>