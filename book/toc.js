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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="ControlGeneral.html">前提条件等</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">Basic Contents</li><li class="chapter-item "><a href="BasicContents/BasicContents.html">基礎知識</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="BasicContents/git_GitHub.html">git / GitHub</a></li><li class="chapter-item "><a href="BasicContents/language_c.html">C言語</a></li><li class="chapter-item "><a href="BasicContents/language_cpp.html">C++</a></li><li class="chapter-item "><a href="BasicContents/circuit.html">回路の基礎</a></li><li class="chapter-item "><a href="BasicContents/motor.html">DCモーターの制御</a></li><li class="chapter-item "><a href="BasicContents/controller_data.html">コントローラーのデータ</a></li></ol></li><li class="chapter-item "><a href="PlatformIO/PlatformIO.html">PlatformIO IDE</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="PlatformIO/setup.html">環境構築</a></li><li class="chapter-item "><a href="PlatformIO/make_project.html">プロジェクトの基本操作</a></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">mbed OS</li><li class="chapter-item "><a href="mbed/mbedPlatformIO.html">mbed</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="mbed/gpio/DigitalOut.html">ディジタル出力</a></li><li class="chapter-item "><a href="mbed/gpio/DigitalIn.html">ディジタル入力</a></li><li class="chapter-item "><a href="mbed/timer/PwmOut.html">PWM出力</a></li><li class="chapter-item "><a href="mbed/analog/AnalogIn.html">アナログ入力</a></li><li class="chapter-item "><a href="mbed/thread/ThisThread.html">待ち時間</a></li><li class="chapter-item "><a href="mbed/connectivity/showValuePrintf.html">値の表示</a></li><li class="chapter-item "><a href="mbed/connectivity/use_rxController.html">コントローラー受信側(lib)</a></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">以下未整理部分</li><li class="chapter-item "><a href="DevelopmentPlatformIO/DevelopmentPlatformIOHome.html">一覧(PlatformIO)</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="DevelopmentPlatformIO/InstallPlatformIO.html">PlatformIOの導入</a></li><li class="chapter-item "><a href="DevelopmentPlatformIO/FrameworkMbedOS/FrameworkMbedOSHome.html">Framework : MbedOS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="DevelopmentPlatformIO/FrameworkMbedOS/LchikaPrint.html">Lチカと変数の表示</a></li><li class="chapter-item "><a href="DevelopmentPlatformIO/FrameworkMbedOS/outPwm.html">PWMの出力</a></li><li class="chapter-item "><a href="DevelopmentPlatformIO/FrameworkMbedOS/readAnalogResi.html">可変抵抗を読む</a></li><li class="chapter-item "><a href="DevelopmentPlatformIO/FrameworkMbedOS/canUsePrintFloat.html">%fを使う</a></li><li class="chapter-item "><a href="DevelopmentPlatformIO/FrameworkMbedOS/howToUseOs6Sample.html">SerialCtrl(OS6 sample)</a></li></ol></li><li class="chapter-item "><a href="DevelopmentPlatformIO/CouldNotWriteMicroComputer.html">書き込めなかったときの記録</a></li></ol></li><li class="chapter-item "><a href="DevelopmentSTM32CubeIDE/DevelopmentSTM32CubeIDEHome.html">一覧(CubeIDE)</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="DevelopmentSTM32CubeIDE/BasicContents/BasicContentsHome.html">はじめにやること</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="DevelopmentSTM32CubeIDE/BasicContents/printf.html">変数値などの表示</a></li><li class="chapter-item "><a href="DevelopmentSTM32CubeIDE/BasicContents/printfLibrary.html">簡単に変数値などの表示</a></li><li class="chapter-item "><a href="DevelopmentSTM32CubeIDE/BasicContents/manydef.html">ピン名などを短く</a></li><li class="chapter-item "><a href="DevelopmentSTM32CubeIDE/BasicContents/generateBinaryFile.html">ﾊﾞｲﾅﾘﾌｧｲﾙ(.bin)の生成</a></li></ol></li><li class="chapter-item "><a href="DevelopmentSTM32CubeIDE/InOut/InOutHome.html">入出力</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="DevelopmentSTM32CubeIDE/InOut/digitalInOut.html">ディジタル入出力をする</a></li><li class="chapter-item "><a href="DevelopmentSTM32CubeIDE/InOut/OutTimerLED.html">タイマー割り込みでLチカ</a></li><li class="chapter-item "><a href="DevelopmentSTM32CubeIDE/InOut/OutPWM.html">PWM出力をする</a></li><li class="chapter-item "><a href="DevelopmentSTM32CubeIDE/InOut/InVariableResistance.html">可変抵抗の値を読む</a></li><li class="chapter-item "><a href="DevelopmentSTM32CubeIDE/InOut/InRotaryEncoder.html">ﾛｰﾀﾘｰｴﾝｺｰﾀﾞｰを読む</a></li></ol></li><li class="chapter-item "><a href="DevelopmentSTM32CubeIDE/Connectability/ConnectabilityHome.html">通信</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="DevelopmentSTM32CubeIDE/Connectability/uartReceive.html">UART通信(受信)</a></li><li class="chapter-item "><a href="DevelopmentSTM32CubeIDE/Connectability/uartTransmit.html">UART通信(送信)</a></li><li class="chapter-item "><a href="DevelopmentSTM32CubeIDE/Connectability/ConnectArduino.html">Arduinoとの通信</a></li><li class="chapter-item "><a href="DevelopmentSTM32CubeIDE/Connectability/canReceive.html">CAN通信(受信)</a></li></ol></li></ol></li><li class="chapter-item "><li class="spacer"></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
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
