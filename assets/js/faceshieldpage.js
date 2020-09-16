$(document).ready(function () {
    var faceshieldImgDataHolder;
    $.getJSON("assets/js/json/faceShield.json", (data) => {
        faceshieldImgDataHolder = data;
        getfaceshieldImgData();
    })

    function getfaceshieldImgData() {
        faceshieldImgDataHolder.forEach(faceshieldImgDataHolderJSON => {
            $('.faceshield-container').append(`
                <div class="img">
                    <img src="${faceshieldImgDataHolderJSON.img}">
                </div>
            `)
        });
    }
})