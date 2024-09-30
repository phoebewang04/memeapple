export const all_data = {
    //成都醫院
    1:{
        storeId: 1,
        branch:'台北館',
        themeName: '成都醫院',
        address:'台北市密逃路88之107號',
        src: new URL("@/assets/img/hospital_preorder.png", import.meta.url).href,

        // --------------------------------以上是預定資料的內容----------------------------------------------//

        themeClass: 'hospital',
        banner: {
            type: 'video',
            src: new URL("@/assets/img/banner_hospital.mp4", import.meta.url).href,
            // type:'img',
            // src: '../img/header.png',
            // videoSrc: new URL("@/assets/img/banner_hospital.mp4", import.meta.url).href,
            // src: new URL("@/assets/img/header.png", import.meta.url).href
        },
        overviewText: `十年前，成都醫院因連環失蹤案而成為禁地，醫院的過去被層層迷霧包裹著，成為無法觸及的秘密。身為菁英偵探的你，收到神秘委託，必須調查此宗懸案，隨著你步入醫院，腐朽的氣息和幽暗的走廊讓人不寒而慄。這裡的每一個角落似乎都隱藏著難以解釋的秘密…`
        ,
        bar: [
            { title: '燒腦指數', 'per': 87, },
            { title: '驚嚇指數', 'per': 95, },
            { title: '推薦指數', 'per': 90, }
        ],

        gameData: [
            {
                icon: 'fa-solid fa-clock',
                title: '遊戲時間',
                content: '120分鐘 \n （含20分鐘解說）'
            },
            {
                icon: 'fa-solid fa-user-secret',
                title: '建議人數',
                content: '4－8 人\n （最少4人成團）'
            },
            {
                icon: 'fa-solid fa-sack-dollar',
                title: '遊戲費用',
                content: '＄710－＄990 / 人 \n ▲ 點此查看詳細價格',
                clickable: true
            }
        ],

        iconData: [
            {
                src: new URL("@/assets/img/icon_hospital_1.png", import.meta.url).href,
                title: '極度重恐',
                content: '真人互動，將恐懼推向極限\n密閉驚悚的壓迫體驗'
            },
            {
                src: new URL("@/assets/img/icon_hospital_2.png", import.meta.url).href,
                title: '身歷其境',
                content: '精心還原醫院每個角落\n逼真場景宛如置身其中'
            },
            {
                src: new URL("@/assets/img/icon_hospital_3.png", import.meta.url).href,
                title: '海量謎題',
                content: '層層難關，精心雕琢\n由你揭開最深的秘密'
            },
        ],

        textSec: [
            {
                title: '廢墟深處，重重謎團',
                content: '步入禁地，調查塵封的過往\n觸碰那被時間遺忘的秘密',
                backgroundImage: new URL("@/assets/img/mb_hospital_1.png", import.meta.url).href,
                // 'animation': 'hand',    
            },
            {
                title: '光影交錯，虛實難辨',
                content: '詭異的筆記，失蹤者的殘骸\n指引你走向真相的深淵',
                backgroundImage: new URL("@/assets/img/mb_hospital_2.png", import.meta.url).href,
                // 'animation': 'hand',    
            }, {
                title: '怨念瀰漫，等待救贖',
                content: '唯有步步為營，方能撕裂虛\n幻的帷幕，讓真相水落石出',
                backgroundImage: new URL("@/assets/img/mb_hospital_3.png", import.meta.url).href,
                // 'animation': 'hand',    
            }, {
                title: null,
                content: '沉寂五年的未解之謎，至今仍在黑暗中低語\n你願意接下此次委託，揭開那些不該被遺忘的秘密嗎？',
                backgroundImage: new URL("@/assets/img/mb_hospital_4.png", import.meta.url).href,
                // 'animation': 'hand',    
            },

        ],
        btn: '預約偵查'
        ,

        notice: [
            {
                'p1': `＊ 建議遊戲人數 6 ~ 7 人，容納人數 4 - 8 人。`,
                'p2': `＊ 建議穿著輕便服裝，避免穿裙子。`,
                'p3': `＊ 會有真人ＮＰＣ互動，無法調整恐怖程度，膽小誤入。`,
                'p4': `＊ 未滿15歲孩童需有成人陪同參與。`,

            }
        ],

        otherSeparate:`台北館其他主題`,

        otherTheme: [
            {
                id: 2,
                src: new URL("@/assets/img/poster_time.png", import.meta.url).href,
                title: '時光迷宮'
            },
            {
                id: 3,
                src: new URL("@/assets/img/poster_dead.jpg", import.meta.url).href,
                title: '末日庇護所'
            },
            {
                id: 4,
                src: new URL("@/assets/img/poster_code.png", import.meta.url).href,
                title: '代碼深淵'
            }
        ],
        bloodImage: [
            { src: new URL('@/assets/img/blood_01.png', import.meta.url).href },
            { src: new URL('@/assets/img/blood_02.png', import.meta.url).href },
            { src: new URL('@/assets/img/blood_03.png', import.meta.url).href },
            { src: new URL('@/assets/img/blood_04.png', import.meta.url).href },
            { src: new URL('@/assets/img/blood_05.png', import.meta.url).href },
            { src: new URL('@/assets/img/blood_06.png', import.meta.url).href },
            { src: new URL('@/assets/img/blood_07.png', import.meta.url).href }
        ],
        titleText: '成都醫院',
        backgroundImage: 'url("/tid102/g1/img/popupcard_space_1.png")',
        backgroundImageMobile: 'url("/tid102/g1/img/popupcard_space-m_1.png")',
    },

    //時光迷宮
    2:{
        storeId: 1,
        branch:'台北館',
        themeName: '時光迷宮',
        address:'台北市密逃路88之107號',
        src: new URL("@/assets/img/banner_time.jpg", import.meta.url).href,
        // --------------------------------以上是預定資料的內容----------------------------------------------//

        themeClass: 'time',
        banner: {
            type:'img',
            src: new URL("@/assets/img/banner_time.jpg", import.meta.url).href
        },
        overviewText: `初原之火光芒驟減，不死魔物大量發生，為延續人界與驅除瘴氣。一群菁英尋火者前往「時光迷宮」尋找被諸神之王關押的普羅米修斯。你必須解開謎題與陷阱，解放普羅米修斯得到初原之火，導正世界秩序。`
        ,
        bar: [
            { title: '燒腦指數', 'per': 85, },
            { title: '驚嚇指數', 'per': 60, },
            { title: '推薦指數', 'per': 89, }
        ],

        gameData: [
            {
                icon: 'fa-solid fa-clock',
                title: '遊戲時間',
                content: '120分鐘 \n （含20分鐘解說）'
            },
            {
                icon: 'fa-solid fa-user-secret',
                title: '建議人數',
                content: '4－8 人\n （最少4人成團）'
            },
            {
                icon: 'fa-solid fa-sack-dollar',
                title: '遊戲費用',
                content: '＄710－＄990 / 人 \n ▲ 點此查看詳細價格',
                clickable: true
            }
        ],

        iconData: [
            {
                src: new URL("@/assets/img/icon_time_1.png", import.meta.url).href,
                title: '仿真陷阱道具',
                content: '透過機關設置場景\n為了前進必須解開謎題'
            },
            {
                src: new URL("@/assets/img/icon_time_2.png", import.meta.url).href,
                title: '沉浸式體驗',
                content: '實境效果和音效設計\n讓你體驗探索地下城的感覺'
            },
            {
                src: new URL("@/assets/img/icon_time_3.png", import.meta.url).href,
                title: '精緻的場景佈置',
                content: '專業美術設計場景\n讓你置身在陰森迷宮當中'
            },
        ],

        textSec: [
            {
                title: '沉浸探索，重重謎團',
                content: '幽暗地城，沿著階梯向下\n埋藏於遺跡深處的歷史真相',
                backgroundImage: new URL("@/assets/img/mb_time_1.png", import.meta.url).href, 
            },
            {
                title: '昏黃之影，深深囚籠',
                content: '擾動的昏黃光影\n照耀一切事物\n發現於陰影深處的謎題線索',
                backgroundImage: new URL("@/assets/img/mb_time_2.png", import.meta.url).href,
            }, {
                title: '初原之火，重見天日',
                content: '解開謎題與囚籠\n釋放初原之火\n完成大任導正世界秩序',
                backgroundImage: new URL("@/assets/img/mb_time_3.png", import.meta.url).href,
            }
        ],
        btn: '預約探索'
        ,

        notice: [
            {
                'p1': `＊ 建議遊戲人數 6 ~ 7 人，容納人數 4 - 8 人。`,
                'p2': `＊ 建議穿著輕便服裝，避免穿裙子。`,
                'p3': `＊ 遊戲進行中禁止攝影、飲食、吸菸，現場會有置物區保管。`,
                'p4': `＊ 未滿15歲孩童需有成人陪同參與。`,

            }
        ],

        otherSeparate:`台北館其他主題`,

        otherTheme: [
            {
                id: 1,
                src: new URL("@/assets/img/poster_hospital.png", import.meta.url).href,
                title: '成都醫院'
            },
            {
                id:3,
                src: new URL("@/assets/img/poster_dead.jpg", import.meta.url).href,
                title: '末日庇護所'
            },
            {
                id:4,
                src: new URL("@/assets/img/poster_code.png", import.meta.url).href,
                title: '代碼深淵'
            },
        ],
        titleText: '時光迷宮',
        backgroundImage: 'url("/tid102/g1/img/popupcard_space_2.png")',
        backgroundImageMobile: 'url("/tid102/g1/img/popupcard_space-m_2.png")',
    },

    //末日庇護所
    3:{
        storeId: 1,
        themeName: '末日庇護所',
        branch:'台北館',
        address:'台北市密逃路88之107號',
        src: new URL("@/assets/img/dead_preorder.png", import.meta.url).href,
        // --------------------------------以上是預定資料的內容----------------------------------------------//

        themeClass: 'dead',
        banner: {
            type:'video',
            src: new URL("@/assets/img/banner_dead.mp4", import.meta.url).href
        },
        overviewText: `世界末日降臨，殭屍橫行，生存成為最大的挑戰。傳說中的安全庇護所是唯一的希望，但位置隱藏在謎團之中。你必須解開線索，找到這處避難所，才能在末日災難中倖存。勇敢尋找，活下去是唯一的選擇。`
        ,
        bar: [
            { title: '燒腦指數', 'per': 85, },
            { title: '驚嚇指數', 'per': 92, },
            { title: '推薦指數', 'per': 90, }
        ],

        gameData: [
            {
                icon: 'fa-solid fa-clock',
                title: '遊戲時間',
                content: '120分鐘 \n （含20分鐘解說）'
            },
            {
                icon: 'fa-solid fa-user-secret',
                title: '建議人數',
                content: '4－8 人\n （最少4人成團）'
            },
            {
                icon: 'fa-solid fa-sack-dollar',
                title: '遊戲費用',
                content: '＄710－＄990 / 人 \n ▲ 點此查看詳細價格',
                clickable: true
            }
        ],

        iconData: [
            {
                src: new URL("@/assets/img/icon_dead_1.png", import.meta.url).href,
                title: '仿真生存道具',
                content: '透過恐怖故事場景\n利用生存道具逃出殭屍的追捕'
            },
            {
                src: new URL("@/assets/img/icon_dead_2.png", import.meta.url).href,
                title: '沉浸式體驗',
                content: '實境效果和音效設計\n讓你體驗真實殭屍世界的感覺'
            },
            {
                src: new URL("@/assets/img/icon_dead_3.png", import.meta.url).href,
                title: '複雜真實場景',
                content: '專業美術設計場景\n讓你置身在世界末日當中'
            },
        ],

        textSec: [
            {
                title: '深淵恐懼，重重謎團',
                content: '幽暗隧道、燈光閃爍\n隧道中屢屢傳出尖叫聲\n時間不多了，你活的下來嗎？',
                backgroundImage: new URL("@/assets/img/mb_dead_1.png", import.meta.url).href, 
            },
            {
                title: '沉浸探索，驚悚破表',
                content: '破碎的地下室、血腥味飄溢\n裡頭藏著安全庇護所的線索\n裡頭好像有聲音，你敢下去嗎？',
                backgroundImage: new URL("@/assets/img/mb_dead_2.png", import.meta.url).href,
            }, {
                title: '成功抵達，無人回應',
                content: '幽暗走廊、昏黃燈光\n只見的著滿處血跡\n安全的庇護所真的存在嗎？',
                backgroundImage: new URL("@/assets/img/mb_dead_3.png", import.meta.url).href,
            }
        ],
        btn: '預約戰鬥'
        ,

        notice: [
            {
                'p1': `＊ 建議遊戲人數 6 ~ 7 人，容納人數 4 - 8 人。`,
                'p2': `＊ 建議穿著輕便服裝，避免穿裙子。`,
                'p3': `＊ 遊戲進行中禁止攝影、飲食、吸菸，現場會有置物區保管。`,
                'p4': `＊ 未滿15歲孩童需有成人陪同參與。`,
            }
        ],

        otherSeparate:`台北館其他主題`,

        otherTheme: [
            {
                id: 1,
                src: new URL("@/assets/img/poster_hospital.png", import.meta.url).href,
                title: '成都醫院'
            },
            {
                id:2,
                src: new URL("@/assets/img/poster_time.png", import.meta.url).href,
                title: '時光迷宮'
            },
            {
                id:4,
                src: new URL("@/assets/img/poster_code.png", import.meta.url).href,
                title: '代碼深淵'
            },
        ],
        titleText: '末日庇護所',
        backgroundImage: 'url("/tid102/g1/img/popupcard_space_3.png")',
        backgroundImageMobile: 'url("/tid102/g1/img/popupcard_space-m_3.png")',
    },

    //代碼深淵
    4:{
        storeId: 1,
        branch:'台北館',
        themeName: '代碼深淵',
        address:'台北市密逃路88之107號',
        src: new URL("@/assets/img/code_preorder.png", import.meta.url).href,

        // --------------------------------以上是預定資料的內容----------------------------------------------//

        themeClass: 'code',
        banner: {
            type: 'video',
            src: new URL("@/assets/img/banner_code.mp4", import.meta.url).href,
        },
        overviewText: `在熬夜趕專題時，不小心寫了無限迴圈，結果錯誤訊息瘋狂跳出，甚至還冒了白煙？正當你以為電腦要爆炸的瞬間，居然被吸進了螢幕裡，這裡的教室雖熟悉卻異常詭異，四周充滿漂浮的程式碼和提示，蛤？難道要先Debug才能回去發表嗎...？`
        ,
        bar: [
            { title: '燒腦指數', 'per': 98, },
            { title: '驚嚇指數', 'per': 70, },
            { title: '推薦指數', 'per': 87, }
        ],

        gameData: [
            {
                icon: 'fa-solid fa-clock',
                title: '遊戲時間',
                content: '120分鐘 \n （含20分鐘解說）'
            },
            {
                icon: 'fa-solid fa-user-secret',
                title: '建議人數',
                content: '4－8 人\n （最少4人成團）'
            },
            {
                icon: 'fa-solid fa-sack-dollar',
                title: '遊戲費用',
                content: '＄710－＄990 / 人 \n ▲ 點此查看詳細價格',
                clickable: true
            }
        ],

        iconData: [
            {
                src: new URL("@/assets/img/icon_code_1.png", import.meta.url).href,
                title: '數位沉浸',
                content: '現實與程式錯誤的完美結合\n讓你在虛實之間徘徊'
            },
            {
                src: new URL("@/assets/img/icon_code_2.png", import.meta.url).href,
                title: '身歷其境',
                content: '鍵盤狂敲、無限重寫\n真實還原工程師Debug痛苦'
            },
            {
                src: new URL("@/assets/img/icon_code_3.png", import.meta.url).href,
                title: '除錯盛宴',
                content: '錯誤層層疊加\n只有頂尖高手才能破解'
            },
        ],

        textSec: [
            {
                title: '程式報錯，懷疑人生',
                content: '狂按Ctrl+Z？那可不行\n還得靠你的Debug技能',
                backgroundImage: new URL("@/assets/img/mb_code_1.png", import.meta.url).href,
                // 'animation': 'hand',    
            },
            {
                title: '瘋狂錯誤，狂點Ｆ５',
                content: '紅字滿屏，狂按F5自救\n程式崩潰了，但你不能崩！',
                backgroundImage: new URL("@/assets/img/mb_code_3.png", import.meta.url).href,
                // 'animation': 'hand',    
            },
            {
                title: '修個Bug，一夜變禿',
                content: '程式一旦失控，你的頭髮可能也難逃一劫\n絕望也許只是開始',
                backgroundImage: new URL("@/assets/img/mb_code_2.png", import.meta.url).href,
                // 'animation': 'hand',    
            },
            {
                title: null,
                content: '錯誤滿天飛，無限迴圈不斷重複...Debug是你唯一希望！\n準備好修復Bug回去發表，還是永遠卡在螢幕裡重寫？',
                backgroundImage: new URL("@/assets/img/mb_code_4.png", import.meta.url).href,
                // 'animation': 'hand',    
            },

        ],
        btn: '預約Debug'
        ,

        notice: [
            {
                'p1': `＊ 建議遊戲人數 6 ~ 7 人，容納人數 4 - 8 人。`,
                'p2': `＊ 建議穿著輕便服裝，避免穿裙子。`,
                'p3': `＊ 誠摯歡迎緯育老師一起挑戰，錯誤滿天飛，等您來Debug！`,
                'p4': `＊ 未滿15歲孩童需有成人陪同參與。`,

            }
        ],

        otherSeparate:`台北館其他主題`,

        otherTheme: [
            {
                id: 1,
                src: new URL("@/assets/img/poster_hospital.png", import.meta.url).href,
                title: '成都醫院'
            },
            {
                id: 2,
                src: new URL("@/assets/img/poster_time.png", import.meta.url).href,
                title: '時光迷宮'
            },
            {
                id: 3,
                src: new URL("@/assets/img/poster_dead.jpg", import.meta.url).href,
                title: '末日庇護所'
            }
            
        ],
        titleText: '代碼深淵',
        backgroundImage: 'url("/tid102/g1/img/popupcard_space_4.png")',
        backgroundImageMobile: 'url("/tid102/g1/img/popupcard_space-m_4.png")',

    },
     //逃離武石監
    5:{
        storeId: 2,
        themeName: '逃離武石監',
        branch:'台中館',
        address:'台中市北屯區路黎明路8號',
        src: new URL("@/assets/img/banner_Lock.png", import.meta.url).href,
        // --------------------------------以上是預定資料的內容----------------------------------------------//

        themeClass: 'Lock',
        banner: {
            type:'img',
            src: new URL("@/assets/img/banner_Lock.png", import.meta.url).href
        },
        overviewText: `武石監來了一位殘暴的新所長，他以極端的控制欲著稱。自上任後，監獄籠罩著恐怖氣氛，秘密實驗和虐待成為常態，囚犯們飽受折磨。更有謠言說他進行人體實驗，試圖探索人體極限。若不設法越獄揭露他的秘密，我們恐怕都會死在這裡。`
        ,
        bar: [
            { title: '燒腦指數', 'per': 95, },
            { title: '驚嚇指數', 'per': 87, },
            { title: '推薦指數', 'per': 90, }
        ],

        gameData: [
            {
                icon: 'fa-solid fa-clock',
                title: '遊戲時間',
                content: '120分鐘 \n （含20分鐘解說）'
            },
            {
                icon: 'fa-solid fa-user-secret',
                title: '建議人數',
                content: '4－8 人\n （最少4人成團）'
            },
            {
                icon: 'fa-solid fa-sack-dollar',
                title: '遊戲費用',
                content: '＄710－＄990 / 人 \n ▲ 點此查看詳細價格',
                clickable: true
            }
        ],

        iconData: [
            {
                src: new URL("@/assets/img/icon_Lock_1.png", import.meta.url).href,
                title: '角色扮演',
                content: '換上囚服，扮演逃犯與獄友\n們共同患難逃出'
            },
            {
                src: new URL("@/assets/img/icon_Lock_2.png", import.meta.url).href,
                title: '逃生道具',
                content: '逃生道具散落監獄每個角落\n解題找出道具逃離監獄'
            },
            {
                src: new URL("@/assets/img/icon_Lock_3.jpg", import.meta.url).href,
                title: '場景復刻',
                content: '打造真實監獄場景\n宛如身歷其境'
            },
        ],

        textSec: [
            {
                title: '陰森監獄，黑暗深處',
                content: '冰冷牢籠、囚徒嘶啞的聲音\n在死寂的監獄中探索隱藏於\n冷酷牆壁下的黑暗秘密',
                backgroundImage: new URL("@/assets/img/mb_Lock_1.png", import.meta.url).href, 
            },
            {
                title: '陰影囚室，沉默線索',
                content: '狹窄的牢房，牆壁上的刻痕\n在囚室裡解讀那些隱藏的符號\n發現通向自由的線索',
                backgroundImage: new URL("@/assets/img/mb_Lock_2.png", import.meta.url).href,
            }, {
                title: '詭異所長，心理暗黑',
                content: '恐怖的辦公室，獵物的相片\n所長的變態計劃\n在陰影中揭開他病態的秘密',
                backgroundImage: new URL("@/assets/img/mb_Lock_3.png", import.meta.url).href,
            }
        ],
        btn: '預約越獄'
        ,

        notice: [
            {
                'p1': `＊ 建議遊戲人數 6 ~ 7 人，容納人數 4 - 8 人。`,
                'p2': `＊ 建議穿著輕便服裝，避免穿裙子。`,
                'p3': `＊ 遊戲進行中禁止攝影、飲食、吸菸，現場會有置物區保管。`,
                'p4': `＊ 未滿15歲孩童需有成人陪同參與。`,
            }
        ],

        otherSeparate:`台中館其他主題`,

        otherTheme: [
            {
                id: 6,
                src: new URL("@/assets/img/poster_room.png", import.meta.url).href,
                title: '恐怖密室'
            },
            {
                id:7,
                src: new URL("@/assets/img/poster_alien.png", import.meta.url).href,
                title: '逃出虛空'
            },
            {
                // id:4,
                src: new URL("@/assets/img/poster_comingsoon.png", import.meta.url).href,
                title: '籌備中！Coming Soon！'
            },
        ],
        titleText: '逃離武石監',
        backgroundImage: 'url("/tid102/g1/img/popupcard_space_5.png")',
        backgroundImageMobile: 'url("/tid102/g1/img/popupcard_space-m_5.png")',
    },
    
    //恐怖密室
    6:{
        storeId: 2,
        themeName: '恐怖密室',
        branch:'台中館',
        address:'台中市北屯區路黎明路8號',
        src: new URL("@/assets/img/room_preorder.png", import.meta.url).href,
        // --------------------------------以上是預定資料的內容----------------------------------------------//

        themeClass: 'room',
        banner: {
            type:'video',
            src: new URL("@/assets/img/banner_room.mp4", import.meta.url).href
        },
        overviewText: `你是小鎮的警長，肩負著調查一間傳說中的恐怖密室。據說，曾經住在這裡的人們莫名其妙地消失了，至今無人能解開這個謎團。你的任務是根據現有的線索，找到這間密室，並查明那些消失人們的去向。你必須根據線索找到密室，揭開失蹤之謎，但危險隨時可能降臨，務必小心！`
        ,
        bar: [
            { title: '燒腦指數', 'per': 87, },
            { title: '驚嚇指數', 'per': 92, },
            { title: '推薦指數', 'per': 90, }
        ],

        gameData: [
            {
                icon: 'fa-solid fa-clock',
                title: '遊戲時間',
                content: '120分鐘 \n （含20分鐘解說）'
            },
            {
                icon: 'fa-solid fa-user-secret',
                title: '建議人數',
                content: '4－8 人\n （最少4人成團）'
            },
            {
                icon: 'fa-solid fa-sack-dollar',
                title: '遊戲費用',
                content: '＄710－＄990 / 人 \n ▲ 點此查看詳細價格',
                clickable: true
            }
        ],

        iconData: [
            {
                src: new URL("@/assets/img/icon_room_1.png", import.meta.url).href,
                title: '仿真生存道具',
                content: '透過恐怖故事場景\n利用現有道具找出密室的鑰匙'
            },
            {
                src: new URL("@/assets/img/icon_room_2.png", import.meta.url).href,
                title: '沉浸式體驗',
                content: '實境效果和音效設計\n讓你體驗陰森森恐懼的感覺'
            },
            {
                src: new URL("@/assets/img/icon_room_3.png", import.meta.url).href,
                title: '複雜真實場景',
                content: '專業美術設計場景\n讓你置身在恐怖密室當中'
            },
        ],

        textSec: [
            {
                title: '暗黑空間，重重謎團',
                content: '風吹走動、木板破損\n感覺有人在裡面看著我們\n冷聽到一些說話聲音，你敢進去嗎？',
                backgroundImage: new URL("@/assets/img/mb_room_1.png", import.meta.url).href, 
            },
            {
                title: '沉浸探索，驚悚破表',
                content: '凌亂的客廳和房間、感覺有人翻過東西\n裡頭或許有密室的線索\n找不到任何鑰匙，該怎麼辦？',
                backgroundImage: new URL("@/assets/img/mb_room_2.png", import.meta.url).href,
            }, {
                title: '發現工具，很破舊了',
                content: '某處地板凌亂的一些工具\n有看到一些血跡,是住在這裡的人嗎？\n傳說中的密室真的存在嗎？',
                backgroundImage: new URL("@/assets/img/mb_room_3.png", import.meta.url).href,
            }
        ],
        btn: '預約出動'
        ,

        notice: [
            {
                'p1': `＊ 建議遊戲人數 6 ~ 7 人，容納人數 4 - 8 人。`,
                'p2': `＊ 建議穿著輕便服裝，避免穿裙子。`,
                'p3': `＊ 遊戲進行中禁止攝影、飲食、吸菸，現場會有置物區保管。`,
                'p4': `＊ 未滿15歲孩童需有成人陪同參與。`,
            }
        ],

        otherSeparate:`台中館其他主題`,

        otherTheme: [
            {
                id: 5,
                src: new URL("@/assets/img/poster_Lock.jpg", import.meta.url).href,
                title: '逃出武石監'
            },
            {
                id:7,
                src: new URL("@/assets/img/poster_alien.png", import.meta.url).href,
                title: '逃出虛空'
            },
            {
                src: new URL("@/assets/img/poster_comingsoon.png", import.meta.url).href,
                title: '籌備中！Coming Soon！'
            },
        ],
        titleText: '恐怖密室',
        backgroundImage: 'url("/tid102/g1/img/popupcard_space_6.png")',
        backgroundImageMobile: 'url("/tid102/g1/img/popupcard_space-m_6.png")',
    },
    //逃出虛空
    7:{
        storeId: 2,
        themeName: '逃出虛空',
        branch:'台中館',
        address:'台中市北屯區路黎明路8號',
        src: new URL("@/assets/img/banner_alien.png", import.meta.url).href,
        // --------------------------------以上是預定資料的內容----------------------------------------------//
        
        themeClass: 'alien',
        banner: {
            type:'img',
            src: new URL("@/assets/img/banner_alien.png", import.meta.url).href
        },
        overviewText: `帶著開始新生活的夢想，你搭上了太空殖民飛船修普諾斯號(Hypnos)。但理應在兩年後醒來的你卻被提前喚醒，其他同伴的睡眠倉則被暴力破壞。你必須盡快找尋失蹤同伴，解開船艙內未知的謎團，並設法讓飛船重回正軌。記住，在宇宙中，沒人能聽見你的尖叫......`
        ,
        bar: [
            { title: '燒腦指數', 'per': 85, },
            { title: '驚嚇指數', 'per': 89, },
            { title: '推薦指數', 'per': 90, }
        ],

        gameData: [
            {
                icon: 'fa-solid fa-clock',
                title: '遊戲時間',
                content: '120分鐘 \n （含20分鐘解說）'
            },
            {
                icon: 'fa-solid fa-user-secret',
                title: '建議人數',
                content: '4－8 人\n （最少4人成團）'
            },
            {
                icon: 'fa-solid fa-sack-dollar',
                title: '遊戲費用',
                content: '＄710－＄990 / 人 \n ▲ 點此查看詳細價格',
                clickable: true
            }
        ],

        iconData: [
            {
                src: new URL("@/assets/img/icon_alien_1.png", import.meta.url).href,
                title: '仿真場景體驗',
                content: '聲光、煙霧效果\n打造太空旅行沉浸式體驗'
            },
            {
                src: new URL("@/assets/img/icon_alien_2.png", import.meta.url).href,
                title: '多段式密室劇情',
                content: '隨劇情進展\n分工找尋線索或駕駛飛船逃離'
            },
            {
                src: new URL("@/assets/img/icon_alien_3.png", import.meta.url).href,
                title: '電影等級道具',
                content: '重金打造電影級恐怖道具\n重現驚悚太空逃生'
            },
        ],

        textSec: [
            {
                title: '沉浸體驗，孤立無援',
                content: '無垠的宇宙中，偏移航道的飛船\n要如何解開謎團、重回正軌？',
                backgroundImage: new URL("@/assets/img/mb_alien_1.png", import.meta.url).href,
            },
            {
                title: '屏氣凝神，逃出生天',
                content: '在理應無人的船艙找尋生機\n卻一直聽見詭異的呼吸聲\n轉角的陰影到底有什麼在等你？',
                backgroundImage: new URL("@/assets/img/mb_alien_2.png", import.meta.url).href,
 
            }, {
                title: '幽暗密室，危機四伏',
                content: '船內多處被暴力破壞\n究竟是機械故障、船員叛變\n還是有更邪惡的東西在你身後？',
                backgroundImage: new URL("@/assets/img/mb_alien_3.png", import.meta.url).href, 
            },
        ],
        btn: '預約登船'
        ,

        notice: [
            {
                'p1': `＊ 建議遊戲人數 6 ~ 7 人，容納人數 4 - 8 人。`,
                'p2': `＊ 建議穿著輕便服裝，避免穿裙子。`,
                'p3': `＊ 會有真人ＮＰＣ互動，無法調整恐怖程度，膽小誤入。`,
                'p4': `＊ 未滿15歲孩童需有成人陪同參與。`,
            }
        ],

        otherSeparate:`台中館其他主題`,

        otherTheme: [
            {
                id: 5,
                src: new URL("@/assets/img/poster_Lock.jpg", import.meta.url).href,
                title: '逃出武石監'
            },
            {
                id:6,
                src: new URL("@/assets/img/poster_room.png", import.meta.url).href,
                title: '恐怖密室'
            },
            {
                src: new URL("@/assets/img/poster_comingsoon.png", import.meta.url).href,
                title: '籌備中！Coming Soon！'
            },

        ],
        titleText: '逃出虛空',
        backgroundImage: 'url("/tid102/g1/img/popupcard_space_7.png")',
        backgroundImageMobile: 'url("/tid102/g1/img/popupcard_space-m_7.png")',
    },

    
}