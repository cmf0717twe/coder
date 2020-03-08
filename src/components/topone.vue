<template>
  <div class="top">
    <div class="head">
      <div class="logo"></div>
      <div class="textarea">
        <div class="textbox">
          <a href="first.html">
            <div class="text yellow">首页</div>
          </a>
          <a href="qingbao.html">
            <div class="text">情报局</div>
          </a>
          <div class="text">图鉴</div>
          <a href="tuce.html">
            <div class="text">图册</div>
          </a>
          <a href="first.html#top5">
            <div class="text">世界观</div>
          </a>
          <a href="first.html#top6">
            <div class="text">时间线</div>
          </a>
          <div class="text">
            16LAB
            <br />研究院
          </div>
        </div>
      </div>
      <div class="people">
        <div class="people12">
          <div class="peopleone fl">登录</div>
          <div class="peopleone fr">注册</div>
          <div class="peopleName"></div>
        </div>
        <div class="peoplethree">账号自助查询</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topone",
  mounted() {
    //封装获取id函数
    function _id(id) {
      return document.getElementById(id);
    }

    //封装一个ClassName函数
    function _className(className) {
      return document.getElementsByClassName(className);
    }
    //封装一个TagName函数
    function _tagName(tagName) {
      return document.getElementsByTagName(tagName);
    }
    for (var i = 0; i < _className("text").length; i++) {
      _className("text")[i].style.left = i * 110 + "px";
    }
    setInterval(function() {
      if (localStorage.state == "denglu") {
        $(".peopleone").css("display", "none");
        $(".peopleName").css("display", "block");
        $(".peopleName").html("欢迎您，" + localStorage.id);
        $(".peoplethree").html("注销");
        $(".peoplethree").click(function() {
          localStorage.state = "weidenglu";
        });
      } else if (localStorage.state == "weidenglu") {
        $(".peopleone").css("display", "block");
        $(".peopleName").css("display", "none");
        $(".peoplethree").html("账号自助查询");
      }
    }, 1);
    $(".peopleone")
      .eq(0)
      .click(function() {
        localStorage.setItem("dlzc", "0");
        window.open("dlzc.html");
      });
    $(".peopleone")
      .eq(1)
      .click(function() {
        localStorage.setItem("dlzc", "1");
        window.open("dlzc.html");
      });
  }
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 90px;
  background-color: rgb(25, 25, 25);
}
.head {
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 1200px;
  height: 90px;
}

.logo {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 151px;
  height: 51px;
  background: url(../assets/Official/logo.png);
}

.people {
  position: absolute;
  right: 0;
  width: 148px;
  height: 90px;
}

.people12 {
  position: absolute;
  width: 100%;
  top: 5px;
}

.peopleone {
  width: 66px;
  height: 25px;
  margin: 10px 0px 5px;
  color: #596061;
  text-align: center;
  font-size: 15px;
  line-height: 25px;
  background: url(../assets/Official/btn_bg1.png);
  cursor: pointer;
}

.peopleName {
  width: auto;
  height: 25px;
  margin: 10px 0px 5px;
  color: #596061;
  font-size: 15px;
  line-height: 25px;
  display: none;
  color: rgb(255, 192, 0);
}

.peopleone:hover {
  color: #ffc000;
  background: url(../assets/Official/btn_bg1_on.png);
}

.peoplethree {
  position: absolute;
  width: 100%;
  height: 25px;
  bottom: 5px;
  margin: 5px 0px 10px;
  color: #ffc000;
  text-align: center;
  font-size: 15px;
  line-height: 25px;
  background: url(../assets/Official/btn_bg2_on.png);
  cursor: pointer;
}

.textarea {
  position: absolute;
  left: 151px;
  width: 899px;
  height: 90px;
}

.textbox {
  position: absolute;
  width: 770px;
  height: 90px;
  left: 0;
  right: 0;
  margin: auto;
}

.text {
  width: 110px;
  height: 90px;
  color: #ffffff;
  font-size: 20px;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.yellow {
  color: #ffc000;
  width: 98px;
  height: 78px;
  border: 6px solid #191919;
  border-bottom: 6px solid #ffc000;
}
.text:hover {
  color: #ffc000;
}
</style>