var framework = (function(){
    var gFramework = {
        fps: 60,
        canvas: null,
        width: 0,
        height: 0,
        keyPressTime: 0.2,
        refresh: true,
        onSetup: null,
        onStart: null,
        onKeyPress: null,
        onUpdate: null,
        onRender: null,
        KEYCODE:{
            up: 38,
            down: 40,
            left: 37,
            right: 39,
            space: 32
        },
        start:start,
        setup: setup,
        pause: pause
    }
    var gTimerID = null

    function installTimer () {
        console.log('install timer')
        clearTimeout(gTimerID)
        let lastDate = new Date()
        gTimerID = setTimeout(function() {
            if(typeof this.onUpdate == 'function'){
                this.onUpdate((new Date() - lastDate) / 1000)
            }

            if (typeof this.onRender == 'function') {
                // this.onRender(this.canvas.getContext('2d'))

                if (this.refresh) {
                    console.log('refresh', this.refresh)
                    this.refresh = false
                    this.onRender(this.canvas.getContext('2d'))
                }
            }

            installTimer()
        }.bind(gFramework), 1000 / gFramework.fps)
    }
    function start () {
        if (typeof this.onStart == 'function') {
            this.onStart()
        }
        installTimer()
    }

    function setup (canvas) {
        console.log('framework setup')
        this.canvas = canvas
        this.width = canvas.width
        this.height = canvas.height

        var keyEventTimerID = null
        document.onkeydown = function(event) {
            clearInterval(keyEventTimerID)

            var triggerEvent = function() {
                if(typeof gFramework.onKeyPress == 'function') {
                    gFramework.onKeyPress(event.keyCode)
                }
            }

            keyEventTimerID = setInterval(triggerEvent, 1000 * gFramework.keyPressTime)
            triggerEvent()
        }

        document.onkeyup = function(event) {
            clearInterval(keyEventTimerID)
            keyEventTimerID = null
        }

        if (typeof this.onSetup == 'function') {
            this.onSetup()
        }
    }

    function pause () {
        if (gTimerID === null) {
            installTimer()
        } else {
            clearTimeout(gTimerID)
            gTimerID = null
        }
    }

    return gFramework
})()