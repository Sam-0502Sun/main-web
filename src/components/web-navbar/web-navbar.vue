<template>
  <div class="nav-container">
    <div class="nav-box">
      <ul class="nav-left-ul">
        <li><a href="javascript:;">考生</a></li>
        <li><a href="javascript:;">在校生</a></li>
        <li><a href="javascript:;">教职工</a></li>
        <li><a href="javascript:;">访客</a></li>
      </ul>
      <ul class="nav-right-ul">
        <li><a href="javascript:;">考生</a></li>
        <li><a href="javascript:;">在校生</a></li>
        <li><a href="javascript:;">教职工</a></li>
        <li><a href="javascript:;">访客</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebNavbar'
}
</script>

<style lang="less" scoped>
.nav-container {
  background-color: #1F55DBD6;
  .nav-box {
    display: flex;
    ul {
      display: flex;
      height: 30px;
      width: 50%;
      margin: 0;
      padding: 0;

      li {
        list-style: none;

        a {
          padding: 0 15px;
          color: #cdcdcd;
          line-height: 1;
          display: inline-block;
          text-decoration: none;

          &:hover {
            color: #3070e5;
          }
        }

        ~ li {
          a {
            border-left: 2px solid #666;
          }
        }
      }
    }
    .nav-left-ul {
      justify-content: flex-start;
      align-items: center;
    }
    .nav-right-ul {
      justify-content: flex-end;
      align-items: center;
    }
  }
}
</style>
