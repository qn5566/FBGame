$(document).ready(function(){


    $(".css_btn_class").on("click", function (e) {
        alert(5);

        $.ajax({
            url: "push_trick.php",
            type: "get",
            data: $("#push_content").serialize(),
            success: function (msg) {

                $('#ffff').html(msg);

            }
        })


    })



})
