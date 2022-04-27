<template>
  <div class="register-container">
    <header>
      <div class="wrapper">
        <router-link to="/default" class="logo"></router-link>
        <div>
          <span>已有美团账号？</span>
          <router-link to="/login" class="login">登录</router-link>
        </div>
      </div>
    </header>
    <div class="content">
      <!--  :rules="rules" -->
      <el-form :model="myForm" ref="myForm" label-width="100px" :rules="rules">
        <el-form-item label="用户名" prop="useName">
          <el-input
            type="text"
            v-model="myForm.useName"
            autocomplete="off"
          ></el-input>
          <div class="warn" v-show="warn.useWarn">
            <i class="el-icon-remove"></i>
            {{ warn.useWarn }}
          </div>
        </el-form-item>
        <el-form-item label="用户昵称" prop="nickname">
          <el-input
            type="text"
            v-model="myForm.nickname"
            autocomplete="off"
          ></el-input>
          <div class="warn" v-show="warn.nameWarn">
            <i class="el-icon-remove"></i>
            {{ warn.nameWarn }}
          </div>
        </el-form-item>
        <el-form-item label="创建密码" prop="password">
          <el-input
            type="password"
            v-model="myForm.password"
            autocomplete="off"
            @input="changeBar($event)"
          ></el-input>
          <div class="warn" v-show="warn.passWarn">
            <i class="el-icon-remove"></i>
            {{ warn.passWarn }}
          </div>
        </el-form-item>
        <div class="strength-bar">
          <div class="bar" ref="bar"></div>
          <div class="strength">
            <span>弱</span><span>中</span><span>强</span>
          </div>
        </div>
        <el-form-item label="确认密码" prop="checkPassword">
          <el-input
            type="password"
            v-model="myForm.checkPassword"
            autocomplete="off"
          ></el-input>
          <div class="warn" v-show="warn.checkWarn">
            <i class="el-icon-remove"></i>
            {{ warn.checkWarn }}
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('myForm')"
            >完成注册并登录</el-button
          >
        </el-form-item>
        <div class="use-xieyi">
          <p :class="{ show: true, visible: toggle ? false : true }">
            请先阅读并勾选用户协议
          </p>
          <label for="use-xieyi">
            <input type="checkbox" id="use-xieyi" v-model="toggle" />
          </label>
          <p>
            我已阅读并同意 <a href="#"> 《美团用户协议》</a
            ><a href="#">《隐私政策》</a>
            ，并授权美团使用该美团账号信息（如昵称、头像、收货地址）进行统一管理
          </p>
        </div>
      </el-form>
    </div>
    <footer>
      <p>©meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        this.warn.useWarn = "请填写用户名";
      } else {
        axios
          .get("https://study.duyiedu.com/api/user/exists", {
            params: {
              loginId: value,
            },
          })
          .then((res) => {
            if (res.data.data) {
              this.warn.useWarn = "该用户名已注册";
            } else {
              this.warn.useWarn = "";
              callback();
            }
          });
      }
    };
    var validateName = (rule, value, callback) => {
      if (value === "") {
        this.warn.nameWarn = "请填写用户昵称";
      } else {
        this.warn.nameWarn = "";
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        this.warn.passWarn = "请填写密码";
      } else {
        if (this.myForm.rePassword !== "") {
          this.$refs.myForm.validateField("checkPassword");
        }
        this.warn.passWarn = "";
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        this.warn.checkWarn = "请再次输入密码";
      } else if (value !== this.myForm.password) {
        this.warn.checkWarn = "两次输入密码不一致!";
      } else {
        this.warn.checkWarn = "";
        callback();
      }
    };

    return {
      myForm: {
        useName: "",
        password: "",
        checkPassword: "",
        nickname: "",
      },
      warn: {
        useWarn: "",
        passWarn: "",
        checkWarn: "",
        nameWarn: "",
      },
      toggle: true,
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPassword: [{ validator: validatePass2, trigger: "blur" }],
        nickname: [{ validator: validateName, trigger: "blur" }],
        useName: [{ validator: validateUser, trigger: "blur" }],
      },
    };
  },
  methods: {
    // submitForm() {
    //   if (
    //     !this.myForm.useName &&
    //     !this.myForm.password &&
    //     !this.myForm.checkPassWord &&
    //     !this.myForm.nickname
    //   ) {
    //     this.warn.useWarn = "请填写用户名";
    //     this.warn.nameWarn = "请填写用户昵称";
    //     this.warn.passWarn = "请填写密码";
    //     this.warn.checkWarn = "请再次输入密码";
    //   } else {
    //   }
    // },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        // console.log(valid)
        if (valid) {
          // console.log(this.myForm);
          if (this.toggle) {
            axios({
              method: "post",
              url: "https://study.duyiedu.com/api/user/reg",
              data: {
                loginId: this.myForm.useName,
                nickname: this.myForm.nickname,
                loginPwd: this.myForm.password,
              },
              headers: {
                "Content-Type": "application/json",
              },
            }).then((r) => {
              if (r.data.code === 0) {
                // console.log(r.headers.authorization)
                localStorage.token = r.headers.authorization;
                this.$router.push("/default");
                this.$store.commit("userInfo/setUseName", this.myForm.useName);
                this.$store.commit(
                  "userInfo/setNickname",
                  this.myForm.nickname
                );
                this.$store.commit(
                  "userInfo/setPassword",
                  this.myForm.password
                );
              }
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    changeBar(e) {
      if (e.length > 0 && e.length <= 6) {
        this.$refs.bar.style.backgroundColor = "#f76120";
        this.$refs.bar.style.width = "91px";
      } else if (e.length > 6 && e.length <= 12) {
        this.$refs.bar.style.backgroundColor = "#ff8900";
        this.$refs.bar.style.width = "184px";
      } else if (e.length > 12) {
        this.$refs.bar.style.backgroundColor = "#5bab3c";
        this.$refs.bar.style.width = "285px";
      } else {
        this.$refs.bar.style.backgroundColor = "#d3ebee";
        this.$refs.bar.style.width = "0px";
      }
    },
  },
};
</script>

<style lang="scss">
.register-container {
  header {
    border-bottom: 2px solid #d8d8d8;
    min-width: 980px;
    color: #666;
    .wrapper {
      margin: 0 auto;
      padding: 10px 0;
      width: 980px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        display: inline-block;
        width: 128px;
        height: 47px;
        background: url("https://mss.sankuai.com/static-prod01/com.sankuai.fe.www.sso/assets/logo.6a89007.png")
          no-repeat;
        background-size: contain;
      }
      .login {
        border-radius: 4px;
        font-size: 12px;
        margin-left: 15px;
        padding: 3px 10px;
        color: #222222;
        background-image: linear-gradient(135deg, #ffd000 0%, #ffbd00 100%);
        border-width: 0 0;
        box-shadow: 0px 2px 1px rgb(191 105 0 / 15%);
        background-size: 100%;
      }
    }
  }
  footer {
    border-top: 1px solid #eee;
    padding-top: 20px;
    text-align: center;
    p {
      cursor: pointer;
      font-size: 12px;
      font-family: initial;
      color: #999;
    }
  }
  .content {
    width: 980px;
    margin: 0 auto 30px;
    padding-top: 30px;
    min-height: 300px;
    form {
      .strength-bar {
        position: relative;
        width: 285px;
        background: #eee;
        top: -20px;
        left: 100px;
        .bar {
          background: #f76120;
          height: 20px;
          width: 0;
          overflow: hidden;
          transition: all 0.4s linear;
        }
        .strength {
          position: absolute;
          left: 0;
          top: 0;
          span {
            display: block;
            float: left;
            text-align: center;
            font-size: 12px;
            height: 20px;
            line-height: 20px;
            width: 91px;
            border-right: 2px solid #fff;
            color: #fff;
            &:nth-last-child(1) {
              border-right: none;
            }
          }
        }
      }
      .el-form-item__content {
        display: flex;
        .el-input {
          width: 285px;
        }
        .warn {
          // visibility: hidden;
          margin-left: 10px;
          height: 20px;
          font-size: 13px;
          .el-icon-remove {
            margin-right: 5px;
            font-size: 20px;
            color: #fe8c00;
          }
        }
        .el-button {
          background: #ffd100;
          border-radius: 2px;
          width: 285px;
          border: none;
          box-shadow: 0px 2px 1px rgb(191 105 0 / 15%);
          span {
            color: #222;
            font-weight: bold;
          }
        }
      }
      .use-xieyi {
        margin-left: 100px;
        position: relative;
        margin-top: 20px;
        color: #999;
        display: flex;
        width: 285px;
        font-size: 14px;
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
          a {
            color: #fe8c00;
          }
        }
      }
      .el-input__inner {
        border-radius: 0;
        border: 1px solid #aaa;
        &:focus {
          border: 1px solid #fe8c00;
        }
      }
    }
  }
}
</style>
