$(document).ready(function () {
    var faceShieldDataHolder;
    $.getJSON("assets/js/json/faceShield.json", (data) => {
        faceShieldDataHolder = data;
        getFaceShield();
    })

    function getFaceShield() {
        var faceOwl = $('.faceshield .owl-carousel');
        faceShieldDataHolder.forEach(faceShieldImg => {
            faceOwl.append(`
                <div class="product">
                    <a href="faceshield.html"><img src="${faceShieldImg.img}" alt=""></a>
                </div>
            `)
        });
        $('.faceshield .owl-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    loop: true
                },

                600: {
                    items: 2,
                    nav: true,
                    loop: true
                },

                1000: {
                    items: 4,
                    nav: true,
                    loop: true
                }
            }
        })
    }
})