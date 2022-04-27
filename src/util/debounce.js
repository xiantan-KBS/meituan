export default function debounce(fn, duration = 50) {
    var timer = null;
    return () => {
        console.log(1)
        clearInterval(timer);
        timer = setTimeout(function() {
            console.log(1)
            fn();
        }, 5)
    }
}