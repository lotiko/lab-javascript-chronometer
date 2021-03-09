class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliIntervalId = 0;
    this.milliSeconds = 0;
  }

  startClick(callback1, callback2) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      this.milliSeconds = 0;
      if (callback1) callback1();
    }, 1000);
    this.milliIntervalId = setInterval(() => {
      this.milliSeconds++;
      if (callback2) callback2();
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getMinutesDec() {
    return this.twoDigitsNumber(this.getMinutes()).charAt(0);
  }
  getMinutesUni() {
    return this.twoDigitsNumber(this.getMinutes()).charAt(1);
  }
  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }
  getSecondsDec() {
    return this.twoDigitsNumber(this.getSeconds()).charAt(0);
  }
  getSecondsUni() {
    return this.twoDigitsNumber(this.getSeconds()).charAt(1);
  }
  getMilliSeconds() {
    return this.milliSeconds;
  }
  getMilliSecondsDec() {
    return this.twoDigitsNumber(this.getMilliSeconds()).charAt(0);
  }
  getMilliSecondsUni() {
    return this.twoDigitsNumber(this.getMilliSeconds()).charAt(1);
  }
  twoDigitsNumber(nbSecOrMin) {
    return String(nbSecOrMin).padStart(2, "0");
  }
  twoDigitsNumberObj() {
    return {
      minutes: this.twoDigitsNumber(this.getMinutes()),
      seconds: this.twoDigitsNumber(this.getSeconds()),
      milliSeconds: this.twoDigitsNumber(this.getMilliSeconds()),
    };
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.milliIntervalId);
  }
  resetClick() {
    this.currentTime = 0;
    this.milliSeconds = 0;
  }
  splitClick() {
    let objStrTime = this.twoDigitsNumberObj();
    return `${objStrTime.minutes}:${objStrTime.seconds}:${objStrTime.milliSeconds}`;
  }
}
