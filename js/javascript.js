$(document).ready(function(){

    $("input.test").on("click", function (e) {
        $("input.test").removeClass('checked');
        $(this).addClass('checked');
    });

    $(".css_btn_class").on("click", function (e) {
        //alert("果然是個聰明人!");
        var checked ='';
        TestGame($("input.test.checked").val());
        //console.log($("input.test.checked").val());
        FB.ui(
            {
                method: 'share',
                name: 'Facebook Dialogs',
                href: 'http://qn5566.github.io/FBGame/',
                picture: checked,
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

    })


})


 function TestGame(checked){
    switch(checked){
        case 0:
            checked = ma0;
            break;
        case 1:
            checked = ma1;
            break;
        case 2:
            checked = ma2;
            break;
        case 3:
            checked = ma3;
            break;
    }
}


var ma0 = "http://www.vikilife.com/wp-content/uploads/2013/03/03194-15.jpg";
var ma1 = "http://d.facdn.net/art/huiro/1326007702.huiro_004.png";
var ma2 = "http://attachment.van698.com/forum/201504/04/214651vc11z80jzjcx8xgr.jpg";
var ma3 = "http://img.sj33.cn/uploads/allimg/201207/20120724102115753.jpg";
