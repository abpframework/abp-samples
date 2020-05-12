$(function() {
    var connection = new signalR.HubConnectionBuilder().withUrl("/signalr-hubs/chat").build();

    connection.on("ReceiveMessage", function (message) {
        $('#MessageList').append('<li><strong><i class="fas fa-long-arrow-alt-right"></i> ' + message + '</strong></li>');
    });

    connection.start().then(function () {

    }).catch(function (err) {
        return console.error(err.toString());
    });
    
    $('#SendMessageButton').click(function(e) {
        e.preventDefault();

        var targetUserName = $('#TargetUser').val();
        var message = $('#Message').val();
        $('#Message').val('');

        connection.invoke("SendMessage", targetUserName, message)
            .then(function() {
                $('#MessageList')
                    .append('<li><i class="fas fa-long-arrow-alt-left"></i> ' + abp.currentUser.userName + ': ' + message + '</li>');
            })
            .catch(function(err) {
                return console.error(err.toString());
            });
    });
});