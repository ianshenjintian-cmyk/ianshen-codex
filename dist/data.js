/* 作品标题、艺人和岗位需有个人履历或可靠公开署名支持。 */
const portfolioData = {
  featured: [
    { title: "向云端", artist: "黄绮珊 / 海洋Bo", role: "人声录音", image: "assets/xiang-yun-duan.jpg", origin: "个人履历 / Shazam 公开发行署名", source: "https://www.shazam.com/zh-tw/song/1691442027/%E5%90%91%E4%BA%91%E7%AB%AF?tab=lyrics", description: "公开制作名单中的岗位为人声录音（Vocal Recording Engineer）。" },
    { title: "唯爱", artist: "詹雯婷", role: "共同作曲 · 编辑 · 和声编配", image: "assets/wei-ai.jpg", origin: "官方艺人发行元数据 / 个人履历", source: "https://www.youtube.com/watch?v=1yEYmXXOSmY", description: "与刘逸君共同作曲。音频编辑与和声编配依据个人履历收录；公开发行元数据可查看作曲署名。" },
    { title: "Candy Sweater", artist: "王子异", role: "录音 · 混音 · 母带", image: "assets/candy-sweater.png", origin: "个人履历 / JOOX 公开发行署名", source: "https://www.joox.com/id/single/PbD%2B4KoeHzXN4Wn_VtKO9g%3D%3D", description: "与王子异共同录音，与黄一共同混音，参与母带处理。" },
    { title: "山水同路", artist: "欧阳娜娜", role: "共同制作人 · 编曲", image: "assets/shan-shui-tong-lu.jpg", origin: "LINE MUSIC 公开发行署名", source: "https://music-tw.line.me/track/7393632001", description: "与欧阳娜娜共同担任制作人；与任冰共同编曲、与古子信共同音频编辑，并参与和声设计。" },
  ],
  music: [
    { title: "慢慢", artist: "颜人中", role: "混音 · 母带 · 音频编辑", image: "assets/man-man.jpg", origin: "个人履历 / JOOX 公开发行署名", source: "https://www.joox.com/my-en/single/ztzgQrp7PfuqBb0KL17aMA%3D%3D", description: "参与和声、音频编辑、混音与母带处理。" },
    { title: "角色", artist: "李灿森", role: "录音 · 混音 · 和声 · 母带", image: "assets/jue-se.jpg", origin: "个人履历", description: "参与录音、混音、和声及母带处理。" },
    { title: "夜夜夜夜 未央", artist: "齐秦", role: "混音", image: "assets/ye-ye-ye-ye-wei-yang.jpg", origin: "个人履历", description: "个人履历收录的混音作品，封面为双曲宣传视觉。" },
    { title: "逃离孤单星球", artist: "邓见超", role: "混音", image: "assets/tao-li-gu-dan-xing-qiu.jpg", origin: "个人履历", description: "参与作品混音。" },
    { title: "怦然心动", artist: "叶琼琳 / 黄鲲", role: "混音 · 母带 · 音频编辑", image: "assets/peng-ran-xin-dong.jpg", origin: "个人履历 / JOOX 公开发行署名", source: "https://www.joox.com/id/single/FAJ6Hf6v6A6P2uh9LILMFg%3D%3D", description: "参与音频编辑、混音、母带及共同和声。链接为伴奏发行页，其中收录原曲制作名单。" },
    { title: "中国李宁Eureka", artist: "朱婧汐", role: "混音", image: "assets/china-lining-eureka.jpg", origin: "个人履历", description: "参与作品混音。" },
    { title: "The Star 初星", artist: "欧阳娜娜", role: "整专音频编辑 · 和声设计", image: "assets/the-star.jpg", origin: "本人补充履历 / 发行平台专辑信息", source: "https://music-tw.line.me/album/7261031", description: "参与《The Star 初星》整张专辑的音频编辑与和声设计。" },
    { title: "DDD", artist: "沙一汀EL / 柳多恋", role: "录音", image: "assets/ddd.jpg", origin: "本人补充履历 / 网易云音乐发行信息", source: "https://music.163.com/#/song?id=3344029635", description: "参与合作单曲《DDD（With沙一汀EL）》的录音。" },
    { title: "Etheria", artist: "Starrysky / Etheria: Restart", role: "混音", image: "assets/etheria.jpg", origin: "Qobuz 公开发行署名", source: "https://www.qobuz.com/be-fr/album/etheria-theme-song-of-ews-2025-starrysky/jleoqnkj2wosc", description: "完整作品名为 Etheria (Theme song of EWS 2025)。公开发行元数据列名 IAN沈锦天 @CashmereStudios，岗位为 Mixing Engineer（混音师）。" }
  ],
  screen: [
    { title: "苍兰诀", artist: "影视原声带 / OST", role: "配唱制作 · 音频编辑 · 和声设计 / 编辑 / 演唱", pdfRole: "配唱制作 · 音频编辑\n和声设计 / 编辑 / 演唱", image: "assets/cang-lan-jue-ost.jpg", origin: "本人确认 / 网易云音乐曲目制作名单", source: "https://music.163.com/album?id=150122364", sourceLabel: "查看 OST 专辑", description: "参与《苍兰诀》OST 专辑的人声制作，包含配唱制作、音频编辑，以及和声设计、编辑与演唱。这里汇总项目中所参与曲目的岗位，具体分工随歌曲而不同。专辑层面的工作由本人确认；公开曲目《彼岸》列有共同和声设计署名。", poster: true },
    { title: "祈今朝", artist: "仙剑六 / 影视剧原声大碟", pdfArtist: "仙剑六 / OST 原声专辑", role: "配唱制作 · 共同音频编辑 · 和声编写 / 演唱", pdfRole: "配唱制作 · 共同音频编辑\n和声编写 / 演唱", image: "assets/sword-and-fairy-6-ost.jpg", origin: "网易云音乐曲目制作名单", source: "https://music.163.com/album?id=183497662", sourceLabel: "查看 OST 专辑", description: "参与《祈今朝》（仙剑六）OST 多首歌曲的人声制作，岗位包括配唱制作、共同音频编辑、和声编写及演唱。按专辑合并展示所参与曲目的岗位；各首歌曲的具体分工不同。", poster: true },
    { title: "无名", artist: "电影版主题曲 / 王一博", pdfArtist: "电影版主题曲\n王一博", role: "音频编辑 · 和声演唱", image: "assets/hidden-blade.jpg", origin: "本人提供的电影片尾制作名单照片", source: "https://y.qq.com/n/ryqq/songDetail/002Dbpd63scnfs", sourceLabel: "查看歌曲发行页", description: "参与王一博演唱的电影版主题曲《无名》，负责音频编辑，并与王一博共同演唱和声。依据本人提供的电影片尾照片，音频编辑栏列沈锦天，和声栏列王一博、沈锦天。", poster: true },
    { title: "关于我妈的一切", artist: "推广曲《岁月神偷》 / 井胧", pdfArtist: "推广曲《岁月神偷》\n井胧", role: "共同配唱 · 和声演唱", image: "assets/all-about-my-mother.jpg", origin: "网易云音乐曲目制作名单", source: "https://music.163.com/song?id=1878987596", sourceLabel: "查看歌曲发行页", description: "参与井胧演唱的电影推广曲《岁月神偷》，与黄一共同配唱，并参与和声演唱。", poster: true },
    { title: "爱犬奇缘", artist: "推广曲《伴你如初》 / 焦迈奇", pdfArtist: "推广曲《伴你如初》\n焦迈奇", role: "配唱制作 · 和声编写 / 演唱", pdfRole: "配唱制作\n和声编写 / 演唱", image: "assets/love-dog.jpg", origin: "网易云音乐曲目制作名单", source: "https://music.163.com/song?id=2072234089", sourceLabel: "查看歌曲发行页", description: "参与焦迈奇演唱的电影推广曲《伴你如初》，负责配唱制作、和声编写与和声演唱。", poster: true },
    { title: "一闪一闪亮星星", artist: "心动推广曲《爱到你说》 / 颜人中", pdfArtist: "推广曲《爱到你说》\n颜人中", role: "共同配唱 · 共同音频编辑 · 和声编写 / 演唱", pdfRole: "共同配唱 · 共同音频编辑\n和声编写 / 演唱", image: "assets/love-until-you-say.jpg", origin: "网易云音乐曲目制作名单", source: "https://music.163.com/song?id=2111061739", sourceLabel: "查看歌曲发行页", description: "参与颜人中演唱的电影版心动推广曲《爱到你说》：与黄一共同配唱，与王启存共同音频编辑，并负责和声编写及和声演唱。", poster: true }
  ],
  stage: [
    { title: "爱乐之都", artist: "东方卫视", role: "参与节目音乐制作", image: "assets/city-of-musicals.jpg", origin: "个人履历", description: "个人履历收录的音乐综艺参与项目。具体期数与曲目尚未列明。" },
    { title: "中国好声音", artist: "浙江卫视 / 第十季", role: "参与节目音乐制作", image: "assets/sing-china-2021.jpg", origin: "个人履历", description: "个人履历收录的第十季参与项目。" },
    { title: "我们的歌", artist: "东方卫视 / 中国梦之声", role: "参与节目音乐制作", image: "assets/our-song.jpg", origin: "个人履历", description: "个人履历收录的音乐综艺参与项目。具体期数与曲目尚未列明。" },
    { title: "中国好声音越剧特别季", artist: "浙江卫视", role: "参与节目音乐制作", image: "assets/sing-china-yue-opera.jpg", origin: "个人履历", description: "个人履历收录的节目参与项目。具体期数与曲目尚未列明。" }
  ]
};
