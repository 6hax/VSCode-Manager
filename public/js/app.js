function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');

  const colors = {
    info: 'bg-blue-500',
    success: 'bg-green-500',
    error: 'bg-red-500'
  };

  toast.className = `${colors[type]} text-white px-4 py-2 rounded shadow-lg transform transition-all duration-300 opacity-0 translate-y-[-20px]`;
  toast.innerText = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('opacity-0', 'translate-y-[-20px]');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', '-translate-y-10');
    setTimeout(() => container.removeChild(toast), 300);
  }, 3000);
}

async function fetchSettings() {
  try {
    const res = await fetch('/api/settings');
    const settings = await res.json();
    const list = document.getElementById('settingsList');
    list.innerHTML = '';

    if (settings.length === 0) {
      list.innerHTML = `<p class="text-gray-400 text-center">Nenhuma setting criada ainda</p>`;
      return;
    }

    settings.forEach(s => {
      const div = document.createElement('div');
      div.className = 'bg-gray-700 p-3 rounded mb-2 flex justify-between items-center flex-wrap gap-2';
      div.innerHTML = `
        <span class="font-bold break-words">${s.name}</span>
        <div class="flex gap-2 flex-wrap">
          <button class="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm transition" onclick="deleteSetting('${s.name}')">Remover</button>
          <button class="bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-sm transition" onclick="applySetting('${s.name}')">Aplicar</button>
        </div>
      `;
      list.appendChild(div);
    });
  } catch (err) {
    console.error(err);
    showToast('Erro ao buscar settings!', 'error');
  }
}

async function deleteSetting(name) {
  try {
    await fetch('/api/settings/' + encodeURIComponent(name), { method: 'DELETE' });
    showToast(`Setting "${name}" removida`, 'success');
    fetchSettings();
  } catch {
    showToast('Erro ao remover setting', 'error');
  }
}

document.getElementById('createForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const config = document.getElementById('config').value;

  if (!name || !config) {
    showToast('Preencha o nome e o JSON da setting!', 'error');
    return;
  }

  try {
    await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, config })
    });

    document.getElementById('createForm').reset();
    showToast(`Setting "${name}" criada!`, 'success');
    fetchSettings();
  } catch (err) {
    console.error(err);
    showToast('Erro ao criar a setting!', 'error');
  }
});

async function applySetting(name) {
  try {
    const res = await fetch('/api/settings/apply/' + encodeURIComponent(name), { method: 'POST' });
    const data = await res.json();
    showToast(data.message, 'success');
  } catch (err) {
    console.error(err);
    showToast('Erro ao aplicar a setting!', 'error');
  }
}

fetchSettings();
