$(function () {

    $("#upload-image").submit(function (e) {
        e.preventDefault();

        var file = document.getElementById("formFile").files[0];
        var formData = new FormData();
        formData.append("file", file);

        $.ajax(
            {
                url: "/api/image/upload",
                data: formData,
                processData: false,
                contentType: false,
                type: "POST",
                success: function (data) {
                    abp.message.success("Image saved successfully!");
                },
                error: function (err) {
                    abp.message.error("An error occured while saving the image.");
                }
            }
        );
    });

    $("#search-image").submit(function (e) {
        e.preventDefault();

        var imgResult = $("#image-result");
        imgResult.removeClass("d-none");

        imgResult.html("<p>Loading...</p>");

        var fileName = $("#img-search-input").val();

        imageManipulationDemo.controllers.image.getImage(fileName)
            .then(function (imageFile) {
                var src = "data:image/png;base64," + imageFile;
                var img = "<img src='" + src + "' />";

                imgResult.html(img);
            })
            .catch(function (err) {
                imgResult.html("<p>Could not find the image...</p>");
            });
    });
});
