const detail_img = document.getElementById("detail-photo");
const detail_title = document.getElementById("detail-title");
const detail_cat = document.getElementById("detail-category");
const detail_path = document.getElementById("detail-image");
const detail_desc = document.getElementById("detail-description");
const detail_msg = document.getElementById("detail-status");

const params = new URLSearchParams(window.location.search);
const wanted_id = params.get("id");

function set_detail_msg(msg, is_error) {
    if (!detail_msg) {
        return;
    }

    detail_msg.textContent = msg;

    if (is_error) {
        detail_msg.classList.add("is-error");
    } else {
        detail_msg.classList.remove("is-error");
    }
}

function name_from_item(item) {
    if (item.alt_text) {
        return item.alt_text.replace(/\s+photo$/i, "");
    }

    return item.photo_id;
}

function show_item(item) {
    if (detail_img) {
        detail_img.src = item.img_name;
        detail_img.alt = item.alt_text || name_from_item(item);
    }

    if (detail_title) {
        detail_title.textContent = name_from_item(item);
    }

    if (detail_cat) {
        detail_cat.textContent = item.category;
    }

    if (detail_path) {
        detail_path.textContent = item.img_name;
    }

    if (detail_desc) {
        detail_desc.textContent = item.photo_description || "no description";
    }
}

async function start_detail_page() {
    if (!wanted_id) {
        window.location.href = "portfolio.html";
        return;
    }

    set_detail_msg("loading details...", false);

    try {
        const list = await get_data();
        let found = null;

        for (let i = 0; i < list.length; i++) {
            if (list[i].photo_id === wanted_id || String(list[i]._id) === wanted_id) {
                found = list[i];
                break;
            }
        }

        if (!found) {
            throw new Error("item not found");
        }

        show_item(found);
        set_detail_msg("", false);
    } catch (err) {
        set_detail_msg("error: could not load this description", true);

        if (detail_title) {
            detail_title.textContent = "description not available";
        }

        if (detail_cat) {
            detail_cat.textContent = "n/a";
        }

        if (detail_path) {
            detail_path.textContent = "n/a";
        }

        if (detail_desc) {
            detail_desc.textContent = "check that your github json link is live";
        }
    }
}

start_detail_page();
