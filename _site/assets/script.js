// assets/script.js
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // 로컬 스토리지에서 이전 설정 확인
  if (localStorage.getItem('theme') === 'dark') {
    htmlElement.classList.add('dark');
    toggleButton.textContent = '밝은 모드';
  }

  // 버튼 클릭 시 토글
  toggleButton.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    
    if (htmlElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
      toggleButton.textContent = '밝은 모드';
    } else {
      localStorage.setItem('theme', 'light');
      toggleButton.textContent = '다크 모드';
    }
  });
});
