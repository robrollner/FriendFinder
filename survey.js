let newFriend = {};
let bestFriend = {
    diff: 99,
    name: '',
    picture: ''
};

$('#submit').on('click', () => {
    var corgiLover = $('#name').val().trim();
    var pic = $('#picture').val().trim();
    var ans1 = $('#quest1').val().trim();
    var ans2 = $('#quest2').val().trim();
    var ans3 = $('#quest3').val().trim();
    var ans4 = $('#quest4').val().trim();
    var ans5 = $('#quest5').val().trim()
    var ans6 = $('#quest6').val().trim();
    var ans7 = $('#quest7').val().trim();
    var ans8 = $('#quest8').val().trim();
    var ans9 = $('#quest9').val().trim();
    var ans10 = $('#quest10').val().trim();

    if (corgiLover === "" || pic === "") {
        alert('Faceless men do not love Corgis, please provide your name and picture')
    } else {
        newFriend = {
            name: corgiLover,
            picture: pic,
            scores: [ans1,
                ans2,
                ans3,
                ans4,
                ans5,
                ans6,
                ans7,
                ans8,
                ans9,
                ans10
            ]
        }

        friendSurvey(corgiLover.scores);

        function updateData() {
            $.post({ url: '/api/friends', contentType: 'application/json' }, JSON.stringify(corgiLover));
        }

        $('name').val('');
        $('picture').val('');
        $('#quest1').val('');
        $('#quest2').val('');
        $('#quest3').val('');
        $('#quest4').val('');
        $('#quest5').val('');
        $('#quest6').val('');
        $('#quest7').val('');
        $('#quest8').val('');
        $('#quest9').val('');
        $('#quest10').val('');

    }
})