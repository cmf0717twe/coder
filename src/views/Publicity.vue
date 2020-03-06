<template>
  <div class="Publicity">
    <div class="bigBG">
      <div class="top1one"></div>
      <router-link to="/homepage" class="top1two" tag="div" replace></router-link>
      <!-- replace可以将默认的history.pashState(也就是栈结构的转变方式可以使用前进后退键)转变为history.replaceState(不可以使用前进后退键)-->
      <div class="bg">
        <img src="../assets/Publicity/role_1.png" />
        <img src="../assets/Publicity/role_2.png" />
        <img src="../assets/Publicity/role_3.png" />
        <img src="../assets/Publicity/role_4.png" />
        <img src="../assets/Publicity/role_5.png" />
        <div></div>
        <img src="../assets/Publicity/theme.png" />
      </div>
      <div class="bgl1">
        <div class="Appdown"></div>
        <div class="Anddown"></div>
        <div class="QRcode">
          <div class="lineMove"></div>
        </div>
        <div class="btn" @click="btn()"></div>
      </div>
      <div class="bgl2" @click="bgl2()"></div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import bottom from "@/components/bottom.vue";

export default {
  name: "Publicity",
  components: {
    bottom
  },
  methods: {
    btn() {
      $(".bgl1").css("left", "-180px");
      $(".bgl2").css("opacity", "1");
    },
    bgl2() {
      $(".bgl1").css("left", "0px");
      $(".bgl2").css("opacity", "0");
    }
  },
  mounted() {
    //在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
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

    $(".Publicity")
      .find("img")
      .eq(0)
      .animate(
        {
          opacity: 1,
          bottom: "110px"
        },
        {
          queue: true,
          duration: 1000
        }
      );
    setTimeout(function() {
      $(".Publicity")
        .find("img")
        .eq(1)
        .animate(
          {
            opacity: 1,
            bottom: "45px"
          },
          {
            queue: true,
            duration: 1000
          }
        );
      setTimeout(function() {
        $(".Publicity")
          .find("img")
          .eq(2)
          .animate(
            {
              opacity: 1,
              bottom: "45px"
            },
            {
              queue: true,
              duration: 1000
            }
          );
        setTimeout(function() {
          $(".Publicity")
            .find("img")
            .eq(3)
            .animate(
              {
                opacity: 1,
                "margin-left": "-840px"
              },
              {
                queue: true,
                duration: 1000
              }
            );
          setTimeout(function() {
            $(".Publicity")
              .find("img")
              .eq(4)
              .animate(
                {
                  opacity: 1,
                  "margin-left": "-593px"
                },
                {
                  queue: true,
                  duration: 1000
                }
              );
            $(".bg")
              .find("img")
              .eq(5)
              .css("transition", "all 1s");
            setTimeout(function() {
              $(".Publicity")
                .find("img")
                .eq(5)
                .css({
                  opacity: 1,
                  transform: "rotateX(0deg) rotateY(0deg)"
                });
              setTimeout(function() {
                $(".Publicity")
                  .find("img")
                  .eq(5)
                  .animate(
                    {
                      transition: "none"
                    },
                    {
                      queue: true,
                      duration: 1000
                    }
                  );
              }, 600);
            }, 600);
          }, 600);
        }, 600);
      }, 600);
    }, 600);
    setTimeout(function() {
      var X2 = _tagName("img")[5].offsetLeft;
      var Y2 = _tagName("img")[5].offsetTop;
      var X3 = X2 + _tagName("img")[5].offsetWidth / 2;
      var Y3 = Y2 + _tagName("img")[5].offsetHeight / 2;
      document.onmousemove = function(event) {
        var event = event || window.event;
        var X1 = event.pageX;
        var Y1 = event.pageY;
        _tagName("img")[5].style.left = X2 + (30 * (X3 - X1)) / X3 + "px";
        _tagName("img")[5].style.top = Y2 + (30 * (Y3 - Y1)) / Y3 + "px";
        $(".Publicity")
          .find("img")
          .eq(5)
          .css({
            right: "auto",
            bottom: "auto"
          });
      };
    }, 1000);
    var a = 1;
    setInterval(function() {
      var top = _className("lineMove")[0].offsetTop;
      top += a;
      _className("lineMove")[0].style.top = top + "px";
      if (top >= 150 || top <= 0) {
        a = -1 * a;
      }
    }, 20);
  }
};
</script>

<style>
.bigBG {
  height: 1080px;
  background: url(../assets/Publicity/bg.jpg) top center no-repeat;
  z-index: 999;
}

.bg {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 1080px;
  overflow: hidden;
}

.bg img {
  position: absolute;

  opacity: 0;
}

.bg img:nth-child(1) {
  left: 50%;
  margin-left: -470px;
  bottom: 90px;
  width: 919px;
  height: 959px;
  z-index: 6;
}

.bg img:nth-child(2) {
  left: 50%;
  margin-left: -675px;
  bottom: 25px;
  width: 652px;
  height: 875px;
  z-index: 5;
}

.bg img:nth-child(3) {
  left: 50%;
  margin-left: 195px;
  bottom: 25px;
  width: 509px;
  height: 831px;
  z-index: 4;
}

.bg img:nth-child(4) {
  left: 50%;
  margin-left: -785px;
  bottom: 0px;
  width: 494px;
  height: 768px;
}

.bg img:nth-child(5) {
  left: 50%;
  margin-left: -648px;
  bottom: 5px;
  width: 1442px;
  height: 955px;
}

.bg div:nth-child(6) {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 1080px;
  background: url(../assets/Publicity/bg_1.png) center center;
  z-index: 7;
}

.bg img:nth-child(7) {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 722px;
  height: 293px;
  z-index: 8;
  transform: rotateX(15deg) rotateY(-25deg);
}

.top1one {
  width: 106px;
  height: 95px;
  background-image: url(../assets/Publicity/logo.png);
  position: absolute;
  top: 45px;
  left: 50%;
  margin-left: -530px;
  z-index: 999;
}

.top1two {
  width: 160px;
  height: 64px;
  background-image: url(../assets/Publicity/btn_home.png);
  position: absolute;
  top: 60px;
  right: 120px;
  z-index: 999;
}

.bgl1 {
  width: 179px;
  height: 335px;
  background: url(../assets/Publicity/bg_download.png);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 999;
  transition: all 1s;
}

.Appdown {
  width: 152px;
  height: 52px;
  background: url(../assets/Publicity/btn_ios.png);
  position: absolute;
  left: 8px;
  top: 18px;
}

.Anddown {
  width: 152px;
  height: 52px;
  background: url(../assets/Publicity/btn_android.png);
  position: absolute;
  left: 8px;
  top: 80px;
}

.QRcode {
  width: 152px;
  height: 151px;
  background: url(../assets/Publicity/code_xz.png);
  position: absolute;
  left: 8px;
  top: 144px;
}

.lineMove {
  width: 136px;
  height: 2px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(192, 31, 31) 0px 0px 6px, rgb(192, 31, 31) 0px 0px 7px,
    rgb(192, 31, 31) 0px 0px 8px, rgb(192, 31, 31) 0px 0px 9px,
    rgb(192, 31, 31) 0px 0px 10px;
  position: absolute;
  left: 7px;
}

.btn {
  width: 24px;
  height: 24px;
  position: absolute;
  left: 71.5px;
  top: 306px;
  transform: rotate(-45deg);
  cursor: pointer;
}

.bgl2 {
  width: 93px;
  height: 92px;
  background: url(../assets/Publicity/btn_tag.png);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 999;
  opacity: 0;
  transition: all 0.5s;
  cursor: pointer;
}
</style>
