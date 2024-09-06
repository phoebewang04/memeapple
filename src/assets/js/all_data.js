export const all_data = {
    1:{
        themeClass: 'hospital',
        banner: {
            type: 'video',
            src: '../assets/img/banner_hospital.mp4',
            // type:'img',
            // src:'../assets/img/header.png',
        },
        overviewText: `十年前，成都醫院因連環失蹤案而成為禁地，醫院的過去被層層迷霧包裹著，成為無法觸及的秘密。身為菁英偵探的你，收到神秘委託，必須調查此宗懸案，隨著你步入醫院，腐朽的氣息和幽暗的走廊讓人不寒而慄。這裡的每一個角落似乎都隱藏著難以解釋的秘密…`
        ,
        bar: [
            { 'title': '燒腦指數', 'per': 87, },
            { 'title': '驚嚇指數', 'per': 95, },
            { 'title': '推薦指數', 'per': 90, }
        ],

        gameData: [
            {
                'icon': 'fa-solid fa-clock',
                'title': '遊戲時間',
                'content': '120分鐘 \n （含20分鐘解說）'
            },
            {
                'icon': 'fa-solid fa-user-secret',
                'title': '建議人數',
                'content': '4－8 人\n （最少4人成團）'
            },
            {
                'icon': 'fa-solid fa-sack-dollar',
                'title': '遊戲費用',
                'content': '＄710－＄990 / 人 \n ▲ 點此查看詳細價格',
                clickable: true
            }
        ],

        iconData: [
            {
                // src:'../assets/img/icon-1.png',
                'title': '極度重恐',
                'content': '真人互動，將恐懼推向極限\n密閉驚悚的壓迫體驗'
            },
            {
                // src:'../assets/img/icon-2.png',
                'title': '身歷其境',
                'content': '精心還原醫院每個角落\n逼真場景宛如置身其中'
            },
            {
                src: '../assets/img/icon-3.png',
                'title': '海量謎題',
                'content': '層層難關，精心雕琢\n由你揭開最深的秘密'
            },
        ],

        textSec: [
            {
                'title': '廢墟深處，重重謎團',
                'content': '步入禁地，調查塵封的過往\n觸碰那被時間遺忘的秘密',
                // 'animation': 'hand',    
            },
            {
                'title': '光影交錯，虛實難辨',
                'content': '詭異的筆記，失蹤者的殘骸\n指引你走向真相的深淵',
                // 'animation': 'hand',    
            }, {
                'title': '怨念瀰漫，等待救贖',
                'content': '唯有步步為營，方能撕裂虛\n幻的帷幕，讓真相水落石出',
                // 'animation': 'hand',    
            }, {
                'title': null,
                'content': '沉寂五年的未解之謎，至今仍在黑暗中低語\n你願意接下此次委託，揭開那些不該被遺忘的秘密嗎？',
                // 'animation': 'hand',    
            },

        ],
        btn: '預約偵查'
        ,

        // notice: [
        //     {
        //         'p1': `＊ 建議遊戲人數 6 ~ 7 人，容納人數 4 - 8 人。`,
        //         'p2': `＊ 建議穿著輕便服裝，避免穿裙子。`,
        //         'p3': `＊ 會有真人ＮＰＣ互動，無法調整恐怖程度，膽小誤入。`,
        //         'p4': `＊ 未滿15歲孩童需有成人陪同參與。`,

        //     }
        // ],

        otherTheme: [
            {
                src: '../assets/img/banner-dead.jpg',
                'title': '末日庇護所'
            },
            {
                src: '../assets/img/banner-code.png',
                'title': '代碼深淵'
            },
            {
                src: '../assets/img/banner-mazeofTime.png',
                'title': '時光迷宮'
            },

        ]
    }
}