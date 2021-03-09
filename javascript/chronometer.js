/**
 * all process on time for chronometer with minutes second and millisecond
 *
 * @class Chronometer
 */
class Chronometer {
  /**
   *Creates an instance of Chronometer.
   * @memberof Chronometer
   */
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliIntervalId = 0;
    this.milliSeconds = 0;
  }
  /**
   * callback1 is executed every second, callback2 is executed every 10 milliseconds
   *
   * @param {function} callback1
   * @param {function} callback2
   * @memberof Chronometer
   */
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
  /**
   * @returns {number}
   * @memberof Chronometer
   */
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  /**
   * @returns {string}
   * @memberof Chronometer
   */
  getMinutesDec() {
    return this.twoDigitsNumber(this.getMinutes()).charAt(0);
  }
  /**
   * @returns {string}
   * @memberof Chronometer
   */
  getMinutesUni() {
    return this.twoDigitsNumber(this.getMinutes()).charAt(1);
  }
  /**
   * @returns {number}
   * @memberof Chronometer
   */
  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }
  /**
   * @returns {string}
   * @memberof Chronometer
   */
  getSecondsDec() {
    return this.twoDigitsNumber(this.getSeconds()).charAt(0);
  }
  /**
   * @returns {string}
   * @memberof Chronometer
   */
  getSecondsUni() {
    return this.twoDigitsNumber(this.getSeconds()).charAt(1);
  }
  /**
   * @returns {number}
   * @memberof Chronometer
   */
  getMilliseconds() {
    return this.milliSeconds;
  }
  /**
   * @returns {string}
   * @memberof Chronometer
   */
  getMilliSecondsDec() {
    return this.twoDigitsNumber(this.getMilliseconds()).charAt(0);
  }
  /**
   * @returns {string}
   * @memberof Chronometer
   */
  getMilliSecondsUni() {
    return this.twoDigitsNumber(this.getMilliseconds()).charAt(1);
  }
  /**
   * @returns {string}
   * @memberof Chronometer
   */
  twoDigitsNumber(nbSecOrMin) {
    return String(nbSecOrMin).padStart(2, "0");
  }
  /**
   * @returns {object}
   * @memberof Chronometer
   */
  twoDigitsNumberObj() {
    return {
      minutes: this.twoDigitsNumber(this.getMinutes()),
      seconds: this.twoDigitsNumber(this.getSeconds()),
      milliSeconds: this.twoDigitsNumber(this.getMilliseconds()),
    };
  }
  /**
   * clear intervals of startClick()
   *
   * @memberof Chronometer
   */
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.milliIntervalId);
  }
  /**
   * set currentTime and milliSeconds to 0
   *
   * @memberof Chronometer
   */
  resetClick() {
    this.currentTime = 0;
    this.milliSeconds = 0;
  }
  /**
   * returns a complete string of the time at the time of the call
   *
   * @returns {string}
   * @memberof Chronometer
   */
  splitClick() {
    let objStrTime = this.twoDigitsNumberObj();
    return `${objStrTime.minutes}:${objStrTime.seconds}:${objStrTime.milliSeconds}`;
  }
}
