var vows = require('vows'),
    assert = require('assert');

var async = require('../fork').async;
var sleep = require('../fork').sleep;

vows.describe('async').addBatch({
    'pid': {
        topic: function () {
            return async (function () {
                return 42;
            });
        },

        'should > 0': function (pid) {
            assert.ok (pid > 0);
        }
    },

    'callback': {
        topic: function () {
            async (function () {
                return { "test": 42 };
            }, this.callback);
        },

        'returns 42': function (result) {
            assert.deepEqual (result, { "test": 42 });
        }
    }
}).export(module);
