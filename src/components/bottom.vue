<template>
  <div class="bottom">
    <div class="bottom1">
      <div>温馨提示：本游戏适合18岁（含）以上玩家娱乐</div>
      <div>抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</div>
      <div>
        <a
          href="http://www.digisky.com/jiankong.html"
          style="color: rgb(181,181,181);text-decoration: underline;"
        >未成年人监护工程入口</a>
      </div>
    </div>
    <div class="bottom2">
      <div class="bottom2left fl"></div>
      <div class="bottom2right fr">
        <ul>
          <li>
            <a>关于数字天空</a>
            <span>|</span>
            <a>服务条款</a>
            <span>|</span>
            <a>用户协议</a>
            <span>|</span>
            <a>商务合作</a>
            <span>|</span>
            <a>加入我们</a>
            <span>|</span>
            <a>联系我们</a>
          </li>
          <li>网络文化经营：川网文〔2017〕2374-076号</li>
          <li>文网游备字：〔2016〕Ｍ-RPG 2772 号</li>
          <li>成都数字天空科技有限公司 版权所有</li>
        </ul>
        <a
          href="http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/gameNetTag/4028c08c54ec9f2a0154ffca59e93f40"
        >
          <div></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottom"
};
</script>

<style scoped>
.footer {
  width: 100%;
  position: absolute;
}

.bottom1 {
  width: 100%;
  background-color: rgb(67, 67, 67);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.bottom1 div {
  width: 100%;
  text-align: center;
  margin-top: 20px;
  color: rgb(181, 181, 181);
}

.bottom1 div:nth-child(3) {
  margin-bottom: 20px;
}

.bottom2 {
  width: calc(100% - 60px);
  height: 97px;
  background-color: rgb(43, 43, 43);
  padding: 40px 30px;
}

.bottom2left {
  width: 530px;
  height: 90px;
  background-image: url(../assets/Publicity/slogo.png);
}

.bottom2right {
  width: 402px;
  height: 96px;
  padding-left: 30px;
  border-left: 1px solid rgb(67, 67, 67);
  position: relative;
}

.bottom2right ul li a {
  color: rgb(149, 149, 149);
  font-size: 12px;
  line-height: 24px;
}

.bottom2right ul li {
  color: rgb(149, 149, 149);
  font-size: 12px;
  line-height: 24px;
}

.bottom2right a div {
  position: absolute;
  left: 250px;
  bottom: 12px;
  width: 32px;
  height: 36px;
  background: url(../assets/Publicity/youxidzbq.png) center center;
  background-size: 32px 36px;
}
</style>
