(function ($, window, document, undefined) {
    $.widget("mobile.backToTop", $.mobile.widget, {
        options:{
            text:'Back to top',
            theme:'a',
            position:'topleft',
            id:'backToTop'
        },
        _create:function () {
            $('html, body').append('<a href="" id="' + this.options.id + '" data-role="button" data-icon="arrow-u" data-theme="' + this.options.theme + '">' + this.options.text + '</a>');
            this.$bttElement = $('#' + this.options.id);
            this.bindEvents();
            this.position(this.options.position);
            $('body').trigger('create');

        },
        bindEvents:function () {
            $(window).bind('scrollstop',{bttElement : this.$bttElement}, this._scrollStop);
            $(window).bind('scrollstart', {bttElement : this.$bttElement}, this._scrollstart);
            this.$bttElement.click(this.click);
        },
        click:function () {
            $("html, body").animate({scrollTop:0});
        },
        _scrollstart:function (event) {
            event.data.bttElement.hide();
        },
        _scrollStop:function (event) {
            var windowHeight = $(window).height();
            if (window.pageYOffset > windowHeight) {
                event.data.bttElement.fadeIn('slow');
            }
        },
        position:function (position) {
            var backToTopCss = {
                position:'fixed',
                display:'none',
                top:'',
                right:'',
                bottom:'',
                left:''
            }
            switch (position) {
                case 'topright':
                    backToTopCss.top = '0px';
                    backToTopCss.right = '0px';
                    break;
                case 'bottomright':
                    backToTopCss.bottom = '0px';
                    backToTopCss.right = '0px';
                    break;
                case 'bottomleft':
                    backToTopCss.bottom = '0px';
                    backToTopCss.left = '0px';
                    break;
                default:
                    backToTopCss.top = '0px';
                    backToTopCss.left = '0px';
            }
            this.$bttElement.css(backToTopCss);
        }
    });
})(jQuery, window, document);