import './style.css'
import './game.css'
import { 
    ClipboardList, 
    Target, 
    Settings, 
    Building2, 
    Briefcase, 
    Palette, 
    Handshake,
    Key,
    Shield,
    Gamepad2,
    TrendingUp,
    Scale,
    Dumbbell
} from 'lucide'

import { createElement } from 'lucide'

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

// Helper function to get icon HTML by name
function getIconHTML(iconName, size = 24, color = 'currentColor') {
    const icons = {
        'clipboard': ClipboardList,
        'target': Target,
        'settings': Settings,
        'building': Building2,
        'briefcase': Briefcase,
        'palette': Palette,
        'handshake': Handshake,
        'key': Key,
        'shield': Shield,
        'gamepad': Gamepad2,
        'trending-up': TrendingUp,
        'scale': Scale,
        'dumbbell': Dumbbell
    }
    
    const Icon = icons[iconName]
    if (!Icon) return ''
    
    return createIconHTML(Icon, size, color)
}

// Render HTML content
const app = document.getElementById('app')

app.innerHTML = `
    <div class="bg-pattern"></div>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>Tư Tưởng Hồ Chí Minh</h1>
            <p class="subtitle">Về Độc Lập Dân Tộc và Chủ Nghĩa Xã Hội</p>
            <p class="quote-text">
                "Không có gì quý hơn độc lập, tự do"
            </p>
        </div>
        <div class="scroll-indicator"></div>
    </section>

    <!-- Main Content -->
    <div class="container">
        <!-- Section 3: Thời kỳ quá độ -->
        <section class="section" id="section-1">
            <div class="section-header">
                <div class="section-number">3</div>
                <h2 class="section-title">Thời Kỳ Quá Độ Lên Chủ Nghĩa Xã Hội</h2>
            </div>

            <!-- Summary Cards -->
            <div class="summary-grid">
                <div class="summary-card">
                    <div class="summary-icon">${getIconHTML('clipboard', 32)}</div>
                    <h3>Tính chất</h3>
                    <p>Thời kỳ cải biến sâu sắc, phức tạp, lâu dài, khó khăn và gian khổ. Đây là quá trình biến đổi xã hội cũ thành xã hội mới hoàn toàn chưa từng có trong lịch sử dân tộc.</p>
                </div>
                <div class="summary-card">
                    <div class="summary-icon">${getIconHTML('target', 32)}</div>
                    <h3>Đặc điểm</h3>
                    <p>Từ nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, <strong>không trải qua giai đoạn phát triển tư bản chủ nghĩa</strong>.</p>
                </div>
                <div class="summary-card">
                    <div class="summary-icon">${getIconHTML('settings', 32)}</div>
                    <h3>Nhiệm vụ</h3>
                    <p>Đấu tranh cải tạo, xóa bỏ tàn tích xã hội cũ, xây dựng các yếu tố mới trên tất cả các lĩnh vực: chính trị, kinh tế, văn hóa và quan hệ xã hội.</p>
                </div>
            </div>

            <!-- Nhiệm vụ chi tiết -->
            <div class="content-card">
                <h3 class="card-title">Nhiệm vụ trên các lĩnh vực</h3>
                <div class="task-grid">
                    <div class="task-item">
                        <h4>${getIconHTML('building', 20)} Chính trị</h4>
                        <p>Xây dựng chế độ dân chủ, chống chủ nghĩa cá nhân, bồi dưỡng nhân dân có tri thức và năng lực làm chủ.</p>
                    </div>
                    <div class="task-item">
                        <h4>${getIconHTML('briefcase', 20)} Kinh tế</h4>
                        <p>Cải tạo nền kinh tế cũ, xây dựng nền kinh tế mới với công nghiệp và nông nghiệp hiện đại, gắn với quyền làm chủ của nhân dân.</p>
                    </div>
                    <div class="task-item">
                        <h4>${getIconHTML('palette', 20)} Văn hóa</h4>
                        <p>Tẩy trừ di tích thuộc địa, phát triển truyền thống tốt đẹp, hấp thu văn hóa tiến bộ thế giới, xây dựng nền văn hóa dân tộc, khoa học và đại chúng.</p>
                    </div>
                    <div class="task-item">
                        <h4>${getIconHTML('handshake', 20)} Quan hệ xã hội</h4>
                        <p>Xây dựng xã hội dân chủ, công bằng, văn minh, tôn trọng con người, hài hòa giữa lợi ích cá nhân và tập thể.</p>
                    </div>
                </div>
            </div>

            <!-- Image Section -->
            <div class="image-section">
                <div class="image-container">
                    <img src="/HoChiMinh2.jpg" alt="Hồ Chí Minh tại bàn làm việc" class="section-image">
                    <div class="image-overlay">
                        <p class="image-caption">Chủ tịch Hồ Chí Minh - Người đặt nền móng cho con đường phát triển của dân tộc</p>
                    </div>
                </div>
            </div>

            <div class="decorative-line"></div>

            <div class="section-subtitle">Nguyên tắc xây dựng chủ nghĩa xã hội</div>

            <div class="principles-grid">
                <div class="principle-card">
                    <div class="principle-number">01</div>
                    <h3>Nền tảng Mác – Lênin</h3>
                    <p>Mọi tư tưởng, hành động phải được thực hiện trên nền tảng chủ nghĩa Mác – Lênin, cụ thể hóa phù hợp với điều kiện Việt Nam.</p>
                </div>
                <div class="principle-card highlight-principle">
                    <div class="principle-number">02</div>
                    <h3>Giữ vững độc lập dân tộc</h3>
                    <div class="highlight-box">
                        <p>"Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy"</p>
                    </div>
                    <p>Độc lập dân tộc là điều kiện tiên quyết để thực hiện chủ nghĩa xã hội.</p>
                </div>
                <div class="principle-card">
                    <div class="principle-number">03</div>
                    <h3>Đoàn kết quốc tế</h3>
                    <p>Học tập kinh nghiệm các nước anh em, vận dụng sáng tạo, không áp đặt máy móc. "Ta có thể đi con đường khác để tiến lên chủ nghĩa xã hội".</p>
                </div>
                <div class="principle-card">
                    <div class="principle-number">04</div>
                    <h3>Xây đi đôi với chống</h3>
                    <p>Vừa xây dựng các lĩnh vực đời sống xã hội, vừa chống lại các thế lực cản trở, phá hoại và chủ nghĩa cá nhân.</p>
                </div>
            </div>
        </section>

        <!-- Section III: Mối quan hệ -->
        <section class="section" id="section-2">
            <div class="section-header">
                <div class="section-number">III</div>
                <h2 class="section-title">Mối Quan Hệ Giữa<br>Độc Lập Dân Tộc Và Chủ Nghĩa Xã Hội</h2>
            </div>

            <!-- Image Content Section -->
            <div class="image-content-section">
                <div class="image-content-wrapper">
                    <div class="image-content-image">
                        <img src="/HoChiMinh3.jpg" alt="Hồ Chí Minh và nhân dân" class="content-image">
                    </div>
                    <div class="image-content-text">
                        <h3>Độc lập dân tộc và chủ nghĩa xã hội</h3>
                        <p>Hai mục tiêu này gắn bó chặt chẽ với nhau, tạo nên sức mạnh tổng hợp để xây dựng và phát triển đất nước. Độc lập dân tộc là tiền đề, chủ nghĩa xã hội là đảm bảo vững chắc cho nền độc lập đó.</p>
                        <p>Như Chủ tịch Hồ Chí Minh đã khẳng định, chỉ có chủ nghĩa xã hội mới đảm bảo được nền độc lập dân tộc thực sự và bền vững, đồng thời chỉ có độc lập dân tộc mới tạo điều kiện để xây dựng chủ nghĩa xã hội thành công.</p>
                    </div>
                </div>
            </div>

            <div class="relationship-grid">
                <div class="relationship-card">
                    <div class="relationship-icon">${getIconHTML('key', 32)}</div>
                    <h3>Độc lập dân tộc</h3>
                    <p class="relationship-subtitle">Cơ sở, tiền đề</p>
                    <p>Giải phóng dân tộc, giành độc lập là mục tiêu đầu tiên, tạo cơ sở và tiền đề cho chủ nghĩa xã hội. Độc lập dân tộc gắn liền với tự do, cơm no, áo ấm, hạnh phúc cho nhân dân.</p>
                </div>
                <div class="relationship-arrow">⇄</div>
                <div class="relationship-card">
                    <div class="relationship-icon">${getIconHTML('shield', 32)}</div>
                    <h3>Chủ nghĩa xã hội</h3>
                    <p class="relationship-subtitle">Điều kiện bảo đảm</p>
                    <p>Chế độ dân chủ do nhân dân làm chủ, xã hội bình đẳng, công bằng, kinh tế phát triển cao, đảm bảo nền độc lập dân tộc vững chắc và trường tồn.</p>
                </div>
            </div>

            <div class="content-card">
                <h3 class="card-title">Điều kiện bảo đảm</h3>
                <div class="conditions-list">
                    <div class="condition-item">
                        <span class="condition-number">1</span>
                        <div>
                            <h4>Vai trò lãnh đạo của Đảng</h4>
                            <p>Bảo đảm vai trò lãnh đạo tuyệt đối của Đảng Cộng sản trong suốt tiến trình cách mạng.</p>
                        </div>
                    </div>
                    <div class="condition-item">
                        <span class="condition-number">2</span>
                        <div>
                            <h4>Đại đoàn kết dân tộc</h4>
                            <p>Củng cố và tăng cường khối đại đoàn kết dân tộc, nền tảng là liên minh công – nông.</p>
                        </div>
                    </div>
                    <div class="condition-item">
                        <span class="condition-number">3</span>
                        <div>
                            <h4>Đoàn kết quốc tế</h4>
                            <p>Đoàn kết, gắn bó chặt chẽ với cách mạng thế giới, góp phần cho hòa bình và chủ nghĩa xã hội trên thế giới.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section IV: Vận dụng -->
        <section class="section" id="section-3">
            <div class="section-header">
                <div class="section-number">IV</div>
                <h2 class="section-title">Vận Dụng Trong Giai Đoạn Hiện Nay</h2>
            </div>

            <div class="application-grid">
                <div class="application-card">
                    <div class="application-icon">${getIconHTML('target', 32)}</div>
                    <h3>Kiên định mục tiêu</h3>
                    <p>Nắm vững ngọn cờ độc lập dân tộc và chủ nghĩa xã hội – ngọn cờ quang vinh mà Chủ tịch Hồ Chí Minh đã trao lại.</p>
                </div>
                <div class="application-card">
                    <div class="application-icon">${getIconHTML('trending-up', 32)}</div>
                    <h3>Phát huy dân chủ</h3>
                    <p>Phát huy sức mạnh dân chủ xã hội chủ nghĩa theo phương châm "dân biết, dân bàn, dân làm, dân kiểm tra".</p>
                </div>
                <div class="application-card">
                    <div class="application-icon">${getIconHTML('scale', 32)}</div>
                    <h3>Củng cố hệ thống</h3>
                    <p>Củng cố, kiện toàn hệ thống chính trị, phát huy sức mạnh và hiệu quả hoạt động, đảm bảo quyền làm chủ của nhân dân.</p>
                </div>
                <div class="application-card">
                    <div class="application-icon">${getIconHTML('shield', 32)}</div>
                    <h3>Đấu tranh chống suy thoái</h3>
                    <p>Tăng cường xây dựng, chỉnh đốn Đảng; ngăn chặn, đẩy lùi suy thoái về tư tưởng chính trị, đạo đức, lối sống.</p>
                </div>
            </div>

            <div class="highlight-box final-message">
                <p>Mục tiêu: Dân giàu, nước mạnh, dân chủ, công bằng, văn minh để giữ vững nền độc lập dân tộc trên con đường quá độ đi lên chủ nghĩa xã hội.</p>
            </div>
        </section>
    </div>

    <!-- Game Section -->
    <section class="game-section" id="game-section">
        <div class="section-header">
            <div class="section-number">${getIconHTML('gamepad', 24)}</div>
            <h2 class="section-title">Game: Thu Thập Mảnh Ghép</h2>
        </div>
        <div class="game-intro">
            <p>Trả lời đúng 5 câu hỏi để thu thập 1 mảnh ghép. Thu thập đủ 12 mảnh để hoàn thành bức tranh!</p>
            <p><strong>Lưu ý:</strong> Mỗi người chơi có tiến trình riêng được lưu trên trình duyệt của mình.</p>
        </div>
        <div id="game-container"></div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <p>© 2024 - Tư Tưởng Hồ Chí Minh về Độc Lập Dân Tộc và Chủ Nghĩa Xã Hội</p>
    </footer>
`

// Initialize animations
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
            }
        })
    }, observerOptions)

    // Observe all sections and image sections
    document.querySelectorAll('.section, .image-section, .image-content-section').forEach(section => {
        observer.observe(section)
    })

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute('href'))
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        })
    })

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset
        const hero = document.querySelector('.hero')
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`
            hero.style.opacity = 1 - scrolled / 600
        }
    })

    // Add fade-in animation to cards on scroll with staggered effect
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated')
                setTimeout(() => {
                    entry.target.style.opacity = '1'
                    entry.target.style.transform = 'translateY(0)'
                    entry.target.style.animation = 'scaleIn 0.6s ease-out'
                }, index * 100)
            }
        })
    }, { threshold: 0.1 })

    // Staggered animation for summary cards
    document.querySelectorAll('.summary-card').forEach((card, index) => {
        card.style.opacity = '0'
        card.style.transform = 'translateY(30px) scale(0.9)'
        card.style.transition = 'all 0.6s ease'
        card.style.animationDelay = `${index * 0.2}s`
        cardObserver.observe(card)
    })

    // Staggered animation for principle cards
    document.querySelectorAll('.principle-card').forEach((card, index) => {
        card.style.opacity = '0'
        card.style.transform = 'translateY(30px) rotateY(15deg)'
        card.style.transition = 'all 0.6s ease'
        card.style.animationDelay = `${index * 0.15}s`
        cardObserver.observe(card)
    })

    // Animation for other elements
    document.querySelectorAll('.relationship-card, .application-card, .task-item, .condition-item, .image-section, .image-content-section').forEach((card, index) => {
        card.style.opacity = '0'
        card.style.transform = 'translateY(20px)'
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        card.style.animationDelay = `${index * 0.1}s`
        cardObserver.observe(card)
    })

    // Add floating particles effect
    createFloatingParticles()
}

// Create floating particles animation
function createFloatingParticles() {
    const hero = document.querySelector('.hero')
    if (!hero) return

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div')
        particle.style.position = 'absolute'
        particle.style.width = '4px'
        particle.style.height = '4px'
        particle.style.background = 'rgba(255, 255, 255, 0.6)'
        particle.style.borderRadius = '50%'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.top = Math.random() * 100 + '%'
        particle.style.animation = `particleFloat ${5 + Math.random() * 5}s linear infinite`
        particle.style.animationDelay = Math.random() * 2 + 's'
        particle.style.pointerEvents = 'none'
        hero.appendChild(particle)
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initAnimations()
        // Load game after DOM is ready
        setTimeout(() => {
            import('./game.js').catch(err => console.error('Error loading game:', err))
        }, 500)
    })
} else {
    initAnimations()
    setTimeout(() => {
        import('./game.js').catch(err => console.error('Error loading game:', err))
    }, 500)
}
