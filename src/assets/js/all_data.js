export const all_data = {
    //公版
    // 0:{
    //     themeClass: '',
    //     banner: {
    //         type: 'video',
    //         src: new URL("@/assets/img/banner_hospital.mp4", import.meta.url).href,
    //         // type:'img',
    //         // src: new URL("@/assets/img/.png", import.meta.url).href
    //     },
    //     overviewText: ``
    //     ,
    //     bar: [
    //         { title: '燒腦指數', 'per': , },
    //         { title: '驚嚇指數', 'per': , },
    //         { title: '推薦指數', 'per': , }
    //     ],

    //     gameData: [
    //         {
    //             icon: 'fa-solid fa-clock',
    //             title: '遊戲時間',
    //             content: '120分鐘 \n （含20分鐘解說）'
    //         },
    //         {
    //             icon: 'fa-solid fa-user-secret',
    //             title: '建議人數',
    //             content: '4－8 人\n （最少4人成團）'
    //         },
    //         {
    //             icon: 'fa-solid fa-sack-dollar',
    //             title: '遊戲費用',
    //             content: '＄710－＄990 / 人 \n ▲ 點此查看詳細價格',
    //             clickable: true
    //         }
    //     ],

    //     iconData: [
    //         {
    //             src: new URL("@/assets/img/icon_hospital_1.png", import.meta.url).href,
    //             title: '',
    //             content: '\n'
    //         },
    //         {
    //             src: new URL("@/assets/img/icon_hospital_2.png", import.meta.url).href,
    //             title: '',
    //             content: '\n'
    //         },
    //         {
    //             src: new URL("@/assets/img/icon_hospital_3.png", import.meta.url).href,
    //             title: '',
    //             content: '\n'
    //         },
    //     ],

    //     textSec: [
    //         {
    //             title: '',
    //             content: '\n',
    //             backgroundImage: new URL("@/assets/img/mb_hospital_1.png", import.meta.url).href,
    //         },
    //         {
    //             title: '',
    //             content: '\n',
    //             backgroundImage: new URL("@/assets/img/mb_hospital_2.png", import.meta.url).href,
    //         }, {
    //             title: '',
    //             content: '\n',
    //             backgroundImage: new URL("@/assets/img/mb_hospital_3.png", import.meta.url).href,
    //         }, {
    //             title: null,
    //             content: '\n',
    //             backgroundImage: new URL("@/assets/img/mb_hospital_4.png", import.meta.url).href,
    //         },

    //     ],
    //     btn: '預約'
    //     ,

    //     notice: [
    //         {
    //             'p1': `＊ 建議遊戲人數 6 ~ 7 人，容納人數 4 - 8 人。`,
    //             'p2': `＊ 建議穿著輕便服裝，避免穿裙子。`,
    //             'p3': `＊ 會有真人ＮＰＣ互動，無法調整恐怖程度，膽小誤入。`,
    //             'p4': `＊ 未滿15歲孩童需有成人陪同參與。`,

    //         }
    //     ],

    //     otherTheme: [
    //         {
    //             src: new URL("@/assets/img/banner-dead.jpg", import.meta.url).href,
    //             title: '末日庇護所'
    //         },
    //         {
    //             src: new URL("@/assets/img/banner-code.png", import.meta.url).href,
    //             title: '代碼深淵'
    //         },
    //         {
    //             src: new URL("@/assets/img/banner-mazeofTime.png", import.meta.url).href,
    //             title: '時光迷宮'
    //         },

    //     ]
    // },
    
    //成都醫院
    1:{
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

        otherTheme: [
            {
                id: 2,
                src: new URL("@/assets/img/banner-mazeofTime.png", import.meta.url).href,
                title: '時光迷宮'
            },
            {
                id: 3,
                src: new URL("@/assets/img/banner-dead.jpg", import.meta.url).href,
                title: '末日庇護所'
            },
            {
                id: 4,
                src: new URL("@/assets/img/banner-code.png", import.meta.url).href,
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
    },

    //時光迷宮
    2:{
        themeClass: 'alien',
        banner: {
            // type: 'video',
            // src: new URL("@/assets/img/banner_hospital.mp4", import.meta.url).href,
            type:'img',
            // src: '../img/header.png',
            // videoSrc: new URL("@/assets/img/banner_hospital.mp4", import.meta.url).href,
            src: new URL("@/assets/img/banner.png", import.meta.url).href
        },
        overviewText: `初原之火光芒驟減，不死魔物大量發生，為延續人界與驅除瘴氣。一群菁英尋火者前往「時光迷宮」尋找被諸神之王關押的普羅米修斯。你必須解開謎題與陷阱，解放普羅米修斯得到初原之火，導正世界秩序。`
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
                src: new URL("@/assets/img/icon_time_1.png", import.meta.url).href,
                title: '仿真陷阱道具',
                content: '透過機關設置場景\n為了前進必須解開謎題'
            },
            {
                src: new URL("@/assets/img/icon-2.png", import.meta.url).href,
                title: '沉浸式體驗',
                content: '實境效果和音效設計\n讓你體驗探索地下城的感覺'
            },
            {
                src: new URL("@/assets/img/icon-3.png", import.meta.url).href,
                title: '精緻的場景佈置',
                content: '專業美術設計場景\n讓你置身在陰森迷宮當中'
            },
        ],

        textSec: [
            {
                title: '沉浸探索，重重謎團',
                content: '幽暗地城，沿著階梯向下\n埋藏於遺跡深處的歷史真相',
                backgroundImage: new URL("@/assets/img/mb_alien_1.png", import.meta.url).href,

                // 'animation': 'hand',    
            },
            {
                title: '昏黃之影，深深囚籠',
                content: '擾動的昏黃光影\n照耀一切事物\n發現於陰影深處的謎題線索',
                backgroundImage: new URL("@/assets/img/mb_alien_1.png", import.meta.url).href,

                // 'animation': 'hand',    
            }, {
                title: '初原之火，重見天日',
                content: '解開謎題與囚籠\n釋放初原之火\n完成大任導正世界秩序',
                backgroundImage: new URL("@/assets/img/mb_alien_1.png", import.meta.url).href,

                // 'animation': 'hand',    
            }, {
                title: null,
                content: null,
                backgroundImage: new URL("@/assets/img/mb_alien_1.png", import.meta.url).href,

                // 'animation': 'hand',    
            },

        ],
        btn: '預約登船'
        ,

        notice: [
            {
                'p1': `＊ 建議遊戲人數 6 ~ 7 人，容納人數 4 - 8 人。`,
                'p2': `＊ 建議穿著輕便服裝，避免穿裙子。`,
                'p3': `＊ 遊戲進行中禁止攝影、飲食、吸菸，現場會有置物區保管。`,
                'p4': `＊ 未滿15歲孩童需有成人陪同參與。`,

            }
        ],

        otherTheme: [
            {
                id: 1,
                src: new URL("@/assets/img/poster_hospital.png", import.meta.url).href,
                title: '成都醫院'
            },
            {
                id:3,
                src: new URL("@/assets/img/banner-dead.jpg", import.meta.url).href,
                title: '末日庇護所'
            },
            {
                id:4,
                src: new URL("@/assets/img/banner-code.png", import.meta.url).href,
                title: '代碼深淵'
            },
            

        ]
    },
    7:{
        // id:1,
        themeClass: 'alien',
        banner: {
            // type: 'video',
            // src: new URL("@/assets/img/banner_hospital.mp4", import.meta.url).href,
            type:'img',
            // src: '../img/header.png',
            // videoSrc: new URL("@/assets/img/banner_hospital.mp4", import.meta.url).href,
            src: new URL("@/assets/img/banner.png", import.meta.url).href
        },
        overviewText: `帶著開始新生活的夢想，你搭上了太空殖民飛船修普諾斯號(Hypnos)。但理應在兩年後醒來的你卻被提前喚醒，其他同伴的睡眠倉則被暴力破壞。你必須盡快找尋失蹤同伴，解開船艙內未知的謎團，並設法讓飛船重回正軌。記住，在宇宙中，沒人能聽見你的尖叫......`
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
                src: new URL("@/assets/img/icon-1.png", import.meta.url).href,
                title: '仿真場景體驗',
                content: '聲光、煙霧效果\n打造太空旅行沉浸式體驗'
            },
            {
                src: new URL("@/assets/img/icon-2.png", import.meta.url).href,
                title: '多段式密室劇情',
                content: '隨劇情進展\n分工找尋線索或駕駛飛船逃離'
            },
            {
                src: new URL("@/assets/img/icon-3.png", import.meta.url).href,
                title: '電影等級道具',
                content: '重金打造電影級恐怖道具\n重現驚悚太空逃生'
            },
        ],

        textSec: [
            {
                title: '沉浸體驗，孤立無援',
                content: '無垠的宇宙中，偏移航道的飛船\n要如何解開謎團、重回正軌？',
                backgroundImage: new URL("@/assets/img/mb_alien_1.png", import.meta.url).href,

                // 'animation': 'hand',    
            },
            {
                title: '屏氣凝神，逃出生天',
                content: '在理應無人的船艙找尋生機\n卻一直聽見詭異的呼吸聲\n轉角的陰影到底有什麼在等你？',
                backgroundImage: new URL("@/assets/img/mb_alien_1.png", import.meta.url).href,

                // 'animation': 'hand',    
            }, {
                title: '幽暗密室，危機四伏',
                content: '船內多處被暴力破壞\n究竟是機械故障、船員叛變\n還是有更邪惡的東西在你身後？',
                backgroundImage: new URL("@/assets/img/mb_alien_1.png", import.meta.url).href,

                // 'animation': 'hand',    
            }, {
                title: null,
                content: null,
                backgroundImage: new URL("@/assets/img/mb_alien_1.png", import.meta.url).href,

                // 'animation': 'hand',    
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

        otherTheme: [
            {
                src: new URL("@/assets/img/banner-dead.jpg", import.meta.url).href,
                title: '末日庇護所'
            },
            {
                src: new URL("@/assets/img/banner-code.png", import.meta.url).href,
                title: '代碼深淵'
            },
            {
                src: new URL("@/assets/img/banner-mazeofTime.png", import.meta.url).href,
                title: '時光迷宮'
            },

        ]
    }
}