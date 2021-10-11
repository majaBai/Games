'use strict'

Array.prototype.all = function(f) {
    for (let i = this.length - 1; i >= 0; --i){
        if(!f(this[i])) return false
    }
    return true
}

Math.randomChoice = function (a) {
    let idx = this.floor(Math.random() * a.length)
    return a[idx]
}
