import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';

// Initialize Reveal.js
Reveal.initialize({
    // Display settings
    width: 1920,
    height: 1080,
    margin: 0.04,

    // Display controls
    controls: true,
    controlsLayout: 'bottom-right',
    controlsBackArrows: 'faded',

    // Progress bar
    progress: true,

    // Slide number
    slideNumber: 'c/t',

    // Push each slide change to the browser history
    history: true,

    // Enable keyboard shortcuts for navigation
    keyboard: true,

    // Enable the slide overview mode
    overview: true,

    // Vertical centering of slides
    center: false,

    // Enables touch navigation on devices with touch input
    touch: true,

    // Loop the presentation
    loop: false,

    // Change the presentation direction to be RTL
    rtl: false,

    // Randomize the order of slides each time the presentation loads
    shuffle: false,

    // Turns fragments on and off globally
    fragments: true,

    // Flags if the presentation is running in an embedded mode
    embedded: false,

    // Flags if we should show a help overlay when the questionmark
    // key is pressed
    help: true,

    // Flags if speaker notes should be visible to all viewers
    showNotes: false,

    // Auto-slide configuration
    autoSlide: 0,
    autoSlideStoppable: true,

    // Stop auto-sliding after user input
    autoSlideMethod: null,

    // Use this method for navigation when auto-sliding
    defaultTiming: null,

    // Enable slide navigation via mouse wheel
    mouseWheel: false,

    // Hide cursor if inactive
    hideInactiveCursor: true,
    hideCursorTime: 5000,

    // Opens links in an iframe preview overlay
    previewLinks: false,

    // Transition style
    transition: 'slide', // none/fade/slide/convex/concave/zoom

    // Transition speed
    transitionSpeed: 'default', // default/fast/slow

    // Transition style for full page slide backgrounds
    backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

    // Number of slides away from the current that are visible
    viewDistance: 3,

    // Number of slides away from the current that are visible on mobile
    mobileViewDistance: 2,

    // Parallax background
    parallaxBackgroundImage: '',
    parallaxBackgroundSize: '',

    // The display mode that will be used to show slides
    display: 'block',

    // PDF export configuration
    pdfMaxPagesPerSlide: 1,
    pdfSeparateFragments: true,
    pdfPageHeightOffset: -1,

    // Print configuration
    print: {
        showNotes: false,
        fragments: false
    }
});

// Add keyboard shortcuts for presentation
document.addEventListener('keydown', function(event) {
    // Press 'P' to toggle print mode
    if (event.key === 'p' || event.key === 'P') {
        if (event.ctrlKey || event.metaKey) {
            window.print();
        }
    }
});

// Add custom navigation helpers
Reveal.on('slidechanged', event => {
    // Log slide changes for analytics (if needed)
    console.log('Slide changed to:', event.indexh);
});

// Export PDF helper
window.printPDF = function() {
    window.location.href = window.location.href.split('?')[0] + '?print-pdf';
};
