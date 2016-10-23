<timer>
  <style scoped>
  .container {
    position:relative;
  }
  .container:after {
    clear: both;
  }
  .timer {
    font-size: 80pt;
    float: left;
    width: 25%;
  }
  .progress {
    width: 50%;
    float: left;
    position:absolute;
    top:35%;
    left: 25%;
  }
  .progress-bar {
  }

  </style>

  <div class="container">
    <div class="timer">{ Math.floor( time / 60 ) }:{ Math.floor( time % 60 ) }</div>
    <div class="progress">
  	  <div class="progress-bar progress-bar-striped active" role="progressbar" style="width: { progress }%;">
  		{ Math.floor( progress ) }%
  	  </div>
    </div>
  </div>
<br>


  <script>
    this.pomtime = 1500
    this.time = opts.start || this.pomtime
    this.progress = 0

    tick() {
      this.update({ time: this.time - 0.01666 })
      this.update({ progress: (this.pomtime - this.time) / this.pomtime * 100 })
    }

    var timer = setInterval(this.tick, 16.66)

    this.on('unmount', function() {
      clearInterval(timer)
    })
  </script>

</timer>
