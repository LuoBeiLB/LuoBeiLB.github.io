// 加载json
window.addEventListener('load', async () => {
  try {
    const res = await fetch('/note.json');
    const jsonData = await res.json();
    const id = location.search.split('=')[1];
    jsonData.forEach((item) => {
        if (item.id == id) {
            document.querySelector('#note_title').textContent = item.title;
            document.querySelector('#note_content').textContent = item.content;
        }
    });
  } catch (err) {
    console.error('读取json失败', err);
  }
})