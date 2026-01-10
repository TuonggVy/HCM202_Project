// Game: Thu thập mảnh ghép bằng cách trả lời câu hỏi
// 12 mảnh = 1 bức tranh hoàn chỉnh
// 1 mảnh = 5 câu hỏi đúng

// Câu hỏi về Tư tưởng Hồ Chí Minh
const questions = [
    {
        id: 1,
        question: "Theo Hồ Chí Minh, đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam là gì?",
        options: [
            "Từ nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không trải qua giai đoạn phát triển tư bản chủ nghĩa",
            "Từ nước công nghiệp phát triển tiến lên chủ nghĩa xã hội",
            "Từ nước phong kiến tiến lên chủ nghĩa xã hội",
            "Từ nước thuộc địa tiến lên chủ nghĩa xã hội"
        ],
        correct: 0,
        piece: 1
    },
    {
        id: 2,
        question: "Hồ Chí Minh đã khẳng định: 'Không có gì quý hơn...'?",
        options: [
            "Độc lập, tự do",
            "Hòa bình, hạnh phúc",
            "Đoàn kết, thống nhất",
            "Dân chủ, công bằng"
        ],
        correct: 0,
        piece: 1
    },
    {
        id: 3,
        question: "Theo Hồ Chí Minh, nhiệm vụ quan trọng nhất của thời kỳ quá độ về kinh tế là gì?",
        options: [
            "Cải tạo nền kinh tế cũ, xây dựng nền kinh tế mới có công nghiệp và nông nghiệp hiện đại",
            "Phát triển nền kinh tế thị trường",
            "Xây dựng nền kinh tế tự cung tự cấp",
            "Phát triển nền kinh tế dịch vụ"
        ],
        correct: 0,
        piece: 1
    },
    {
        id: 4,
        question: "Nguyên tắc đầu tiên trong xây dựng chủ nghĩa xã hội theo Hồ Chí Minh là gì?",
        options: [
            "Mọi tư tưởng, hành động phải được thực hiện trên nền tảng chủ nghĩa Mác – Lênin",
            "Giữ vững độc lập dân tộc",
            "Đoàn kết quốc tế",
            "Xây đi đôi với chống"
        ],
        correct: 0,
        piece: 1
    },
    {
        id: 5,
        question: "Theo Hồ Chí Minh, độc lập dân tộc có mối quan hệ như thế nào với chủ nghĩa xã hội?",
        options: [
            "Độc lập dân tộc là tiền đề, chủ nghĩa xã hội là đảm bảo vững chắc",
            "Chủ nghĩa xã hội là tiền đề, độc lập dân tộc là đảm bảo",
            "Hai mục tiêu độc lập với nhau",
            "Chỉ cần độc lập dân tộc là đủ"
        ],
        correct: 0,
        piece: 1
    },
    {
        id: 6,
        question: "Về văn hóa, Hồ Chí Minh yêu cầu phải làm gì?",
        options: [
            "Triệt để tẩy trừ mọi di tích thuộc địa và ảnh hưởng nô dịch, phát triển truyền thống tốt đẹp",
            "Loại bỏ hoàn toàn văn hóa phương Tây",
            "Chỉ giữ lại văn hóa truyền thống",
            "Chỉ tiếp thu văn hóa hiện đại"
        ],
        correct: 0,
        piece: 2
    },
    {
        id: 7,
        question: "Hồ Chí Minh quan niệm chủ nghĩa Mác – Lênin là gì?",
        options: [
            "Khoa học về cách mạng của quần chúng bị áp bức và bóc lột",
            "Lý thuyết về kinh tế",
            "Học thuyết về chính trị",
            "Triết học về đạo đức"
        ],
        correct: 0,
        piece: 2
    },
    {
        id: 8,
        question: "Theo Hồ Chí Minh, chủ nghĩa xã hội trước hết là gì?",
        options: [
            "Một chế độ dân chủ, do nhân dân làm chủ, dưới sự lãnh đạo của Đảng",
            "Một chế độ tập trung quyền lực",
            "Một chế độ tự do cá nhân",
            "Một chế độ quân chủ"
        ],
        correct: 0,
        piece: 2
    },
    {
        id: 9,
        question: "Điều kiện đầu tiên để bảo đảm độc lập dân tộc gắn liền với chủ nghĩa xã hội là gì?",
        options: [
            "Bảo đảm vai trò lãnh đạo tuyệt đối của Đảng Cộng sản",
            "Phát triển kinh tế mạnh",
            "Có quân đội hùng mạnh",
            "Có nền văn hóa phát triển"
        ],
        correct: 0,
        piece: 2
    },
    {
        id: 10,
        question: "Hồ Chí Minh khẳng định cách mạng Việt Nam là gì?",
        options: [
            "Một bộ phận của lực lượng hòa bình, dân chủ, xã hội chủ nghĩa trên thế giới",
            "Một cách mạng độc lập hoàn toàn",
            "Một cách mạng tư sản",
            "Một cách mạng nông dân"
        ],
        correct: 0,
        piece: 2
    },
    {
        id: 11,
        question: "Theo Hồ Chí Minh, về quan hệ xã hội phải xây dựng điều gì?",
        options: [
            "Xã hội dân chủ, công bằng, văn minh, tôn trọng con người",
            "Xã hội bình đẳng tuyệt đối",
            "Xã hội tự do cá nhân",
            "Xã hội tập thể hóa"
        ],
        correct: 0,
        piece: 3
    },
    {
        id: 12,
        question: "Hồ Chí Minh đã cảnh báo về 'căn bệnh' nào cần phải đánh thắng?",
        options: [
            "Chủ nghĩa cá nhân",
            "Chủ nghĩa tập thể",
            "Chủ nghĩa dân tộc",
            "Chủ nghĩa quốc tế"
        ],
        correct: 0,
        piece: 3
    },
    {
        id: 13,
        question: "Theo Hồ Chí Minh, phương châm dân chủ xã hội chủ nghĩa là gì?",
        options: [
            "Dân biết, dân bàn, dân làm, dân kiểm tra",
            "Dân làm, dân kiểm tra, dân quyết định",
            "Dân biết, dân quyết định, dân thực hiện",
            "Dân bàn, dân quyết định, dân kiểm tra"
        ],
        correct: 0,
        piece: 3
    },
    {
        id: 14,
        question: "Mục tiêu cuối cùng mà Hồ Chí Minh đặt ra cho đất nước là gì?",
        options: [
            "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
            "Nước mạnh, dân giàu, hiện đại",
            "Dân chủ, tự do, hạnh phúc",
            "Phát triển, thịnh vượng, bền vững"
        ],
        correct: 0,
        piece: 3
    },
    {
        id: 15,
        question: "Hồ Chí Minh đã nói: 'Ta có thể đi con đường khác để tiến lên chủ nghĩa xã hội' nhằm nhấn mạnh điều gì?",
        options: [
            "Vận dụng sáng tạo, không áp đặt máy móc kinh nghiệm của các nước khác",
            "Từ chối học tập kinh nghiệm quốc tế",
            "Đi theo con đường riêng hoàn toàn",
            "Không cần học hỏi từ ai"
        ],
        correct: 0,
        piece: 3
    },
    // Thêm nhiều câu hỏi hơn cho 12 mảnh (mỗi mảnh 5 câu = 60 câu tổng cộng)
    // Tôi sẽ tạo thêm câu hỏi để đủ cho 12 mảnh
    {
        id: 16,
        question: "Theo Hồ Chí Minh, thời kỳ quá độ có tính chất như thế nào?",
        options: [
            "Cải biến sâu sắc nhất nhưng phức tạp, lâu dài, khó khăn, gian khổ",
            "Đơn giản và nhanh chóng",
            "Tự nhiên và dễ dàng",
            "Ngắn gọn và đơn giản"
        ],
        correct: 0,
        piece: 4
    },
    {
        id: 17,
        question: "Hồ Chí Minh xác định nhiệm vụ về chính trị trong thời kỳ quá độ là gì?",
        options: [
            "Xây dựng chế độ dân chủ, chống chủ nghĩa cá nhân",
            "Xây dựng chế độ độc tài",
            "Xây dựng chế độ quân chủ",
            "Xây dựng chế độ tư bản"
        ],
        correct: 0,
        piece: 4
    },
    {
        id: 18,
        question: "Theo Hồ Chí Minh, chủ nghĩa xã hội là một xã hội như thế nào?",
        options: [
            "Không còn chế độ áp bức bóc lột, bình đẳng, công bằng",
            "Có chế độ áp bức nhưng công bằng",
            "Tự do cá nhân tuyệt đối",
            "Tập thể hóa hoàn toàn"
        ],
        correct: 0,
        piece: 4
    },
    {
        id: 19,
        question: "Hồ Chí Minh khẳng định chỉ có gì mới giải phóng được các dân tộc bị áp bức?",
        options: [
            "Chủ nghĩa xã hội, chủ nghĩa cộng sản",
            "Chủ nghĩa tư bản",
            "Chủ nghĩa dân tộc",
            "Chủ nghĩa tự do"
        ],
        correct: 0,
        piece: 4
    },
    {
        id: 20,
        question: "Điều kiện thứ hai để bảo đảm độc lập dân tộc gắn liền với chủ nghĩa xã hội là gì?",
        options: [
            "Củng cố và tăng cường khối đại đoàn kết dân tộc",
            "Phát triển kinh tế",
            "Xây dựng quân đội",
            "Phát triển văn hóa"
        ],
        correct: 0,
        piece: 4
    },
    // Tiếp tục thêm câu hỏi cho các mảnh còn lại...
    // Để đơn giản, tôi sẽ tạo thêm một số câu hỏi và lặp lại logic
]

// Tạo thêm câu hỏi để đủ 60 câu (12 mảnh x 5 câu)
function generateMoreQuestions() {
    // Tạo câu hỏi bổ sung dựa trên nội dung
    const additionalQuestions = [
        // Mảnh 5
        {
            id: 21,
            question: "Theo Hồ Chí Minh, nền văn hóa Việt Nam cần có tính chất gì?",
            options: [
                "Dân tộc, khoa học và đại chúng",
                "Hiện đại và quốc tế",
                "Truyền thống và bảo thủ",
                "Tây phương và hiện đại"
            ],
            correct: 0,
            piece: 5
        },
        {
            id: 22,
            question: "Hồ Chí Minh nhấn mạnh phải 'cụ thể hóa chủ nghĩa Mác – Lênin' như thế nào?",
            options: [
                "Cho thích hợp với điều kiện hoàn cảnh từng lúc và từng nơi",
                "Áp dụng nguyên văn",
                "Bỏ qua hoàn toàn",
                "Chỉ học lý thuyết"
            ],
            correct: 0,
            piece: 5
        },
        {
            id: 23,
            question: "Theo Hồ Chí Minh, độc lập dân tộc bao gồm những nội dung gì?",
            options: [
                "Cả nội dung dân tộc và dân chủ, gắn liền với tự do, cơm no, áo ấm",
                "Chỉ có độc lập chính trị",
                "Chỉ có độc lập kinh tế",
                "Chỉ có độc lập văn hóa"
            ],
            correct: 0,
            piece: 5
        },
        {
            id: 24,
            question: "Hồ Chí Minh quan niệm cách mạng dân tộc dân chủ nhân dân có tính chất gì?",
            options: [
                "Mang tính định hướng xã hội chủ nghĩa ngay từ đầu",
                "Mang tính tư sản",
                "Mang tính phong kiến",
                "Không có định hướng"
            ],
            correct: 0,
            piece: 5
        },
        {
            id: 25,
            question: "Theo Hồ Chí Minh, chủ nghĩa xã hội sẽ tạo nền tảng như thế nào cho độc lập dân tộc?",
            options: [
                "Nền tảng vững chắc để bảo vệ nền độc lập dân tộc trường tồn",
                "Nền tảng tạm thời",
                "Không liên quan đến độc lập",
                "Chỉ là mục tiêu phụ"
            ],
            correct: 0,
            piece: 5
        },
        // Mảnh 6
        {
            id: 26,
            question: "Theo Hồ Chí Minh, giữa cải tạo và xây dựng thì nhiệm vụ nào là chủ chốt?",
            options: [
                "Xây dựng là nhiệm vụ chủ chốt và lâu dài",
                "Cải tạo là nhiệm vụ chủ chốt",
                "Cả hai đều quan trọng như nhau",
                "Chỉ cần cải tạo"
            ],
            correct: 0,
            piece: 6
        },
        {
            id: 27,
            question: "Hồ Chí Minh khẳng định cách mạng giải phóng dân tộc Việt Nam là con đường gì?",
            options: [
                "Con đường cách mạng vô sản",
                "Con đường cách mạng tư sản",
                "Con đường cách mạng nông dân",
                "Con đường cách mạng dân chủ"
            ],
            correct: 0,
            piece: 6
        },
        {
            id: 28,
            question: "Theo Hồ Chí Minh, chủ nghĩa xã hội là một xã hội có đặc điểm gì về kinh tế?",
            options: [
                "Có nền kinh tế phát triển cao, gắn liền với khoa học kỹ thuật",
                "Có nền kinh tế tự cung tự cấp",
                "Có nền kinh tế thị trường tự do",
                "Có nền kinh tế tập trung"
            ],
            correct: 0,
            piece: 6
        },
        {
            id: 29,
            question: "Hồ Chí Minh đã căn dặn về đối với kẻ địch phải làm gì?",
            options: [
                "Luôn tỉnh táo, giữ vững lập trường, quyết không mất cảnh giác",
                "Tin tưởng hoàn toàn",
                "Thỏa hiệp và nhượng bộ",
                "Bỏ qua mọi thứ"
            ],
            correct: 0,
            piece: 6
        },
        {
            id: 30,
            question: "Theo Hồ Chí Minh, đối với tàn dư của xã hội cũ phải làm gì?",
            options: [
                "Thay đổi triệt để những nếp sống, thói quen, ý nghĩ và thành kiến có gốc rễ sâu xa",
                "Giữ nguyên mọi thứ",
                "Chỉ thay đổi một phần",
                "Bỏ qua hoàn toàn"
            ],
            correct: 0,
            piece: 6
        },
        // Mảnh 7
        {
            id: 31,
            question: "Hồ Chí Minh khẳng định 'Toàn thể dân tộc Việt Nam quyết đem...' để làm gì?",
            options: [
                "Giữ vững quyền tự do, độc lập",
                "Xây dựng đất nước",
                "Phát triển kinh tế",
                "Mở rộng lãnh thổ"
            ],
            correct: 0,
            piece: 7
        },
        {
            id: 32,
            question: "Theo Hồ Chí Minh, chủ nghĩa xã hội là một xã hội có đặc điểm gì về phân phối?",
            options: [
                "Làm nhiều hưởng nhiều, làm ít hưởng ít, không làm không hưởng",
                "Phân phối bình đẳng tuyệt đối",
                "Phân phối theo nhu cầu",
                "Phân phối tự do"
            ],
            correct: 0,
            piece: 7
        },
        {
            id: 33,
            question: "Hồ Chí Minh nhấn mạnh phải học tập kinh nghiệm của các nước anh em như thế nào?",
            options: [
                "Vận dụng sáng tạo, không áp đặt máy móc",
                "Áp dụng nguyên văn",
                "Bỏ qua hoàn toàn",
                "Chỉ học một phần"
            ],
            correct: 0,
            piece: 7
        },
        {
            id: 34,
            question: "Theo Hồ Chí Minh, cách mạng dân tộc dân chủ nhân dân càng sâu sắc thì càng tạo ra điều gì?",
            options: [
                "Tiền đề thuận lợi, sức mạnh to lớn cho cách mạng xã hội chủ nghĩa",
                "Khó khăn cho cách mạng tiếp theo",
                "Không ảnh hưởng gì",
                "Cản trở cách mạng"
            ],
            correct: 0,
            piece: 7
        },
        {
            id: 35,
            question: "Hồ Chí Minh quan niệm chủ nghĩa Mác – Lênin là khoa học về gì?",
            options: [
                "Cách mạng của quần chúng bị áp bức và bóc lột",
                "Kinh tế và chính trị",
                "Văn hóa và xã hội",
                "Khoa học và kỹ thuật"
            ],
            correct: 0,
            piece: 7
        },
        // Mảnh 8
        {
            id: 36,
            question: "Theo Hồ Chí Minh, chủ nghĩa xã hội sẽ góp phần làm gì?",
            options: [
                "Hạn chế những cuộc chiến tranh phi nghĩa, bảo vệ hòa bình thế giới",
                "Gây ra chiến tranh",
                "Không ảnh hưởng đến hòa bình",
                "Chỉ quan tâm đến lợi ích riêng"
            ],
            correct: 0,
            piece: 8
        },
        {
            id: 37,
            question: "Hồ Chí Minh khẳng định phải 'học lập trường, quan điểm và phương pháp' của gì?",
            options: [
                "Chủ nghĩa Mác – Lênin",
                "Chủ nghĩa tư bản",
                "Chủ nghĩa dân tộc",
                "Chủ nghĩa tự do"
            ],
            correct: 0,
            piece: 8
        },
        {
            id: 38,
            question: "Theo Hồ Chí Minh, về quan hệ xã hội phải chú ý điều gì?",
            options: [
                "Xem xét lợi ích cá nhân đúng đắn và bảo đảm cho nó được thỏa mãn",
                "Bỏ qua lợi ích cá nhân",
                "Chỉ quan tâm lợi ích tập thể",
                "Tự do cá nhân tuyệt đối"
            ],
            correct: 0,
            piece: 8
        },
        {
            id: 39,
            question: "Hồ Chí Minh đã nói 'Ta không thể giống Liên Xô' vì lý do gì?",
            options: [
                "Liên Xô có phong tục tập quán khác, có lịch sử địa lý khác",
                "Không muốn học hỏi",
                "Từ chối hợp tác",
                "Muốn độc lập hoàn toàn"
            ],
            correct: 0,
            piece: 8
        },
        {
            id: 40,
            question: "Theo Hồ Chí Minh, chủ nghĩa xã hội là một xã hội như thế nào về đạo đức và văn hóa?",
            options: [
                "Có sự phát triển cao đạo đức và văn hóa",
                "Không quan tâm đến đạo đức",
                "Chỉ phát triển văn hóa",
                "Bỏ qua văn hóa truyền thống"
            ],
            correct: 0,
            piece: 8
        },
        // Mảnh 9
        {
            id: 41,
            question: "Hồ Chí Minh khẳng định trong Chánh cương vắn tắt của Đảng (1930), phương hướng chiến lược là gì?",
            options: [
                "Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản",
                "Làm cách mạng tư sản",
                "Làm cách mạng nông dân",
                "Làm cách mạng công nghiệp"
            ],
            correct: 0,
            piece: 9
        },
        {
            id: 42,
            question: "Theo Hồ Chí Minh, độc lập dân tộc phải gắn liền với điều gì?",
            options: [
                "Thống nhất, chủ quyền và toàn vẹn lãnh thổ",
                "Chỉ có thống nhất",
                "Chỉ có chủ quyền",
                "Chỉ có toàn vẹn lãnh thổ"
            ],
            correct: 0,
            piece: 9
        },
        {
            id: 43,
            question: "Hồ Chí Minh quan niệm sự đoàn kết giữa các nước xã hội chủ nghĩa có ý nghĩa gì?",
            options: [
                "Quan trọng bậc nhất",
                "Quan trọng thứ hai",
                "Không quan trọng",
                "Tùy từng trường hợp"
            ],
            correct: 0,
            piece: 9
        },
        {
            id: 44,
            question: "Theo Hồ Chí Minh, chủ nghĩa cá nhân sản sinh ra những 'bệnh' gì?",
            options: [
                "Bệnh tham lam, kiêu ngạo, háo danh, vô tổ chức, vô kỷ luật",
                "Bệnh thể chất",
                "Bệnh tinh thần",
                "Không có bệnh gì"
            ],
            correct: 0,
            piece: 9
        },
        {
            id: 45,
            question: "Hồ Chí Minh khẳng định chủ nghĩa xã hội sẽ là gì cho các quốc gia mới giành độc lập?",
            options: [
                "Một tấm gương cho các quốc gia trên thế giới",
                "Một mối đe dọa",
                "Một đối thủ",
                "Không liên quan"
            ],
            correct: 0,
            piece: 9
        },
        // Mảnh 10
        {
            id: 46,
            question: "Theo Hồ Chí Minh, thời kỳ quá độ là thời kỳ cải biến như thế nào?",
            options: [
                "Xã hội cũ thành xã hội mới hoàn toàn chưa từng có trong lịch sử dân tộc",
                "Xã hội cũ thành xã hội tư bản",
                "Xã hội cũ thành xã hội phong kiến",
                "Xã hội cũ thành xã hội thuộc địa"
            ],
            correct: 0,
            piece: 10
        },
        {
            id: 47,
            question: "Hồ Chí Minh nhấn mạnh phải bồi dưỡng, giáo dục để nhân dân có gì?",
            options: [
                "Tri thức và năng lực làm chủ chế độ xã hội",
                "Chỉ có tri thức",
                "Chỉ có năng lực",
                "Không cần gì"
            ],
            correct: 0,
            piece: 10
        },
        {
            id: 48,
            question: "Theo Hồ Chí Minh, chủ nghĩa xã hội phải bảo đảm phúc lợi xã hội cho ai?",
            options: [
                "Người già, trẻ em và những người còn khó khăn trong cuộc sống",
                "Chỉ cho người già",
                "Chỉ cho trẻ em",
                "Chỉ cho người khó khăn"
            ],
            correct: 0,
            piece: 10
        },
        {
            id: 49,
            question: "Hồ Chí Minh khẳng định chủ nghĩa xã hội là một xã hội như thế nào về quan hệ quốc tế?",
            options: [
                "Hòa bình hữu nghị, làm bạn với tất cả các nước dân chủ trên thế giới",
                "Đóng cửa với thế giới",
                "Chỉ hợp tác với một số nước",
                "Thù địch với các nước khác"
            ],
            correct: 0,
            piece: 10
        },
        {
            id: 50,
            question: "Theo Hồ Chí Minh, trong thời kỳ quá độ phải thay đổi triệt để điều gì?",
            options: [
                "Những nếp sống, thói quen, ý nghĩ và thành kiến có gốc rễ sâu xa hàng ngàn năm",
                "Chỉ thay đổi nếp sống",
                "Chỉ thay đổi thói quen",
                "Không cần thay đổi gì"
            ],
            correct: 0,
            piece: 10
        },
        // Mảnh 11
        {
            id: 51,
            question: "Hồ Chí Minh khẳng định cuộc cách mạng của giai cấp công nhân chỉ có thể đạt được thành tựu trên cơ sở gì?",
            options: [
                "Trung thành sắt đá với những nguyên tắc của chủ nghĩa Mác – Lênin",
                "Trung thành với chủ nghĩa tư bản",
                "Trung thành với chủ nghĩa dân tộc",
                "Không cần trung thành với gì"
            ],
            correct: 0,
            piece: 11
        },
        {
            id: 52,
            question: "Theo Hồ Chí Minh, đại đoàn kết dân tộc là vấn đề có ý nghĩa gì?",
            options: [
                "Có ý nghĩa chiến lược, quyết định sự thành công của cách mạng",
                "Có ý nghĩa tạm thời",
                "Không quan trọng",
                "Tùy từng trường hợp"
            ],
            correct: 0,
            piece: 11
        },
        {
            id: 53,
            question: "Hồ Chí Minh khẳng định đoàn kết quốc tế là để làm gì?",
            options: [
                "Tạo ra sức mạnh to lớn cho cách mạng và góp phần cho hòa bình, độc lập, dân chủ",
                "Gây chia rẽ",
                "Tạo xung đột",
                "Không có mục đích"
            ],
            correct: 0,
            piece: 11
        },
        {
            id: 54,
            question: "Theo Hồ Chí Minh, trong cách mạng xã hội chủ nghĩa phải làm gì với vai trò lãnh đạo của Đảng?",
            options: [
                "Càng phải củng cố, tăng cường vai trò lãnh đạo của Đảng",
                "Giảm vai trò lãnh đạo",
                "Bỏ vai trò lãnh đạo",
                "Không quan tâm"
            ],
            correct: 0,
            piece: 11
        },
        {
            id: 55,
            question: "Hồ Chí Minh khẳng định nếu không có sự lãnh đạo của Đảng thì điều gì sẽ xảy ra?",
            options: [
                "Cách mạng Việt Nam không thể đi theo con đường cách mạng vô sản",
                "Cách mạng sẽ thành công",
                "Không ảnh hưởng gì",
                "Cách mạng sẽ tự phát triển"
            ],
            correct: 0,
            piece: 11
        },
        // Mảnh 12
        {
            id: 56,
            question: "Theo Hồ Chí Minh, Cương lĩnh xây dựng đất nước phải 'nắm vững ngọn cờ' gì?",
            options: [
                "Độc lập dân tộc và chủ nghĩa xã hội – ngọn cờ quang vinh",
                "Chỉ có độc lập dân tộc",
                "Chỉ có chủ nghĩa xã hội",
                "Ngọn cờ tự do"
            ],
            correct: 0,
            piece: 12
        },
        {
            id: 57,
            question: "Hồ Chí Minh khẳng định tiến tới chủ nghĩa xã hội là quá trình như thế nào?",
            options: [
                "Hợp quy luật, phù hợp với khát vọng của nhân dân Việt Nam",
                "Không hợp quy luật",
                "Trái với khát vọng",
                "Tùy từng giai đoạn"
            ],
            correct: 0,
            piece: 12
        },
        {
            id: 58,
            question: "Theo Hồ Chí Minh, phát huy sức mạnh dân chủ xã hội chủ nghĩa là phát huy điều gì?",
            options: [
                "Sức mạnh bản chất ưu việt của chế độ xã hội xã hội chủ nghĩa",
                "Sức mạnh cá nhân",
                "Sức mạnh tập thể",
                "Sức mạnh quốc gia"
            ],
            correct: 0,
            piece: 12
        },
        {
            id: 59,
            question: "Hồ Chí Minh khẳng định tất cả quyền lực nhà nước thuộc về ai?",
            options: [
                "Thuộc về nhân dân",
                "Thuộc về Đảng",
                "Thuộc về Nhà nước",
                "Thuộc về cá nhân"
            ],
            correct: 0,
            piece: 12
        },
        {
            id: 60,
            question: "Theo Hồ Chí Minh, xây dựng Đảng là nhiệm vụ gì trong sự nghiệp đổi mới?",
            options: [
                "Nhiệm vụ then chốt",
                "Nhiệm vụ phụ",
                "Nhiệm vụ tạm thời",
                "Không phải nhiệm vụ"
            ],
            correct: 0,
            piece: 12
        }
    ]
    
    return [...questions, ...additionalQuestions]
}

// Lấy tất cả câu hỏi
const allQuestions = generateMoreQuestions()

// Game State
let gameState = {
    currentPiece: 1,
    currentQuestionIndex: 0,
    correctAnswers: 0,
    piecesCollected: [],
    totalQuestions: 0,
    totalCorrect: 0
}

// Load game state from localStorage
function loadGameState() {
    const saved = localStorage.getItem('hcmGameState')
    if (saved) {
        gameState = JSON.parse(saved)
    }
}

// Save game state to localStorage
function saveGameState() {
    localStorage.setItem('hcmGameState', JSON.stringify(gameState))
}

// Get questions for current piece
function getQuestionsForPiece(pieceNumber) {
    return allQuestions.filter(q => q.piece === pieceNumber)
}

// Initialize game
function initGame() {
    loadGameState()
    renderGame()
}

// Render game UI
function renderGame() {
    const gameContainer = document.getElementById('game-container')
    if (!gameContainer) return

    const pieceNumber = gameState.currentPiece
    const questionsForPiece = getQuestionsForPiece(pieceNumber)
    const currentQuestion = questionsForPiece[gameState.currentQuestionIndex]

    if (!currentQuestion) {
        // Đã hoàn thành mảnh này
        if (gameState.correctAnswers >= 5) {
            collectPiece(pieceNumber)
        } else {
            // Reset và thử lại
            gameState.correctAnswers = 0
            gameState.currentQuestionIndex = 0
            saveGameState()
            renderGame()
            return
        }
    }

    if (gameState.piecesCollected.length >= 12) {
        showCompletePuzzle()
        return
    }

    gameContainer.innerHTML = `
        <div class="game-header">
            <h2>🎮 Game: Thu Thập Mảnh Ghép</h2>
            <div class="game-progress">
                <div class="progress-info">
                    <span>Mảnh: ${pieceNumber}/12</span>
                    <span>Đúng: ${gameState.correctAnswers}/5</span>
                    <span>Đã thu: ${gameState.piecesCollected.length}/12</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${(gameState.piecesCollected.length / 12) * 100}%"></div>
                </div>
            </div>
        </div>

        <div class="question-container">
            <div class="question-number">
                Câu ${gameState.currentQuestionIndex + 1}/5 - Mảnh ${pieceNumber}
            </div>
            <h3 class="question-text">${currentQuestion.question}</h3>
            <div class="options-container">
                ${currentQuestion.options.map((option, index) => `
                    <button class="option-btn" data-index="${index}">
                        ${option}
                    </button>
                `).join('')}
            </div>
        </div>

        <div class="pieces-grid">
${Array.from({ length: 12 }, (_, i) => {
    const pieceNum = i + 1
    const collected = gameState.piecesCollected.includes(pieceNum)

    const index = pieceNum - 1
    const col = index % 4
    const row = Math.floor(index / 4)

    return `
        <div 
            class="piece-slot ${collected ? 'collected' : 'locked'}"
            data-piece="${pieceNum}"
            style="
                ${collected ? `
                    background-image: url('/HoChiMinh5.jpeg');
                    background-size: 400% 300%;
                    background-position: calc(${col} * -100%) calc(${row} * -100%);
                ` : ''}
            "
        >
            ${!collected ? `<span class="piece-number">🔒</span>` : ''}
        </div>
    `
}).join('')}
</div>


    `

    // Add event listeners
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedIndex = parseInt(e.target.dataset.index)
            checkAnswer(currentQuestion, selectedIndex)
        })
    })
}

// Check answer
function checkAnswer(question, selectedIndex) {
    const isCorrect = selectedIndex === question.correct
    
    // Disable all buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true
        if (parseInt(btn.dataset.index) === question.correct) {
            btn.classList.add('correct')
        } else if (parseInt(btn.dataset.index) === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect')
        }
    })

    gameState.totalQuestions++
    
    if (isCorrect) {
        gameState.correctAnswers++
        gameState.totalCorrect++
        showFeedback('Đúng rồi! 🎉', 'success')
    } else {
        showFeedback('Sai rồi! 😔', 'error')
    }

    saveGameState()

    // Next question after delay
    setTimeout(() => {
        if (gameState.correctAnswers >= 5) {
            collectPiece(gameState.currentPiece)
        } else {
            gameState.currentQuestionIndex++
            renderGame()
        }
    }, 2000)
}

// Collect piece
function collectPiece(pieceNumber) {
    if (!gameState.piecesCollected.includes(pieceNumber)) {
        gameState.piecesCollected.push(pieceNumber)
        gameState.piecesCollected.sort((a, b) => a - b)
    }

    gameState.correctAnswers = 0
    gameState.currentQuestionIndex = 0
    
    if (gameState.piecesCollected.length < 12) {
        // Find next piece to collect
        for (let i = 1; i <= 12; i++) {
            if (!gameState.piecesCollected.includes(i)) {
                gameState.currentPiece = i
                break
            }
        }
    }

    saveGameState()
    
    showFeedback(`Bạn đã thu thập mảnh ${pieceNumber}! 🎊`, 'success')
    
    // Update piece display immediately with puzzle piece
    setTimeout(() => {
        const pieceSlot = document.querySelector(`.piece-slot[data-piece="${pieceNumber}"]`)
        if (pieceSlot) {
            const row = Math.floor((pieceNumber - 1) / 4)
            const col = (pieceNumber - 1) % 4
            const bgXPercent = col === 0 ? '0%' : `${col * -25}%`
            const bgYPercent = row === 0 ? '0%' : `${row * -33.33}%`
            pieceSlot.classList.add('collected')
            pieceSlot.style.backgroundImage = "url('/HoChiMinh5.jpeg')"
            pieceSlot.style.backgroundSize = '400% 300%'
            pieceSlot.style.backgroundPosition = `${bgXPercent} ${bgYPercent}`
            const pieceNumberEl = pieceSlot.querySelector('.piece-number')
            if (pieceNumberEl) {
                pieceNumberEl.style.display = 'none'
            }
        }
    }, 500)
    
    setTimeout(() => {
        if (gameState.piecesCollected.length >= 12) {
            showCompletePuzzle()
        } else {
            renderGame()
        }
    }, 2000)
}

// Show complete puzzle
function showCompletePuzzle() {
    const gameContainer = document.getElementById('game-container')
    gameContainer.innerHTML = `
        <div class="game-complete">
            <h2>🎉 Chúc Mừng! 🎉</h2>
            <p>Bạn đã thu thập đủ 12 mảnh ghép!</p>
            <div class="puzzle-complete">
                <img src="/HoChiMinh5.jpeg" alt="Bức tranh hoàn chỉnh" class="complete-image">
            </div>
            <div class="game-stats">
                <p>Tổng số câu hỏi: ${gameState.totalQuestions}</p>
                <p>Số câu đúng: ${gameState.totalCorrect}</p>
                <p>Tỷ lệ đúng: ${gameState.totalQuestions > 0 ? Math.round((gameState.totalCorrect / gameState.totalQuestions) * 100) : 0}%</p>
            </div>
            <button class="reset-game-btn" onclick="resetGame()">Chơi lại</button>
        </div>
    `
}

// Show feedback
function showFeedback(message, type) {
    const feedback = document.createElement('div')
    feedback.className = `feedback ${type}`
    feedback.textContent = message
    document.body.appendChild(feedback)
    
    setTimeout(() => {
        feedback.classList.add('show')
    }, 10)
    
    setTimeout(() => {
        feedback.classList.remove('show')
        setTimeout(() => feedback.remove(), 300)
    }, 2000)
}

// Reset game
function resetGame() {
    gameState = {
        currentPiece: 1,
        currentQuestionIndex: 0,
        correctAnswers: 0,
        piecesCollected: [],
        totalQuestions: 0,
        totalCorrect: 0
    }
    saveGameState()
    renderGame()
}

// Make functions available globally
window.initGameModule = initGame
window.resetGame = resetGame

// Auto-initialize when DOM is ready and game container exists
function tryInitGame() {
    const gameContainer = document.getElementById('game-container')
    if (gameContainer) {
        initGame()
    } else {
        // Retry after a short delay
        setTimeout(tryInitGame, 100)
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(tryInitGame, 300)
    })
} else {
    setTimeout(tryInitGame, 300)
}
