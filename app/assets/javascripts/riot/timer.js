riot.tag2('timer', '<div class="container"> <div class="timer">{Math.floor( time / 60 )}:{Math.floor( time % 60 )}</div> <div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" riot-style="width: {progress}%;"> {Math.floor( progress )}% </div> </div> </div> <br>', 'timer .container,[riot-tag="timer"] .container,[data-is="timer"] .container{ position:relative; } timer .container:after,[riot-tag="timer"] .container:after,[data-is="timer"] .container:after{ clear: both; } timer .timer,[riot-tag="timer"] .timer,[data-is="timer"] .timer{ font-size: 80pt; float: left; width: 25%; } timer .progress,[riot-tag="timer"] .progress,[data-is="timer"] .progress{ width: 50%; float: left; position:absolute; top:35%; left: 25%; } timer .progress-bar,[riot-tag="timer"] .progress-bar,[data-is="timer"] .progress-bar{ }', '', function(opts) {
    this.pomtime = 1500
    this.time = opts.start || this.pomtime
    this.progress = 0

    this.tick = function() {
      this.update({ time: this.time - 0.01666 })
      this.update({ progress: (this.pomtime - this.time) / this.pomtime * 100 })
    }.bind(this)

    var timer = setInterval(this.tick, 16.66)

    this.on('unmount', function() {
      clearInterval(timer)
    })
});
