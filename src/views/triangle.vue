<template>

 <div class='container'>
   <el-container>
    <h1 style="font-size:18px" class="header">Question1:判断三角形类型</h1>
    <el-footer style="margin-left: 30px">
       <el-tabs type="border-card" style="width: 70%; height: 350px">
        <el-tab-pane label="单个测试" name="first">
          <h4>单个测试</h4>
          <el-form ref="form" :model="form" label-width="80px" class="input-form">
            <el-form-item label="edge1" class="input-text">
              <el-input v-model="form.edge1"></el-input>
            </el-form-item>
            <el-form-item label="edge2" class="input-text">
              <el-input v-model="form.edge2"></el-input>
            </el-form-item>
            <el-form-item label="edge3" class="input-text">
              <el-input v-model="form.edge3"></el-input>
            </el-form-item>
            <el-form-item class="button">
              <el-button type="primary" @click="onClick">提交</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="批量测试" name="second">
          <h4>批量测试</h4>
          <el-upload
            class="upload-demo"
            action="http://localhost:5000/question1"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="100"
            :on-exceed="handleExceed"
            :on-success="Success"
            :file-list="fileList">
            <el-button size="small" type="primary">上传测试用例</el-button>
            <div class="el-upload__tip">只能csv文件，且不超过500kb</div>
          </el-upload>
        </el-tab-pane>
      </el-tabs>

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
              label="输入第一条边"
              width="180">
          </el-table-column>
          <el-table-column
              prop=2
              label="输入第二条边"
              width="180">
          </el-table-column>
          <el-table-column
              prop=3
              label="输入第三条边"
              width="180">
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
    </el-footer>
   </el-container>

 </div>

</template>
<script>
export default {
  name: "triangle",
  data() {
    return {
      uploadActionUrl:'',
      tableData: [],
      fileList: [],
      form: {
        edge1: '',
        edge2: '',
        edge3: '',
      },
    }
  },
  methods: {
    onClick() {
      var a = parseFloat(this.form.edge1)
      var b = parseFloat(this.form.edge2)
      var c = parseFloat(this.form.edge3)
      if (a < 0)
          this.$message.warning ("a不能为0")
      if (b < 0)
          this.$message.warning ("b不能为0")
      if (c < 0)
          this.$message.warning ("c不能为0")
      if (a >= 800)
          this.$message.warning ("a不在取值范围内")
      if (b >= 800)
          this.$message.warning ("b不在取值范围内")
      if (c >= 800)
          this.$message.warning ("c不在取值范围内")
      if (a + c > b && a + b > c && b + c > a)
      {
          if (a == b && b == c)
              this.$message.warning ("等边三角形")
          else if( a == b || b == c || a == c)
              this.$message.warning ("等腰三角形")
          else
              this.$message.warning ("普通三角形")
      }
      else
          this.$message.warning ("不是三角形")
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
}
</script>

<style scoped>
.header{
  margin-left: 50px;
  margin-bottom: 30px;
  text-align: left;
}
.upload-demo {
  margin-top: 50px;
}
.input-form{
  padding-right: 20px;
}

</style>
