var framework = (function(){
    var gFramework = {}
    var gTimerID = null

    function installTimer () {
        clearTimeout(gTimerID)
        
    }
    gFramework.start = function () {
        if (typeof this.onStart == 'function') {
            this.onStart()
        }
        installTimer()
    }


    return gFramework
})()