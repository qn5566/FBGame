$(document).ready(function(){

    $("input.test").on("click", function (e) {
        $("input.test").removeClass('checked');
        $(this).addClass('checked');
    });

    $(".css_btn_class").on("click", function (e) {
        //alert("果然是個聰明人!");

        console.log($("input.test.checked").val());
        FB.ui(
            {
                method: 'share',
                name: 'Facebook Dialogs',
                href: 'http://qn5566.github.io/FBGame/',
                picture: 'http://www.vikilife.com/wp-content/uploads/2013/03/03194-15.jpg',
                caption: '大木博士的心理測驗',
                description: '神奇寶貝決定了你的性格',
                message: '11111'
            },

            function (response) {

                if (response && response.post_id) {
                    alert('順利發佈消息摟~');
                } else {
                    alert('沒有發送成功!哭哭');
                }
            }
        );

        //$.ajax({
        //    url: "push_trick.php",
        //    type: "get",
        //    data: $("#push_content").serialize(),
        //    success: function (msg) {
        //
        //        $('#ffff').html(msg);
        //
        //    }
        //})


    })



})
