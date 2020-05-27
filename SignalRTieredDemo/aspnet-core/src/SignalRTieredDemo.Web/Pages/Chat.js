$(function () {
    var connection = new signalR.HubConnectionBuilder().withUrl("/signalr-hubs/chat").build();

    connection.on("ReceiveMessage", function (message) {
        console.log(message);
        $('#MessageList').append('<li><strong><i class="fas fa-long-arrow-alt-right"></i> ' + message + '</strong></li>');
    });

    connection.start().then(function () {

    }).catch(function (err) {
        return console.error(err.toString());
    });

    $('#SendMessageButton').click(function (e) {
        e.preventDefault();

        var targetUserName = $('#TargetUser').val();
        var message = $('#Message').val();
        $('#Message').val('');

        $.post('https://localhost:44379/send-message',
            {
                targetUserName: targetUserName,
                message: message
            },
            function () {
                $('#MessageList')
                    .append('<li><i class="fas fa-long-arrow-alt-left"></i> ' + abp.currentUser.userName + ': ' + message + '</li>');
            });

        //connection.invoke("AddMessage", targetUserName, message)
        //    .then(function () {
        //        $('#MessageList')
        //            .append('<li><i class="fas fa-long-arrow-alt-left"></i> ' + abp.currentUser.userName + ': ' + message + '</li>');
        //    })
        //    .catch(function (err) {
        //        return console.error(err.toString());
        //    });
    });
});