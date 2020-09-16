$(document).ready(function () {
    var alcoholImgDataHolder;
    $.getJSON("assets/js/json/alcoholpage.json", (data) => {
        alcoholImgDataHolder = data;
        getAlcoholImgData();
    })

    function getAlcoholImgData() {
        alcoholImgDataHolder.forEach(alcoholImgDataHolderJSON => {
            $('.alcohol-container').append(`
                <div class="img">
                    <img src="${alcoholImgDataHolderJSON.img}">
                </div>
            `)
        });
    }
})