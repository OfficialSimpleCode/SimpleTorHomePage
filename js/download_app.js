function myFunction() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.open("https://apps.apple.com/il/app/simple-tor/id6444347892", '_blank');
    } else if (/android/i.test(userAgent)) {
        window.open("https://play.google.com/store/apps/details?id=com.simpletor.management_system_app&hl=iw", '_blank');
    }else{
        window.location = "index.html"
    }
};