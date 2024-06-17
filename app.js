function updateDateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const date = now.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'long' });

    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date.charAt(0).toUpperCase() + date.slice(1);
}

setInterval(updateDateTime, 1000);
updateDateTime();