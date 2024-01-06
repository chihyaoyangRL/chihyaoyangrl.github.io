$(document).ready(function () {
    document.getElementById("displayYear").innerHTML = new Date().getFullYear();
    $('.statusMenu').on('click', function () {
        $('body').toggleClass('sidebar-closed');
        if ($('body').hasClass('sidebar-closed')) {
            $('.avataruser').attr('hidden', true);
            $('.avataruser_mobile').removeClass('hidden');
            $('.forMobile').attr('hidden', false);
            $('.forWeb').attr('hidden', true);
        } else {
            $('.forMobile').attr('hidden', true);
            $('.forWeb').attr('hidden', false);
            $('.avataruser').attr('hidden', false);
            $('.avataruser_mobile').addClass('hidden');
        }
    });
});