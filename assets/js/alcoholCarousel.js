$(document).ready(function () {
    var alcoholDataHolder;
    $.getJSON("assets/js/json/alcohol.json", (data) => {
        alcoholDataHolder = data;
        getAlcohol();
    })

    function getAlcohol() {
        var owl = $('.alcohol .owl-carousel');
        alcoholDataHolder.forEach(alcoholImg => {
            owl.append(`
                <div class="product">
                    <a href="alcohol.html"><img src="${alcoholImg.img}" alt=""></a>
                </div>
            `)
        });
        $('.alcohol .owl-carousel').owlCarousel({
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