const json_url = "https://csepateltanish.github.io/csce242/photos.json";

async function get_data() {
    const res = await fetch(json_url, { cache: "no-store" });

    if (!res.ok) {
        throw new Error("json file did not load from the web");
    }

    const data = await res.json();
    const list = data.photo_descriptions;

    if (!Array.isArray(list)) {
        throw new Error("json format is not correct");
    }

    return list;
}
