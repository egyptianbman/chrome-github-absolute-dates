var elements = document.querySelectorAll('relative-time');

for (var i in elements) {
    var el = elements[i];

    if (!el.attributes || !el.attributes.datetime) {
        continue;
    }

    // For some reason, this triggers right before the new page is loaded. If
    // we've already modified this relative-time, don't re-modify.
    if (-1 !== el.innerHTML.indexOf(' (')) {
        continue;
    }

    var date = new Date(Date.parse(
        el.attributes.datetime.value
    ));

    el.innerHTML += " (" + date.toLocaleDateString() + " " + date.toLocaleTimeString() + ")"
}
