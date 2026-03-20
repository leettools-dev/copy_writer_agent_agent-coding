export default {
  app_id: 'final_result_app',
  mount(ctx, container) {
    container.innerHTML = `
      <div style="padding:16px;font-family:Arial,Helvetica,sans-serif;">
        <h2>Final Document Editor</h2>
        <div id="content" style="white-space:pre-wrap;border:1px solid #ddd;padding:12px;height:60vh;overflow:auto;background:#fff"></div>
        <div style="margin-top:8px;display:flex;gap:8px;">
          <button id="reload">Reload</button>
          <button id="save">Save</button>
        </div>
      </div>
    `;
    const contentEl = container.querySelector('#content');
    const reloadBtn = container.querySelector('#reload');
    const saveBtn = container.querySelector('#save');

    async function load() {
      try {
        const res = await fetch('/api/workspace/file?path=/workspace/document/compiled/final_document.md');
        if (!res.ok) { contentEl.textContent = 'Error loading final document.'; return; }
        const text = await res.text();
        contentEl.textContent = text;
      } catch (e) {
        contentEl.textContent = 'Failed to load final document: ' + e.message;
      }
    }

    reloadBtn.addEventListener('click', load);

    saveBtn.addEventListener('click', async () => {
      const body = { path: '/workspace/document/compiled/final_document.md', content: contentEl.textContent };
      const res = await fetch('/api/workspace/write', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(body)});
      if (res.ok) alert('Saved.'); else alert('Save failed.');
    });

    load();
  }
};
