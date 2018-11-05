var slide_time = 1200;
var change_point = slide_time / 2;
var right_arrow = $('.easytransitions_navigation__right');
var left_arrow = $('.easytransitions_navigation__left');
var btn_about = $('#abt_btn');
var slide_amount = $('.easytransitions section').length;
var current_slide = 1;
var on = 1;
btn_about.click(function () {
 if (on == 1) {
        on = 0;
        if (current_slide < slide_amount) {
            current_slide++;
            var active_slide = $('.active_slide').next();
            set_transition(active_slide);
            setTimeout(function () {
                $('.active_slide').hide().removeClass('active_slide').next().addClass('active_slide').show();
            }, change_point);
            setTimeout(function () {
                on = 1;
            }, slide_time);
        } else {
        }
    }
});
/* right_arrow.click(function () {
    if (on == 1) {
        on = 0;
        if (current_slide < slide_amount) {
            current_slide++;
            var active_slide = $('.active_slide').next();
            set_transition(active_slide);
            setTimeout(function () {
                $('.active_slide').hide().removeClass('active_slide').next().addClass('active_slide').show();
            }, change_point);
            setTimeout(function () {
                on = 1;
            }, slide_time);
        } else {
        }
    }
});
left_arrow.click(function () {
    if (on == 1) {
        on = 0;
        if (current_slide > 1) {
            current_slide--;
            var active_slide = $('.active_slide').prev();
            set_transition(active_slide);
            setTimeout(function () {
                $('.active_slide').hide().removeClass('active_slide').prev().addClass('active_slide').show();
            }, change_point);
            setTimeout(function () {
                on = 1;
            }, slide_time);
        } else {
        }
    }
}); */
function set_transition(tran) {
    var transition_type = tran.data('transition');
    $('.easytransitions_transition div').each(function () {
        $(this).removeClass(this.className.split(' ').pop());
        setTimeout(function () {
            $('.easytransitions_transition div').addClass(transition_type);
        }, 100);
    });
}