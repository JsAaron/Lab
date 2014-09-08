/**
 * Utilities for handling pub-sub events.
 * @author Jesse Wong (@straybugs)
 */
 
'use strict';
 
/**
 * An event.
 * @constructor
 */
function PubSubEvent() {
  this.events = {};
}
 
PubSubEvent.prototype = {
  
  /**
   * Listen to a specific type of event.
   * @param {string} type The event type.
   * @param {...function} methods Will be called 
   *     when the specific type of event is triggerd.
   * @return {Boolean} Whether the methods were added successfully.
   */
  listen: function(type) {
    if (typeof(type) === 'string') {
      var evt = this.events[type]
      , args = Array.prototype.slice.call(arguments, 1)
      , len = args.length
      , i
      ;
      if (evt === undefined) {
        evt = this.events[type] = [];
      }
      for (i = 0; i < len; i += 1) {
        if (typeof(args[i]) !== 'function') {
          return false;
        }
      }
      this.events[type] = evt.concat(args);      
      return true;
    }
    return false;
  },
  
  /**
   * Remove events.
   * @param {string=} type The specific type of
   *     event that will be removed. If omitted, all
   *     events will be removed.
   * @param {function=} method The specific
   *     method that will be removed. If omitted, all
   *     methods in the specific event will be removed.
   */
  remove: function(type, method) {
    if (typeof(type) === 'string') {
      if (this.events[type]) {
        var evt = this.events[type];
        if (typeof(method) === 'function') {
          for (var i = 0; i < evt.length; i += 1) {
            if (evt[i] === method) {
              evt.splice(i--, 1);
            }
          }
        } else {
          this.events[type] = [];
        }
      }
    } else {
      this.events = {};
    }
  },
  
  /**
   * Trigger events.
   * @param {string} type The specific type of
   *     event that will be triggerd.
   * @param {...*} arguments These arguments will be passed to
   *     callback methods and the context of the callback
   *     motheds would be the same as trigger method.
   */
  trigger: function(type) {
    var evt
    , len
    ;
    if (typeof(type) === 'string') {
      if (evt = this.events[type]) {
        len = evt.length;
        for (var i = 0; i < len; i += 1) {
          evt[i].apply(this, Array.prototype.slice.call(arguments, 1));
        }
      }
    }
  }
}