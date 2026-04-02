window.KANSAI_DATA={
  labels:{pikmin:'Pikmin',jjk:'咒術迴戰',conan:'名偵探柯南',literary:'文學／自然',food:'餐廳／小吃',hotel:'飯店'},
  views:[
    ['all','全部'],
    ['arrival','出發／入住日'],
    ['day1','Day 2 京都主線 A'],
    ['day2','Day 3 京都主線 B'],
    ['transfer','Day 4 換宿大阪'],
    ['osaka_conan','大阪補線'],
    ['return','回國日'],
    ['pikmin','Pikmin 主線'],
    ['food','餐廳／小吃'],
    ['hotels','飯店']
  ],
  itinerary:[
    {
      key:'arrival',
      day:'Day 1',
      date:'4/17（五）',
      title:'出發日｜桃園 → 大阪 → 京都入住',
      pace:'低強度',
      base:'夜宿：LOISIR HOTEL KYOTO TOJI',
      tags:[['move','跨國移動'],['move','入住京都'],['anime','京都站夜景可選']],
      focus:[
        ['主要移動','桃園機場 → 關西機場 → JR / HARUKA → 京都站 → 飯店'],
        ['晚上節奏','不排遠點，保留體力；可在京都站／京都塔周邊輕鬆散步'],
        ['吃飯建議','京都站周邊簡單用餐，或到飯店附近快速收尾']
      ],
      jump:'hotels'
    },
    {
      key:'day1',
      day:'Day 2',
      date:'4/18（六）',
      title:'京都主線 A｜伏見・山科・河原町・東山',
      pace:'中強度',
      base:'夜宿：LOISIR HOTEL KYOTO TOJI',
      tags:[['pikmin','Pikmin 主日'],['anime','JJK / 柯南'],['food','市區美食線']],
      focus:[
        ['主要區域','伏見稻荷 → 御香宮神社 → 隨心院 → 鴨川四條 → KIDDY LAND → 八坂塔'],
        ['旅程氣質','Pikmin 為主，搭配咒術迴戰與柯南京都市區畫面'],
        ['吃飯建議','麵屋豬一、錦市場、先斗町，晚上可接河原町散步']
      ],
      jump:'day1'
    },
    {
      key:'day2',
      day:'Day 3',
      date:'4/19（日）',
      title:'京都主線 B｜西京・嵐山・高雄',
      pace:'中強度偏放鬆',
      base:'夜宿：LOISIR HOTEL KYOTO TOJI',
      tags:[['pikmin','Pikmin 補線'],['nature','文學 / 自然'],['anime','嵐山柯南點']],
      focus:[
        ['主要區域','洛西竹林公園 → 落柿舍 → 渡月橋 → 神護寺'],
        ['旅程氣質','竹林、文學、山景比重更高，節奏比 Day 2 慢'],
        ['可選延伸','哲學之道＋Monk，適合想加強文學氣息時使用']
      ],
      jump:'day2'
    },
    {
      key:'transfer',
      day:'Day 4',
      date:'4/20（一）',
      title:'換宿日｜京都 → 大阪心齋橋',
      pace:'中低強度',
      base:'夜宿：Shinsaibashi Grand Hotel Osaka',
      tags:[['move','換宿'],['anime','大阪柯南'],['food','心齋橋自由度高']],
      focus:[
        ['主要移動','京都飯店 → 京都站 → 大阪站／心齋橋 → 飯店寄放行李'],
        ['主要區域','通天閣 → 大阪城 → ytv／10plaza'],
        ['晚上節奏','回心齋橋／道頓堀吃飯，保留購物與自由活動空間']
      ],
      jump:'osaka_conan'
    },
    {
      key:'return',
      day:'Day 5',
      date:'4/21（二）',
      title:'回國日｜大阪 → 關西機場 → 桃園',
      pace:'低強度',
      base:'白天退房後前往機場',
      tags:[['move','返程'],['food','早餐 / 伴手禮'],['move','機場緩衝']],
      focus:[
        ['早上安排','飯店附近早餐、最後補買伴手禮，不建議再塞遠景點'],
        ['主要移動','心齋橋／難波 → 關西機場，預留辦理登機時間'],
        ['結尾建議','把 Day 4 沒買完的東西放在今天早上處理最穩']
      ],
      jump:'hotels'
    }
  ],
  points:[
    {id:'hotel_kyoto',n:'LOISIR HOTEL KYOTO TOJI',lat:34.9777,lng:135.7514,a:'京都站／東寺',p:'hotel',s:'住宿',m:'京都前兩晚飯店。作為 Day 1 抵達後休息點，也適合展開 Day 2 / Day 3 行程。',v:['all','arrival','hotels','day1','day2']},
    {id:'hotel_osaka',n:'Shinsaibashi Grand Hotel Osaka',lat:34.6719,lng:135.5053,a:'大阪・心齋橋',p:'hotel',s:'住宿',m:'大阪後兩晚飯店。適合串心齋橋、道頓堀與大阪柯南補線。',v:['all','transfer','return','hotels','osaka_conan']},
    {id:'kyoto_station',n:'京都站',lat:34.9858,lng:135.7581,a:'京都站',p:'jjk',s:'20–40 分',m:'抵達日與咒術迴戰京都散步的起點，晚上可作為低強度備選。',ref:'https://recommend.jr-central.co.jp/oshi-tabi/jujutanbo/',v:['all','arrival']},
    {id:'kyoto_tower',n:'京都塔',lat:34.9875,lng:135.7593,a:'京都站',p:'jjk',s:'15–30 分',m:'抵達日晚間可選輕鬆補點，也能作為京都站周邊夜景地標。',ref:'https://recommend.jr-central.co.jp/oshi-tabi/jujutanbo/',v:['all','arrival']},
    {id:'fushimi_inari',n:'伏見稻荷大社',lat:34.9671,lng:135.7727,a:'伏見',p:'jjk',s:'60–90 分',m:'Day 2 最順的開場點，文化景與動漫感兼具。',ref:'https://recommend.jr-central.co.jp/oshi-tabi/jujutanbo/',v:['all','day1','pikmin']},
    {id:'gokonomiya',n:'御香宮神社',lat:34.9316,lng:135.7596,a:'伏見',p:'pikmin',s:'20–30 分',m:'Pikmin 伏見區主點，與伏見稻荷可組成同半日動線。',v:['all','day1','pikmin']},
    {id:'zuishinin',n:'隨心院',lat:34.9526,lng:135.8140,a:'山科',p:'pikmin',s:'30–45 分',m:'Pikmin 山科區主點，接地鐵回河原町也順。',v:['all','day1','pikmin']},
    {id:'kamo_bridge',n:'鴨川四條大橋',lat:35.0036,lng:135.7697,a:'四條河原町',p:'jjk',s:'20–30 分',m:'Day 2 後段很適合放慢節奏的城市散步點。',ref:'https://recommend.jr-central.co.jp/oshi-tabi/jujutanbo/',v:['all','day1']},
    {id:'kiddy_land',n:'KIDDY LAND 京都四條河原町店',lat:35.0057,lng:135.7681,a:'四條河原町',p:'jjk',s:'20–40 分',m:'動漫補貨與周邊感很強，接錦市場和河原町晚餐最順。',ref:'https://recommend.jr-central.co.jp/oshi-tabi/jujutanbo/',v:['all','day1']},
    {id:'yasaka_pagoda',n:'八坂塔（法觀寺）',lat:34.9968,lng:135.7809,a:'東山',p:'jjk',s:'20–40 分',m:'京都街景辨識度很高，JJK 與柯南都能對上氛圍。',ref:'https://recommend.jr-central.co.jp/oshi-tabi/jujutanbo/',v:['all','day1']},
    {id:'yasaka_shrine',n:'八坂神社',lat:35.0037,lng:135.7788,a:'祇園／東山',p:'conan',s:'20–40 分',m:'柯南《紅之校外旅行》代表點，適合併入東山段。',ref:'https://enjoy-osaka-kyoto-kobe.com/zh-Hant/article/a/conan-kyoto/',v:['all','day1']},
    {id:'kiyomizu',n:'清水寺',lat:34.9949,lng:135.7851,a:'東山',p:'conan',s:'60–90 分',m:'若想把柯南京都線補完整，可從八坂塔再往清水寺延伸。',ref:'https://enjoy-osaka-kyoto-kobe.com/zh-Hant/article/a/conan-kyoto/',v:['all','day1']},
    {id:'yasaka_koshindo',n:'八坂庚申堂',lat:34.9967,lng:135.7813,a:'東山',p:'conan',s:'15–25 分',m:'與八坂塔幾乎可視為同一段散步，拍照感很強。',ref:'https://enjoy-osaka-kyoto-kobe.com/zh-Hant/article/a/conan-kyoto/',v:['all','day1']},
    {id:'pontocho',n:'先斗町',lat:35.0060,lng:135.7704,a:'河原町／鴨川側',p:'conan',s:'30–60 分',m:'很適合 Day 2 晚餐後散步，也能保留一點柯南京都氛圍。',ref:'https://enjoy-osaka-kyoto-kobe.com/zh-Hant/article/a/conan-kyoto/',v:['all','day1','food']},
    {id:'nishiki',n:'錦市場（小吃區）',lat:35.0050,lng:135.7642,a:'四條／錦市場',p:'food',s:'45–75 分',m:'京都市中心補小吃最方便，但建議停下來吃，不要邊走邊吃。',v:['all','day1','food']},
    {id:'inoichi',n:'麵屋豬一',lat:35.0015,lng:135.7675,a:'河原町',p:'food',s:'45–60 分',m:'Day 2 市中心正餐候選。',v:['all','day1','food']},
    {id:'hitsuji',n:'Hitsuji',lat:35.0149,lng:135.7658,a:'丸太町',p:'food',s:'30–45 分',m:'甜點補線，較適合有餘裕時再加。',v:['all','food']},
    {id:'campo',n:'CAMPO su OVEST',lat:35.0166,lng:135.7587,a:'丸太町／烏丸御池',p:'food',s:'60–120 分',m:'想把某天收得更完整時，可拿來排晚餐。',v:['all','food']},
    {id:'rakusai_bamboo',n:'京都市洛西竹林公園',lat:34.9664,lng:135.6737,a:'西京',p:'pikmin',s:'30–45 分',m:'Day 3 的 Pikmin 主點，散步感輕鬆。',v:['all','day2','pikmin']},
    {id:'rakushisha',n:'落柿舍',lat:35.0243,lng:135.6769,a:'嵯峨・嵐山',p:'literary',s:'20–40 分',m:'文學氣息很強，拿來平衡 Pikmin 跑點感受。',v:['all','day2']},
    {id:'togetsukyo',n:'渡月橋',lat:35.0139,lng:135.6779,a:'嵐山',p:'conan',s:'20–40 分',m:'嵐山代表景，也能補到柯南相關感。',ref:'https://matcha-jp.com/tw/7826',v:['all','day2']},
    {id:'jingoji',n:'神護寺',lat:35.0606,lng:135.6702,a:'高雄',p:'pikmin',s:'45–75 分',m:'Day 3 山景段的收尾主點。',v:['all','day2','pikmin']},
    {id:'philosophers_path',n:'哲學之道',lat:35.0198,lng:135.7952,a:'左京',p:'literary',s:'45–75 分',m:'可選的文學散步補線，適合想把 Day 3 做得更詩意時加入。',v:['all','day2']},
    {id:'monk',n:'Monk',lat:35.0231,lng:135.7962,a:'哲學之道',p:'food',s:'90–150 分',m:'哲學之道周邊的預約餐廳，可作為 Day 3 升級版收尾。',v:['all','day2','food']},
    {id:'tsutenkaku',n:'通天閣',lat:34.6525,lng:135.5063,a:'大阪・新世界',p:'conan',s:'30–45 分',m:'Day 4 換宿後最容易接的大阪代表點。',ref:'https://matcha-jp.com/jp/18878',v:['all','transfer','osaka_conan']},
    {id:'osaka_castle',n:'大阪城',lat:34.6873,lng:135.5262,a:'大阪城公園',p:'conan',s:'45–75 分',m:'大阪補線的大景點，視體力安排停留長短。',ref:'https://matcha-jp.com/tw/7826',v:['all','transfer','osaka_conan']},
    {id:'ytv',n:'讀賣電視台 ytv／10plaza',lat:34.6924,lng:135.5318,a:'大阪城公園／OBP',p:'conan',s:'30–45 分',m:'大阪柯南粉最有官方感的補點。',ref:'https://ambassador.ytv.co.jp/news/4/72.html',v:['all','transfer','osaka_conan']}
  ],
  routes:[
    {f:'hotel_kyoto',t:'kyoto_station',g:'arrival',m:'步行',tm:'約 12–15 分'},
    {f:'kyoto_station',t:'kyoto_tower',g:'arrival',m:'步行',tm:'約 3–5 分'},
    {f:'kyoto_station',t:'fushimi_inari',g:'day1',m:'JR＋步行',tm:'約 10–15 分'},
    {f:'fushimi_inari',t:'gokonomiya',g:'day1',m:'電車／計程車',tm:'約 20–25 分'},
    {f:'gokonomiya',t:'zuishinin',g:'day1',m:'電車＋步行',tm:'約 25–35 分'},
    {f:'zuishinin',t:'kamo_bridge',g:'day1',m:'地下鐵＋步行',tm:'約 25–30 分'},
    {f:'kamo_bridge',t:'kiddy_land',g:'day1',m:'步行',tm:'約 5–8 分'},
    {f:'kiddy_land',t:'yasaka_pagoda',g:'day1',m:'步行／短程計程車',tm:'約 18–25 分'},
    {f:'kamo_bridge',t:'inoichi',g:'food',m:'步行',tm:'約 8–10 分'},
    {f:'kiddy_land',t:'nishiki',g:'food',m:'步行',tm:'約 8–10 分'},
    {f:'nishiki',t:'pontocho',g:'food',m:'步行',tm:'約 10–12 分'},
    {f:'yasaka_pagoda',t:'yasaka_koshindo',g:'day1',m:'步行',tm:'約 3–5 分'},
    {f:'yasaka_koshindo',t:'yasaka_shrine',g:'day1',m:'步行',tm:'約 8–10 分'},
    {f:'yasaka_koshindo',t:'kiyomizu',g:'day1',m:'步行',tm:'約 12–15 分'},
    {f:'hotel_kyoto',t:'rakusai_bamboo',g:'day2',m:'地下鐵／巴士或計程車',tm:'約 40–50 分'},
    {f:'rakusai_bamboo',t:'rakushisha',g:'day2',m:'巴士／計程車',tm:'約 20–25 分'},
    {f:'rakushisha',t:'togetsukyo',g:'day2',m:'步行',tm:'約 15–20 分'},
    {f:'togetsukyo',t:'jingoji',g:'day2',m:'巴士／計程車',tm:'約 30–40 分'},
    {f:'kamo_bridge',t:'philosophers_path',g:'day2',m:'計程車／巴士',tm:'約 15–20 分'},
    {f:'philosophers_path',t:'monk',g:'day2',m:'步行',tm:'約 5–8 分'},
    {f:'hotel_kyoto',t:'hotel_osaka',g:'transfer',m:'京都站→大阪站→地鐵',tm:'約 70–90 分'},
    {f:'hotel_osaka',t:'tsutenkaku',g:'osaka_conan',m:'地下鐵＋步行',tm:'約 20–25 分'},
    {f:'tsutenkaku',t:'osaka_castle',g:'osaka_conan',m:'地下鐵＋步行',tm:'約 25–35 分'},
    {f:'osaka_castle',t:'ytv',g:'osaka_conan',m:'步行',tm:'約 18–25 分'},
    {f:'hotel_osaka',t:'hotel_osaka',g:'return',m:'退房 → 機場線',tm:'建議預留 2.5–3 小時到機場流程'}
  ]
};