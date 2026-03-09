const form = document.getElementById("contact-form");
const msg = document.getElementById("contact-form-status");
const btn = document.getElementById("contact-submit");
const send_url = "https://formsubmit.co/ajax/tpatel4237@gmail.com";

function set_msg(text, type_name) {
    if (!msg) {
        return;
    }

    msg.textContent = text;
    msg.classList.remove("is-loading", "is-success", "is-error");

    if (type_name) {
        msg.classList.add(type_name);
    }
}

async function send_form(e) {
    e.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        set_msg("please fill out all required fields", "is-error");
        return;
    }

    btn.disabled = true;
    set_msg("sending...", "is-loading");

    const info = new FormData(form);
    info.append("_subject", "contact form message");
    info.append("_captcha", "false");

    try {
        const res = await fetch(send_url, {
            method: "POST",
            headers: {
                Accept: "application/json"
            },
            body: info
        });

        if (!res.ok) {
            throw new Error("send failed");
        }

        form.reset();
        set_msg("message sent", "is-success");
    } catch (err) {
        set_msg("error sending message", "is-error");
    }

    btn.disabled = false;
}

if (form) {
    form.onsubmit = send_form;
}
