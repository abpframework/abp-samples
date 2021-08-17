$(function () {
    var DOWNLOAD_ENDPOINT = "/download";

    var downloadForm = $("form#DownloadFile");
    var $formUpload = $('form#UploadFileForm');
    
    downloadForm.submit(function (event) {
        event.preventDefault();

        var fileName = $("#fileName").val().trim();

        var downloadWindow = window.open(
            DOWNLOAD_ENDPOINT + "/" + fileName,
            "_blank"
        );
        downloadWindow.focus();
    });

    $("#UploadFileDto_File").change(function () {
        var fileName = $(this)[0].files[0].name;

        $("#UploadFileDto_Name").val(fileName);
    });

    
    $formUpload.on('submit', function (e) {
        e.preventDefault();
        if ($formUpload.valid()) {
            abp.ui.setBusy();
            $formUpload.ajaxSubmit({
                success: function () {
                    abp.ui.clearBusy();
                    abp.notify.success("File uploaded");
                },
                error: function () {
                    abp.ui.clearBusy();
                    abp.notify.error("Error when file upload");
                }
            });
        }
        else {
            abp.message.error("Check form");
        }
    });
    
});