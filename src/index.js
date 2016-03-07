
var DefineClass = require('define-class'),
    PluginAbstract = require('cb-framework').pluginAbstract,
    TimerPlugin = DefineClass(PluginAbstract, {

        init: function() {
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
        },

        stopTimer: function() {
        },

        addTime: function(fromUser, noOfMinutes) {
        },

        timeLeft: function(fromUser) {
        }
    });

module.exports = TimerPlugin;
