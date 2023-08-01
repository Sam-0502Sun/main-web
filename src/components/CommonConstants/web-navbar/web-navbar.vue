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
        <li><a href="javascript:;">信息门户</a></li>
        <li><a href="javascript:;">English</a></li>
        <li><a href="javascript:;">网站地图</a></li>
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
  width: 100%;
  background-color: #183fe6;
  .nav-box {
    display: flex;
    max-width: 1240px;
    margin: 0 auto;
    ul {
      display: flex;
      height: 40px;
      width: 50%;
      margin: 0;
      padding: 0;

      li {
        list-style: none;
        font-size: 15px;

        a {
          padding: 0 15px;
          color: white;
          line-height: 1;
          display: inline-block;
          text-decoration: none;

          &:hover {
            color: #00040c;
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
