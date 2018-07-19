import React from 'react';
import { View, WebView } from 'react-native';

export default class BasicTabsExample extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          bounces={false}
          scalesPageToFit
          source={{ html: '<p><img alt="" src="http://img.qdaily.com/article/article_show/20180718165856UPDQoROsMK9f8Z5E.gif?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/ignore-error/1"></p><p>这是 7 月 19 日的卫星新闻。</p><p>2018 年开始，北京实体书店扶持资金将每年将增加到 5000 万元，扶持书店每年数量增长至约 150 家。</p><p>这是最新发布的<a rel="nofollow" href="https://mp.weixin.qq.com/s/z4TKAITyp6MMyaiPH-ujyg">《北京市关于支持实体书店发展的实施意见》</a>（下称《实施意见》）的一部分。</p><p>根据该意见，北京要实现“一区一书城”的目标，意味着到 2020 年，北京 16 区每个区至少要有一家 1000 平方米以上的大型书城。</p><p>《实施意见》鼓励开办红色书店、国学书店、学术书店、艺术书店等特色书店，计划要在重点街区、人口密集区等建设 200 家标志性特色书店。</p><p>新政还提出了“ 15 分钟阅读圈”的概念——一种在社区内 15 分钟就能找到阅读空间的服务体系。<a rel="nofollow" href="http://media.china.com.cn/dfcm/2018-07-18/1293070.html">据北京市新闻出版广电局印刷发行处处长满向伟，在今年约 150 家受扶持的书店中，社区书店被划为重点，数量将达到 100 家以上。</a><br><p><img alt src="http://img.qdaily.com/uploads/20160725026790Msgaji5TilWhj7z4.jpg-w600"></p><p>2014 年开始，因为电商冲击，居民消费方式改变，民营书店迎来一波寒潮，至今北京有 30 %以上实体书店倒闭。至 2017 年底，北京的书店总量为 1015 家。</p><p>北京市新闻出版广电局印刷发行处调研员<a rel="nofollow" href="http://media.china.com.cn/dfcm/2018-07-18/1293070.html">吕运清</a>透露，北京希望在 2020 年及以后，将书店数量维持在 1700 家以上。这也就意味着，未来 3 年内，<a rel="nofollow" href="http://www.xinhuanet.com/2018-07/18/c_1123140681.htm">北京将新增近 700 家实体书店。</a></p><p>从 2016 年开始，北京市政府已经连续两年投入 1800 万元扶持实体书店。为了达到新的目标，今年开始，扶持资金规模将翻近三番，增至 5000 万元。</p><p>前两年的 1800 万以综合评价奖励为主，新政策最大的变化是将直接对实体书店的租金予以补贴，平均补贴份额不低于房租成本的 40%。原先政策要求申报书店必须经营 3 年以上，而新政策取消了这条限制。</p><p>据悉，市政府将支持经营者利用腾退空间、老旧厂房、闲置的公共场所开办实体书店，允许采用“先照后证”的方式，先申领营业执照后再办理有关许可证，探索腾退用地。</p><p><a rel="nofollow" href="http://news.tom.com/201807/1011561221.html">此外，对实体书店在传播党的方针政策、弘扬社会主义核心价值观、开展公益性文化活动和提供公共文化服务等方面，会通过政府采购方式给予支持。</a></p><p><br></p><p><strong>卫星新闻是我们的一个小栏目，记录我们暂时还没完全理解的人类进步。</strong></p><p><strong>我们的口号是：“这里有难以想象的大新闻。像卫星那么大。”</strong></p><p>题图来源于Giphy<div><figure></figure></div><div><figure>\n<img alt="" data-ratio="0.608000" data-format="png" src="http://img.qdaily.com/uploads/20171222175448DuIFGKx5VU4XcYEf.png-w600">\n</figure></div><p>我们做了一个壁纸应用，给你的手机加点好奇心。去 App 商店搜 <a href="http://m.notch.qdaily.com/mobile/downloads.html">好奇怪</a> 下载吧。<br></p>' }}
          style={{ width: 300, height: 400 }}
        />
      </View>
    );
  }
}
