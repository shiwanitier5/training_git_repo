$(document).ready(function() {
    console.log("Its loading");
    chrome.storage.local.get(['accessToken'], function(res) {
        if (res.accessToken) {
            window.location.replace('popup.html');
        } else {
            $("#login").click(function() {
                console.log("Its clicking");
                let email = $("#email").val();
                console.log("Email ", email);
                var accessToken = '';
                $.ajax({
                    type: "POST",
                    url: "http://app.fbdomination.io/users/login",
                    data: { email: email },
                }).done(function(res) {
                    console.log("Message");
                    if (res.http_code == 200) {
                        if (res.accessToken) {
                            chrome.storage.local.set({ 'accessToken': res.accessToken }, function() {
                                window.location.replace('popup.html');

                            });
                        }
                    }
                });
            });






        }


    });
});


// $("#login").click(function() {
//     console.log("Its clicking");
//     let email = $("#email").val();
//     console.log("Email ", email);
//     var accessToken = '';
//     $.ajax({
//         type: "POST",
//         url: "http://app.fbdomination.io/users/login",
//         data: { email: email },
//     }).done(function(res) {
//         console.log("Message");
//         if (res.http_code == 200) {
//             if (res.accessToken) {
//                 chrome.storage.local.set({ 'accessToken': res.accessToken }, function() {
//                     window.location.replace('popup.html');

//                 });
//             }
//         }
//     });
// });     


//if (res.accessToken) {
//(window.localStorage.setItem("accessToken", res.accessToken));

//window.location.replace('popup.html');


//console.log("token set : ", window.localStorage.getItem("accessToken"))
//if (window.localStorage.getItem("accessToken")) {
//
// } else {
//window.location.replace('login.html');
// }


//}
//}