const rows = document.querySelectorAll(".genre-row");

for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const imgs = row.querySelectorAll(".slides img");
    const next_btn = row.querySelector(".arrow-next");
    const prev_btn = row.querySelector(".arrow-prev");
    let index = 0;

    for (let j = 0; j < imgs.length; j++) {
        if (!imgs[j].classList.contains("hidden")) {
            index = j;
            break;
        }
    }

    function show(new_index) {
        imgs[index].classList.add("hidden");
        imgs[new_index].classList.remove("hidden");
        index = new_index;
    }

    if (next_btn) {
        next_btn.onclick = function () {
            const new_index = (index + 1) % imgs.length;
            show(new_index);
        };
    }

    if (prev_btn) {
        prev_btn.onclick = function () {
            const new_index = (index - 1 + imgs.length) % imgs.length;
            show(new_index);
        };
    }
}
