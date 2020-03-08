<template>
  <div class="first">
    <div class="blackBox">
      <div class="video">
        <video
          src="http://gf.ppgame.com/CKFinderJava/1/files/SQ.mp4"
          width="800px"
          height="600px"
          controls="controls"
          autoplay="autoplay"
          id="video"
        ></video>
        <div class="close"></div>
      </div>
    </div>
    <div class="blackImg">
      <img src style="width: auto;height: 100%;position: absolute;left: 0;right: 0;margin: 0 auto;" />
    </div>
    <div class="top1">
      <div class="top1one">
        <div class="top1one1"></div>
        <div class="top1one2"></div>
      </div>
      <div class="top1two">
        <div class="top1two1">
          <div class="lineMove"></div>
        </div>
        <div class="top1two2">
          <div class="apple"></div>
          <div class="android"></div>
        </div>
        <div class="top1two3"></div>
        <div
          style="width: 13px;height: 13px;opacity: 0.6;position: absolute;border-top: 2px solid #FFFFFF;border-left: 2px solid #FFFFFF;left: 0px;top: 0px;"
        ></div>
        <div
          style="width: 13px;height: 13px;opacity: 0.6;position: absolute;border-bottom: 2px solid #FFFFFF;border-right: 2px solid #FFFFFF;right: 0px;bottom: 0px;"
        ></div>
      </div>
    </div>
    <div class="top2">
      <div class="top2box">
        <div class="top2one">
          <div class="top2imgbox">
            <div class="top2img" style="background: url(img/少前官网/634X363-3.jpg);"></div>
            <div class="top2img"></div>
            <div class="top2img"></div>
            <div class="top2img"></div>
            <div class="top2img" style="background: url(img/少前官网/634X363-1.jpg);"></div>
          </div>
          <div class="top2spotbox">
            <div class="top2spot fl"></div>
            <div class="top2spot fl"></div>
            <div class="top2spot fl"></div>
          </div>
        </div>
        <div class="top2two">
          <div class="top2twolist">
            <div class="top2twotext">
              <div class="top2twoimg fl"></div>
              <p class="top2twotext2 fl">《少女前线》上元节主题征图活动</p>
              <p class="top2twodate fr">2019.02.03</p>
            </div>
            <div class="top2twotext">
              <div class="top2twoimg fl" style="background-position-x: -100px;"></div>
              <p class="top2twotext2 fl">冬活萌新向通关攻略（一面）</p>
              <p class="top2twodate fr">2019.01.28</p>
            </div>
            <div class="top2twotext">
              <div class="top2twoimg fl" style="background-position-x: -50px;"></div>
              <p class="top2twotext2 fl">全新冬活【异构体】开启！</p>
              <p class="top2twodate fr">2019.01.24</p>
            </div>
            <div class="top2twotext">
              <div class="top2twoimg fl" style="background-position-x: -50px;"></div>
              <p class="top2twotext2 fl">【公告】关于恶意修改游戏客户端说明</p>
              <p class="top2twodate fr">2018.08.30</p>
            </div>
            <div class="top2twotext">
              <div class="top2twoimg fl"></div>
              <p class="top2twotext2 fl">最新登录壁纸</p>
              <p class="top2twodate fr">2019.01.31</p>
            </div>
            <div class="top2twotext">
              <div class="top2twoimg fl" style="background-position-x: -50px;"></div>
              <p class="top2twotext2 fl">1月30日热更内容说明</p>
              <p class="top2twodate fr">2019.01.31</p>
            </div>
          </div>
          <div class="top2twomore">
            更多
            <div class="top2twomoreright fr"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="top3">
      <div class="top3one">
        <div class="top3role"></div>
        <div class="top3box">
          <div class="top3gun"></div>
          <div class="top3doll"></div>
          <div class="top3boxName">
            <div class="top3boxText">
              <div>春田：指挥官，春田能为您做什么，</div>
              <div>请随时吩咐。</div>
            </div>
          </div>
          <div class="top3small">
            <div class="top3smallLeft"></div>
            <div class="top3smallBox">
              <div class="top3smallBoxIcon choose"></div>
              <div class="top3smallBoxIcon"></div>
              <div class="top3smallBoxIcon"></div>
              <div class="top3smallBoxIcon"></div>
              <div class="top3smallBoxIcon"></div>
              <div class="top3smallBoxIcon"></div>
            </div>
            <div class="top3smallRight"></div>
          </div>
          <div class="top3boxCv">
            <div>CV</div>
            <div>崛江由衣</div>
            <div>
              <audio id="audio" src="img/少前官网/audio/98K_DEFENSE_JP.mp3">
                <!--<source src="" type="audio/mp3">
                <source src="" type="audio/vnd.wave"> "您的浏览器不支持audio元素。"-->
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="top4">
      <div class="top4box">
        <div class="top4black">
          <div class="top4orangeBlock"></div>
          <div class="top4blackCard top4choose">同人绘图</div>
          <div class="top4blackCard">四格漫画</div>
          <div class="top4blackCard">游戏壁纸</div>
          <div class="top4blackCard" style="border-bottom: 0px;">查看更多</div>
        </div>
        <div class="top4whiteFrame">
          <div
            class="top4whiteboxTL"
            style="background-image: url(img/少前官网/top4/100.jpg);background-repeat: no-repeat;"
          ></div>
          <div
            class="top4whiteboxTR"
            style="background-image: url(img/少前官网/top4/200.jpg);background-repeat: no-repeat;"
          ></div>
          <div
            class="top4whiteboxBL"
            style="background-image: url(img/少前官网/top4/300.jpg);background-repeat: no-repeat;"
          ></div>
          <div
            class="top4whiteboxBR"
            style="background-image: url(img/少前官网/top4/400.jpg);background-repeat: no-repeat;"
          ></div>
        </div>
        <div class="top4whiteFrame">
          <div
            class="top4whiteboxTL"
            style="background-image: url(img/少前官网/top4/101.jpg);opacity: 0;display: none;background-size: 100% 1000px;background-repeat: no-repeat;"
          ></div>
          <div
            class="top4whiteboxTR"
            style="background-image: url(img/少前官网/top4/201.jpg);opacity: 0;display: none;background-size: 100% 1000px;background-repeat: no-repeat;"
          ></div>
          <div
            class="top4whiteboxBL"
            style="background-image: url(img/少前官网/top4/301.jpg);opacity: 0;display: none;background-size: 100% 1000px;background-repeat: no-repeat;"
          ></div>
          <div
            class="top4whiteboxBR"
            style="background-image: url(img/少前官网/top4/401.jpg);opacity: 0;display: none;background-size: 100% 1000px;background-repeat: no-repeat;"
          ></div>
        </div>
        <div class="top4whiteFrame">
          <div
            class="top4whiteboxTL"
            style="background-image: url(img/少前官网/top4/102.jpg);opacity: 0;display: none;background-repeat: no-repeat;"
          ></div>
          <div
            class="top4whiteboxTR"
            style="background-image: url(img/少前官网/top4/202.jpg);opacity: 0;display: none;background-repeat: no-repeat;"
          ></div>
          <div
            class="top4whiteboxBL"
            style="background-image: url(img/少前官网/top4/302.jpg);opacity: 0;display: none;background-repeat: no-repeat;"
          ></div>
          <div
            class="top4whiteboxBR"
            style="background-image: url(img/少前官网/top4/402.jpg);opacity: 0;display: none;background-repeat: no-repeat;"
          ></div>
        </div>
      </div>
    </div>
    <div class="top5" id="top5">
      <div class="top5left">&lt;</div>
      <div class="top5right">&gt;</div>
      <div class="top5box">
        <div class="top5view" style="left: -1000px;">
          <div class="top5viewone"></div>
          <div class="top5viewtwo">
            <p></p>
            <p></p>
          </div>
          <div class="top5viewthree"></div>
        </div>
        <div class="top5view">
          <div class="top5viewone"></div>
          <div class="top5viewtwo">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div class="top5viewthree"></div>
        </div>
        <div class="top5view" style="left: 1000px;">
          <div class="top5viewone"></div>
          <div class="top5viewtwo">
            <p></p>
            <p></p>
          </div>
          <div class="top5viewthree"></div>
        </div>
        <div class="top5view" style="left: 2000px;">
          <div class="top5viewone"></div>
          <div class="top5viewtwo">
            <p></p>
            <p></p>
          </div>
          <div class="top5viewthree"></div>
        </div>
      </div>
    </div>
    <div class="top6" id="top6">
      <div class="top6timeLine">
        <div class="top6timeLineLeft">&lt;</div>
        <div class="top6timeLineRight">&gt;</div>
        <div class="top6timeLineImgBox">
          <div class="top6timeLineImg">
            <img src="img/少前官网/timeLine/timesLine.jpg" class="top6timeLineImage" />
            <img src="img/少前官网/timeLine/line_light1.png" class="top6timeLineLight1" />
            <img src="img/少前官网/timeLine/line_light2.png" class="top6timeLineLight2" />
            <img src="img/少前官网/timeLine/line_light3.png" class="top6timeLineLight3" />
            <img src="img/少前官网/timeLine/line_light4.png" class="top6timeLineLight4" />
          </div>
        </div>
      </div>
      <div class="top6btn_juqing"></div>
      <div class="top6btn_tasuodian"></div>
    </div>
    <div class="top7RB">
      <div>合作</div>
      <div>媒体</div>
    </div>
    <div class="top7RBC">
      <div>官方</div>
      <div>地图</div>
    </div>
    <div class="top7RC">
      <p class="top7RCtitle">关注我们</p>
      <div class="top7RCcode"></div>
      <div class="top7RCtext">
        <p class="top7RCtext1">关注官方公众号</p>
      </div>
      <div class="top7RCiconBox">
        <div class="top7RCicon"></div>
        <div class="top7RCicon" style="background-position-x: 108px;"></div>
        <div class="top7RCicon" style="background-position-x: 68px;"></div>
        <div class="top7RCicon" style="background-position-x: 32px;"></div>
      </div>
      <div class="top7RCbtn"></div>
    </div>
    <div class="top7RCbtn2">
      <div class="top7RCbtn2Left">
        <div
          style="width: 14px;height: 14px;position: absolute;left: 5px;bottom: 5px;border-bottom: 2px solid #FFFFFF;border-left: 2px solid #FFFFFF;"
        ></div>
      </div>
    </div>
    <div class="top7LC">
      <div class="top7LCYline"></div>
      <div class="top7LClist">
        <div class="top7LClistSpot top7LCchoose"></div>
        <p class="top7LClisttext">顶部</p>
      </div>
      <div class="top7LClist" style="top: 40px;">
        <div class="top7LClistSpot"></div>
        <p class="top7LClisttext">格里芬情报局</p>
      </div>
      <div class="top7LClist" style="top: 80px;">
        <div class="top7LClistSpot"></div>
        <p class="top7LClisttext">人形少女图鉴</p>
      </div>
      <div class="top7LClist" style="top: 120px;">
        <div class="top7LClistSpot"></div>
        <p class="top7LClisttext">战地前线图册</p>
      </div>
      <div class="top7LClist" style="top: 160px;">
        <div class="top7LClistSpot"></div>
        <p class="top7LClisttext">世界观</p>
      </div>
      <div class="top7LClist" style="top: 200px;">
        <div class="top7LClistSpot"></div>
        <p class="top7LClisttext">时间线</p>
      </div>
    </div>
    <div class="top7BC">
      <div class="top7BCclose"></div>
      <a href="http://www.duowan.com/" style="position: absolute;">
        <div class="top7BCtext">多玩游戏网</div>
      </a>
      <a href="http://news.4399.com/snqx/" style="position: absolute">
        <div class="top7BCtext">4399</div>
      </a>
      <a href="http://ku.18183.com/shaonvqianxian.html" style="position: absolute">
        <div class="top7BCtext">18183</div>
      </a>
      <a href="http://www.gao7.com/snqx" style="position: absolute">
        <div class="top7BCtext">搞趣网</div>
      </a>
      <a href="http://shouyou.gamersky.com/z/snqx/" style="position: absolute">
        <div class="top7BCtext">游民星空</div>
      </a>
      <a href="http://www.87g.com/snqx/" style="position: absolute">
        <div class="top7BCtext">87G</div>
      </a>
      <a href="http://www.yoyou.com/game/snqx/" style="position: absolute">
        <div class="top7BCtext">优游网</div>
      </a>
      <a href="https://www.1688wan.com/svqx/" style="position: absolute">
        <div class="top7BCtext">1688玩</div>
      </a>
      <a href="http://www.18touch.com/zhuan/wangzherongyao" style="position: absolute">
        <div class="top7BCtext">超好玩</div>
      </a>
      <a href="http://gf.37man.com/" style="position: absolute">
        <div class="top7BCtext">萌游姬</div>
      </a>
      <a href="http://gf.gdman.com/" style="position: absolute">
        <div class="top7BCtext">钢蛋侠</div>
      </a>
      <a href="http://android.shouyoubus.com/app/2538242.html" style="position: absolute">
        <div class="top7BCtext">手游巴士</div>
      </a>
      <a href="https://sj.xiaopi.com/snqx/" style="position: absolute">
        <div class="top7BCtext">小皮</div>
      </a>
      <a href="http://www.youxidudu.com/syk/12486/" style="position: absolute">
        <div class="top7BCtext">游戏嘟嘟</div>
      </a>
      <a href="http://www.yxboo.com/ios/45154.html" style="position: absolute">
        <div class="top7BCtext">博游网</div>
      </a>
      <a href="http://www.pipaw.com/snqx/" style="position: absolute">
        <div class="top7BCtext">琵琶网</div>
      </a>
      <a href="https://wwwj.bearead.com/" style="position: absolute">
        <div class="top7BCtext">白熊阅读</div>
      </a>
      <a href="http://www.ccplay.cc/package/115514.html" style="position: absolute">
        <div class="top7BCtext">虫虫游戏</div>
      </a>
    </div>
    <div class="top7LB"></div>
  </div>
</template>

<script>
export default {
  name: "fisrt",
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
    var a = 1; //二维码上的红线浮动
    setInterval(function() {
      var top = _className("lineMove")[0].offsetTop;
      top += a;
      _className("lineMove")[0].style.top = top + "px";
      if (top >= 113 || top <= 0) {
        a = -1 * a;
      }
    }, 20);
    _id("video").pause();
    $(".top1one2").click(function() {
      //点击出现视频
      $(".blackBox").css("display", "inline-block");
      _id("video").play();
    });
    $(".close").click(function() {
      //点击视频消失
      $(".blackBox").css("display", "none");
      _id("video").pause();
      _id("video").currentTime = 0;
    });
    for (var i = 0; i < _className("top2img").length; i++) {
      //轮播遍历赋值
      _className("top2img")[i].style.left = (i - 1) * 634 + "px";
      if (i >= 1 && i <= 3) {
        _className("top2img")[i].style.backgroundImage =
          "url(img/少前官网/634X363-" + i + ".jpg)";
      }
      _className("top2img")[i].style.transition = "all 1s";
    }

    var time1 = null;

    function autoMove() {
      time1 = setInterval(function() {
        //自动走轮播
        for (var i = 0; i < _className("top2img").length; i++) {
          _className("top2img")[i].style.left =
            _className("top2img")[i].offsetLeft -
            _className("top2img")[i].offsetWidth +
            "px";
        }
      }, 3000);
    }
    autoMove();
    setInterval(function() {
      //判断是否是最后一张
      if (
        _className("top2img")[_className("top2img").length - 1].offsetLeft == 0
      ) {
        var a = $(".top2img")
          .eq(1)
          .css("left", "0px");
        var b = $(".top2img")
          .eq(2)
          .css("left", "634px");
        var c = $(".top2img")
          .eq(3)
          .css("left", "1268px");
        var d = $(".top2img")
          .eq(4)
          .css("left", "1902px");
        $(".top2imgbox").append(a);
        $(".top2imgbox").append(b);
        $(".top2imgbox").append(c);
        $(".top2imgbox").append(d);
      }
    }, 1);
    setInterval(function() {
      //判断点的位置
      for (var i = 1; i <= _className("top2img").length - 2; i++) {
        if (_className("top2img")[i].offsetLeft == 0) {
          $(".top2spot").removeClass("top2spotchoose");
          $(".top2spot")
            .eq(i - 1)
            .addClass("top2spotchoose");
        }
      }
    });
    $(".top2spot").click(function() {
      clearInterval(time1);
      i = $(".top2spot").index(this);
      var Ileft = _className("top2img")[i + 1].offsetLeft;
      for (var i = 0; i <= _className("top2img").length - 1; i++) {
        _className("top2img")[i].style.left =
          _className("top2img")[i].offsetLeft - Ileft + "px";
      }
      autoMove();
    });
    for (var i = 0; i < _className("top3smallBoxIcon").length; i++) {
      //人形少女图鉴遍历赋值
      _className("top3smallBoxIcon")[i].style.left = i * 150 + "px";
      _className("top3smallBoxIcon")[i].style.backgroundImage =
        "url(img/少前官网/character/icon/icon_" + (i + 1) + ".png)";
    }
    $(".top3smallBoxIcon").hover(
      function() {
        //人形少女图鉴鼠标移入透明度变1
        var i = $(".top3smallBoxIcon").index(this);
        $(".top3smallBoxIcon")
          .eq(i)
          .css("opacity", "1");
      },
      function() {
        var i = $(".top3smallBoxIcon").index(this);
        if (
          _className("top3smallBoxIcon")[i].className !=
          "top3smallBoxIcon choose"
        ) {
          $(".top3smallBoxIcon")
            .eq(i)
            .css("opacity", "0.6");
        }
      }
    );

    $(".top3boxCv")
      .children()
      .eq(2)
      .click(function() {
        //点击播放音频
        _id("audio").play();
      });

    $.ajax({
      type: "get",
      url: "js/人形少女图鉴.json",
      async: "true",
      dataType: "json",
      error: function(data) {
        alert("top3json导入失败");
      },
      success: function(data) {
        var jsonData = eval(data);

        function iconMove(i) {
          $(".top3smallBoxIcon")
            .eq(i)
            .addClass("choose")
            .css("opacity", "1")
            .siblings()
            .removeClass("choose")
            .css("opacity", "0.6");
          $(".top3role")
            .css({
              background:
                "url(img/少前官网/character/role/" + jsonData[i].role + ".png)",
              right: "-180px"
            })
            .animate(
              {
                right: "-230px"
              },
              300
            );
          $(".top3gun").css(
            "background",
            "url(img/少前官网/character/gun/" + jsonData[i].gun + ".png)"
          );
          $(".top3doll")
            .css({
              background:
                "url(img/少前官网/character/doll/" + jsonData[i].doll + ".png)",
              left: "245px"
            })
            .animate(
              {
                left: "45px"
              },
              300
            );
          $(".top3boxName").css(
            "background",
            "url(img/少前官网/character/name/" +
              jsonData[i].name +
              ".png) left bottom no-repeat"
          );
          $(".top3boxText")
            .find("div")
            .eq(0)
            .html(jsonData[i].text1);
          $(".top3boxText")
            .find("div")
            .eq(1)
            .html(jsonData[i].text2);
          $(".top3boxCv")
            .find("div")
            .eq(0)
            .html(jsonData[i].cv);
          $(".top3boxCv")
            .find("div")
            .eq(1)
            .html(jsonData[i].audioname);
          $(".top3boxCv")
            .find("div")
            .eq(2)
            .find("audio")
            .attr("src", "img/少前官网/audio/" + jsonData[i].audio + ".mp3");
          /*$('.top3boxCv').find('div').eq(2).find('audio').find('source').eq(1).attr('src', "img/少前官网/audio/" + jsonData[i].audio + ".wav");*/
        }
        $(".top3smallBoxIcon").click(function() {
          var i = $(".top3smallBoxIcon").index(this);
          iconMove(i);
        });
        $(".top3smallBoxIcon")
          .eq(0)
          .click();
        $(".top3smallLeft").click(function() {
          for (var j = 0; j < $(".top3smallBoxIcon").length; j++) {
            if (
              $(".top3smallBoxIcon")
                .eq(j)
                .hasClass("choose") == true
            ) {
              var i = j - 1;
              if (i < 0) {
                i = 0;
              }
              break;
            }
          }
          if (i == 2 && _className("top3smallBoxIcon")[0].offsetLeft != 0) {
            for (var j = 0; j < $(".top3smallBoxIcon").length; j++) {
              var k = _className("top3smallBoxIcon")[j].offsetLeft;
              k += 450;
              _className("top3smallBoxIcon")[j].style.left = k + "px";
            }
          }
          iconMove(i);
        });
        $(".top3smallRight").click(function() {
          $(".top3smallBoxIcon").css("transition", "all 0.5s");
          for (var j = 0; j < $(".top3smallBoxIcon").length; j++) {
            if (
              $(".top3smallBoxIcon")
                .eq(j)
                .hasClass("choose") == true
            ) {
              var i = j + 1;
              if (i > $(".top3smallBoxIcon").length - 1) {
                i = $(".top3smallBoxIcon").length - 1;
              }
              break;
            }
          }
          if (i == 4) {
            for (var j = 0; j < $(".top3smallBoxIcon").length; j++) {
              var k = _className("top3smallBoxIcon")[j].offsetLeft;
              k -= 450;
              _className("top3smallBoxIcon")[j].style.left = k + "px";
            }
          }
          iconMove(i);
        });
      }
    });

    $(".top4blackCard").mouseover(function() {
      var i = $(".top4blackCard").index(this);
      $(".top4blackCard")
        .eq(i)
        .addClass("top4choose");
    });

    $(".top4blackCard").mouseout(function() {
      var i = $(".top4blackCard").index(this);
      $(".top4blackCard")
        .eq(i)
        .removeClass("top4choose");
    });

    $(".top4blackCard")
      .eq(3)
      .click(function() {
        window.open("tuce.html");
      });

    setInterval(function() {
      if (
        _className("top4orangeBlock")[0].offsetTop == 40 &&
        $(".top4blackCard")
          .eq(0)
          .hasClass("top4choose") == false
      ) {
        $(".top4blackCard")
          .eq(0)
          .addClass("top4choose");
      } else if (
        _className("top4orangeBlock")[0].offsetTop == 147 &&
        $(".top4blackCard")
          .eq(1)
          .hasClass("top4choose") == false
      ) {
        $(".top4blackCard")
          .eq(1)
          .addClass("top4choose");
      } else if (
        _className("top4orangeBlock")[0].offsetTop == 254 &&
        $(".top4blackCard")
          .eq(2)
          .hasClass("top4choose") == false
      ) {
        $(".top4blackCard")
          .eq(2)
          .addClass("top4choose");
      }
    }, 1);

    $(".top4blackCard").click(function() {
      var i = $(".top4blackCard").index(this);
      if (i != 3) {
        $(".top4blackCard").removeClass("top4choose");
        $(".top4blackCard")
          .eq(i)
          .addClass("top4choose");
        $(".top4orangeBlock").css("top", i * 107 + 40 + "px");
        $(".top4whiteFrame")
          .children()
          .css({
            opacity: 0,
            display: "none"
          });
        $(".top4whiteFrame")
          .eq(i)
          .children()
          .css({
            opacity: 1,
            display: "inline-block"
          });
      }
    });

    $(".top4whiteboxTL").click(function() {
      var i = $(".top4whiteboxTL").index(this);
      $(".blackImg").css("display", "inline-block");
      $(".blackImg")
        .children()
        .attr("src", "img/少前官网/top4/10" + i + ".jpg");
    });

    $(".top4whiteboxTR").click(function() {
      var i = $(".top4whiteboxTR").index(this);
      $(".blackImg").css("display", "inline-block");
      $(".blackImg")
        .children()
        .attr("src", "img/少前官网/top4/20" + i + ".jpg");
    });

    $(".top4whiteboxBL").click(function() {
      var i = $(".top4whiteboxBL").index(this);
      $(".blackImg").css("display", "inline-block");
      $(".blackImg")
        .children()
        .attr("src", "img/少前官网/top4/30" + i + ".jpg");
    });

    $(".top4whiteboxBR").click(function() {
      var i = $(".top4whiteboxBR").index(this);
      $(".blackImg").css("display", "inline-block");
      $(".blackImg")
        .children()
        .attr("src", "img/少前官网/top4/40" + i + ".jpg");
    });

    $(".blackImg")
      .children()
      .click(function() {
        $(".blackImg").css("display", "none");
      });

    $.ajax({
      type: "get",
      url: "js/少前世界观.json",
      async: "true",
      dataType: "json",
      error: function(data) {
        alert("top5json导入失败");
      },
      success: function(data) {
        var jsonData = eval(data);
        for (var i = 0; i < _className("top5view").length; i++) {
          $(".top5view")
            .eq(i)
            .find(".top5viewone")
            .html(jsonData[i].name);
          $(".top5view")
            .eq(i)
            .find(".top5viewthree")
            .css(
              "background",
              "url(img/少前官网/world/view_img" + jsonData[i].id + ".jpg)"
            );
          $(".top5view")
            .eq(i)
            .find(".top5viewtwo")
            .find("p")
            .eq(0)
            .html(jsonData[i].p1);
          $(".top5view")
            .eq(i)
            .find(".top5viewtwo")
            .find("p")
            .eq(1)
            .html(jsonData[i].p2);
          $(".top5view")
            .eq(i)
            .find(".top5viewtwo")
            .find("p")
            .eq(2)
            .html(jsonData[i].p3);
          $(".top5view")
            .eq(i)
            .find(".top5viewtwo")
            .find("p")
            .eq(3)
            .html(jsonData[i].p4);
        }
      }
    });

    $(".top5left").click(function() {
      $(".top5view").css("transition", "all 1s");
      for (var i = 0; i < _className("top5view").length; i++) {
        _className("top5view")[i].style.left =
          _className("top5view")[i].offsetLeft +
          _className("top5view")[i].offsetWidth +
          "px";
      }
      var a = $(".top5view")
        .eq(_className("top5view").length - 1)
        .css("left", "-1000px");
      $(".top5box").prepend(a);
    });

    $(".top5right").click(function() {
      $(".top5view").css("transition", "all 1s");
      for (var i = 0; i < _className("top5view").length; i++) {
        _className("top5view")[i].style.left =
          _className("top5view")[i].offsetLeft -
          _className("top5view")[i].offsetWidth +
          "px";
      }
      var a = $(".top5view")
        .eq(0)
        .css("left", "2000px");
      $(".top5box").append(a);
    });

    var time2 = null;

    function top6imgLeftAuto() {
      var i = _className("top6timeLineImage")[0].offsetLeft;
      time2 = setInterval(function() {
        if (_className("top6timeLineImage")[0].offsetLeft <= -10) {
          i += 10;
        } else {
          i = 0;
        }
        $(".top6timeLineImage").css("left", i + "px");
      }, 100);
    }

    $(".top6timeLineLeft").mouseover(function() {
      top6imgLeftAuto();
    });
    $(".top6timeLineLeft").mouseout(function() {
      clearInterval(time2);
    });

    var time3 = null;

    function top6imgRightAuto() {
      var i = _className("top6timeLineImage")[0].offsetLeft;
      time3 = setInterval(function() {
        if (_className("top6timeLineImage")[0].offsetLeft >= -1030) {
          i -= 10;
        } else {
          i = -1050;
        }
        $(".top6timeLineImage").css("left", i + "px");
      }, 100);
    }

    $(".top6timeLineRight").mouseover(function() {
      top6imgRightAuto();
    });
    $(".top6timeLineRight").mouseout(function() {
      clearInterval(time3);
    });

    function followTop6(className) {
      var who = _className(className)[0].offsetLeft;
      setInterval(function() {
        _className(className)[0].style.left =
          _className("top6timeLineImage")[0].offsetLeft + who + "px";
      }, 1);
    }
    followTop6("top6timeLineLight1");
    followTop6("top6timeLineLight2");
    followTop6("top6timeLineLight3");
    followTop6("top6timeLineLight4");

    $(".top7RCbtn").click(function() {
      $(".top7RC").css("right", "-189px");
      $(".top7RCbtn2").css("opacity", "1");
    });

    $(".top7RCbtn2").click(function() {
      $(".top7RC").css("right", "0px");
      $(".top7RCbtn2").css("opacity", "0");
    });

    $(".top7LClist").click(function() {
      var i = $(".top7LClist").index(this);
      $(".top7LClistSpot").removeClass("top7LCchoose");
      $(".top7LClistSpot")
        .eq(i)
        .addClass("top7LCchoose");
      $("html,body").animate(
        {
          scrollTop: i * 1080
        },
        500
      );
    });

    setInterval(function() {
      var i = parseInt(document.documentElement.scrollTop / 1080);
      $(".top7LClistSpot").removeClass("top7LCchoose");
      $(".top7LClistSpot")
        .eq(i)
        .addClass("top7LCchoose");
    }, 1);

    $(".top7RB").click(function() {
      $(".top7RB").css("opacity", "0");
      $(".top7BC").css({
        width: "1176px",
        height: "192px",
        opacity: "1"
      });
      setTimeout(function() {
        $(".top7BC").css("overflow", "visible");
      }, 500);
    });

    $(".top7BCclose").click(function() {
      $(".top7RB").css("opacity", "1");
      $(".top7BC").css({
        overflow: "hidden",
        width: "0px",
        height: "0px",
        opacity: "0"
      });
    });

    $(".top7RBC").click(function() {
      window.open("ditu.html");
    });
    for (var i = 0; i < $(".top7BCtext").length; i++) {
      var a = parseInt(i / 6);
      var b = parseInt(i % 6);
      $(".top7BC a")
        .eq(i)
        .css({
          left: b * 196 + "px",
          top: a * 64 + 14 + "px"
        });
    }
  }
};
</script>

<style scoped>
.first {
  width: 100%;
  background-color: rgb(25, 25, 25);
}

.blackBox {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  display: none;
}

.video {
  width: 800px;
  height: 600px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.close {
  width: 37px;
  height: 37px;
  background: url(../../assets/Official/btn_close1.png);
  position: absolute;
  left: 50%;
  margin-left: 362px;
  top: 36px;
  cursor: pointer;
}

.blackImg {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  display: none;
}

.top1 {
  position: relative;
  height: 990px;
  background: url(../../assets/Official/bg_index1.jpg) top center;
  background-position-y: -90px;
}

.top1one {
  width: 445px;
  height: 137px;
  background: url(../../assets/Official/theme.png);
  position: absolute;
  left: 50%;
  top: 360px;
  margin-left: -500px;
}

.top1one1 {
  width: 54px;
  height: 57px;
  position: absolute;
  background: url(../../assets/Official/play_btn.png);
  left: 2px;
  right: 0;
  margin: 0 auto;
  top: -45px;
  animation: btn 2s infinite;
}

@keyframes btn {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.9);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.top1one2 {
  width: 116px;
  height: 114px;
  position: absolute;
  background: url(../../assets/Official/play_cricle.png);
  left: 0;
  right: 0;
  margin: 0 auto;
  top: -75px;
  animation: circle 3s infinite;
  cursor: pointer;
}

@keyframes circle {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(-90deg);
  }
  40% {
    transform: rotate(90deg);
  }
  60% {
    transform: rotate(-180deg);
  }
  80% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.top1two {
  width: 424px;
  height: 113px;
  padding: 15px;
  border: 1px solid #596061;
  position: absolute;
  left: 50%;
  top: 505px;
  margin-left: -500px;
}

.top1two1 {
  width: 113px;
  height: 113px;
  background: url(../../assets/Official/code_gz.png);
  background-size: 100% 100%;
  position: absolute;
  left: 16px;
  top: 16px;
}

.lineMove {
  width: 98px;
  height: 2px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(192, 31, 31) 0px 0px 6px, rgb(192, 31, 31) 0px 0px 7px,
    rgb(192, 31, 31) 0px 0px 8px, rgb(192, 31, 31) 0px 0px 9px,
    rgb(192, 31, 31) 0px 0px 10px;
  position: absolute;
  left: 7px;
}

.top1two2 {
  width: 177px;
  height: 113px;
  position: absolute;
  left: 139.5px;
  top: 16px;
}

.apple {
  width: 177px;
  height: 52px;
  position: absolute;
  top: 0px;
  background: url(../../assets/Official/download_ios.png);
  cursor: pointer;
}

.android {
  width: 177px;
  height: 52px;
  position: absolute;
  bottom: 0px;
  background: url(../../assets/Official/download_android.png);
  cursor: pointer;
}

.top1two3 {
  width: 113px;
  height: 113px;
  background: url(../../assets/Official/download_pc.png);
  background-size: 100% 100%;
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
}

.top2 {
  position: relative;
  height: 1080px;
  background: url(../../assets/Official/bg_index2.jpg) top center;
}
.top2box {
  position: absolute;
  width: 1200px;
  height: 413px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.top2one {
  width: 690px;
  height: 413px;
  background: url(../../assets/Official/banner_box.png);
  position: absolute;
  left: 0px;
  z-index: 2;
}
.top2imgbox {
  margin: 25px 28px;
  width: 634px;
  height: 363px;
  position: relative;
  overflow: hidden;
}
.top2img {
  width: 634px;
  height: 363px;
  background: url(../../assets/Official/634X363-1.jpg);
  position: absolute;
}
.top2spotbox {
  width: 100px;
  height: 30px;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: -25px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top2spot {
  width: 10px;
  height: 10px;
  cursor: pointer;
  border: 1px solid #ffffff;
  border-radius: 10px;
  background-color: #ffffff;
  margin: 5px;
}
.top2spotchoose {
  width: 12px;
  height: 12px;
  border: 1px solid #ffb400;
  background-color: #ffb400;
}
.top2two {
  width: 530px;
  height: 372px;
  background: url(../../assets/Official/news_box.png);
  position: absolute;
  top: 20px;
  right: 0px;
}
.top2twolist {
  width: 496px;
  height: 342px;
  padding: 15px 0px 15px 34px;
}
.top2twotext {
  width: 100%;
  height: 49px;
  border-bottom: 1px dashed rgb(85, 87, 80);
  cursor: pointer;
}
.top2twoimg {
  width: 50px;
  height: 49px;
  background: url(../../assets/Official/tag_new.png) left center no-repeat;
}
.top2twotext2 {
  height: 49px;
  line-height: 50px;
  font-size: 18px;
  color: rgb(255, 255, 255);
  text-indent: 10px;
}
.top2twodate {
  color: rgb(227, 169, 28);
  line-height: 50px;
  font-size: 14px;
  height: 49px;
  padding: 0px 10px;
}
.top2twomore {
  position: absolute;
  width: 65px;
  height: 30px;
  bottom: 15px;
  right: 15px;
  line-height: 30px;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
}
.top2twomoreright {
  width: 30px;
  height: 30px;
  background: url(../../assets/Official/icon_more.png) center center no-repeat;
}
.top3 {
  height: 1078px;
  background: url(../../assets/Official/bg_index3.jpg) top center;
}

.top3one {
  height: 1078px;
  position: relative;
  overflow: hidden;
}

.top3role {
  position: absolute;
  right: -230px;
  width: 1498px;
  height: 1079px;
  background: url(../../assets/Official/character/role/role_1.png);
}

.top3box {
  position: absolute;
  top: 320px;
  left: 50%;
  margin-left: -530px;
  width: 1100px;
  height: 630px;
}

.top3gun {
  width: 105px;
  height: 67px;
  background: url(../../assets/Official/character/gun/gun_1.png) center center;
}

.top3doll {
  width: 370px;
  height: 353px;
  position: absolute;
  left: 45px;
  top: -30px;
  background: url(../../assets/Official/character/doll/doll_1.png) center center;
}

.top3small {
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 116px;
}

.top3smallLeft {
  width: 40px;
  height: 70px;
  margin: 23px 20px;
  background-image: url(../../assets/Official/character/arrows.png);
  position: absolute;
  left: 0px;
  cursor: pointer;
}

.top3smallBox {
  position: absolute;
  left: 80px;
  width: 600px;
  height: 116px;
  background-image: url(../../assets/Official/character/icon_bg.png);
  overflow: hidden;
}

.top3smallRight {
  width: 40px;
  height: 70px;
  margin: 23px 20px;
  background-image: url(../../assets/Official/character/arrows.png);
  position: absolute;
  left: 680px;
  background-position: 45px 0px;
  cursor: pointer;
}

.top3smallLeft:hover,
.top3smallRight:hover {
  background-position-y: 70px;
}

.top3smallBoxIcon {
  position: absolute;
  left: 0px;
  width: 150px;
  height: 116px;
  background: url(../../assets/Official/character/icon/icon_1.png) center center;
  opacity: 0.6;
}

.choose {
  opacity: 1;
}

.top3boxName {
  position: absolute;
  left: 0px;
  bottom: 180px;
  width: 600px;
  height: 105px;
  background: url(../../assets/Official/character/name/name_1.png) left bottom
    no-repeat;
}

.top3boxText {
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 310px;
  height: 80px;
}

.top3boxText div {
  padding: 0px 12px;
  width: 305px;
  height: 30px;
  line-height: 30px;
  color: white;
}

.top3boxText div:nth-child(1) {
  padding: 0px 8px;
  margin: 10px 0px;
  height: 20px;
  line-height: 20px;
  border-left: 4px solid rgb(224, 51, 55);
}

.top3boxCv {
  position: absolute;
  right: 0px;
  bottom: 20px;
  width: 300px;
  height: 246px;
  color: white;
}

.top3boxCv div:nth-child(1) {
  position: absolute;
  right: 0px;
  margin: 5px;
  font-size: 100px;
  line-height: 100px;
  font-weight: bolder;
}

.top3boxCv div:nth-child(2) {
  position: absolute;
  top: 110px;
  right: 0px;
  margin: 5px 0px;
  font-size: 55px;
  line-height: 55px;
}

.top3boxCv div:nth-child(3) {
  width: 48px;
  height: 48px;
  position: absolute;
  top: 175px;
  right: 0px;
  margin: 5px 0px;
  background: url(../../assets/Official/icon_sound.png) no-repeat;
}

.top3boxCv div:nth-child(3):hover {
  background: url(../../assets/Official/icon_sound1.png) no-repeat;
  cursor: pointer;
}

.top4 {
  position: relative;
  height: 1080px;
  background: url(../../assets/Official/bg_index4.jpg) top center;
}

.top4box {
  width: 1150px;
  height: 600px;
  position: absolute;
  top: 140px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
}
.top4black {
  width: 270px;
  height: 426px;
  background: rgb(0, 0, 0);
}
.top4orangeBlock {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 40px;
  left: 255px;
  transform: rotate(45deg);
  background: #ffb400;
  z-index: 999;
}
.top4blackCard {
  width: 270px;
  height: 105px;
  line-height: 105px;
  color: #ffffff;
  background: rgb(25, 25, 25);
  font-size: 22px;
  transition: all 0.5s;
  margin-bottom: 2px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
}
.top4choose {
  width: 290px;
  margin-left: -20px;
  background: #ffb400;
  font-size: 26px;
  color: rgb(25, 25, 25);
  font-weight: bold;
}
.top4whiteFrame {
  width: 880px;
  height: 600px;
  background-color: #ffffff;
  position: absolute;
  top: 0px;
  right: 0px;
}
.top4whiteboxTL {
  width: 395px;
  height: 270px;
  background-size: 390px 270px;
  position: absolute;
  left: 30px;
  top: 20px;
  z-index: 999;
  transition: all 1s;
}
.top4whiteboxTR {
  width: 395px;
  height: 270px;
  background-size: 390px 270px;
  position: absolute;
  right: 30px;
  top: 20px;
  z-index: 999;
  transition: all 1s;
}
.top4whiteboxBL {
  width: 395px;
  height: 270px;
  background-size: 390px 270px;
  position: absolute;
  left: 30px;
  bottom: 20px;
  z-index: 999;
  transition: all 1s;
}
.top4whiteboxBR {
  width: 395px;
  height: 270px;
  background-size: 390px 270px;
  position: absolute;
  right: 30px;
  bottom: 20px;
  z-index: 999;
  transition: all 1s;
}
.top5 {
  position: relative;
  height: 1080px;
  background: url(../../assets/Official/bg_index5.jpg) top center;
}
.top5left {
  width: 70px;
  height: 84px;
  line-height: 70px;
  font-size: 100px;
  font-weight: bold;
  color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  margin: auto 0;
  margin-left: -600px;
  cursor: pointer;
}
.top5right {
  width: 70px;
  height: 84px;
  line-height: 70px;
  font-size: 100px;
  font-weight: bold;
  color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  margin: auto 0;
  margin-right: -600px;
  cursor: pointer;
}
.top5left:hover {
  color: rgb(255, 192, 0);
}
.top5right:hover {
  color: rgb(255, 192, 0);
}
.top5box {
  width: 1000px;
  height: 529px;
  position: absolute;
  left: 4px;
  right: 0px;
  top: 84px;
  bottom: 0px;
  margin: auto;
  overflow: hidden;
}
.top5view {
  width: 1000px;
  height: 529px;
  position: absolute;
  left: 0px;
}
.top5viewone {
  width: 269px;
  height: 53px;
  background: url(../../assets/Official/world/view_til_bg.png) no-repeat;
  line-height: 53px;
  text-align: center;
  font-size: 28px;
  letter-spacing: 2px;
  color: #ffffff;
  font-weight: bold;
  position: absolute;
  top: 20px;
}
.top5viewtwo {
  width: 430px;
  text-indent: 2em;
  font-size: 18px;
  line-height: 36px;
  color: #ffffff;
  position: absolute;
  top: 100px;
  font-family: "黑体";
}
.top5viewthree {
  width: 480px;
  height: 480px;
  position: absolute;
  right: 21px;
  bottom: 24px;
}

.top6 {
  position: relative;
  height: 1080px;
  background: url(../../assets/Official/bg_index6.jpg) top center;
}

.top6timeLine {
  width: 1200px;
  height: 346px;
  position: absolute;
  left: 0;
  right: 0;
  top: 300px;
  margin: 0 auto;
}
.top6timeLineLeft {
  width: 36px;
  height: 118px;
  font-size: 48px;
  line-height: 118px;
  background-color: #ffb400;
  position: absolute;
  left: 0px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  cursor: pointer;
}
.top6timeLineRight {
  width: 36px;
  height: 118px;
  font-size: 48px;
  line-height: 118px;
  background-color: #ffb400;
  position: absolute;
  right: 0px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  cursor: pointer;
}
.top6timeLineImgBox {
  width: 1108px;
  height: 326px;
  position: absolute;
  left: 36px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.3);
}
.top6timeLineImg {
  width: 1108px;
  height: 326px;
  overflow: hidden;
  z-index: 999;
  position: relative;
}
.top6timeLineImage {
  width: 2156px;
  position: relative;
  left: 0px;
  transition: all 0.1s;
}
@keyframes playFade {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.9);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.top6timeLineLight1 {
  width: 191px;
  height: 172px;
  position: absolute;
  left: 510px;
  top: 20px;
  animation: playFade 3s ease 0s infinite;
}
.top6timeLineLight2 {
  width: 152px;
  height: 117px;
  position: absolute;
  left: 590px;
  top: 200px;
  animation: playFade 3s ease 0s infinite;
}
.top6timeLineLight3 {
  width: 215px;
  height: 214px;
  position: absolute;
  left: 1045px;
  top: 5px;
  animation: playFade 3s ease 0s infinite;
}
.top6timeLineLight4 {
  width: 241px;
  height: 48px;
  position: absolute;
  left: 1330px;
  top: 140px;
  animation: playFade 3s ease 0s infinite;
}
.top6btn_juqing {
  width: 328px;
  height: 221px;
  background: url(../../assets/Official/timeLine/btn_juqing.png);
  position: absolute;
  left: 50%;
  bottom: 100px;
  margin-left: -450px;
  cursor: pointer;
}
.top6btn_tasuodian {
  width: 328px;
  height: 221px;
  background: url(../../assets/Official/timeLine/btn_tasuodian.png);
  position: absolute;
  right: 50%;
  bottom: 100px;
  margin-right: -450px;
  cursor: pointer;
}

.top7RB {
  position: fixed;
  right: 0px;
  bottom: 0px;
  width: 83px;
  height: 92px;
  background: url(../../assets/Official/float_btn.png) no-repeat;
  z-index: 1000;
  font-size: 16px;
  color: rgb(255, 255, 255);
  cursor: pointer;
}
.top7RB div:nth-child(1) {
  position: absolute;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  top: 24px;
  text-align: center;
}
.top7RB div:nth-child(2) {
  position: absolute;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  bottom: 24px;
  text-align: center;
}
.top7RBC div:nth-child(1) {
  position: absolute;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  top: 24px;
  text-align: center;
}
.top7RBC div:nth-child(2) {
  position: absolute;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  bottom: 24px;
  text-align: center;
}
.top7RC {
  position: fixed;
  right: 0px;
  bottom: 0px;
  top: 0px;
  margin: auto 0;
  background: url(../../assets/Official/float_box1.png) no-repeat;
  width: 189px;
  height: 333px;
  transition: all 1s;
  z-index: 1000;
}
.top7RCtitle {
  width: 113px;
  height: 37px;
  background: url(../../assets/Official/focus_tilbg.png);
  position: absolute;
  left: 0px;
  right: 0px;
  top: 36px;
  margin: 0 auto;
  text-align: center;
  font-size: 15px;
  line-height: 37px;
  color: #ffffff;
}
.top7RCcode {
  width: 113px;
  height: 113px;
  background: url(../../assets/Official/code_gz.png) center;
  background-size: 113px 113px;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 90px;
  margin: 0 auto;
}
.top7RCtext {
  width: 113px;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 220px;
  margin: 0 auto;
  border-left: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
  padding: 2px 0px;
}
.top7RCtext1 {
  width: 100px;
  border-left: 3px solid #ffffff;
  border-right: 3px solid #ffffff;
  font-size: 13px;
  line-height: 13px;
  text-align: center;
  color: #ffffff;
  position: relative;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  margin: auto;
}
.top7RCiconBox {
  width: 145px;
  height: 30px;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 260px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-content: center;
}
.top7RCicon {
  width: 32px;
  height: 30px;
  background: url(../../assets/Official/focus_icon.png);
  cursor: pointer;
}
.top7RCicon:hover {
  background-position-y: 30px;
}
.top7RCbtn {
  width: 26px;
  height: 26px;
  transform: rotate(45deg);
  position: absolute;
  left: 12px;
  right: 0px;
  bottom: 5px;
  margin: 0 auto;
  cursor: pointer;
}
.top7RCbtn2 {
  width: 83px;
  height: 92px;
  position: fixed;
  right: 0px;
  bottom: 0px;
  top: 0px;
  margin: auto 0;
  background: url(../../assets/Official/float_btn.png);
  opacity: 0;
  transition: all 1s;
  cursor: pointer;
}
.top7RCbtn2Left {
  width: 24px;
  height: 24px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 0px 5px #000000;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  right: 0;
  margin: auto;
  transform: rotate(45deg);
}
.top7LC {
  width: 200px;
  height: 218px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  z-index: 1000;
}
.top7LCYline {
  height: 218px;
  position: absolute;
  left: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.4);
}
.top7LClist {
  width: 200px;
  height: 18px;
  position: absolute;
  cursor: pointer;
}
.top7LClistSpot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 6px solid rgba(255, 255, 255, 0.6);
  transition: all 0.5s;
  position: absolute;
  left: 11px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
}
.top7LClisttext {
  font-size: 14px;
  line-height: 18px;
  position: absolute;
  left: 50px;
  color: #ffffff;
}
.top7LCchoose {
  width: 10px;
  height: 10px;
  background: rgb(255, 192, 0);
  border: 6px solid rgb(255, 192, 0);
  left: 9px;
}
.top7BC {
  width: 1176px;
  height: 192px;
  position: fixed;
  bottom: 0;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  z-index: 999;
  border: 1px solid #ffffff;
  border-bottom: 0px;
  background-color: rgba(255, 255, 255, 0.25);
  padding: 13px 10px;
  width: 0px;
  height: 0px;
  opacity: 0;
  transition: all 0.5s;
  overflow: hidden;
}
.top7BCtext {
  width: 162px;
  height: 54px;
  line-height: 54px;
  text-align: center;
  margin: 5px 17px;
  background: url(../../assets/Official/media_bg.png);
  font-size: 18px;
  color: #ffffff;
  display: inline-block;
}
.top7BCtext:hover {
  color: rgb(255, 180, 0);
}
.top7BCclose {
  width: 37px;
  height: 37px;
  background: url(../../assets/Official/btn_close1.png);
  position: absolute;
  right: 0px;
  top: -37px;
  cursor: pointer;
}
.top7RBC {
  position: fixed;
  right: 0px;
  bottom: 100px;
  width: 83px;
  height: 92px;
  background: url(../../assets/Official/float_btn.png) no-repeat;
  z-index: 1000;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  color: rgb(255, 255, 255);
  cursor: pointer;
}
</style>