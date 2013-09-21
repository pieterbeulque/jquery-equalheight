/*
 *  Equal height all elements that match a certain selector
 *
 *  @author Pieter Beulque
 */

;(function ($, window, document, undefined) {

    "use strict";

    function EqualHeight(els) {
        this.$els = els;
        this._name = 'equalHeight';
        this.init();
    }

    EqualHeight.prototype = {
        init: function () {
            var height = 0;

            this.$els.each(function () {
                var temp = $(this).height();
                height = (height < temp) ? temp : height;
            }).each(function () {
                $(this).height(height);
            });
        }
    };

    $.fn.equalHeight = function () {
        return new EqualHeight(this);
    };

})(jQuery, window, document);