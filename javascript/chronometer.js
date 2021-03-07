class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime++, 1000);
    callback();
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
  getSecondsDec() {
    return this.twoDigitsNumber(this.getSeconds()).charAt(0);
  }
  getSecondsUni() {
    return this.twoDigitsNumber(this.getSeconds()).charAt(1);
  }
  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }
  twoDigitsNumber(nbSecOrMin) {
    return String(nbSecOrMin).padStart(2, "0");
  }
  twoDigitsNumberObj() {
    return {
      minutes: this.twoDigitsNumber(this.getMinutes()),
      seconds: this.twoDigitsNumber(this.getSeconds()),
    };
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let objStrTime = this.twoDigitsNumberObj();
    return `${objStrTime.minutes}:${objStrTime.seconds}`;
  }
}
