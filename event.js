document.querySelector(document).ready(function() {
    let zindex = 10;

    document.querySelector("div.card").click(function(e) {
        e.preventDefault();

        let isShowing = false;

        if (document.querySelector(this).classList.contains("show")) {
            isShowing = true;
        }

        if (document.querySelector("div.cards").classList.contains("showing")) {

            document.querySelector("div.card.show").classList.remove("show");

            if (isShowing) {

                document.querySelector("div.cards").classList.remove("showing");
            } else {

                document.querySelector(this).css({ zIndex: zindex }).classList.add("show");
            }

            zindex++;
        } else {

            document.querySelector("div.cards").classList.add("showing");
            document.querySelector(this).css({ zIndex: zindex }).classList.add("show");

            zindex++;
        }
    });
});