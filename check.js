    <script>
        // Particle System
        function createParticles() {
            const particles = document.getElementById('particles');

            function createParticle() {
                const particle = document.createElement('div');
                particle.className = 'particle';

                // Random size
                const size = Math.random() * 4 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';

                // Random position
                particle.style.left = Math.random() * 100 + '%';

                // Random animation duration
                const duration = Math.random() * 15 + 10;
                particle.style.animationDuration = duration + 's';

                // Random delay
                particle.style.animationDelay = Math.random() * 2 + 's';

                particles.appendChild(particle);

                // Remove particle after animation
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, (duration + 2) * 1000);
            }

            // Create initial particles
            for (let i = 0; i < 20; i++) {
                setTimeout(createParticle, i * 200);
            }

            // Continuously create particles
            setInterval(createParticle, 500);
        }

        // Fireworks effect
        function createFireworks(x, y) {
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];

            for (let i = 0; i < 12; i++) {
                const firework = document.createElement('div');
                firework.style.position = 'absolute';
                firework.style.left = x + 'px';
                firework.style.top = y + 'px';
                firework.style.width = '4px';
                firework.style.height = '4px';
                firework.style.background = colors[Math.floor(Math.random() * colors.length)];
                firework.style.borderRadius = '50%';
                firework.style.pointerEvents = 'none';
                firework.style.zIndex = '1000';

                const angle = (i * 30) * Math.PI / 180;
                const velocity = Math.random() * 100 + 50;
                const vx = Math.cos(angle) * velocity;
                const vy = Math.sin(angle) * velocity;

                firework.style.animation = `fireworkFly 1s ease-out forwards`;
                firework.style.setProperty('--vx', vx + 'px');
                firework.style.setProperty('--vy', vy + 'px');

                document.body.appendChild(firework);

                setTimeout(() => {
                    if (firework.parentNode) {
                        firework.parentNode.removeChild(firework);
                    }
                }, 1000);
            }
        }

        // Add firework animation CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fireworkFly {
                to {
                    transform: translate(var(--vx), var(--vy));
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        document.addEventListener('DOMContentLoaded', function () {
            console.log('DOM Content Loaded - Initializing wheel...');
            // Initialize particle system
            createParticles();
            // DOM elements
            const wheel = document.getElementById('wheel');
            const wheelContainer = document.getElementById('wheelContainer');
            const sliceCountInput = document.getElementById('sliceCount');
            const generateBtn = document.getElementById('generateBtn');
            const spinBtn = document.getElementById('spinBtn');
            const sliceConfig = document.getElementById('sliceConfig');
            const resultDisplay = document.getElementById('resultDisplay');
            const resultContent = document.getElementById('resultContent');
            const resultCelebration = document.getElementById('resultCelebration');
            const winSound = document.getElementById('winSound');
            const confettiSound = document.getElementById('confettiSound');
            const spinSpeedSelect = document.getElementById('spinSpeed');
            const customDurationGroup = document.getElementById('customDurationGroup');
            const customDurationInput = document.getElementById('customDuration');
            const wheelDataTextarea = document.getElementById('wheelData');
            const saveBtn = document.getElementById('saveBtn');
            const loadBtn = document.getElementById('loadBtn');
            const copyBtn = document.getElementById('copyBtn');
            const wheelNameInput = document.getElementById('wheelName');
            const secretModeTrigger = document.getElementById('secretModeTrigger');
            const secretModeGroup = document.getElementById('secretModeGroup');
            const secretSliceSelect = document.getElementById('secretSliceSelect');
            const savedWheelsList = document.getElementById('savedWheelsList');
            const fileInput = document.getElementById('fileInput');
            const menuButton = document.getElementById('menuButton');
            const menuPanel = document.getElementById('menuPanel');
            const audioToggle = document.getElementById('audioToggle');
            const presetWheelsSection = document.getElementById('presetWheels');

            // Wheel info panel elements
            const wheelInfoBtn = document.getElementById('wheelInfoBtn');
            const wheelInfoPanel = document.getElementById('wheelInfoPanel');
            const wheelInfoOverlay = document.getElementById('wheelInfoOverlay');
            const closeInfoBtn = document.getElementById('closeInfoBtn');
            const resetStatsBtn = document.getElementById('resetStatsBtn');

            // Real-time result elements
            const realTimeDisplay = document.getElementById('realTimeDisplay');
            const currentSliceText = document.getElementById('currentSliceText');

            // Theme elements
            const themeSelector = document.getElementById('themeSelector');
            const themeCloseBtn = document.getElementById('themeCloseBtn');
            const themeShowBtn = document.getElementById('themeShowBtn');
            const normalTheme = document.getElementById('normalTheme');
            const darkTheme = document.getElementById('darkTheme');
            const rainbowTheme = document.getElementById('rainbowTheme');
            const neonTheme = document.getElementById('neonTheme');
            const theme3d = document.getElementById('3dTheme');
            const discoTheme = document.getElementById('discoTheme');

            // Menu buttons
            const presetWheelsBtn = document.getElementById('presetWheelsBtn');
            const customWheelBtn = document.getElementById('customWheelBtn');
            const savedWheelsBtn = document.getElementById('savedWheelsBtn');

            // Preset wheel buttons (menu)
            const dollarsBtn = document.getElementById('dollarsBtn');
            const countriesBtn = document.getElementById('countriesBtn');
            const birthdayBtn = document.getElementById('birthdayBtn');
            const foodBtn = document.getElementById('foodBtn');
            const movieBtn = document.getElementById('movieBtn');
            const colorBtn = document.getElementById('colorBtn');
            const exerciseBtn = document.getElementById('exerciseBtn');
            const bookBtn = document.getElementById('bookBtn');
            const travelBtn = document.getElementById('travelBtn');
            const gameBtn = document.getElementById('gameBtn');
            const choreBtn = document.getElementById('choreBtn');
            const songBtn = document.getElementById('songBtn');
            const drinkBtn = document.getElementById('drinkBtn');
            const superheroBtn = document.getElementById('superheroBtn');
            const fortuneBtn = document.getElementById('fortuneBtn');

            // Preset wheel buttons (main section)
            const presetDollarsBtn = document.getElementById('presetDollarsBtn');
            const presetCountriesBtn = document.getElementById('presetCountriesBtn');
            const presetBirthdayBtn = document.getElementById('presetBirthdayBtn');
            const presetFoodBtn = document.getElementById('presetFoodBtn');
            const presetMovieBtn = document.getElementById('presetMovieBtn');
            const presetColorBtn = document.getElementById('presetColorBtn');
            const presetExerciseBtn = document.getElementById('presetExerciseBtn');
            const presetBookBtn = document.getElementById('presetBookBtn');
            const presetTravelBtn = document.getElementById('presetTravelBtn');
            const presetGameBtn = document.getElementById('presetGameBtn');
            const presetChoreBtn = document.getElementById('presetChoreBtn');
            const presetSongBtn = document.getElementById('presetSongBtn');
            const presetDrinkBtn = document.getElementById('presetDrinkBtn');
            const presetSuperheroBtn = document.getElementById('presetSuperheroBtn');
            const presetFortuneBtn = document.getElementById('presetFortuneBtn');

            // Wheel state
            let slices = [];
            let isSpinning = false;
            let secretModeActive = false;
            let currentRotation = 0;
            let tickInterval;

            // Optimized Web Audio API for zero-latency ticking
            let tickAudioCtx = null;
            let tickBuffer = null;
            const TICK_SOUND_BASE64 = "//uQBAAAAqIe1XUEQAJWQ+quoJQATSFdcbh2gAGRq62nDtACJKMAM1EAAAAbec4AZjGO2mQnU5znznP+c5z84cAAAAAAAAQYAAAAZ/wAAQ///AAABH/8AAAw//8PDz+AYeHh7/+AAAYeP+OAAAAI//Dx4AAAAABjyRSADKBAAAAHHZzMAEox7HdNCXqc5zvOc/5znfnD4cAAAAADgcFGwAAAR/8AABX//MAAAD//wAADw9/5h7/gB4eHh//AAAAPD39DAAAAHf//oAAAAAD+BwOBwOBwOBwOBwOBwBMjdhP4ID/jjDjtmxmdf4zEIqKX+RRiCAmomf/gQEmBVx4DwHVX/xsHoN48CcMUYH//NAvRcJQZY4DQeQl3//5dLhvGGNy8SxIpFH///yamylLLpOKRkYol0yNsMMMMMMMMMMMBERq2E/gxa44w47NNi+Vv8ZiEZEt/k0fA2VCT/+CMk4OeUB6Dqr/px0HYPMuKHCOX//QC9HC4bFw4Sww3//5iYG6h7F8vEsXVGv///ki1SlmI7i04iiamRl//1piCmooA//uSBAAAAvpe524I4ARfK+vgwqAAC8Vtc7wxgAF9ra33hjAAEEgEEgcEgkEgkEgkEgwFtzhk8OuYzFufBMUDfsefml38xo0qYOqGfuYNCA3JnlhkWmF/3Ghme43cdMFJY7/6nmX2kUNNM//q5AzPR3jpGrf/3MMYwzzOePZqtU02ZHWY4Ajt5k8TWyVis+8Bsg8hmp3tRzD/9KxSXNFZDXDcWiIe48TC5pQ9muYa0rl7PckYINNzP+le78+talLUf+3/7vaJu7XfKLNR////f6JX6e+HUqi41xVbHdFf///C4rV82wQEilErFd3GI1enmGGOsa1Y6bhW+ZPnCUWiP+endDR8vj1/ZTlJ4UT0Z3JiJexEz17k8L/0r5f/dC9Cd2SmRpTQn93QjIuyU586Zbncv0AEoGwGaQwUJKAZTTlGNU0AACEUTGru6kdenTBDHWNbY4SGAzvEfdiIXEefondDEOQ2SPXJ4pxSeFEuR08y/sRM/3hPC8uJXyy++hehO8SmhpThP7vPQvkpzP6ab9Ms8IACK+L0nBASUXEGnEiYgv/7kgQAAALQWdpIJRgAWss7SQSjAAxRZWVBjTfpbazrWJMM+E5HQACCSQU8HOGGjGFLYTeq3sZlDpG02PZjh/GUjRmb2bu3swx/+x7eValVIuVSq5e38qtqs5f22OgMUqQEZfrD12zXa52E19SOl5rP/ZqIAgIDHsSySjzfkkaJAAGDRIKeGcoFGMKXr9Vo8MynRjP2aMfD1jKRo0Y9m/h7Chj/2Y419WqqqlGqlVy9v5VbVYff22NQGKVICMvqw9c812tOwmCr0vLzVuT2ZwACAhx7EuEj37RNECBIDKUgMRwwlY0LiYvgivHdAZLw/qWmhxyP7zRC3bf0B3JxDCrnH8/ycFYTJHHIzP5/LmufUI0dGEhwSnx/I15HeTChQHdvVhTqtZTVe3//5kcxCWExoKqFJuu/V/+K5UCAATckHxykm1LqyCLlFYF6cEGpsmmUWrMOunLKLujR5C7gjiJuZPNKToqBhSme5w/1oIjG0gcyY/OJ//59Qjjxhg8z2P915781Cru3qwo1Wj01L7t/lz/UEKJaYgpqKBgASEAAIAD/+5IEAAAC9lfYzRhgDl6nqrqhjABLPUkyOSmAAWorJoslIACblRQUQdxSf3YJPVVKOU/qlSgbPM36zHONS1+ZBmbNDpHlkfHT4YUZf/wJoGOefz5nPOQwv3P7GNY6z/zIKJyZlImPjMpfZ5mD7ftPjJr2wMKhq2QwRTXhAylxXKITkBgAAAEpO+hhcMyasGZRJNYFARIUgQaj3FPqGAjkZgq68bUE3nBRkbE2fDjGzBRJXvlG2Nv/hn/7f6/+TbMZbiZc30LKIqpvwoV795T9y2t/RR9lkvHVGifDkX/lf3VASCAY0GhItlU08c4Tz5ZDyL4GuRcFlVeTQnkLDRsf5Ok0TRkbf+RpNJqUbf/lEmjYmkTI///pHSAool10Sl//+xeOk0VjEydFFX///prNSaY8VBUFhL//xCRAAAgQQAxoN6RbJYu+bCkfHSH88DWiYFlVeQIV0NUkU/yZZRDiJf+MamaCtiwM1/+M6bF0pKLyX//MSKmJqZKLxe///WTJFTIvOtFSP///1rNSa2WijmQK//+lMQU1FAwAJCAAEAAA//uSBAAP8AAAaQcAAAgAAA0g4AABAAABpAAAACAAADSAAAAETEFNRQMACQgABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==";

            async function initTickAudio() {
                try {
                    if (tickBuffer) return; // Already initialized
                    if (!window.AudioContext && !window.webkitAudioContext) return;
                    tickAudioCtx = new (window.AudioContext || window.webkitAudioContext)();

                    const binaryString = window.atob(TICK_SOUND_BASE64);
                    const len = binaryString.length;
                    const bytes = new Uint8Array(len);
                    for (let i = 0; i < len; i++) {
                        bytes[i] = binaryString.charCodeAt(i);
                    }

                    tickBuffer = await tickAudioCtx.decodeAudioData(bytes.buffer);
                } catch (e) {
                    console.error('Failed to initialize tick audio:', e);
                }
            }

            function playTick() {
                if (!audioEnabled || audioMuted || !tickBuffer || !tickAudioCtx) return;

                if (tickAudioCtx.state === 'suspended') {
                    tickAudioCtx.resume();
                }

                const source = tickAudioCtx.createBufferSource();
                source.buffer = tickBuffer;
                source.connect(tickAudioCtx.destination);
                source.start(0);
            }
            let confettiInterval;
            let slowDownInterval;
            let audioEnabled = false;
            let audioMuted = false;
            let wheelStats = { totalSpins: 0, winHistory: [], wheelName: 'Custom Wheel' };
            let winHistoryExpanded = false;

            // Subtle 3D tilt on the wheel to feel more playful/creative.
            // Disabled while spinning and for reduced-motion users.
            // NOTE: perspective() is included directly in the transform to avoid
            // clipping artefacts that occur when rotateX/Y are used without it.
            const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (!prefersReducedMotion && wheelContainer) {
                let tiltRaf = null;

                const resetTilt = () => {
                    if (isSpinning) return;
                    wheelContainer.style.transform = '';
                };

                const handleTilt = (event) => {
                    if (isSpinning) return;
                    const rect = wheelContainer.getBoundingClientRect();
                    const x = (event.clientX - rect.left) / rect.width - 0.5;
                    const y = (event.clientY - rect.top) / rect.height - 0.5;

                    // Keep tilt very gentle (max ±4deg) and include perspective
                    // in the transform so the 3D rotation renders correctly
                    // without clipping the circular wheel content.
                    const rotateY = x * 4;
                    const rotateX = -y * 4;

                    wheelContainer.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`;
                };

                wheelContainer.addEventListener('mousemove', (event) => {
                    if (tiltRaf) cancelAnimationFrame(tiltRaf);
                    tiltRaf = requestAnimationFrame(() => handleTilt(event));
                });
                wheelContainer.addEventListener('mouseleave', resetTilt);
                wheelContainer.addEventListener('blur', resetTilt);
            }

            // Enhanced color palette with better contrast between adjacent colors
            const colorPalette = [
                '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
                '#FF9F40', '#8AC24A', '#F06292', '#7986CB', '#E57373',
                '#64B5F6', '#BA68C8', '#4DB6AC', '#81C784', '#FFD54F',
                '#FF8A65', '#A1887F', '#90A4AE', '#9575CD', '#4FC3F7',
                '#FF5252', '#448AFF', '#FFAB40', '#69F0AE', '#7C4DFF',
                '#FF4081', '#40C4FF', '#FFD740', '#B2FF59', '#E040FB',
                '#D50000', '#2962FF', '#FF6D00', '#00C853', '#AA00FF',
                '#C51162', '#00B8D4', '#FFAB00', '#64DD17', '#6200EA',
                '#FF1744', '#3D5AFE', '#FF9100', '#00E676', '#651FFF',
                '#F50057', '#304FFE', '#FF6D00', '#00BFA5', '#7C4DFF',
                '#D500F9', '#2979FF', '#FF3D00', '#1DE9B6', '#6200EA',
                '#FF80AB', '#80D8FF', '#FF9E80', '#B9F6CA', '#B388FF'
            ];

            // Function to get distinct colors for adjacent slices
            function getDistinctColor(index, previousColor) {
                let attempts = 0;
                let color;

                do {
                    color = colorPalette[(index + attempts) % colorPalette.length];
                    attempts++;

                    // Ensure we don't get stuck in infinite loop
                    if (attempts > colorPalette.length) {
                        return colorPalette[index % colorPalette.length];
                    }

                    // Convert colors to RGB for comparison
                    const hexToRgb = (hex) => {
                        const r = parseInt(hex.slice(1, 3), 16);
                        const g = parseInt(hex.slice(3, 5), 16);
                        const b = parseInt(hex.slice(5, 7), 16);
                        return [r, g, b];
                    };

                    if (!previousColor) break;

                    const [r1, g1, b1] = hexToRgb(color);
                    const [r2, g2, b2] = hexToRgb(previousColor);

                    // Calculate color difference (simple Euclidean distance)
                    const diff = Math.sqrt(
                        Math.pow(r1 - r2, 2) +
                        Math.pow(g1 - g2, 2) +
                        Math.pow(b1 - b2, 2)
                    );

                    // If colors are sufficiently different, use this color
                    if (diff > 150) break;

                } while (true);

                return color;
            }

            // Preset wheel data
            const presetWheels = {
                dollars: {
                    name: "You Get __ Dollars!",
                    items: [
                        "$1,000,000", "$500,000", "$250,000", "$100,000", "$50,000",
                        "$25,000", "$10,000", "$5,000", "$2,500", "$1,000",
                        "$500", "$250", "$100", "$50", "$25",
                        "$10", "$5", "$1", "-$1", "-$5", "-$10", "-$25", "-$50",
                        "-$100", "-$250", "-$500", "-$1,000", "-$2,500",
                        "-$5,000", "-$10,000", "-$25,000", "-$50,000", "-$100,000",
                        "-$250,000", "-$500,000", "-$1,000,000"
                    ],
                    colors: [
                        "#27ae60", "#27ae60", "#27ae60", "#27ae60", "#27ae60",
                        "#27ae60", "#27ae60", "#27ae60", "#27ae60", "#27ae60",
                        "#27ae60", "#27ae60", "#27ae60", "#27ae60", "#27ae60",
                        "#27ae60", "#27ae60", "#27ae60",
                        "#e74c3c", "#e74c3c", "#e74c3c", "#e74c3c", "#e74c3c",
                        "#e74c3c", "#e74c3c", "#e74c3c", "#e74c3c", "#e74c3c",
                        "#e74c3c", "#e74c3c", "#e74c3c", "#e74c3c", "#e74c3c",
                        "#e74c3c", "#e74c3c", "#e74c3c"
                    ]
                },
                countries: {
                    name: "Which Country Will Win",
                    items: [
                        "Afghanistan 🇦🇫", "Albania 🇦🇱", "Algeria 🇩🇿", "Andorra 🇦🇩", "Angola 🇦🇴",
                        "Antigua and Barbuda 🇦🇬", "Argentina 🇦🇷", "Armenia 🇦🇲", "Australia 🇦🇺", "Austria 🇦🇹",
                        "Azerbaijan 🇦🇿", "Bahamas 🇧🇸", "Bahrain 🇧🇭", "Bangladesh 🇧🇩", "Barbados 🇧🇧",
                        "Belarus 🇧🇾", "Belgium 🇧🇪", "Belize 🇧🇿", "Benin 🇧🇯", "Bhutan 🇧🇹",
                        "Bolivia 🇧🇴", "Bosnia and Herzegovina 🇧🇦", "Botswana 🇧🇼", "Brazil 🇧🇷", "Brunei 🇧🇳",
                        "Bulgaria 🇧🇬", "Burkina Faso 🇧🇫", "Burundi 🇧🇮", "Cambodia 🇰🇭", "Cameroon 🇨🇲",
                        "Canada 🇨🇦", "Cape Verde 🇨🇻", "Central African Republic 🇨🇫", "Chad 🇹🇩", "Chile 🇨🇱",
                        "China 🇨🇳", "Colombia 🇨🇴", "Comoros 🇰🇲", "Republic of the Congo 🇨🇬", "DR Congo 🇨🇩",
                        "Costa Rica 🇨🇷", "Côte d'Ivoire 🇨🇮", "Croatia 🇭🇷", "Cuba 🇨🇺", "Cyprus 🇨🇾",
                        "Czechia 🇨🇿", "Denmark 🇩🇰", "Djibouti 🇩🇯", "Dominica 🇩🇲", "Dominican Republic 🇩🇴",
                        "Ecuador 🇪🇨", "Egypt 🇪🇬", "El Salvador 🇸🇻", "Equatorial Guinea 🇬🇶", "Eritrea 🇪🇷",
                        "Estonia 🇪🇪", "Eswatini 🇸🇿", "Ethiopia 🇪🇹", "Fiji 🇫🇯", "Finland 🇫🇮",
                        "France 🇫🇷", "Gabon 🇬🇦", "Gambia 🇬🇲", "Georgia 🇬🇪", "Germany 🇩🇪",
                        "Ghana 🇬🇭", "Greece 🇬🇷", "Grenada 🇬🇩", "Guatemala 🇬🇹", "Guinea 🇬🇳",
                        "Guinea-Bissau 🇬🇼", "Guyana 🇬🇾", "Haiti 🇭🇹", "Honduras 🇭🇳", "Hungary 🇭🇺",
                        "Iceland 🇮🇸", "India 🇮🇳", "Indonesia 🇮🇩", "Iran 🇮🇷", "Iraq 🇮🇶",
                        "Ireland 🇮🇪", "Israel 🇮🇱", "Italy 🇮🇹", "Jamaica 🇯🇲", "Japan 🇯🇵",
                        "Jordan 🇯🇴", "Kazakhstan 🇰🇿", "Kenya 🇰🇪", "Kiribati 🇰🇮", "North Korea 🇰🇵",
                        "South Korea 🇰🇷", "Kosovo 🇽🇰", "Kuwait 🇰🇼", "Kyrgyzstan 🇰🇬", "Laos 🇱🇦",
                        "Latvia 🇱🇻", "Lebanon 🇱🇧", "Lesotho 🇱🇸", "Liberia 🇱🇷", "Libya 🇱🇾",
                        "Liechtenstein 🇱🇮", "Lithuania 🇱🇹", "Luxembourg 🇱🇺", "Madagascar 🇲🇬", "Malawi 🇲🇼",
                        "Malaysia 🇲🇾", "Maldives 🇲🇻", "Mali 🇲🇱", "Malta 🇲🇹", "Marshall Islands 🇲🇭",
                        "Mauritania 🇲🇷", "Mauritius 🇲🇺", "Mexico 🇲🇽", "Micronesia 🇫🇲", "Moldova 🇲🇩",
                        "Monaco 🇲🇨", "Mongolia 🇲🇳", "Montenegro 🇲🇪", "Morocco 🇲🇦", "Mozambique 🇲🇿",
                        "Myanmar 🇲🇲", "Namibia 🇳🇦", "Nauru 🇳🇷", "Nepal 🇳🇵", "Netherlands 🇳🇱",
                        "New Zealand 🇳🇿", "Nicaragua 🇳🇮", "Niger 🇳🇪", "Nigeria 🇳🇬", "North Macedonia 🇲🇰",
                        "Norway 🇳🇴", "Oman 🇴🇲", "Pakistan 🇵🇰", "Palau 🇵🇼", "Palestine 🇵🇸",
                        "Panama 🇵🇦", "Papua New Guinea 🇵🇬", "Paraguay 🇵🇾", "Peru 🇵🇪", "Philippines 🇵🇭",
                        "Poland 🇵🇱", "Portugal 🇵🇹", "Qatar 🇶🇦", "Romania 🇷🇴", "Russia 🇷🇺",
                        "Rwanda 🇷🇼", "Saint Kitts and Nevis 🇰🇳", "Saint Lucia 🇱🇨", "Samoa 🇼🇸", "San Marino 🇸🇲",
                        "Sao Tome and Principe 🇸🇹", "Saudi Arabia 🇸🇦", "Senegal 🇸🇳", "Serbia 🇷🇸", "Seychelles 🇸🇨",
                        "Sierra Leone 🇸🇱", "Singapore 🇸🇬", "Slovakia 🇸🇰", "Slovenia 🇸🇮", "Solomon Islands 🇸🇧",
                        "Somalia 🇸🇴", "South Africa 🇿🇦", "South Sudan 🇸🇸", "Spain 🇪🇸", "Sri Lanka 🇱🇰",
                        "Sudan 🇸🇩", "Suriname 🇸🇷", "Sweden 🇸🇪", "Switzerland 🇨🇭", "Syria 🇸🇾",
                        "Taiwan 🇹🇼", "Tajikistan 🇹🇯", "Tanzania 🇹🇿", "Thailand 🇹🇭", "Timor-Leste 🇹🇱",
                        "Togo 🇹🇬", "Tonga 🇹🇴", "Trinidad and Tobago 🇹🇹", "Tunisia 🇹🇳", "Turkey 🇹🇷",
                        "Turkmenistan 🇹🇲", "Tuvalu 🇹🇻", "Uganda 🇺🇬", "Ukraine 🇺🇦", "United Arab Emirates 🇦🇪",
                        "United Kingdom 🇬🇧", "United States 🇺🇸", "Uruguay 🇺🇾", "Uzbekistan 🇺🇿", "Vanuatu 🇻🇺",
                        "Vatican City 🇻🇦", "Venezuela 🇻🇪", "Vietnam 🇻🇳", "Yemen 🇾🇪", "Zambia 🇿🇲", "Zimbabwe 🇿🇼"]
                },
                birthday: {
                    name: "Your Birthday Comes You Win",
                    items: [
                        "Jan 1", "Jan 2", "Jan 3", "Jan 4", "Jan 5", "Jan 6", "Jan 7", "Jan 8", "Jan 9", "Jan 10", "Jan 11", "Jan 12", "Jan 13", "Jan 14", "Jan 15", "Jan 16", "Jan 17", "Jan 18", "Jan 19", "Jan 20", "Jan 21", "Jan 22", "Jan 23", "Jan 24", "Jan 25", "Jan 26", "Jan 27", "Jan 28", "Jan 29", "Jan 30", "Jan 31", "Feb 1", "Feb 2", "Feb 3", "Feb 4", "Feb 5", "Feb 6", "Feb 7", "Feb 8", "Feb 9", "Feb 10", "Feb 11", "Feb 12", "Feb 13", "Feb 14", "Feb 15", "Feb 16", "Feb 17", "Feb 18", "Feb 19", "Feb 20", "Feb 21", "Feb 22", "Feb 23", "Feb 24", "Feb 25", "Feb 26", "Feb 27", "Feb 28", "Feb 29", "Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13", "Mar 14", "Mar 15", "Mar 16", "Mar 17", "Mar 18", "Mar 19", "Mar 20", "Mar 21", "Mar 22", "Mar 23", "Mar 24", "Mar 25", "Mar 26", "Mar 27", "Mar 28", "Mar 29", "Mar 30", "Mar 31", "Apr 1", "Apr 2", "Apr 3", "Apr 4", "Apr 5", "Apr 6", "Apr 7", "Apr 8", "Apr 9", "Apr 10", "Apr 11", "Apr 12", "Apr 13", "Apr 14", "Apr 15", "Apr 16", "Apr 17", "Apr 18", "Apr 19", "Apr 20", "Apr 21", "Apr 22", "Apr 23", "Apr 24", "Apr 25", "Apr 26", "Apr 27", "Apr 28", "Apr 29", "Apr 30", "May 1", "May 2", "May 3", "May 4", "May 5", "May 6", "May 7", "May 8", "May 9", "May 10", "May 11", "May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18", "May 19", "May 20", "May 21", "May 22", "May 23", "May 24", "May 25", "May 26", "May 27", "May 28", "May 29", "May 30", "May 31", "Jun 1", "Jun 2", "Jun 3", "Jun 4", "Jun 5", "Jun 6", "Jun 7", "Jun 8", "Jun 9", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15", "Jun 16", "Jun 17", "Jun 18", "Jun 19", "Jun 20", "Jun 21", "Jun 22", "Jun 23", "Jun 24", "Jun 25", "Jun 26", "Jun 27", "Jun 28", "Jun 29", "Jun 30", "Jul 1", "Jul 2", "Jul 3", "Jul 4", "Jul 5", "Jul 6", "Jul 7", "Jul 8", "Jul 9", "Jul 10", "Jul 11", "Jul 12", "Jul 13", "Jul 14", "Jul 15", "Jul 16", "Jul 17", "Jul 18", "Jul 19", "Jul 20", "Jul 21", "Jul 22", "Jul 23", "Jul 24", "Jul 25", "Jul 26", "Jul 27", "Jul 28", "Jul 29", "Jul 30", "Jul 31", "Aug 1", "Aug 2", "Aug 3", "Aug 4", "Aug 5", "Aug 6", "Aug 7", "Aug 8", "Aug 9", "Aug 10", "Aug 11", "Aug 12", "Aug 13", "Aug 14", "Aug 15", "Aug 16", "Aug 17", "Aug 18", "Aug 19", "Aug 20", "Aug 21", "Aug 22", "Aug 23", "Aug 24", "Aug 25", "Aug 26", "Aug 27", "Aug 28", "Aug 29", "Aug 30", "Aug 31", "Sep 1", "Sep 2", "Sep 3", "Sep 4", "Sep 5", "Sep 6", "Sep 7", "Sep 8", "Sep 9", "Sep 10", "Sep 11", "Sep 12", "Sep 13", "Sep 14", "Sep 15", "Sep 16", "Sep 17", "Sep 18", "Sep 19", "Sep 20", "Sep 21", "Sep 22", "Sep 23", "Sep 24", "Sep 25", "Sep 26", "Sep 27", "Sep 28", "Sep 29", "Sep 30", "Oct 1", "Oct 2", "Oct 3", "Oct 4", "Oct 5", "Oct 6", "Oct 7", "Oct 8", "Oct 9", "Oct 10", "Oct 11", "Oct 12", "Oct 13", "Oct 14", "Oct 15", "Oct 16", "Oct 17", "Oct 18", "Oct 19", "Oct 20", "Oct 21", "Oct 22", "Oct 23", "Oct 24", "Oct 25", "Oct 26", "Oct 27", "Oct 28", "Oct 29", "Oct 30", "Oct 31", "Nov 1", "Nov 2", "Nov 3", "Nov 4", "Nov 5", "Nov 6", "Nov 7", "Nov 8", "Nov 9", "Nov 10", "Nov 11", "Nov 12", "Nov 13", "Nov 14", "Nov 15", "Nov 16", "Nov 17", "Nov 18", "Nov 19", "Nov 20", "Nov 21", "Nov 22", "Nov 23", "Nov 24", "Nov 25", "Nov 26", "Nov 27", "Nov 28", "Nov 29", "Nov 30", "Dec 1", "Dec 2", "Dec 3", "Dec 4", "Dec 5", "Dec 6", "Dec 7", "Dec 8", "Dec 9", "Dec 10", "Dec 11", "Dec 12", "Dec 13", "Dec 14", "Dec 15", "Dec 16", "Dec 17", "Dec 18", "Dec 19", "Dec 20", "Dec 21", "Dec 22", "Dec 23", "Dec 24", "Dec 25", "Dec 26", "Dec 27", "Dec 28", "Dec 29", "Dec 30", "Dec 31"
                    ]
                },
                food: {
                    name: "What to Eat Today",
                    items: [
                        "Pizza", "Burger", "Sushi", "Tacos", "Pasta", "Salad",
                        "Steak", "Chicken", "Fish", "Sandwich", "Soup", "Curry",
                        "Ramen", "BBQ", "Stir Fry", "Burrito", "Dumplings", "Noodles",
                        "Rice Bowl", "Seafood", "Vegetables", "Fruit", "Dessert", "Ice Cream"
                    ]
                },
                movie: {
                    name: "What Movie to Watch",
                    items: [
                        "Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance",
                        "Thriller", "Adventure", "Fantasy", "Animation", "Documentary", "Musical",
                        "Mystery", "Crime", "Western", "War", "Biography", "Family",
                        "Sports", "Superhero", "Historical", "Noir", "Satire", "Silent"
                    ]
                },
                color: {
                    name: "Random Color Picker",
                    items: [
                        "Red", "Orange", "Yellow", "Green", "Blue", "Purple",
                        "Pink", "Brown", "Black", "White", "Gray", "Cyan",
                        "Magenta", "Lavender", "Teal", "Maroon", "Navy", "Olive",
                        "Silver", "Gold", "Beige", "Turquoise", "Indigo", "Violet"
                    ]
                },
                exercise: {
                    name: "Daily Exercise",
                    items: [
                        "Running", "Cycling", "Swimming", "Weightlifting", "Yoga", "Pilates",
                        "Dancing", "Hiking", "Jumping Rope", "Push-ups", "Sit-ups", "Squats",
                        "Lunges", "Plank", "Burpees", "Jumping Jacks", "Stretching", "Walking",
                        "Rowing", "Elliptical", "Kickboxing", "Martial Arts", "Zumba", "Tai Chi"
                    ]
                },
                book: {
                    name: "Next Book to Read",
                    items: [
                        "Fiction", "Non-Fiction", "Mystery", "Sci-Fi", "Fantasy", "Romance",
                        "Thriller", "Horror", "Historical", "Biography", "Autobiography", "Memoir",
                        "Self-Help", "Science", "Philosophy", "Poetry", "Drama", "Comedy",
                        "Adventure", "Crime", "Graphic Novel", "Young Adult", "Children's", "Classic"
                    ]
                },
                travel: {
                    name: "Next Vacation Spot",
                    items: [
                        "Beach", "Mountains", "City", "Countryside", "Desert", "Forest",
                        "Island", "Lake", "River", "Ocean", "Historical Site", "Theme Park",
                        "Ski Resort", "Camping", "Cruise", "Road Trip", "Backpacking", "Luxury Resort",
                        "Safari", "Wine Country", "Cultural Tour", "Food Tour", "Adventure", "Relaxation"
                    ]
                },
                game: {
                    name: "Game to Play",
                    items: [
                        "Board Game", "Card Game", "Video Game", "Puzzle", "Word Game", "Trivia",
                        "Sports Game", "Strategy Game", "Action Game", "Adventure Game", "RPG", "Simulation",
                        "Party Game", "Dice Game", "Arcade Game", "Mobile Game", "Online Game", "Chess",
                        "Checkers", "Backgammon", "Dominoes", "Bingo", "Charades", "Pictionary"
                    ]
                },
                chore: {
                    name: "Chore Roulette",
                    items: [
                        "Dishes", "Laundry", "Vacuuming", "Mopping", "Dusting", "Bathroom Cleaning",
                        "Kitchen Cleaning", "Window Cleaning", "Garden Work", "Take Out Trash", "Recycling", "Organizing",
                        "Decluttering", "Cooking", "Grocery Shopping", "Pet Care", "Car Wash", "Yard Work",
                        "Bed Making", "Ironing", "Sweeping", "Wipe Surfaces", "Clean Fridge", "Clean Oven"
                    ]
                },
                song: {
                    name: "Song of the Day",
                    items: [
                        "Pop", "Rock", "Hip Hop", "R&B", "Jazz", "Blues",
                        "Country", "Electronic", "Classical", "Reggae", "Metal", "Folk",
                        "Indie", "Alternative", "Punk", "Soul", "Funk", "Disco",
                        "Gospel", "Latin", "World", "K-Pop", "J-Pop", "Opera"
                    ]
                },
                drink: {
                    name: "Drink Mixer",
                    items: [
                        "Water", "Coffee", "Tea", "Soda", "Juice", "Smoothie",
                        "Milkshake", "Lemonade", "Iced Tea", "Hot Chocolate", "Energy Drink", "Sports Drink",
                        "Wine", "Beer", "Cocktail", "Whiskey", "Vodka", "Rum",
                        "Tequila", "Gin", "Brandy", "Champagne", "Mocktail", "Infused Water"
                    ]
                },
                superhero: {
                    name: "Superhero Powers",
                    items: [
                        "Flight", "Super Strength", "Invisibility", "Teleportation", "Telepathy", "Telekinesis",
                        "Super Speed", "Healing", "Shape-shifting", "Element Control", "Time Manipulation", "Mind Control",
                        "Force Fields", "Energy Blasts", "X-Ray Vision", "Wall Crawling", "Water Breathing", "Size Changing",
                        "Intangibility", "Duplication", "Weather Control", "Animal Communication", "Super Intelligence", "Immortality"
                    ]
                },
                fortune: {
                    name: "Fortune Teller",
                    items: [
                        "Great Success", "Unexpected Money", "New Friendship", "Romance", "Travel Opportunity", "Career Advancement",
                        "Good Health", "Happiness", "Wisdom", "Creativity", "Adventure", "Inner Peace",
                        "Recognition", "Good Luck", "Positive Change", "Spiritual Growth", "Family Harmony", "Personal Achievement",
                        "New Beginning", "Unexpected Joy", "Inspiration", "Courage", "Patience", "Gratitude"
                    ]
                }
            };

            // Initialize the wheel
            function init() {
                // Check if audio is supported and can be enabled
                checkAudioSupport();

                // Generate the initial wheel
                generateWheel();

                // Set up event listeners
                setupEventListeners();

                // Load saved wheels
                loadSavedWheels();

                // Load saved theme
                loadSavedTheme();
            }

            // Check if audio is supported
            function checkAudioSupport() {
                audioEnabled = !!(window.AudioContext || window.webkitAudioContext);

                if (!audioEnabled) {
                    audioToggle.style.display = 'none';
                } else {
                    audioToggle.addEventListener('click', toggleAudio);
                }
            }

            // Toggle audio on/off
            function toggleAudio() {
                audioMuted = !audioMuted;

                if (audioMuted) {
                    audioToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
                    audioToggle.classList.add('muted');
                } else {
                    audioToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
                    audioToggle.classList.remove('muted');
                }
            }

            // Set up event listeners
            function setupEventListeners() {
                generateBtn.addEventListener('click', generateWheel);
                spinBtn.addEventListener('click', spinWheel);
                wheelContainer.addEventListener('click', spinWheel);

                spinSpeedSelect.addEventListener('change', function () {
                    if (this.value === 'custom') {
                        customDurationGroup.style.display = 'flex';
                    } else {
                        customDurationGroup.style.display = 'none';
                    }
                });

                saveBtn.addEventListener('click', saveWheel);
                loadBtn.addEventListener('click', loadWheel);
                copyBtn.addEventListener('click', copyWheelData);
                fileInput.addEventListener('change', handleFileUpload);

                if (secretModeTrigger) {
                    secretModeTrigger.addEventListener('click', function () {
                        const input = prompt("Enter command:");
                        if (input === "#secretmodeactivate") {
                            secretModeActive = true;
                            if (secretModeGroup) secretModeGroup.style.display = 'flex';
                            alert("Secret mode activated.");
                        } else if (input === "#secretmodedeactivate") {
                            secretModeActive = false;
                            if (secretModeGroup) secretModeGroup.style.display = 'none';
                            if (secretSliceSelect) secretSliceSelect.value = "-1";
                            alert("Secret mode deactivated.");
                        }
                    });
                }

                if (menuButton) {
                    menuButton.addEventListener('click', toggleMenu);
                } else {
                    console.error('menuButton not found');
                }

                // Menu navigation
                presetWheelsBtn.addEventListener('click', function () {
                    presetWheelsSection.style.display = 'block';
                    menuPanel.classList.remove('show');
                });

                customWheelBtn.addEventListener('click', function () {
                    presetWheelsSection.style.display = 'none';
                    menuPanel.classList.remove('show');
                });

                savedWheelsBtn.addEventListener('click', function () {
                    loadSavedWheels();
                    menuPanel.classList.remove('show');
                });

                // Preset wheel buttons (menu)
                dollarsBtn.addEventListener('click', function () { loadPresetWheel('dollars'); });
                countriesBtn.addEventListener('click', function () { loadPresetWheel('countries'); });
                birthdayBtn.addEventListener('click', function () { loadPresetWheel('birthday'); });
                foodBtn.addEventListener('click', function () { loadPresetWheel('food'); });
                movieBtn.addEventListener('click', function () { loadPresetWheel('movie'); });
                colorBtn.addEventListener('click', function () { loadPresetWheel('color'); });
                exerciseBtn.addEventListener('click', function () { loadPresetWheel('exercise'); });
                bookBtn.addEventListener('click', function () { loadPresetWheel('book'); });
                travelBtn.addEventListener('click', function () { loadPresetWheel('travel'); });
                gameBtn.addEventListener('click', function () { loadPresetWheel('game'); });
                choreBtn.addEventListener('click', function () { loadPresetWheel('chore'); });
                songBtn.addEventListener('click', function () { loadPresetWheel('song'); });
                drinkBtn.addEventListener('click', function () { loadPresetWheel('drink'); });
                superheroBtn.addEventListener('click', function () { loadPresetWheel('superhero'); });
                fortuneBtn.addEventListener('click', function () { loadPresetWheel('fortune'); });

                // Preset wheel buttons (main section)
                presetDollarsBtn.addEventListener('click', function () { loadPresetWheel('dollars'); });
                presetCountriesBtn.addEventListener('click', function () { loadPresetWheel('countries'); });
                presetBirthdayBtn.addEventListener('click', function () { loadPresetWheel('birthday'); });
                presetFoodBtn.addEventListener('click', function () { loadPresetWheel('food'); });
                presetMovieBtn.addEventListener('click', function () { loadPresetWheel('movie'); });
                presetColorBtn.addEventListener('click', function () { loadPresetWheel('color'); });
                presetExerciseBtn.addEventListener('click', function () { loadPresetWheel('exercise'); });
                presetBookBtn.addEventListener('click', function () { loadPresetWheel('book'); });
                presetTravelBtn.addEventListener('click', function () { loadPresetWheel('travel'); });
                presetGameBtn.addEventListener('click', function () { loadPresetWheel('game'); });
                presetChoreBtn.addEventListener('click', function () { loadPresetWheel('chore'); });
                presetSongBtn.addEventListener('click', function () { loadPresetWheel('song'); });
                presetDrinkBtn.addEventListener('click', function () { loadPresetWheel('drink'); });
                presetSuperheroBtn.addEventListener('click', function () { loadPresetWheel('superhero'); });
                presetFortuneBtn.addEventListener('click', function () { loadPresetWheel('fortune'); });

                // Wheel info panel event listeners
                if (wheelInfoBtn) {
                    wheelInfoBtn.addEventListener('click', function (e) {
                        e.stopPropagation(); // Prevent wheel spin
                        showWheelInfo();
                    });
                } else {
                    console.error('wheelInfoBtn not found');
                }

                if (closeInfoBtn) {
                    closeInfoBtn.addEventListener('click', hideWheelInfo);
                }
                if (wheelInfoOverlay) {
                    wheelInfoOverlay.addEventListener('click', hideWheelInfo);
                }
                if (resetStatsBtn) {
                    resetStatsBtn.addEventListener('click', resetWheelStats);
                }

                // Theme event listeners
                if (normalTheme) normalTheme.addEventListener('click', () => setTheme('normal'));
                if (darkTheme) darkTheme.addEventListener('click', () => setTheme('dark'));
                if (rainbowTheme) rainbowTheme.addEventListener('click', () => setTheme('rainbow'));

                // Theme panel toggle functionality
                if (themeCloseBtn) {
                    themeCloseBtn.addEventListener('click', hideThemePanel);
                }
                if (themeShowBtn) {
                    themeShowBtn.addEventListener('click', showThemePanel);
                }

                function hideThemePanel() {
                    if (themeSelector) {
                        themeSelector.classList.add('hidden');
                    }
                    if (themeShowBtn) {
                        themeShowBtn.classList.add('visible');
                    }
                }

                function showThemePanel() {
                    if (themeSelector) {
                        themeSelector.classList.remove('hidden');
                    }
                    if (themeShowBtn) {
                        themeShowBtn.classList.remove('visible');
                    }
                }

                // NEW FEATURE EVENT LISTENERS

                // Wheel Battles
                const startBattleBtn = document.getElementById('startBattleBtn');
                if (startBattleBtn) {
                    startBattleBtn.addEventListener('click', startWheelBattle);
                }

                // Casino
                const casinoSpinBtn = document.getElementById('casinoSpinBtn');
                const chips = document.querySelectorAll('.chip');
                if (casinoSpinBtn) {
                    casinoSpinBtn.addEventListener('click', casinoSpin);
                }
                chips.forEach(chip => {
                    chip.addEventListener('click', function () {
                        placeBet(parseInt(this.dataset.value));
                    });
                });

                // Weather
                const updateWeatherBtn = document.getElementById('updateWeatherBtn');
                if (updateWeatherBtn) {
                    updateWeatherBtn.addEventListener('click', updateWeather);
                }

                // Voice Control
                const micButton = document.getElementById('micButton');
                if (micButton) {
                    micButton.addEventListener('click', toggleVoiceControl);
                }

                // Background Selector
                const bgOptions = document.querySelectorAll('.bg-option');
                bgOptions.forEach(option => {
                    option.addEventListener('click', function () {
                        changeBackground(this.dataset.bg);
                    });
                });

                // Color Picker
                const colorPickers = document.querySelectorAll('.color-picker');
                colorPickers.forEach(picker => {
                    picker.addEventListener('click', function () {
                        selectColor(this.dataset.color);
                    });
                });

                // Slot Machine
                const slotSpinBtn = document.getElementById('slotSpinBtn');
                if (slotSpinBtn) {
                    slotSpinBtn.addEventListener('click', spinSlots);
                }

                // Social Sharing
                const shareTwitter = document.getElementById('shareTwitter');
                const shareFacebook = document.getElementById('shareFacebook');
                const shareInstagram = document.getElementById('shareInstagram');
                const shareTiktok = document.getElementById('shareTiktok');

                if (shareTwitter) shareTwitter.addEventListener('click', () => shareToSocial('twitter'));
                if (shareFacebook) shareFacebook.addEventListener('click', () => shareToSocial('facebook'));
                if (shareInstagram) shareInstagram.addEventListener('click', () => shareToSocial('instagram'));
                if (shareTiktok) shareTiktok.addEventListener('click', () => shareToSocial('tiktok'));

                // Mini Games
                const guessNumberGame = document.getElementById('guessNumberGame');
                const memoryGame = document.getElementById('memoryGame');
                const reactionGame = document.getElementById('reactionGame');
                const mathQuizGame = document.getElementById('mathQuizGame');
                const colorMatchGame = document.getElementById('colorMatchGame');

                if (guessNumberGame) guessNumberGame.addEventListener('click', () => playMiniGame('guess'));
                if (memoryGame) memoryGame.addEventListener('click', () => playMiniGame('memory'));
                if (reactionGame) reactionGame.addEventListener('click', () => playMiniGame('reaction'));
                if (mathQuizGame) mathQuizGame.addEventListener('click', () => playMiniGame('math'));
                if (colorMatchGame) colorMatchGame.addEventListener('click', () => playMiniGame('color'));

                // Reality Check
                const continueBtn = document.getElementById('continueBtn');
                const takeBreakBtn = document.getElementById('takeBreakBtn');
                if (continueBtn) continueBtn.addEventListener('click', () => hidePanel('realityCheck'));
                if (takeBreakBtn) takeBreakBtn.addEventListener('click', takeBreak);

                // Secret Achievement
                const secretBtn = document.getElementById('secretBtn');
                if (secretBtn) secretBtn.addEventListener('click', activateSecretMode);

                // Initialize new features
                updateWeather();
                startSessionTimer();
                initializeGameState();
                if (neonTheme) neonTheme.addEventListener('click', () => setTheme('neon'));
                if (theme3d) theme3d.addEventListener('click', () => setTheme('3d'));
                if (discoTheme) discoTheme.addEventListener('click', () => setTheme('disco'));

                // Load saved wheel statistics
                loadWheelStats();

                // Winning history expand/collapse
                const toggleWinHistoryBtn = document.getElementById('toggleWinHistoryBtn');
                if (toggleWinHistoryBtn) {
                    toggleWinHistoryBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        winHistoryExpanded = !winHistoryExpanded;
                        loadWheelStats();
                        updateWheelStatsDisplay();
                    });
                }
            };

            // Toggle menu panel
            function toggleMenu() {
                menuPanel.classList.toggle('show');
            }

            // Show wheel info panel
            function showWheelInfo() {
                if (!wheelInfoPanel || !wheelInfoOverlay) {
                    console.error('Required elements not found for wheel info panel');
                    return;
                }
                loadWheelStats(); // Load current wheel's specific stats
                updateWheelStatsDisplay();
                wheelInfoPanel.classList.add('show');
                wheelInfoOverlay.classList.add('show');
            }

            // Hide wheel info panel
            function hideWheelInfo() {
                wheelInfoPanel.classList.remove('show');
                wheelInfoOverlay.classList.remove('show');
            }

            // Update wheel stats display
            function updateWheelStatsDisplay() {
                const stats = getWheelStats();
                document.getElementById('totalSpins').textContent = stats.totalSpins;
                document.getElementById('totalSlices').textContent = slices.length;
                document.getElementById('wheelInfoName').textContent = wheelNameInput.value || 'Custom Wheel';

                // Update win history
                const winList = document.getElementById('winList');
                const toggleBtn = document.getElementById('toggleWinHistoryBtn');
                const historyCount = document.getElementById('historyCount');
                const wheelInfoPanelEl = document.getElementById('wheelInfoPanel');

                if (stats.winHistory.length === 0) {
                    winHistoryExpanded = false;
                    winList.innerHTML = '<p style="text-align: center; color: #999;">No spins yet!</p>';
                    winList.classList.remove('expanded');
                    winList.classList.add('collapsed');
                    if (historyCount) historyCount.textContent = '';
                    if (toggleBtn) {
                        toggleBtn.disabled = true;
                        toggleBtn.title = 'No history yet';
                        toggleBtn.innerHTML = '<i class="fas fa-chevron-down" aria-hidden="true"></i>';
                    }
                } else {
                    const total = stats.winHistory.length;
                    const indicesToRender = [];
                    if (winHistoryExpanded) {
                        for (let i = total - 1; i >= 0; i--) indicesToRender.push(i);
                    } else {
                        const start = Math.max(0, total - 10);
                        for (let i = total - 1; i >= start; i--) indicesToRender.push(i);
                    }

                    winList.classList.toggle('expanded', winHistoryExpanded);
                    winList.classList.toggle('collapsed', !winHistoryExpanded);

                    // Fullscreen panel + compact mode when expanded.
                    // Note: "one screen without scrolling" is physically impossible for arbitrarily many items
                    // unless we reduce per-item height; compact mode helps squeeze more items into the viewport.
                    if (wheelInfoPanelEl) {
                        wheelInfoPanelEl.classList.toggle('history-expanded', winHistoryExpanded);
                    }

                    // Auto-enable compact mode for large histories when expanded
                    const shouldCompact = winHistoryExpanded && total > 120;
                    winList.classList.toggle('compact', shouldCompact);

                    // Update history count display
                    if (historyCount) {
                        if (winHistoryExpanded) {
                            historyCount.textContent = `(${total} ${total === 1 ? 'result' : 'results'})`;
                        } else {
                            const shown = Math.min(10, total);
                            historyCount.textContent = `(${shown} of ${total})`;
                        }
                    }

                    if (toggleBtn) {
                        toggleBtn.disabled = false;
                        const hiddenCount = Math.max(0, total - 10);
                        if (winHistoryExpanded) {
                            toggleBtn.title = `Collapse history (showing all ${total} results)`;
                            toggleBtn.innerHTML = '<i class="fas fa-chevron-up" aria-hidden="true"></i>';
                        } else {
                            if (hiddenCount > 0) {
                                toggleBtn.title = `Show all ${total} results (${hiddenCount} more)`;
                                toggleBtn.innerHTML = `<i class="fas fa-chevron-down" aria-hidden="true"></i> <span style="font-size: 11px; margin-left: 4px;">+${hiddenCount}</span>`;
                            } else {
                                toggleBtn.title = 'Show all history';
                                toggleBtn.innerHTML = '<i class="fas fa-chevron-down" aria-hidden="true"></i>';
                            }
                        }
                    }

                    // Render
                    if (winHistoryExpanded && indicesToRender.length > 300) {
                        winList.innerHTML = '<p style="text-align: center; color: #999;"><i class="fas fa-spinner fa-spin"></i> Preparing full history…</p>';
                        setTimeout(() => renderWinHistory(winList, indicesToRender, stats), 10);
                    } else {
                        renderWinHistory(winList, indicesToRender, stats);
                    }
                }
            }

            // Render win history items efficiently
            function renderWinHistory(winList, indicesToRender, stats) {
                // Use DocumentFragment for better performance with large lists
                const fragment = document.createDocumentFragment();

                indicesToRender.forEach((actualIndex) => {
                    const win = stats.winHistory[actualIndex];
                    const winItem = document.createElement('div');
                    winItem.className = 'win-item';

                    const winText = document.createElement('span');
                    winText.className = 'win-text';
                    winText.style.flex = '1';
                    winText.textContent = win.result;

                    const winDate = document.createElement('span');
                    winDate.className = 'win-date';
                    winDate.textContent = new Date(win.timestamp).toLocaleDateString();

                    const deleteBtn = document.createElement('button');
                    deleteBtn.className = 'delete-spin-btn';
                    deleteBtn.setAttribute('data-index', actualIndex);
                    deleteBtn.title = 'Delete this result';
                    deleteBtn.textContent = '×';
                    deleteBtn.addEventListener('click', function (e) {
                        e.stopPropagation();
                        const index = parseInt(this.getAttribute('data-index'));
                        deleteSingleSpin(index);
                    });

                    winItem.appendChild(winText);
                    winItem.appendChild(winDate);
                    winItem.appendChild(deleteBtn);
                    fragment.appendChild(winItem);
                });

                winList.innerHTML = '';
                winList.appendChild(fragment);
            }

            // Load wheel statistics from localStorage
            function loadWheelStats() {
                const wheelName = wheelNameInput.value || 'Custom Wheel';
                const allWheelStats = JSON.parse(localStorage.getItem('allWheelStats') || '{}');
                wheelStats = allWheelStats[wheelName] || {
                    totalSpins: 0,
                    winHistory: [],
                    wheelName: wheelName
                };
            }

            // Save wheel statistics to localStorage
            function saveWheelStats() {
                const wheelName = wheelNameInput.value || 'Custom Wheel';
                const allWheelStats = JSON.parse(localStorage.getItem('allWheelStats') || '{}');
                wheelStats.wheelName = wheelName;
                allWheelStats[wheelName] = wheelStats;
                localStorage.setItem('allWheelStats', JSON.stringify(allWheelStats));
            }

            // Get wheel statistics
            function getWheelStats() {
                return wheelStats;
            }

            // Add win to statistics
            function addWinToStats(result) {
                // Load current wheel's stats first
                loadWheelStats();
                wheelStats.totalSpins++;
                wheelStats.winHistory.push({
                    result: result,
                    timestamp: new Date().toISOString(),
                    wheelName: wheelNameInput.value || 'Custom Wheel'
                });
                saveWheelStats();
            }

            // Delete a single spin from history
            function deleteSingleSpin(index) {
                const wheelName = wheelNameInput.value || 'Custom Wheel';
                const spinResult = wheelStats.winHistory[index].result;
                const spinDate = new Date(wheelStats.winHistory[index].timestamp).toLocaleString();

                if (confirm(`Are you sure you want to delete this spin result?\n\nResult: ${spinResult}\nDate: ${spinDate}\n\nThis action cannot be undone.`)) {
                    // Load current stats
                    loadWheelStats();

                    // Remove the specific spin
                    wheelStats.winHistory.splice(index, 1);

                    // Update total spins count
                    wheelStats.totalSpins = Math.max(0, wheelStats.totalSpins - 1);

                    // Save updated stats
                    saveWheelStats();

                    // Refresh the display
                    updateWheelStatsDisplay();
                }
            }

            // Reset wheel statistics
            function resetWheelStats() {
                const wheelName = wheelNameInput.value || 'Custom Wheel';
                if (confirm(`Are you sure you want to reset statistics for "${wheelName}"? This action cannot be undone.`)) {
                    wheelStats = {
                        totalSpins: 0,
                        winHistory: [],
                        wheelName: wheelName
                    };
                    saveWheelStats();
                    updateWheelStatsDisplay();
                    alert(`Statistics for "${wheelName}" have been reset!`);
                }
            }

            // Theme Functions
            function setTheme(theme) {
                // Remove all theme classes
                document.body.classList.remove('dark-mode', 'rainbow-mode', 'neon-mode', 'mode-3d', 'disco-mode');
                document.documentElement.classList.remove('dark-mode', 'rainbow-mode', 'neon-mode', 'mode-3d', 'disco-mode');

                // Add new theme class
                switch (theme) {
                    case 'dark':
                        document.body.classList.add('dark-mode');
                        createStars();
                        break;
                    case 'rainbow':
                        document.body.classList.add('rainbow-mode');
                        break;
                    case 'neon':
                        document.body.classList.add('neon-mode');
                        createNeonEffects();
                        break;
                    case '3d':
                        document.body.classList.add('mode-3d');
                        break;
                    case 'disco':
                        document.body.classList.add('disco-mode');
                        createDiscoEffects();
                        break;
                    default:
                        // Normal theme
                        break;
                }

                // Save theme preference
                localStorage.setItem('wheelTheme', theme);

                // Add screen shake effect
                document.body.classList.add('screen-shake');
                setTimeout(() => document.body.classList.remove('screen-shake'), 500);
            }

            // Create stars for dark mode
            function createStars() {
                const existingStars = document.querySelector('.stars');
                if (existingStars) existingStars.remove();

                const stars = document.createElement('div');
                stars.className = 'stars';
                stars.style.position = 'fixed';
                stars.style.top = '0';
                stars.style.left = '0';
                stars.style.width = '100%';
                stars.style.height = '100%';
                stars.style.pointerEvents = 'none';
                stars.style.zIndex = '0';

                for (let i = 0; i < 100; i++) {
                    const star = document.createElement('div');
                    star.style.position = 'absolute';
                    star.style.width = '2px';
                    star.style.height = '2px';
                    star.style.background = 'white';
                    star.style.borderRadius = '50%';
                    star.style.left = Math.random() * 100 + '%';
                    star.style.top = Math.random() * 100 + '%';
                    star.style.animation = `twinkle ${Math.random() * 3 + 1}s infinite`;
                    stars.appendChild(star);
                }

                document.body.appendChild(stars);

                // Add twinkle animation
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes twinkle {
                        0%, 100% { opacity: 0.3; }
                        50% { opacity: 1; }
                    }
                `;
                document.head.appendChild(style);
            }

            // Create neon effects
            function createNeonEffects() {
                // Add pulsing neon border to wheel
                const wheel = document.getElementById('wheel');
                if (wheel) {
                    wheel.style.border = '3px solid #00ffff';
                    wheel.style.boxShadow = '0 0 30px #00ffff, inset 0 0 30px #ff00ff';
                }
            }

            // Create disco effects
            function createDiscoEffects() {
                const audio = new Audio();
                audio.volume = 0.1;
                // Note: Would need actual disco music file
                // audio.src = 'disco-music.mp3';
                // audio.play();
            }

            // Enhanced winner celebration
            function megaCelebration() {
                // Screen shake
                document.body.classList.add('screen-shake');
                setTimeout(() => document.body.classList.remove('screen-shake'), 1000);

                // Rainbow winner text
                resultDisplay.classList.add('mega-winner');
                setTimeout(() => resultDisplay.classList.remove('mega-winner'), 5000);

                // Create extra confetti burst
                for (let i = 0; i < 100; i++) {
                    setTimeout(() => createConfetti(), i * 50);
                }

                // Create fireworks
                for (let i = 0; i < 20; i++) {
                    setTimeout(() => {
                        const x = Math.random() * window.innerWidth;
                        const y = Math.random() * window.innerHeight;
                        createFireworks(x, y);
                    }, i * 200);
                }
            }

            // Load saved theme
            function loadSavedTheme() {
                const savedTheme = localStorage.getItem('wheelTheme') || 'normal';
                setTheme(savedTheme);
            }

            // Generate the wheel
            function generateWheel() {
                const sliceCount = parseInt(sliceCountInput.value);

                // Clear the wheel
                wheel.innerHTML = '';
                sliceConfig.innerHTML = '';
                slices = [];

                // Create SVG wheel
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('width', '100%');
                svg.setAttribute('height', '100%');
                svg.setAttribute('viewBox', '0 0 400 400');
                svg.style.position = 'absolute';
                svg.style.top = '0';
                svg.style.left = '0';

                const radius = 180;
                const centerX = 200;
                const centerY = 200;

                // Calculate angle for each slice
                const anglePerSlice = 360 / sliceCount;

                // Generate slices
                let previousColor = null;
                for (let i = 0; i < sliceCount; i++) {
                    const color = getDistinctColor(i, previousColor);
                    previousColor = color;

                    // Calculate slice path
                    const startAngle = (i * anglePerSlice - 90) * Math.PI / 180; // Start from top
                    const endAngle = ((i + 1) * anglePerSlice - 90) * Math.PI / 180;

                    const x1 = centerX + radius * Math.cos(startAngle);
                    const y1 = centerY + radius * Math.sin(startAngle);
                    const x2 = centerX + radius * Math.cos(endAngle);
                    const y2 = centerY + radius * Math.sin(endAngle);

                    const largeArcFlag = anglePerSlice > 180 ? 1 : 0;

                    // Create SVG path for pie slice
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    const pathData = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
                    path.setAttribute('d', pathData);
                    path.setAttribute('fill', color);
                    path.setAttribute('stroke', '#ffffff');
                    path.setAttribute('stroke-width', '2');

                    svg.appendChild(path);

                    // Create text element
                    let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    const textAngleDeg = (i * anglePerSlice + anglePerSlice / 2 - 90);
                    const textAngleRad = textAngleDeg * Math.PI / 180;
                    const textRadius = radius * 0.85; // Align text towards the outer edge
                    const textX = centerX + textRadius * Math.cos(textAngleRad);
                    const textY = centerY + textRadius * Math.sin(textAngleRad);

                    text.setAttribute('transform', `translate(${textX}, ${textY}) rotate(${textAngleDeg})`);
                    text.setAttribute('text-anchor', 'end'); // Reads outwards towards the edge
                    text.setAttribute('dominant-baseline', 'middle');
                    text.setAttribute('fill', 'white');
                    text.setAttribute('font-weight', 'bold');

                    // Dynamic font size based on slice count to prevent overlap
                    const arcLength = radius * (2 * Math.PI / sliceCount);
                    const calculatedFontSize = Math.max(4, Math.min(18, arcLength * 0.6));
                    text.setAttribute('font-size', calculatedFontSize.toString());
                    text.setAttribute('font-family', 'Arial, sans-serif');
                    text.style.filter = 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))';
                    text.textContent = `IDEA ${i + 1}`;

                    svg.appendChild(text);

                    // Store slice data
                    slices.push({
                        text: `IDEA ${i + 1}`,
                        color: color,
                        path: path,
                        textElement: text
                    });

                    // Create slice configuration input
                    const sliceItem = document.createElement('div');
                    sliceItem.className = 'slice-item';

                    const colorInput = document.createElement('input');
                    colorInput.type = 'color';
                    colorInput.value = color;
                    colorInput.addEventListener('change', function () {
                        slices[i].color = this.value;
                        path.setAttribute('fill', this.value);
                    });

                    const textInput = document.createElement('input');
                    textInput.type = 'text';
                    textInput.value = `IDEA ${i + 1}`;
                    textInput.addEventListener('input', function () {
                        slices[i].text = this.value;
                        if (text) {
                            text.textContent = this.value;
                        }

                        // Quick visual feedback to make editing feel snappy.
                        sliceItem.classList.remove('edited');
                        // Force reflow so the animation can restart on rapid edits.
                        void sliceItem.offsetWidth;
                        sliceItem.classList.add('edited');
                    });

                    sliceItem.appendChild(colorInput);
                    sliceItem.appendChild(textInput);
                    sliceConfig.appendChild(sliceItem);
                }

                wheel.appendChild(svg);

                // Add center spin button
                const center = document.createElement('div');
                center.className = 'wheel-center';
                center.innerHTML = '<span>Spin</span>';
                center.addEventListener('click', spinWheel);
                wheel.appendChild(center);

                // Update wheel data
                updateWheelData();
                
                // Tournament Button visibility
                const startTourneyBtn = document.getElementById('startTournamentBtn');
                if (startTourneyBtn) {
                    if (slices && slices.length > 8) {
                        startTourneyBtn.style.display = 'inline-flex';
                    } else {
                        startTourneyBtn.style.display = 'none';
                    }
                }

                // Load stats for this specific wheel
                loadWheelStats();

                // Reset result display
                if (resultDisplay) {
                    resultDisplay.classList.remove('show', 'winner');
                    const resultText = resultDisplay.querySelector('.result-text');
                    if (resultText) resultText.textContent = 'Spin the wheel to see the result!';
                }
                if (resultCelebration) {
                    resultCelebration.classList.remove('show');
                }
            }

            // Update wheel data in textarea
            function updateWheelData() {
                const wheelData = {
                    name: wheelNameInput.value,
                    slices: slices
                };

                wheelDataTextarea.value = JSON.stringify(wheelData, null, 2);

                if (secretSliceSelect) {
                    secretSliceSelect.innerHTML = '<option value="-1">None (Random)</option>';
                    slices.forEach((slice, index) => {
                        const option = document.createElement('option');
                        option.value = index;
                        option.textContent = slice.text;
                        secretSliceSelect.appendChild(option);
                    });
                }
            }

            // Spin the wheel
            function spinWheel() {
                if (isSpinning) return;

                // Initialize/resume audio context on user interaction
                initTickAudio();

                isSpinning = true;
                resultDisplay.classList.remove('show');
                resultDisplay.classList.remove('winner');

                // Add spinning glow effect
                wheelContainer.classList.add('spinning');

                // Show real-time display
                if (realTimeDisplay) {
                    realTimeDisplay.classList.add('active');
                    currentSliceText.textContent = 'Selecting...';
                }

                // Create fireworks at wheel center during spin
                const wheelRect = wheelContainer.getBoundingClientRect();
                const centerX = wheelRect.left + wheelRect.width / 2;
                const centerY = wheelRect.top + wheelRect.height / 2;

                const fireworkInterval = setInterval(() => {
                    createFireworks(centerX + (Math.random() - 0.5) * 100, centerY + (Math.random() - 0.5) * 100);
                }, 200);

                // Determine spin duration
                let duration;
                switch (spinSpeedSelect.value) {
                    case 'slow':
                        duration = 15000;
                        break;
                    case 'fast':
                        duration = 8000;
                        break;
                    case 'custom':
                        duration = parseInt(customDurationInput.value);
                        break;
                    default: // medium
                        duration = 12000;
                }

                const rotations = 8 + Math.floor(Math.random() * 6);
                const startRotation = currentRotation;
                let totalRotationDelta = (rotations * 360) + (Math.random() * 360);

                if (secretModeActive && secretSliceSelect && secretSliceSelect.value !== "-1") {
                    const selectedIndex = parseInt(secretSliceSelect.value);
                    const sliceAngle = 360 / slices.length;
                    const desiredModulo = (360 - (selectedIndex * sliceAngle + sliceAngle / 2)) % 360;
                    const baseRotations = rotations * 360;
                    const remainderNeeded = (desiredModulo - (startRotation % 360) + 360) % 360;
                    totalRotationDelta = baseRotations + remainderNeeded;
                }

                currentRotation = startRotation + totalRotationDelta;
                const targetRotation = currentRotation;


                // Start ticking logic
                if (audioEnabled && !audioMuted) {
                    const sliceAngle = 360 / slices.length;
                    const startTime = performance.now();

                    function getBezierValue(t, p1, p2) {
                        return 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * Math.pow(t, 2) * p2 + Math.pow(t, 3);
                    }

                    function solveBezier(x, x1, x2) {
                        let low = 0, high = 1;
                        for (let i = 0; i < 15; i++) {
                            let t = (low + high) / 2;
                            if (getBezierValue(t, x1, x2) < x) low = t;
                            else high = t;
                        }
                        return (low + high) / 2;
                    }

                    let lastTickCount = 0;
                    const checkTick = () => {
                        const now = performance.now();
                        const timeProgress = Math.min((now - startTime) / duration, 1);

                        // Exact cubic bezier sync
                        const t = solveBezier(timeProgress, 0.17, 0.12);
                        const rotationProgress = getBezierValue(t, 0.67, 0.99);

                        const currentDegreesCovered = totalRotationDelta * rotationProgress;
                        const expectedTickCount = Math.floor(currentDegreesCovered / sliceAngle);

                        // Update real-time text
                        if (currentSliceText) {
                            const currentTotalRotation = (startRotation + currentDegreesCovered) % 360;
                            let currentIndex = Math.floor((360 - (currentTotalRotation % 360)) / sliceAngle) % slices.length;
                            if (currentIndex < 0) currentIndex += slices.length;

                            const currentSlice = slices[currentIndex];
                            if (currentSlice && currentSlice.text !== currentSliceText.textContent) {
                                currentSliceText.textContent = currentSlice.text;
                                // Subtle visual feedback on change
                                currentSliceText.style.display = 'inline-block';
                                currentSliceText.animate([
                                    { transform: 'scale(1)' },
                                    { transform: 'scale(1.2)', color: '#fd79a8' },
                                    { transform: 'scale(1)' }
                                ], { duration: 100 });
                            }
                        }
                        // Handle all missed ticks since last frame
                        while (expectedTickCount > lastTickCount) {
                            playTick();
                            lastTickCount++;
                        }

                        if (timeProgress < 1) {
                            requestAnimationFrame(checkTick);
                        }
                    };
                    requestAnimationFrame(checkTick);
                }

                // Apply rotation with CSS transition
                wheel.style.transition = `transform ${duration}ms cubic-bezier(0.17, 0.67, 0.12, 0.99)`;
                wheel.style.transform = `rotate(${targetRotation}deg)`;

                // Calculate which slice will be selected
                const normalizedRotation = targetRotation % 360;
                const sliceAngle = 360 / slices.length;
                let selectedIndex = Math.floor((360 - normalizedRotation) / sliceAngle) % slices.length;

                // Handle edge case where normalizedRotation is exactly 360
                if (selectedIndex < 0) selectedIndex += slices.length;

                // Stop spinning after duration and show result
                setTimeout(() => {
                    isSpinning = false;

                    // Remove spinning effects
                    wheelContainer.classList.remove('spinning');
                    clearInterval(fireworkInterval);

                    // Remove real-time display
                    if (realTimeDisplay) {
                        realTimeDisplay.classList.remove('active');
                    }

                    // Add winner celebration effects
                    resultDisplay.classList.add('winner');

                    // Create massive fireworks celebration
                    for (let i = 0; i < 50; i++) {
                        setTimeout(() => {
                            const x = Math.random() * window.innerWidth;
                            const y = Math.random() * window.innerHeight * 0.7;
                            createFireworks(x, y);
                        }, i * 50);
                    }

                    // Play win sound and confetti sound
                    if (audioEnabled && !audioMuted) {
                        winSound.currentTime = 0;
                        winSound.play();

                        confettiSound.currentTime = 0;
                        confettiSound.play();
                    }

                    // Display result
                    const selectedSlice = slices[selectedIndex];

                    // Update enhanced result display
                    if (resultDisplay && resultContent) {
                        const resultText = resultContent.querySelector('.result-text');
                        if (resultText) {
                            resultText.textContent = selectedSlice.text;
                            resultText.style.color = selectedSlice.color;
                            resultText.style.fontWeight = 'bold';
                            resultText.style.textShadow = `0 0 10px ${selectedSlice.color}`;
                        }

                        // Show the result display with animation
                        setTimeout(() => {
                            resultDisplay.classList.add('show');
                        }, 500);

                        // Add winner effect
                        setTimeout(() => {
                            resultDisplay.classList.add('winner');
                            if (resultCelebration) {
                                resultCelebration.classList.add('show');
                            }
                        }, 800);
                    } else {
                        console.error('Result display elements not found');
                    }

                    // Add to statistics
                    addWinToStats(selectedSlice.text);

                    // Process enhanced features
                    if (typeof processSpinResult === 'function') {
                        processSpinResult(selectedSlice.text);
                    }

                    // Create confetti effect and mega celebration
                    createConfetti();
                    megaCelebration();
                }, duration);
            }

            // Create confetti effect
            function createConfetti() {
                const confettiCount = 200;
                const container = document.querySelector('.container');

                // Clear any existing confetti
                document.querySelectorAll('.confetti').forEach(el => el.remove());

                // Create new confetti
                for (let i = 0; i < confettiCount; i++) {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';

                    // Random position, color, size, and shape
                    const left = Math.random() * 100;
                    const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
                    const size = Math.floor(Math.random() * 10) + 5;
                    const shape = Math.random() > 0.5 ? 'square' : 'circle';

                    confetti.style.left = `${left}%`;
                    confetti.style.top = '-20px';
                    confetti.style.backgroundColor = color;
                    confetti.style.width = `${size}px`;
                    confetti.style.height = `${size}px`;
                    confetti.style.borderRadius = shape === 'circle' ? '50%' : '0';

                    document.body.appendChild(confetti);

                    // Animate confetti falling
                    const animationDuration = Math.random() * 3000 + 2000;
                    const animationDelay = Math.random() * 500;

                    confetti.style.animation = `
                        fall ${animationDuration}ms ease-in ${animationDelay}ms forwards,
                        sway ${animationDuration / 1000}s ease-in-out ${animationDelay}ms alternate infinite
                    `;

                    // Define keyframes for falling and swaying
                    const style = document.createElement('style');
                    style.textContent = `
                        @keyframes fall {
                            to { transform: translateY(100vh) rotate(${Math.random() * 360}deg); }
                        }
                        @keyframes sway {
                            from { transform: translateX(-10px); }
                            to { transform: translateX(10px); }
                        }
                    `;
                    document.head.appendChild(style);

                    // Remove confetti after animation
                    setTimeout(() => {
                        confetti.remove();
                    }, animationDuration + animationDelay);
                }
            }

            // Save wheel to localStorage
            function saveWheel() {
                const wheelData = {
                    name: wheelNameInput.value || 'Unnamed Wheel',
                    slices: slices,
                    timestamp: new Date().toISOString()
                };

                const savedWheels = JSON.parse(localStorage.getItem('savedWheels') || '[]');
                savedWheels.push(wheelData);
                localStorage.setItem('savedWheels', JSON.stringify(savedWheels));

                alert('Wheel saved successfully!');
                loadSavedWheels();
            }

            // Load saved wheels from localStorage
            function loadSavedWheels() {
                const savedWheels = JSON.parse(localStorage.getItem('savedWheels') || '[]');
                savedWheelsList.innerHTML = '';

                if (savedWheels.length === 0) {
                    savedWheelsList.innerHTML = '<p>No saved wheels yet.</p>';
                    return;
                }

                savedWheels.forEach((wheelData, index) => {
                    const wheelItem = document.createElement('div');
                    wheelItem.className = 'saved-wheel-item';

                    const wheelName = document.createElement('div');
                    wheelName.className = 'saved-wheel-name';
                    wheelName.textContent = wheelData.name;

                    const wheelDate = document.createElement('div');
                    wheelDate.className = 'saved-wheel-date';
                    wheelDate.textContent = new Date(wheelData.timestamp).toLocaleDateString();

                    const loadButton = document.createElement('button');
                    loadButton.textContent = 'Load';
                    loadButton.addEventListener('click', () => {
                        loadWheelFromData(wheelData);
                    });

                    const deleteButton = document.createElement('button');
                    deleteButton.className = 'saved-wheel-delete';
                    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
                    deleteButton.addEventListener('click', (e) => {
                        e.stopPropagation();
                        deleteWheel(index);
                    });

                    wheelItem.appendChild(wheelName);
                    wheelItem.appendChild(wheelDate);
                    wheelItem.appendChild(loadButton);
                    wheelItem.appendChild(deleteButton);
                    savedWheelsList.appendChild(wheelItem);
                });
            }

            // Delete a saved wheel
            function deleteWheel(index) {
                const savedWheels = JSON.parse(localStorage.getItem('savedWheels') || '[]');
                savedWheels.splice(index, 1);
                localStorage.setItem('savedWheels', JSON.stringify(savedWheels));
                loadSavedWheels();
            }

            // Load wheel from data
            function loadWheelFromData(wheelData) {
                wheelNameInput.value = wheelData.name;
                sliceCountInput.value = wheelData.slices.length;
                generateWheel();

                // Update slice data
                wheelData.slices.forEach((slice, index) => {
                    slices[index].text = slice.text;
                    slices[index].color = slice.color;

                    // Update SVG elements
                    if (slices[index].path) {
                        slices[index].path.setAttribute('fill', slice.color);
                    }
                    if (slices[index].textElement) {
                        slices[index].textElement.textContent = slice.text;
                    }

                    const configInputs = document.querySelectorAll('.slice-item input');

                    if (configInputs[index * 2]) {
                        configInputs[index * 2].value = slice.color;
                    }

                    if (configInputs[index * 2 + 1]) {
                        configInputs[index * 2 + 1].value = slice.text;
                    }
                });

                updateWheelData();
            }

            // Load wheel from textarea
            function loadWheel() {
                try {
                    const wheelData = JSON.parse(wheelDataTextarea.value);
                    loadWheelFromData(wheelData);
                } catch (e) {
                    alert('Invalid wheel data. Please check the format and try again.');
                    console.error(e);
                }
            }

            // Copy wheel data to clipboard
            function copyWheelData() {
                wheelDataTextarea.select();
                document.execCommand('copy');
                alert('Wheel data copied to clipboard!');
            }

            // Handle file upload
            function handleFileUpload(event) {
                const file = event.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = function (e) {
                    try {
                        const wheelData = JSON.parse(e.target.result);
                        wheelDataTextarea.value = JSON.stringify(wheelData, null, 2);
                        loadWheel();
                    } catch (error) {
                        alert('Failed to load file. Please make sure it is a valid JSON file.');
                        console.error(error);
                    }
                };
                reader.readAsText(file);

                // Reset file input
                event.target.value = '';
            }

            // Load a preset wheel
            function loadPresetWheel(presetKey) {
                const preset = presetWheels[presetKey];
                if (!preset) return;

                wheelNameInput.value = preset.name;
                sliceCountInput.value = preset.items.length;
                generateWheel();

                // Update slice data
                preset.items.forEach((item, index) => {
                    slices[index].text = item;
                    if (preset.colors && preset.colors[index]) {
                        slices[index].color = preset.colors[index];
                    }

                    // Update slice elements (SVG paths and text)
                    if (slices[index].path) {
                        slices[index].path.setAttribute('fill', slices[index].color);
                    }

                    if (slices[index].textElement) {
                        slices[index].textElement.textContent = item;
                    }

                    // Update config panel inputs
                    const configInputs = document.querySelectorAll('.slice-item input');

                    if (configInputs[index * 2]) {
                        configInputs[index * 2].value = slices[index].color;
                    }

                    if (configInputs[index * 2 + 1]) {
                        configInputs[index * 2 + 1].value = item;
                    }
                });

                updateWheelData();
                loadWheelStats(); // Load stats for this preset wheel
                presetWheelsSection.style.display = 'none';
            }

            // Initialize the app
            init();

            // Initialize enhanced features after a short delay
            setTimeout(() => {
                if (typeof initializeEnhancedFeatures === 'function') {
                    initializeEnhancedFeatures();
                } else {
                    console.log('Enhanced features not loaded yet, retrying...');
                    setTimeout(() => {
                        if (typeof initializeEnhancedFeatures === 'function') {
                            initializeEnhancedFeatures();
                        }
                    }, 1000);
                }
            }, 500);

            // Expose required variables/functions for Tournament Module
            window.getWheelSlices = () => slices;
            window.generateWheel = generateWheel;
