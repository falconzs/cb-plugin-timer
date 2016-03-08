
var DefineClass = require('define-class'),
    PluginAbstract = require('cb-framework').pluginAbstract,
    TimerPlugin = DefineClass(PluginAbstract, {

        init: function() {
            this.startTime = 0;
            this.timeAdded = 0;

            this.commands = {
                starttimer: {
                    access: ['host', 'mod'],
                    handler: this.startTimer,
                    description: 'Start a new timer. Expects the first argument to be the number of minutes',
                    params: /(\d+)/
                },
                stoptimer: {
                    access: ['host', 'mod'],
                    handler: this.stopTimer
                },
                addtime: {
                    access: ['host', 'mod'],
                    handler: this.addTime,
                    params: /(\d+)/
                },
                timeleft: {
                    access: ['host', 'mod'],
                    handler: this.timeLeft
                }
            };
            this._super();
        },

        startTimer: function(fromUser, noOfMinutes) {
            // There is no timer already running
            if (startTime == 0 && timeAdded == 0) {
                // Check if a valid option was sent with /starttimer
                if (t >= 0 && t.toString().indexOf(".") == -1) {
                    timerDuration = t;
                    // Notice of timer start
                    if (mod != null) {
                        this.api.sendNotice(fromUser.name + ' has set a timer for ' + timerDuration + ' minutes!', '', purple);
                    }
                    // Local variable to convert noticeTime (minutes) to milliseconds
                    var millis = timerDuration * 60000;
                    var fiveMinutes = millis - 300000;
                    var oneMinute = millis - 60000;

                    // Actual timer
                    this.api.setTimeout(this.calculateTime.bind(this), millis);
                    // Five minutes remaining announcement
                    if (fiveMinutes > 0) {
                        cb.setTimeout(fiveMinuteWarning, fiveMinutes);
                    }
                    // One minute remaining announcement
                    this.api.setTimeout(oneMinuteWarning, oneMinute);
                    // Set the start time
                    startTime = new Date();
                } else if (t != null) {
                    this.api.sendNotice(t + ' is not a valid option for /starttimer.\nType /ubhelp starttimer to see how to use /starttimer.', mod, "#fee");
                } else if (t == null) {
                    this.api.sendNotice('You did not enter a valid option for /starttimer.\nType /ubhelp starttimer to see how to use /starttimer.', mod, "#fee");
                }
            } else if (startTime != 0 && timeAdded != 0 && mod == null) {
                // There is a timer running and time has been added
                this.timeAdded = 0;
                this.timerDuration = t;
                var millis = timerDuration * 60000;
                var fiveMinutes = millis - 300000;
                var oneMinute = millis - 60000;

                cb.setTimeout(timer, millis);

                if (fiveMinutes > 0) {
                    this.api.setTimeout(fiveMinuteWarning, fiveMinutes);
                }
                this.api.setTimeout(oneMinuteWarning, oneMinute);
            } else if (startTime != 0 && timeAdded == 0 || startTime != 0 && timeAdded != 0 && mod != null) {
                // There is a timer running and someone tried to start a new timer
                this.api.sendNotice('There is a timer running already.', fromUser.name, "#fee");
            }
        },

        stopTimer: function() {
        },

        addTime: function(fromUser, noOfMinutes) {
        },

        timeLeft: function(fromUser) {
        },

        calculateTime: function() {

        }
    });

module.exports = TimerPlugin;
