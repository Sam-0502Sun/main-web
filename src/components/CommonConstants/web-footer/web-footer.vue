<template>
  <div class="footer-container">
    <div class="footer-box">
      <el-row>
        <el-col :span="3"></el-col>
        <el-col :span="6">
          <div class="footer-source-nav">
            <div class="title">资源导航</div>
            <div class="footer-nav-item">
              <div class="nav-single-item" v-for="item in resourceNavList" :key="item.name">
                <router-link class="txt" :to="item.url" >{{item.name}}</router-link>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="footer-recommend-nav">
            <div class="title">资源导航</div>
            <div class="footer-nav-item">
              <div class="nav-single-item" v-for="item in recommendNavList" :key="item.name">
                <router-link class="txt" :to="item.url" >{{item.name}}</router-link>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <i class="iconfont icon-jiance-erweima"></i>
          <i class="iconfont icon-qq"></i>
          <i class="iconfont icon-weibo"></i>
          <i class="iconfont icon-weixin-copy"></i>
        </el-col>
        <el-col :span="3"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'WebFooter',
  setup () {
    const resourceNavList = reactive([
      {
        name: '教务系统',
        url: '/'
      },
      {
        name: '邮箱系统',
        url: '/'
      },
      {
        name: '迎新系统',
        url: '/'
      },
      {
        name: '教学评测',
        url: '/'
      },
      {
        name: '实践教学',
        url: '/'
      },
      {
        name: '网络杀毒',
        url: '/'
      },
      {
        name: '离校系统',
        url: '/'
      },
      {
        name: '图书馆',
        url: '/'
      },
      {
        name: '网络教学平台',
        url: '/'
      },
      {
        name: '办公文件',
        url: '/'
      },
      {
        name: '科研系统',
        url: '/'
      }
    ])
    const recommendNavList = reactive([
      {
        name: '中华人民共和国民政部',
        url: '/'
      },
      {
        name: '民政部职业技能鉴定指导中心',
        url: '/'
      },
      {
        name: '北京市教育委员会',
        url: '/'
      },
      {
        name: '中国民政人才网络学院',
        url: '/'
      },
      {
        name: '中国社会出版社',
        url: '/'
      },
      {
        name: '中国民政职业技能人才网',
        url: '/'
      },
      {
        name: '中华人民共和国教育部',
        url: '/'
      },
      {
        name: '全国民政职业教育教学委员会',
        url: '/'
      },
      {
        name: '中国高职高专教育网',
        url: '/'
      },
      {
        name: '网络教学平台',
        url: '/'
      },
      {
        name: '北京中民福祉教育科技有限责任公司',
        url: '/'
      }
    ])

    return {
      resourceNavList,
      recommendNavList
    }
  }
}
</script>

<style lang="less" scoped>
.footer-container {
  height: 400px;
  background-color: #0b46dc;
  .footer-box {
    max-width: 2000px;
    margin: 0 auto;
    padding-top: 20px;
    .footer-source-nav {
      padding: 0 10px;
      .title {
        font-size: 25px;
        color: white;
      }
      .footer-nav-item {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px 10px;
        margin-top: 40px;
        .nav-single-item {
          font-size: 15px;
          .txt {
            color: white;
          }
        }
      }
    }
    .footer-recommend-nav {
      padding: 0 10px;
      .title {
        font-size: 25px;
        color: white;
      }
      .footer-nav-item {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px 10px;
        margin-top: 40px;
        .nav-single-item {
          font-size: 15px;
          .txt {
            color: white;
          }
        }
      }
    }
    .iconfont {
      font-size: 50px;
      color: #6a6f6f;
    }
  }
}
</style>
