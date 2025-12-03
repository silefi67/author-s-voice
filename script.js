document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.interview-card button').forEach((button) => {
    button.addEventListener('click', () => {
      alert('Открыть интервью. Функционал разработки.');
    });
  });

  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Заявка отправлена! Спасибо за обратную связь.');
    form.reset();
  });
});
