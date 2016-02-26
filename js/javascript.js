$(document).ready(function(){

    $("input.test").on("click", function (e) {
        $("input.test").removeClass('checked');
        $(this).addClass('checked');
    });

    $(".css_btn_class").on("click", function (e) {
        //alert("果然是個聰明人!");

        $('.adsbygoogle').push({});
        if(!$('input.test').hasClass('checked')){
            alert('請先選擇喜歡的神奇寶貝優~');

        }else{

        var checked_ad =  TestGame($("input.test.checked").val());
        //TestGame($("input.test.checked").val());
        //console.log( TestGame($("input.test.checked").val()));
        //console.log(checked);
        FB.ui(
            {
                method: 'feed',
                name: '如果大木博士給你選你的第一支神奇寶貝，你會選哪一隻?',
                link: 'http://qn5566.github.io/FBGame/',
                picture: checked_ad,
                caption: '大木博士的心理測驗',
                description: '神奇寶貝決定了你的性格',
                message: '11111'
            },

            function (response) {
                //console.log(response);
                //console.log(response.post_id);
                //if (response && response.post_id) {
                    alert('順利發佈消息摟~');
                //} else {
                //    //alert('沒有發送成功!哭哭');
                //}
            }
        );

        }
    })


})


 function TestGame(chec){
     var checked ='';
     console.log(chec);
     var ma0 = "http://www.vikilife.com/wp-content/uploads/2013/03/03194-15.jpg";
     var ma1 = "http://d.facdn.net/art/huiro/1326007702.huiro_004.png";
     var ma2 = "http://attachment.van698.com/forum/201504/04/214651vc11z80jzjcx8xgr.jpg";
     var ma3 = "http://pomose.weebly.com/uploads/1/6/0/4/16043340/820353525.png?194";
    switch(chec){
        case '0':
            checked = ma0;

            break;
        case '1':
            checked = ma1;

            break;
        case '2':
            checked = ma2;

            break;
        case '3':
            checked = ma3;

            break;

    }
     return checked;
}



