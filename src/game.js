// Game: Thu thập mảnh ghép bằng cách trả lời câu hỏi
// 12 mảnh = 1 bức tranh hoàn chỉnh
// 1 mảnh = 5 câu hỏi đúng

import { createElement } from 'lucide'
import { Lock, Gamepad2, PartyPopper, Frown, RotateCcw } from 'lucide'

// Helper function to create Lucide icon SVG as HTML string
function createIconHTML(iconData, size = 24, color = 'currentColor', strokeWidth = 2) {
    try {
        // Create SVG element using lucide's createElement
        const svgElement = createElement(iconData)
        
        if (svgElement) {
            // Set attributes on the SVG
            svgElement.setAttribute('width', size.toString())
            svgElement.setAttribute('height', size.toString())
            svgElement.setAttribute('viewBox', '0 0 24 24')
            svgElement.setAttribute('fill', 'none')
            svgElement.setAttribute('stroke', color)
            svgElement.setAttribute('stroke-width', strokeWidth.toString())
            svgElement.setAttribute('stroke-linecap', 'round')
            svgElement.setAttribute('stroke-linejoin', 'round')
            
            return svgElement.outerHTML
        }
        
        return ''
    } catch (e) {
        console.error('Error creating icon:', e)
        return ''
    }
}

// Câu hỏi về Tư tưởng Hồ Chí Minh
const questions = [
    {
        id: 1,
        question: "Theo Hồ Chí Minh, đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam là gì?",
        options: [
            "Từ nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không trải qua giai đoạn phát triển tư bản chủ nghĩa",
            "Từ nước công nghiệp phát triển tiến lên chủ nghĩa xã hội qua giai đoạn quá độ ngắn",
            "Từ nước phong kiến tiến lên chủ nghĩa xã hội thông qua phát triển công nghiệp hiện đại",
            "Từ nước thuộc địa tiến lên chủ nghĩa xã hội sau khi giành độc lập dân tộc hoàn toàn"
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
            "Phát triển nền kinh tế thị trường tự do với sự điều tiết tối thiểu của nhà nước",
            "Xây dựng nền kinh tế tự cung tự cấp, hạn chế phụ thuộc vào thị trường bên ngoài",
            "Phát triển nền kinh tế dịch vụ làm động lực chính, ưu tiên các ngành phi sản xuất"
        ],
        correct: 0,
        piece: 1
    },
    {
        id: 4,
        question: "Nguyên tắc đầu tiên trong xây dựng chủ nghĩa xã hội theo Hồ Chí Minh là gì?",
        options: [
            "Mọi tư tưởng, hành động phải được thực hiện trên nền tảng chủ nghĩa Mác – Lênin",
            "Giữ vững độc lập dân tộc là nguyên tắc hàng đầu trong mọi hoạt động",
            "Đoàn kết quốc tế là nguyên tắc cơ bản để phát triển và hợp tác",
            "Xây đi đôi với chống là phương châm quan trọng trong mọi lĩnh vực"
        ],
        correct: 0,
        piece: 1
    },
    {
        id: 5,
        question: "Theo Hồ Chí Minh, độc lập dân tộc có mối quan hệ như thế nào với chủ nghĩa xã hội?",
        options: [
            "Độc lập dân tộc là tiền đề, chủ nghĩa xã hội là đảm bảo vững chắc",
            "Chủ nghĩa xã hội là tiền đề, độc lập dân tộc là đảm bảo cho sự phát triển",
            "Hai mục tiêu độc lập với nhau, không có mối quan hệ tương hỗ",
            "Chỉ cần độc lập dân tộc là đủ, không cần thiết phải xây dựng chủ nghĩa xã hội"
        ],
        correct: 0,
        piece: 1
    },
    {
        id: 6,
        question: "Về văn hóa, Hồ Chí Minh yêu cầu phải làm gì?",
        options: [
            "Triệt để tẩy trừ mọi di tích thuộc địa và ảnh hưởng nô dịch, phát triển truyền thống tốt đẹp",
            "Loại bỏ hoàn toàn văn hóa phương Tây, không tiếp thu bất kỳ yếu tố nào từ đó",
            "Chỉ giữ lại văn hóa truyền thống, từ chối mọi ảnh hưởng văn hóa từ bên ngoài",
            "Chỉ tiếp thu văn hóa hiện đại, bỏ qua các giá trị truyền thống của dân tộc"
        ],
        correct: 0,
        piece: 2
    },
    {
        id: 7,
        question: "Hồ Chí Minh quan niệm chủ nghĩa Mác – Lênin là gì?",
        options: [
            "Khoa học về cách mạng của quần chúng bị áp bức và bóc lột",
            "Lý thuyết về kinh tế và phát triển xã hội theo hướng hiện đại",
            "Học thuyết về chính trị và quản lý nhà nước trong thời đại mới",
            "Triết học về đạo đức và lối sống của con người trong xã hội hiện đại"
        ],
        correct: 0,
        piece: 2
    },
    {
        id: 8,
        question: "Theo Hồ Chí Minh, chủ nghĩa xã hội trước hết là gì?",
        options: [
            "Một chế độ dân chủ, do nhân dân làm chủ, dưới sự lãnh đạo của Đảng",
            "Một chế độ tập trung quyền lực vào tay một nhóm người nhất định",
            "Một chế độ tự do cá nhân tuyệt đối, không có sự can thiệp nào",
            "Một chế độ quân chủ với người đứng đầu có quyền lực tối cao"
        ],
        correct: 0,
        piece: 2
    },
    {
        id: 9,
        question: "Điều kiện đầu tiên để bảo đảm độc lập dân tộc gắn liền với chủ nghĩa xã hội là gì?",
        options: [
            "Bảo đảm vai trò lãnh đạo tuyệt đối của Đảng Cộng sản",
            "Phát triển kinh tế mạnh là điều kiện quan trọng nhất để thành công",
            "Có quân đội hùng mạnh là yếu tố quyết định mọi thắng lợi",
            "Có nền văn hóa phát triển là cơ sở vững chắc để đảm bảo độc lập"
        ],
        correct: 0,
        piece: 2
    },
    {
        id: 10,
        question: "Hồ Chí Minh khẳng định cách mạng Việt Nam là gì?",
        options: [
            "Một bộ phận của lực lượng hòa bình, dân chủ, xã hội chủ nghĩa trên thế giới",
            "Một cách mạng độc lập hoàn toàn, không liên quan đến phong trào quốc tế",
            "Một cách mạng tư sản với mục tiêu phát triển chủ nghĩa tư bản",
            "Một cách mạng nông dân chỉ phục vụ lợi ích của giai cấp nông dân"
        ],
        correct: 0,
        piece: 2
    },
    {
        id: 11,
        question: "Theo Hồ Chí Minh, về quan hệ xã hội phải xây dựng điều gì?",
        options: [
            "Xã hội dân chủ, công bằng, văn minh, tôn trọng con người",
            "Xã hội bình đẳng tuyệt đối về mọi mặt, không có sự phân biệt nào",
            "Xã hội tự do cá nhân hoàn toàn, không có bất kỳ ràng buộc nào",
            "Xã hội tập thể hóa toàn bộ, không có quyền sở hữu tư nhân"
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
            "Dân làm, dân kiểm tra, dân quyết định là phương châm hoạt động",
            "Dân biết, dân quyết định, dân thực hiện là nguyên tắc cơ bản",
            "Dân bàn, dân quyết định, dân kiểm tra là phương thức thực hiện"
        ],
        correct: 0,
        piece: 3
    },
    {
        id: 14,
        question: "Mục tiêu cuối cùng mà Hồ Chí Minh đặt ra cho đất nước là gì?",
        options: [
            "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
            "Nước mạnh, dân giàu, hiện đại là mục tiêu chính cần đạt được",
            "Dân chủ, tự do, hạnh phúc là những giá trị quan trọng nhất",
            "Phát triển, thịnh vượng, bền vững là mục tiêu hàng đầu"
        ],
        correct: 0,
        piece: 3
    },
    {
        id: 15,
        question: "Hồ Chí Minh đã nói: 'Ta có thể đi con đường khác để tiến lên chủ nghĩa xã hội' nhằm nhấn mạnh điều gì?",
        options: [
            "Vận dụng sáng tạo, không áp đặt máy móc kinh nghiệm của các nước khác",
            "Từ chối học tập kinh nghiệm quốc tế, chỉ dựa vào nội lực trong nước",
            "Đi theo con đường riêng hoàn toàn, không tham khảo mô hình nào khác",
            "Không cần học hỏi từ ai, tự mình xây dựng mọi thứ từ đầu"
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
            "Đơn giản và nhanh chóng, không cần nhiều thời gian để hoàn thành",
            "Tự nhiên và dễ dàng, không gặp phải trở ngại nào trong quá trình",
            "Ngắn gọn và đơn giản, có thể hoàn thành trong thời gian ngắn"
        ],
        correct: 0,
        piece: 4
    },
    {
        id: 17,
        question: "Hồ Chí Minh xác định nhiệm vụ về chính trị trong thời kỳ quá độ là gì?",
        options: [
            "Xây dựng chế độ dân chủ, chống chủ nghĩa cá nhân",
            "Xây dựng chế độ độc tài với quyền lực tập trung vào một người",
            "Xây dựng chế độ quân chủ với người đứng đầu có quyền lực tối cao",
            "Xây dựng chế độ tư bản với nền kinh tế thị trường tự do hoàn toàn"
        ],
        correct: 0,
        piece: 4
    },
    {
        id: 18,
        question: "Theo Hồ Chí Minh, chủ nghĩa xã hội là một xã hội như thế nào?",
        options: [
            "Không còn chế độ áp bức bóc lột, bình đẳng, công bằng",
            "Có chế độ áp bức nhưng công bằng trong cách phân phối của cải",
            "Tự do cá nhân tuyệt đối, không có bất kỳ ràng buộc hay quy định nào",
            "Tập thể hóa hoàn toàn, không có quyền sở hữu tư nhân về tài sản"
        ],
        correct: 0,
        piece: 4
    },
    {
        id: 19,
        question: "Hồ Chí Minh khẳng định chỉ có gì mới giải phóng được các dân tộc bị áp bức?",
        options: [
            "Chủ nghĩa xã hội, chủ nghĩa cộng sản",
            "Chủ nghĩa tư bản với nền kinh tế thị trường tự do",
            "Chủ nghĩa dân tộc với tinh thần yêu nước mạnh mẽ",
            "Chủ nghĩa tự do với quyền tự quyết của mỗi cá nhân"
        ],
        correct: 0,
        piece: 4
    },
    {
        id: 20,
        question: "Điều kiện thứ hai để bảo đảm độc lập dân tộc gắn liền với chủ nghĩa xã hội là gì?",
        options: [
            "Củng cố và tăng cường khối đại đoàn kết dân tộc",
            "Phát triển kinh tế mạnh mẽ là điều kiện quan trọng nhất",
            "Xây dựng quân đội hùng mạnh là yếu tố quyết định mọi thành công",
            "Phát triển văn hóa tiên tiến là cơ sở để đảm bảo độc lập dân tộc"
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
                "Hiện đại và quốc tế là tính chất quan trọng nhất",
                "Truyền thống và bảo thủ là nền tảng của văn hóa",
                "Tây phương và hiện đại là xu hướng phát triển chủ đạo"
            ],
            correct: 0,
            piece: 5
        },
        {
            id: 22,
            question: "Hồ Chí Minh nhấn mạnh phải 'cụ thể hóa chủ nghĩa Mác – Lênin' như thế nào?",
            options: [
                "Cho thích hợp với điều kiện hoàn cảnh từng lúc và từng nơi",
                "Áp dụng nguyên văn không cần điều chỉnh cho phù hợp",
                "Bỏ qua hoàn toàn những nguyên lý cơ bản của chủ nghĩa",
                "Chỉ học lý thuyết mà không cần vận dụng vào thực tiễn"
            ],
            correct: 0,
            piece: 5
        },
        {
            id: 23,
            question: "Theo Hồ Chí Minh, độc lập dân tộc bao gồm những nội dung gì?",
            options: [
                "Cả nội dung dân tộc và dân chủ, gắn liền với tự do, cơm no, áo ấm",
                "Chỉ có độc lập chính trị là nội dung quan trọng nhất",
                "Chỉ có độc lập kinh tế là yếu tố quyết định mọi thành công",
                "Chỉ có độc lập văn hóa là cơ sở để đảm bảo độc lập dân tộc"
            ],
            correct: 0,
            piece: 5
        },
        {
            id: 24,
            question: "Hồ Chí Minh quan niệm cách mạng dân tộc dân chủ nhân dân có tính chất gì?",
            options: [
                "Mang tính định hướng xã hội chủ nghĩa ngay từ đầu",
                "Mang tính tư sản với mục tiêu phát triển chủ nghĩa tư bản",
                "Mang tính phong kiến với hệ thống quyền lực tập trung",
                "Không có định hướng rõ ràng, phát triển tự phát"
            ],
            correct: 0,
            piece: 5
        },
        {
            id: 25,
            question: "Theo Hồ Chí Minh, chủ nghĩa xã hội sẽ tạo nền tảng như thế nào cho độc lập dân tộc?",
            options: [
                "Nền tảng vững chắc để bảo vệ nền độc lập dân tộc trường tồn",
                "Nền tảng tạm thời chỉ có giá trị trong giai đoạn ngắn",
                "Không liên quan đến độc lập, là hai vấn đề tách biệt",
                "Chỉ là mục tiêu phụ không có vai trò quan trọng"
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
                "Cải tạo là nhiệm vụ chủ chốt và quan trọng nhất",
                "Cả hai đều quan trọng như nhau và không thể tách rời",
                "Chỉ cần cải tạo là đủ, không cần xây dựng thêm"
            ],
            correct: 0,
            piece: 6
        },
        {
            id: 27,
            question: "Hồ Chí Minh khẳng định cách mạng giải phóng dân tộc Việt Nam là con đường gì?",
            options: [
                "Con đường cách mạng vô sản",
                "Con đường cách mạng tư sản với mục tiêu phát triển tư bản",
                "Con đường cách mạng nông dân phục vụ lợi ích giai cấp nông dân",
                "Con đường cách mạng dân chủ với nền tảng dân chủ tư sản"
            ],
            correct: 0,
            piece: 6
        },
        {
            id: 28,
            question: "Theo Hồ Chí Minh, chủ nghĩa xã hội là một xã hội có đặc điểm gì về kinh tế?",
            options: [
                "Có nền kinh tế phát triển cao, gắn liền với khoa học kỹ thuật",
                "Có nền kinh tế tự cung tự cấp, không phụ thuộc bên ngoài",
                "Có nền kinh tế thị trường tự do không có can thiệp nhà nước",
                "Có nền kinh tế tập trung với quyền lực trong tay một nhóm"
            ],
            correct: 0,
            piece: 6
        },
        {
            id: 29,
            question: "Hồ Chí Minh đã căn dặn về đối với kẻ địch phải làm gì?",
            options: [
                "Luôn tỉnh táo, giữ vững lập trường, quyết không mất cảnh giác",
                "Tin tưởng hoàn toàn vào mọi lời hứa và cam kết của kẻ địch",
                "Thỏa hiệp và nhượng bộ để tránh xung đột đạt được hòa bình",
                "Bỏ qua mọi thứ, không cần quan tâm đến hành động của kẻ địch"
            ],
            correct: 0,
            piece: 6
        },
        {
            id: 30,
            question: "Theo Hồ Chí Minh, đối với tàn dư của xã hội cũ phải làm gì?",
            options: [
                "Thay đổi triệt để những nếp sống, thói quen, ý nghĩ và thành kiến có gốc rễ sâu xa",
                "Giữ nguyên mọi thứ như cũ, không cần thay đổi gì",
                "Chỉ thay đổi một phần nhỏ, giữ lại phần lớn giá trị cũ",
                "Bỏ qua hoàn toàn, không cần quan tâm đến tàn dư này"
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
                "Xây dựng đất nước phồn vinh và phát triển toàn diện mọi mặt",
                "Phát triển kinh tế mạnh mẽ là mục tiêu quan trọng nhất và duy nhất",
                "Mở rộng lãnh thổ và gia tăng ảnh hưởng trên trường quốc tế"
            ],
            correct: 0,
            piece: 7
        },
        {
            id: 32,
            question: "Theo Hồ Chí Minh, chủ nghĩa xã hội là một xã hội có đặc điểm gì về phân phối?",
            options: [
                "Làm nhiều hưởng nhiều, làm ít hưởng ít, không làm không hưởng",
                "Phân phối bình đẳng tuyệt đối cho mọi người không phân biệt đóng góp",
                "Phân phối theo nhu cầu của từng cá nhân không cần quan tâm đến lao động",
                "Phân phối tự do theo quy luật thị trường không có sự can thiệp nào"
            ],
            correct: 0,
            piece: 7
        },
        {
            id: 33,
            question: "Hồ Chí Minh nhấn mạnh phải học tập kinh nghiệm của các nước anh em như thế nào?",
            options: [
                "Vận dụng sáng tạo, không áp đặt máy móc",
                "Áp dụng nguyên văn không cần điều chỉnh gì cho phù hợp với hoàn cảnh",
                "Bỏ qua hoàn toàn những kinh nghiệm này, chỉ dựa vào nội lực trong nước",
                "Chỉ học một phần nhỏ, không cần nghiên cứu kỹ lưỡng toàn bộ kinh nghiệm"
            ],
            correct: 0,
            piece: 7
        },
        {
            id: 34,
            question: "Theo Hồ Chí Minh, cách mạng dân tộc dân chủ nhân dân càng sâu sắc thì càng tạo ra điều gì?",
            options: [
                "Tiền đề thuận lợi, sức mạnh to lớn cho cách mạng xã hội chủ nghĩa",
                "Khó khăn cho cách mạng tiếp theo và làm chậm quá trình phát triển",
                "Không ảnh hưởng gì đến các giai đoạn cách mạng sau này",
                "Cản trở cách mạng và tạo ra những rào cản không thể vượt qua"
            ],
            correct: 0,
            piece: 7
        },
        {
            id: 35,
            question: "Hồ Chí Minh quan niệm chủ nghĩa Mác – Lênin là khoa học về gì?",
            options: [
                "Cách mạng của quần chúng bị áp bức và bóc lột",
                "Kinh tế và chính trị là những lĩnh vực quan trọng nhất và duy nhất",
                "Văn hóa và xã hội là nền tảng cơ bản để phát triển đất nước",
                "Khoa học và kỹ thuật là động lực chính thúc đẩy sự phát triển"
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
                "Gây ra chiến tranh và xung đột giữa các quốc gia trên thế giới",
                "Không ảnh hưởng đến hòa bình, là vấn đề hoàn toàn tách biệt",
                "Chỉ quan tâm đến lợi ích riêng của mình, không quan tâm đến quốc tế"
            ],
            correct: 0,
            piece: 8
        },
        {
            id: 37,
            question: "Hồ Chí Minh khẳng định phải 'học lập trường, quan điểm và phương pháp' của gì?",
            options: [
                "Chủ nghĩa Mác – Lênin",
                "Chủ nghĩa tư bản với những nguyên lý về thị trường tự do",
                "Chủ nghĩa dân tộc với tinh thần yêu nước và tự hào dân tộc",
                "Chủ nghĩa tự do với quyền tự quyết và tự do cá nhân tuyệt đối"
            ],
            correct: 0,
            piece: 8
        },
        {
            id: 38,
            question: "Theo Hồ Chí Minh, về quan hệ xã hội phải chú ý điều gì?",
            options: [
                "Xem xét lợi ích cá nhân đúng đắn và bảo đảm cho nó được thỏa mãn",
                "Bỏ qua lợi ích cá nhân hoàn toàn, chỉ quan tâm đến lợi ích tập thể",
                "Chỉ quan tâm lợi ích tập thể, không cần xem xét lợi ích cá nhân",
                "Tự do cá nhân tuyệt đối không có bất kỳ ràng buộc hay quy định nào"
            ],
            correct: 0,
            piece: 8
        },
        {
            id: 39,
            question: "Hồ Chí Minh đã nói 'Ta không thể giống Liên Xô' vì lý do gì?",
            options: [
                "Liên Xô có phong tục tập quán khác, có lịch sử địa lý khác",
                "Không muốn học hỏi kinh nghiệm từ bất kỳ quốc gia nào khác",
                "Từ chối hợp tác với các nước xã hội chủ nghĩa trên thế giới",
                "Muốn độc lập hoàn toàn không phụ thuộc vào bất kỳ ai hay quốc gia nào"
            ],
            correct: 0,
            piece: 8
        },
        {
            id: 40,
            question: "Theo Hồ Chí Minh, chủ nghĩa xã hội là một xã hội như thế nào về đạo đức và văn hóa?",
            options: [
                "Có sự phát triển cao đạo đức và văn hóa",
                "Không quan tâm đến đạo đức, chỉ tập trung vào phát triển kinh tế",
                "Chỉ phát triển văn hóa, không cần quan tâm đến các giá trị đạo đức",
                "Bỏ qua văn hóa truyền thống, chỉ tiếp thu văn hóa hiện đại từ phương Tây"
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
                "Làm cách mạng tư sản với mục tiêu phát triển chủ nghĩa tư bản",
                "Làm cách mạng nông dân chỉ phục vụ lợi ích của giai cấp nông dân",
                "Làm cách mạng công nghiệp để phát triển nền kinh tế công nghiệp hiện đại"
            ],
            correct: 0,
            piece: 9
        },
        {
            id: 42,
            question: "Theo Hồ Chí Minh, độc lập dân tộc phải gắn liền với điều gì?",
            options: [
                "Thống nhất, chủ quyền và toàn vẹn lãnh thổ",
                "Chỉ có thống nhất là yếu tố quan trọng nhất và duy nhất",
                "Chỉ có chủ quyền là điều kiện cần thiết để đảm bảo độc lập",
                "Chỉ có toàn vẹn lãnh thổ là mục tiêu hàng đầu của dân tộc"
            ],
            correct: 0,
            piece: 9
        },
        {
            id: 43,
            question: "Hồ Chí Minh quan niệm sự đoàn kết giữa các nước xã hội chủ nghĩa có ý nghĩa gì?",
            options: [
                "Quan trọng bậc nhất",
                "Quan trọng thứ hai sau các vấn đề nội bộ của từng quốc gia",
                "Không quan trọng, không ảnh hưởng đến sự phát triển của đất nước",
                "Tùy từng trường hợp cụ thể, không có nguyên tắc chung nào áp dụng"
            ],
            correct: 0,
            piece: 9
        },
        {
            id: 44,
            question: "Theo Hồ Chí Minh, chủ nghĩa cá nhân sản sinh ra những 'bệnh' gì?",
            options: [
                "Bệnh tham lam, kiêu ngạo, háo danh, vô tổ chức, vô kỷ luật",
                "Bệnh thể chất về sức khỏe và thể lực của con người",
                "Bệnh tinh thần về tâm lý và tư tưởng của cá nhân",
                "Không có bệnh gì, là hiện tượng tự nhiên và bình thường"
            ],
            correct: 0,
            piece: 9
        },
        {
            id: 45,
            question: "Hồ Chí Minh khẳng định chủ nghĩa xã hội sẽ là gì cho các quốc gia mới giành độc lập?",
            options: [
                "Một tấm gương cho các quốc gia trên thế giới",
                "Một mối đe dọa đối với các quốc gia khác trên thế giới",
                "Một đối thủ cạnh tranh trong các lĩnh vực kinh tế và chính trị",
                "Không liên quan đến các quốc gia khác, chỉ phục vụ lợi ích riêng"
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
                "Xã hội cũ thành xã hội tư bản với nền kinh tế thị trường tự do",
                "Xã hội cũ thành xã hội phong kiến với hệ thống quyền lực tập trung",
                "Xã hội cũ thành xã hội thuộc địa phụ thuộc vào các nước khác"
            ],
            correct: 0,
            piece: 10
        },
        {
            id: 47,
            question: "Hồ Chí Minh nhấn mạnh phải bồi dưỡng, giáo dục để nhân dân có gì?",
            options: [
                "Tri thức và năng lực làm chủ chế độ xã hội",
                "Chỉ có tri thức là đủ, không cần phát triển năng lực thực hành",
                "Chỉ có năng lực là quan trọng, không cần học tập tri thức",
                "Không cần gì cả, để nhân dân tự phát triển theo khả năng tự nhiên"
            ],
            correct: 0,
            piece: 10
        },
        {
            id: 48,
            question: "Theo Hồ Chí Minh, chủ nghĩa xã hội phải bảo đảm phúc lợi xã hội cho ai?",
            options: [
                "Người già, trẻ em và những người còn khó khăn trong cuộc sống",
                "Chỉ cho người già là đối tượng cần được quan tâm và chăm sóc nhất",
                "Chỉ cho trẻ em là thế hệ tương lai cần được đầu tư và phát triển",
                "Chỉ cho người khó khăn là những người cần được hỗ trợ và giúp đỡ"
            ],
            correct: 0,
            piece: 10
        },
        {
            id: 49,
            question: "Hồ Chí Minh khẳng định chủ nghĩa xã hội là một xã hội như thế nào về quan hệ quốc tế?",
            options: [
                "Hòa bình hữu nghị, làm bạn với tất cả các nước dân chủ trên thế giới",
                "Đóng cửa với thế giới, không giao lưu hay hợp tác với bất kỳ quốc gia nào",
                "Chỉ hợp tác với một số nước nhất định, không mở rộng quan hệ",
                "Thù địch với các nước khác, không có quan hệ hữu nghị hay hợp tác"
            ],
            correct: 0,
            piece: 10
        },
        {
            id: 50,
            question: "Theo Hồ Chí Minh, trong thời kỳ quá độ phải thay đổi triệt để điều gì?",
            options: [
                "Những nếp sống, thói quen, ý nghĩ và thành kiến có gốc rễ sâu xa hàng ngàn năm",
                "Chỉ thay đổi nếp sống, không cần quan tâm đến các yếu tố khác",
                "Chỉ thay đổi thói quen, giữ nguyên các giá trị và tư tưởng cũ",
                "Không cần thay đổi gì cả, giữ nguyên mọi thứ như cũ"
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
                "Trung thành với chủ nghĩa tư bản và các nguyên lý của nền kinh tế thị trường",
                "Trung thành với chủ nghĩa dân tộc và tinh thần yêu nước mạnh mẽ",
                "Không cần trung thành với gì cả, tự do lựa chọn phương hướng phát triển"
            ],
            correct: 0,
            piece: 11
        },
        {
            id: 52,
            question: "Theo Hồ Chí Minh, đại đoàn kết dân tộc là vấn đề có ý nghĩa gì?",
            options: [
                "Có ý nghĩa chiến lược, quyết định sự thành công của cách mạng",
                "Có ý nghĩa tạm thời chỉ trong một giai đoạn ngắn của lịch sử",
                "Không quan trọng, không ảnh hưởng đến sự phát triển của đất nước",
                "Tùy từng trường hợp cụ thể, không có nguyên tắc chung nào áp dụng"
            ],
            correct: 0,
            piece: 11
        },
        {
            id: 53,
            question: "Hồ Chí Minh khẳng định đoàn kết quốc tế là để làm gì?",
            options: [
                "Tạo ra sức mạnh to lớn cho cách mạng và góp phần cho hòa bình, độc lập, dân chủ",
                "Gây chia rẽ giữa các quốc gia và tạo ra những mâu thuẫn không thể giải quyết",
                "Tạo xung đột và căng thẳng trong quan hệ giữa các nước trên thế giới",
                "Không có mục đích rõ ràng, chỉ là hoạt động hình thức không có ý nghĩa"
            ],
            correct: 0,
            piece: 11
        },
        {
            id: 54,
            question: "Theo Hồ Chí Minh, trong cách mạng xã hội chủ nghĩa phải làm gì với vai trò lãnh đạo của Đảng?",
            options: [
                "Càng phải củng cố, tăng cường vai trò lãnh đạo của Đảng",
                "Giảm vai trò lãnh đạo để tăng quyền tự quyết của các tổ chức khác",
                "Bỏ vai trò lãnh đạo hoàn toàn, để các lực lượng tự phát triển",
                "Không quan tâm đến vai trò lãnh đạo, để mọi thứ phát triển tự nhiên"
            ],
            correct: 0,
            piece: 11
        },
        {
            id: 55,
            question: "Hồ Chí Minh khẳng định nếu không có sự lãnh đạo của Đảng thì điều gì sẽ xảy ra?",
            options: [
                "Cách mạng Việt Nam không thể đi theo con đường cách mạng vô sản",
                "Cách mạng sẽ thành công một cách tự nhiên không cần sự lãnh đạo",
                "Không ảnh hưởng gì đến quá trình phát triển và thành công của cách mạng",
                "Cách mạng sẽ tự phát triển theo quy luật khách quan không cần can thiệp"
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
                "Chỉ có độc lập dân tộc là mục tiêu quan trọng nhất và duy nhất",
                "Chỉ có chủ nghĩa xã hội là lý tưởng cần theo đuổi trong mọi hoàn cảnh",
                "Ngọn cờ tự do với quyền tự quyết và tự do cá nhân tuyệt đối"
            ],
            correct: 0,
            piece: 12
        },
        {
            id: 57,
            question: "Hồ Chí Minh khẳng định tiến tới chủ nghĩa xã hội là quá trình như thế nào?",
            options: [
                "Hợp quy luật, phù hợp với khát vọng của nhân dân Việt Nam",
                "Không hợp quy luật, đi ngược lại với xu thế phát triển tự nhiên",
                "Trái với khát vọng của nhân dân, không phù hợp với nguyện vọng chung",
                "Tùy từng giai đoạn cụ thể, không có nguyên tắc chung nào áp dụng"
            ],
            correct: 0,
            piece: 12
        },
        {
            id: 58,
            question: "Theo Hồ Chí Minh, phát huy sức mạnh dân chủ xã hội chủ nghĩa là phát huy điều gì?",
            options: [
                "Sức mạnh bản chất ưu việt của chế độ xã hội xã hội chủ nghĩa",
                "Sức mạnh cá nhân với quyền tự quyết và tự do tuyệt đối của mỗi người",
                "Sức mạnh tập thể với sự đoàn kết và hợp tác giữa các thành viên",
                "Sức mạnh quốc gia với nền tảng là chủ quyền và độc lập dân tộc"
            ],
            correct: 0,
            piece: 12
        },
        {
            id: 59,
            question: "Hồ Chí Minh khẳng định tất cả quyền lực nhà nước thuộc về ai?",
            options: [
                "Thuộc về nhân dân",
                "Thuộc về Đảng là tổ chức lãnh đạo duy nhất và có quyền lực tuyệt đối",
                "Thuộc về Nhà nước là cơ quan quản lý và điều hành mọi hoạt động",
                "Thuộc về cá nhân với quyền tự quyết và tự do hoàn toàn"
            ],
            correct: 0,
            piece: 12
        },
        {
            id: 60,
            question: "Theo Hồ Chí Minh, xây dựng Đảng là nhiệm vụ gì trong sự nghiệp đổi mới?",
            options: [
                "Nhiệm vụ then chốt",
                "Nhiệm vụ phụ không quan trọng bằng các nhiệm vụ khác",
                "Nhiệm vụ tạm thời chỉ trong một giai đoạn ngắn của quá trình đổi mới",
                "Không phải nhiệm vụ, không cần quan tâm đến việc xây dựng Đảng"
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

// Shuffle array function (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}

// Randomize question options and update correct index
function randomizeQuestion(question) {
    // Store the correct answer text
    const correctAnswerText = question.options[question.correct]
    
    // Create array of option indices
    const indices = [0, 1, 2, 3]
    const shuffledIndices = shuffleArray(indices)
    
    // Shuffle options
    const shuffledOptions = shuffledIndices.map(idx => question.options[idx])
    
    // Find new correct index
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswerText)
    
    // Return new question object with shuffled options
    return {
        ...question,
        options: shuffledOptions,
        correct: newCorrectIndex
    }
}

// Get questions for current piece (with randomized options)
function getQuestionsForPiece(pieceNumber) {
    const questions = allQuestions.filter(q => q.piece === pieceNumber)
    // Randomize options for each question
    return questions.map(q => randomizeQuestion(q))
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
            <h2>${createIconHTML(Gamepad2, 24)} Game: Thu Thập Mảnh Ghép</h2>
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
            ${!collected ? `<span class="piece-number">${createIconHTML(Lock, 24)}</span>` : ''}
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
        showFeedback('Đúng rồi!', 'success')
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
    } else {
        showFeedback('Sai rồi!', 'error')
        saveGameState()

        // Stay on the same question, let user try again
        setTimeout(() => {
            renderGame()
        }, 2000)
    }
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
    
    // Show animated piece collection - piece appears in center then flies to position
    showAnimatedPieceCollection(pieceNumber)
}

// Show complete puzzle
function showCompletePuzzle() {
    const gameContainer = document.getElementById('game-container')
    gameContainer.innerHTML = `
        <div class="game-complete">
            <p>Bạn đã thu thập đủ 12 mảnh ghép!</p>
            <div class="puzzle-complete">
                <img src="/HoChiMinh5.jpeg" alt="Bức tranh hoàn chỉnh" class="complete-image">
            </div>
            <div class="game-stats">
                <p>Tổng số câu hỏi: ${gameState.totalQuestions}</p>
                <p>Số câu đúng: ${gameState.totalCorrect}</p>
                <p>Tỷ lệ đúng: ${gameState.totalQuestions > 0 ? Math.round((gameState.totalCorrect / gameState.totalQuestions) * 100) : 0}%</p>
            </div>
            <button class="reset-game-btn" onclick="resetGame()">${createIconHTML(RotateCcw, 18)} Chơi lại</button>
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

// Show animated piece collection - piece appears in center then flies to position
function showAnimatedPieceCollection(pieceNumber) {
    // Calculate background position for this piece
    const row = Math.floor((pieceNumber - 1) / 4)
    const col = (pieceNumber - 1) % 4
    const bgXPercent = col === 0 ? '0%' : `${col * -25}%`
    const bgYPercent = row === 0 ? '0%' : `${row * -33.33}%`
    
    // Get target position in grid
    const pieceSlot = document.querySelector(`.piece-slot[data-piece="${pieceNumber}"]`)
    if (!pieceSlot) return
    
    const rect = pieceSlot.getBoundingClientRect()
    const targetX = rect.left + rect.width / 2
    const targetY = rect.top + rect.height / 2
    
    // Create floating piece element
    const floatingPiece = document.createElement('div')
    floatingPiece.className = 'floating-piece'
    floatingPiece.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        width: 200px;
        height: 200px;
        transform: translate(-50%, -50%) scale(0.5);
        background-image: url('/HoChiMinh5.jpeg');
        background-size: 400% 300%;
        background-position: ${bgXPercent} ${bgYPercent};
        border-radius: 12px;
        border: 4px solid var(--gold);
        box-shadow: 0 10px 40px rgba(0,0,0,0.4);
        z-index: 10002;
        pointer-events: none;
    `
    document.body.appendChild(floatingPiece)
    
    // Animate: scale up and show
    setTimeout(() => {
        floatingPiece.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
        floatingPiece.style.transform = 'translate(-50%, -50%) scale(1)'
    }, 10)
    
    // After showing, animate to target position
    setTimeout(() => {
        const startX = window.innerWidth / 2
        const startY = window.innerHeight / 2
        const offsetX = targetX - startX
        const offsetY = targetY - startY
        
        floatingPiece.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        floatingPiece.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) scale(0.3)`
        floatingPiece.style.opacity = '0.8'
    }, 1500)
    
    // Update actual piece slot and remove floating piece
    setTimeout(() => {
        pieceSlot.classList.add('collected')
        pieceSlot.style.backgroundImage = "url('/HoChiMinh5.jpeg')"
        pieceSlot.style.backgroundSize = '400% 300%'
        pieceSlot.style.backgroundPosition = `${bgXPercent} ${bgYPercent}`
        const pieceNumberEl = pieceSlot.querySelector('.piece-number')
        if (pieceNumberEl) {
            pieceNumberEl.style.display = 'none'
        }
        
        floatingPiece.remove()
        
        // Show next question after delay
        setTimeout(() => {
            if (gameState.piecesCollected.length >= 12) {
                showCompletePuzzle()
            } else {
                renderGame()
            }
        }, 1000)
    }, 2500)
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
