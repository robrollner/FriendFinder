$(document).ready(function() {
    var newFriend = {};
    var bestFriend = {
        compare: 666,
        name: "",
        image: "",
    };



    $("#submitBtn").on("click", function() {
        let name = $("#name").val().trim();
        let image = $("#image").val().trim();
        let q1 = $("#q1").val().trim();
        let q2 = $("#q2").val().trim();
        let q3 = $("#q3").val().trim();
        let q4 = $("#q4").val().trim();
        let q5 = $("#q5").val().trim();
        let q6 = $("#q6").val().trim();
        let q7 = $("#q7").val().trim();
        let q8 = $("#q8").val().trim();
        let q9 = $("#q9").val().trim();
        let q10 = $("#q10").val().trim();
        if (name === "" ||
            image === "" ||
            q1 === "" ||
            q2 === "" ||
            q3 === "" ||
            q4 === "" ||
            q5 === "" ||
            q6 === "" ||
            q7 === "" ||
            q8 === "" ||
            q9 === "" ||
            q10 === "") {

            alert('Faceless men do not love Corgis, please provide your name and picture')

        } else {

            newFriend = {
                name: name,
                image: image,
                answers: [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
            }
        };

        friendSurvey(newFriend.answers);

        setTimeout(postData, 3000);

        function postData() {
            $.post({ url: '/api/friends', contentType: 'application/json' }, JSON.stringify(newFriend));
        }


        $("#name").val("");
        $("#image").val("");
        $("#q1").val("");
        $("#q2").val("");
        $("#q3").val("");
        $("#q4").val("");
        $("#q5").val("");
        $("#q6").val("");
        $("#q7").val("");
        $("#q8").val("");
        $("#q9").val("");
        $("#q10").val("");

    })


})


function friendSurvey(answers) {

    $.get('/api/friends', (friends) => {
        var count = 0;
        var friendArray = friends.length;

        for (var i = 0; i < friendArray.length; i++) {
            friendCompare(answers, friends[i]);
            count++;
        }

        if (count === friendArray) {
            $('#myModal').modal('toggle');
            $('#corgiLover').html(bestFriend.name + " loves Corgis too!");
            $('#corgiImg').attr('src', bestFriend.image);

        }
    })
}
friendSurvey();

function friendCompare(user, friend) {
    var compare = 0;
    var count = 0;

    for (var i = 0; i < 5; i++) {
        compare += Math.abs(user[i] - friend.answers[i]);
        count++;
    }

    if (count === 5) {
        if (compare < bestFriend.compare) {
            bestFriend.compare = compare;
            bestFriend.name = friend.name;
            bestFriend.image = friend.image;
        } else {
            return;
        }
    }
}