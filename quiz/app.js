(() => {
  const chapter = new URLSearchParams(location.search).get('chapter');
  const data = window.QUIZ_DATA[chapter];
  const title = document.getElementById('title');
  const quiz = document.getElementById('quiz');
  if (!data) { title.textContent = 'Тест не найден'; document.getElementById('intro').textContent = 'Вернитесь к оглавлению и откройте тест из нужной главы.'; return; }
  title.textContent = 'Тест: ' + data.title;
  document.getElementById('back-link').href = '../chapters/' + chapter + '.md';
  document.getElementById('back-link').textContent = '← Вернуться к главе';
  data.questions.forEach((q, n) => {
    const box = document.createElement('fieldset');
    box.className = 'question'; box.dataset.answer = String(q.answer);
    box.innerHTML = '<h2>' + (n + 1) + '. ' + q.question + '</h2>';
    q.options.forEach((option, i) => {
      const label = document.createElement('label');
      label.innerHTML = '<input type="radio" name="q' + n + '" value="' + i + '"> ' + option;
      box.appendChild(label);
    });
    quiz.appendChild(box);
  });
  document.getElementById('check').addEventListener('click', () => {
    let score = 0;
    [...quiz.querySelectorAll('.question')].forEach(box => {
      const answer = Number(box.dataset.answer); const picked = box.querySelector('input:checked');
      box.querySelectorAll('label').forEach((label, i) => { label.classList.remove('correct', 'incorrect'); if (i === answer) label.classList.add('correct'); });
      if (picked && Number(picked.value) === answer) score++;
      else if (picked) picked.parentElement.classList.add('incorrect');
    });
    const result = document.getElementById('result'); result.className = 'result visible';
    result.textContent = 'Результат: ' + score + ' из ' + data.questions.length + '. ' + (score === data.questions.length ? 'Отлично — все ответы верны.' : 'Посмотрите подсвеченные ответы и вернитесь к нужным разделам главы.');
    result.scrollIntoView({behavior:'smooth', block:'center'});
  });
})();
