const grid = document.getElementById("portfolio-grid");
const status_text = document.getElementById("portfolio-status");
const filter_btns = document.querySelectorAll(".portfolio-filter");

let all_items = [];
let current_filter = "all";

function set_status(msg, type_name) {
    if (!status_text) {
        return;
    }

    status_text.textContent = msg;
    status_text.classList.remove("is-loading", "is-success", "is-error");

    if (type_name) {
        status_text.classList.add(type_name);
    }
}

function make_label(item) {
    if (item.alt_text) {
        return item.alt_text.replace(/\s+photo$/i, "");
    }

    return item.photo_id;
}

function set_active_btn() {
    for (let i = 0; i < filter_btns.length; i++) {
        const btn = filter_btns[i];
        const filter_name = btn.getAttribute("data-filter");

        if (filter_name === current_filter) {
            btn.classList.add("is-active");
        } else {
            btn.classList.remove("is-active");
        }
    }
}

function draw_cards() {
    if (!grid) {
        return;
    }

    grid.innerHTML = "";

    for (let i = 0; i < all_items.length; i++) {
        const item = all_items[i];

        if (current_filter !== "all" && item.category !== current_filter) {
            continue;
        }

        const card = document.createElement("article");
        card.className = "portfolio-card " + item.category + "-card";

        const pic_box = document.createElement("div");
        pic_box.className = "portfolio-card-image";

        const img = document.createElement("img");
        img.src = item.img_name;
        img.alt = item.alt_text || make_label(item);

        const cap = document.createElement("p");
        cap.className = "portfolio-card-caption";
        cap.textContent = make_label(item);

        pic_box.appendChild(img);
        pic_box.appendChild(cap);

        const link = document.createElement("a");
        link.className = "portfolio-card-button";
        link.href = "photo.html?id=" + encodeURIComponent(item.photo_id);
        link.textContent = "View Details";

        card.appendChild(pic_box);
        card.appendChild(link);
        grid.appendChild(card);
    }

    if (grid.children.length === 0) {
        const none = document.createElement("p");
        none.className = "portfolio-empty";
        none.textContent = "no photos for this filter";
        grid.appendChild(none);
    }
}

async function start_page() {
    if (!grid) {
        return;
    }

    set_status("loading photo descriptions...", "is-loading");

    try {
        all_items = await get_data();

        set_active_btn();
        draw_cards();
        set_status("loaded " + all_items.length + " items", "is-success");
    } catch (err) {
        set_status("error: could not load descriptions from github json", "is-error");
    }
}

for (let i = 0; i < filter_btns.length; i++) {
    filter_btns[i].onclick = function () {
        current_filter = this.getAttribute("data-filter") || "all";
        set_active_btn();
        draw_cards();
    };
}

start_page();
