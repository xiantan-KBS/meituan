<template>
  <div class="login-container">
    <header>
      <router-link class="site-logo" to="/default">美团网</router-link>
    </header>
    <div class="content">
      <img
        src="https://mss.sankuai.com/static-prod01/com.sankuai.fe.www.sso/page/static/banner/www.jpg"
        width="480"
        height="370"
        alt="美团网"
      />
      <div class="login-section">
        <form action="" class="login-form">
          <div :class="{ error: true, visible: err ? true : false }">
            <i class="el-icon-remove"></i>
            {{ err }}
          </div>
          <div class="login-type">
            <span>账号登录</span>
            <span>手机动态码登陆 <i class="el-icon-mobile-phone"></i></span>
          </div>
          <el-input
            v-model="useName"
            placeholder="用户名"
            prefix-icon="el-icon-user-solid"
            @focus="clearErr"
          ></el-input>
          <el-input
            placeholder="密码"
            v-model="password"
            show-password
            prefix-icon="el-icon-unlock"
            @focus="clearErr"
          ></el-input>
          <div class="forgetPass">
            <router-link to="">忘记密码？</router-link>
          </div>
          <el-button type="primary" class="login-btn" @click="handleLogin"
            >登录</el-button
          >
          <div class="signup">
            <span>还没有账号？</span>
            <router-link to="/register">免费注册</router-link>
          </div>
          <div class="use-xieyi">
            <p :class="{show:true , visible: toggle?false:true}">请先阅读并勾选用户协议</p>
            <label for="use-xieyi">
              <input
                type="checkbox"
                id="use-xieyi"
                v-model="toggle"
              />
            </label>
            <p>
              我已阅读并同意 <a href="#"> 《美团用户协议》</a
              ><a href="#">《隐私政策》</a>
              ，并授权美团使用该美团账号信息（如昵称、头像、收货地址）进行统一管理
            </p>
          </div>
        </form>
        <div class="login-info">
          <p><span>用合作网站账号登录</span></p>
          <div class="icon">
            <a href="#" class="qq"></a>
            <a href="#" class="weixin"></a>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <ul>
        <li><a href="#">关于美团</a></li>
        <li><a href="#">加入我们</a></li>
        <li><a href="#">商家入驻</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">美团手机版</a></li>
      </ul>
      <p>
        ©2022 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号
      </p>
    </footer>
  </div>
</template>
<script>
// import { loginInfo } from "@/api/userInfo";
//   loginInfo({
//     params: {
//       useName: "xi",
//       password: "123456",
//     },
//   }).then(r=>console.log(r));
import axios from "axios";

// let requestInstance = new Request(
//   "http://mock.duyiedu.com/mock/72/api/user/login",
//   {
//     method: "post",
//     headers: {
//       "Content-Type": "	application/json",
//     },
//     body: '{"loginId": "hhh","loginPwd":"123123"}',
//   }
// );
// fetch(requestInstance)
//           .then((r) => r.json())
//           .then((r) => {
//             if (r.code) {
//               this.error = r.msg
//             }else{

//             }
//           });
export default {
  data() {
    return {
      useName: "",
      password: "",
      err: "",
      toggle: true,
    };
  },
  methods: {
    clearErr() {
      this.err = "";
    },
    handleLogin() {
      if (!this.useName && !this.password) {
        this.err = "请输入账号和密码";
      } else if (!this.useName) {
        this.err = "请输入用户名";
      } else if (!this.password) {
        this.err = "请输入密码";
      } else {
        if (this.toggle) {
          axios({
            method: "post",
            url: "https://study.duyiedu.com/api/user/login",
            data: {
              loginId: this.useName,
              loginPwd: this.password,
            },
          }).then((r) => {
            if (r.data.code) {
              this.err = r.data.msg;
            } else {
              localStorage.token = r.headers.authorization;
              this.$router.push("/default");
              this.$store.commit("userInfo/setUseName", this.useName);
              this.$store.commit("userInfo/setNickname", r.data.data.nickname);
              this.$store.commit("userInfo/setPassword", this.password);
            }
          });
        }
      }
    },
  },
};

</script>

<style lang="scss">
.visible {
  visibility: visible !important;
}
.login-container {
  width: 980px;
  margin: 0 auto;
  font-size: 14px;

  header {
    margin: 40px 0 30px;
    a {
      display: block;
      text-indent: -9999px;
      width: 130px;
      height: 47px;
      background: url(https://mss.sankuai.com/static-prod01/com.sankuai.fe.www.sso/assets/logo.6a89007.png)
        no-repeat;
      background-position: 0 !important;
      background-size: contain !important;
    }
  }
  footer {
    margin-bottom: 30px;
    color: #999;
    font-size: 10px;
    ul {
      margin-bottom: 20px;
      padding: 12px 0;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      display: flex;
      li {
        margin: 5px 0;
        padding: 0 16px;
        line-height: 14px;
        border-right: 1px solid #eee;
        &:nth-child(1) {
          padding-left: 0;
        }
      }
    }
  }
  .content {
    margin-bottom: 70px;
    display: flex;
    a {
      color: #fe8c00;
    }
    img {
      margin-right: 115px;
      width: 480px;
      height: 370px;
    }
    .login-form {
      width: 270px;
      // border: 1px solid;

      .error {
        display: flex;
        visibility: hidden;
        height: 20px;
        align-items: center;
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #f5d8a7;
        border-radius: 2px;
        background: #fff6db;
        font-size: 13px;
        .el-icon-remove {
          margin-right: 5px;
          font-size: 20px;
          color: #fe8c00;
        }
      }
      .login-type {
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
        span:nth-child(2) {
          font-size: 12px;
          cursor: pointer;
        }
      }
      .el-input {
        margin: 8px 0;
        input {
          color: #222;
          &:focus {
            border: 1px solid #fe8c00;
          }
        }
        .el-icon-user-solid,
        .el-icon-unlock {
          font-size: 18px;
        }
      }
      .forgetPass {
        color: #fe8c00;
        text-align: right;
        margin-bottom: 20px;
        font-size: 12px;
      }
      .login-btn {
        margin-bottom: 10px;
        width: 100%;
        color: #222;
        font-weight: bold;
        outline: none;
        border: none;
        background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
        box-shadow: 0 2px 1px rgb(191 105 0 / 15%);
      }
      .use-xieyi {
        position: relative;
        margin-top: 20px;
        color: #999;
        display: flex;
        .show {
          position: absolute;
          background: #222;
          width: 140px;
          height: 26px;
          opacity: 0.7;
          color: #fff;
          text-align: center;
          border-radius: 4px;
          font-size: 12px;
          top: -32px;
          left: -4.5px;
          visibility: hidden;
          &::after {
            content: "";
            position: absolute;
            top: 13px;
            left: 10px;
            width: 0;
            height: 0;
            transform: rotate(135deg);
            border-top: 14px solid #222;
            border-left: 14px solid transparent;
          }
        }
        p {
          line-height: 22px;
        }
      }
    }
    .login-info {
      margin-top: 25px;
      p {
        border-bottom: 1px solid #ccc;
        position: relative;
        span {
          width: 150px;
          text-align: center;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background-color: #fff;
        }
      }
      .icon {
        margin-top: 30px;
        text-align: center;
        .qq {
          display: inline-block;
          margin-right: 26px;
          width: 18px;
          height: 18px;
          background-position: -1250px -491px;
          background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
        }
        .weixin {
          display: inline-block;
          width: 18px;
          height: 18px;
          background-position: -1250px -599px;
          background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
        }
      }
    }
  }
}
</style>
