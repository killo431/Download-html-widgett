document.addEventListener("DOMContentLoaded", async () => {
  const widgets = document.querySelectorAll("[data-widget]");
  for (const el of widgets) {
    const name = el.dataset.widget;

    try {
      const response = await fetch(`Download-HTML-widget/index.html`);
      const html = await response.text();
      el.innerHTML = html;
    } catch (err) {
      el.innerHTML = `<pre style="color:red;">❌ Failed to load widget: ${name}</pre>`;
      console.error(err);
    }
  }
});
