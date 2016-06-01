'use strict';
new Polymer({
  is: 'simple-textarea',

  properties: {

    editable: {
      type: Boolean,
      value: false
    },

    value: {
      type: String,
      value: '',
      observer: '_valueObserver',
      notify: true
    }

  },

  /**
   * Observer
   */
    _valueObserver() {

    this.async(() => {
      [].forEach.call(this.$.textarea.children, child => {
        child.parentElement.removeChild(child);
      });
    }, 1);

  }

});
