<template>
  <p1>Canary金丝雀软件测试平台</p1>
</template>

<style>
 

</style>

<script>
    export default {
        name: 'home',
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
    };
</script>