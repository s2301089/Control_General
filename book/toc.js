// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="ControllGeneralHome.html">前提条件等</a></li><li class="chapter-item expanded affix "><li class="part-title">基本的なこと</li><li class="chapter-item expanded "><a href="BasicContents/BasicContentsHome.html"><strong aria-hidden="true">1.</strong> 一覧</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="BasicContents/git_GitHub.html"><strong aria-hidden="true">1.1.</strong> git / GitHub</a></li><li class="chapter-item expanded "><a href="BasicContents/motor.html"><strong aria-hidden="true">1.2.</strong> モーター</a></li><li class="chapter-item expanded "><a href="BasicContents/ControllerData/controllerHome.html"><strong aria-hidden="true">1.3.</strong> ｺﾝﾄﾛｰﾗｰで送受信するデータ</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="BasicContents/ControllerData/controllerTransmit.html"><strong aria-hidden="true">1.3.1.</strong> 送信側(Transmit / TX)</a></li><li class="chapter-item expanded "><a href="BasicContents/ControllerData/controllerReceive.html"><strong aria-hidden="true">1.3.2.</strong> 受信側(Receive / RX)</a></li></ol></li></ol></li><li class="chapter-item expanded "><li class="part-title">PlatformIOでの開発</li><li class="chapter-item expanded "><a href="DevelopmentPlatformIO/DevelopmentPlatformIOHome.html"><strong aria-hidden="true">2.</strong> 一覧</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="DevelopmentPlatformIO/InstallPlatformIO.html"><strong aria-hidden="true">2.1.</strong> PlatformIOの導入</a></li><li class="chapter-item expanded "><a href="DevelopmentPlatformIO/FrameworkArduino/FrameworkArduinoHome.html"><strong aria-hidden="true">2.2.</strong> Framework : Arduino</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="DevelopmentPlatformIO/FrameworkArduino/MakeProjectLchika.html"><strong aria-hidden="true">2.2.1.</strong> プロジェクト作成からLチカ</a></li><li class="chapter-item expanded "><a href="DevelopmentPlatformIO/FrameworkArduino/SerialPrint.html"><strong aria-hidden="true">2.2.2.</strong> 変数値などの表示</a></li></ol></li><li class="chapter-item expanded "><a href="DevelopmentPlatformIO/CouldNotWriteMicroComputer.html"><strong aria-hidden="true">2.3.</strong> 書き込めなかったときの記録</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">ArduinoIDEでの開発</li><li class="chapter-item expanded "><a href="DevelopmentArduinoIDE/DevelopmentArduinoIDEHome.html"><strong aria-hidden="true">3.</strong> 一覧</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="DevelopmentArduinoIDE/DigitalInOut/digitalOut.html"><strong aria-hidden="true">3.1.</strong> ディジタル出力</a></li><li class="chapter-item expanded "><a href="DevelopmentArduinoIDE/SerialPrint.html"><strong aria-hidden="true">3.2.</strong> 変数値などの表示</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">STM32CubeIDEでの開発</li><li class="chapter-item expanded "><a href="DevelopmentSTM32CubeIDE/DevelopmentSTM32CubeIDEHome.html"><strong aria-hidden="true">4.</strong> 一覧</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="DevelopmentSTM32CubeIDE/BasicContents/BasicContentsHome.html"><strong aria-hidden="true">4.1.</strong> はじめにやること</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="DevelopmentSTM32CubeIDE/BasicContents/printf.html"><strong aria-hidden="true">4.1.1.</strong> 変数値などの表示</a></li><li class="chapter-item expanded "><a href="DevelopmentSTM32CubeIDE/BasicContents/printfLibrary.html"><strong aria-hidden="true">4.1.2.</strong> 簡単に変数値などの表示</a></li><li class="chapter-item expanded "><a href="DevelopmentSTM32CubeIDE/BasicContents/manydef.html"><strong aria-hidden="true">4.1.3.</strong> ピン名などを短く</a></li><li class="chapter-item expanded "><a href="DevelopmentSTM32CubeIDE/BasicContents/generateBinaryFile.html"><strong aria-hidden="true">4.1.4.</strong> ﾊﾞｲﾅﾘﾌｧｲﾙ(.bin)の生成</a></li></ol></li><li class="chapter-item expanded "><a href="DevelopmentSTM32CubeIDE/InOut/InOutHome.html"><strong aria-hidden="true">4.2.</strong> 入出力</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="DevelopmentSTM32CubeIDE/InOut/digitalInOut.html"><strong aria-hidden="true">4.2.1.</strong> ディジタル入出力をする</a></li><li class="chapter-item expanded "><a href="DevelopmentSTM32CubeIDE/InOut/OutTimerLED.html"><strong aria-hidden="true">4.2.2.</strong> タイマー割り込みでLチカ</a></li><li class="chapter-item expanded "><a href="DevelopmentSTM32CubeIDE/InOut/OutPWM.html"><strong aria-hidden="true">4.2.3.</strong> PWM出力をする</a></li><li class="chapter-item expanded "><a href="DevelopmentSTM32CubeIDE/InOut/InVariableResistance.html"><strong aria-hidden="true">4.2.4.</strong> 可変抵抗の値を読む</a></li><li class="chapter-item expanded "><a href="DevelopmentSTM32CubeIDE/InOut/InRotaryEncoder.html"><strong aria-hidden="true">4.2.5.</strong> ﾛｰﾀﾘｰｴﾝｺｰﾀﾞｰを読む</a></li></ol></li><li class="chapter-item expanded "><a href="DevelopmentSTM32CubeIDE/Connectability/ConnectabilityHome.html"><strong aria-hidden="true">4.3.</strong> 通信</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="DevelopmentSTM32CubeIDE/Connectability/uartReceive.html"><strong aria-hidden="true">4.3.1.</strong> UART通信(受信)</a></li><li class="chapter-item expanded "><a href="DevelopmentSTM32CubeIDE/Connectability/uartTransmit.html"><strong aria-hidden="true">4.3.2.</strong> UART通信(送信)</a></li><li class="chapter-item expanded "><a href="DevelopmentSTM32CubeIDE/Connectability/ConnectArduino.html"><strong aria-hidden="true">4.3.3.</strong> Arduinoとの通信</a></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
