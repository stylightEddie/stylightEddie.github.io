(function($, undefined) {
    $(window).resize(renderGrid);

    function renderGrid() {
        var $cardsWrapper = $("#cardsWrapper");
        var cardsWrapperWidth = $cardsWrapper.outerWidth(true);
        var $cards = $cardsWrapper.children(".card");
        var columnCount = Math.floor(cardsWrapperWidth / 360);
        var rowCount = Math.ceil($cards.length / columnCount);
        var _cardIdx = 0;

        for (var _rowIdx = 0; _rowIdx < rowCount; _rowIdx++) {
            for (var _colIdx = 0; _colIdx < columnCount; _colIdx++) {
                var $currentCard = $($cards[_cardIdx]);
                var _top = 0;
                if (_rowIdx > 0) {
                    var $cardAbove = $($cards[_cardIdx - columnCount]);
                    _top = $cardAbove.outerHeight(true) + $cardAbove.position().top + 10;
                }
                var _left = Math.floor(_colIdx * (cardsWrapperWidth / columnCount));
                var _width = Math.floor(cardsWrapperWidth / columnCount) - 10;

                $currentCard.css({
                    top: _top.toString() + "px",
                    left: _left.toString() + "px",
                    width: _width + "px"
                });

                _cardIdx++;
            }
        }
    }

    renderGrid();
}(jQuery));