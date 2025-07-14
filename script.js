document.addEventListener("DOMContentLoaded", () => {
  // 1. 탭 마우스 오버 시 콘텐츠 전환
  const tabLinks = document.querySelectorAll(".mini_board_tab");

  tabLinks.forEach(tab => {
    tab.addEventListener("mouseenter", () => {
      // 모든 탭 콘텐츠 숨김
      document.querySelectorAll(".mini_board_content").forEach(content => {
        content.style.display = "none";
      });

      // 현재 탭의 부모 li 안의 콘텐츠만 표시
      const parentLi = tab.closest("li");
      const currentContent = parentLi.querySelector(".mini_board_content");
      if (currentContent) {
        currentContent.style.display = "block";
      }
    });
  });

  // 페이지 로드시 첫 번째 콘텐츠 보이기
  const firstContent = document.querySelector(".mini_board_content");
  if (firstContent) firstContent.style.display = "block";


  // 2. related_site_title 클릭 시 관련 사이트 목록 토글
  const relatedTitles = document.querySelectorAll('.related_site_title');

  relatedTitles.forEach(title => {
    title.addEventListener('click', e => {
      e.preventDefault();

      const relatedSite = title.nextElementSibling;
      if (!relatedSite) return;

      if (relatedSite.style.display === 'block') {
        relatedSite.style.display = 'none';
      } else {
        // 다른 열린 related_site 닫기
        document.querySelectorAll('.related_site').forEach(site => {
          site.style.display = 'none';
        });
        relatedSite.style.display = 'block';
      }
    });
  });

  // 3. 페이지 클릭 시 related_site 모두 닫기 (related_site_wrap 영역 밖 클릭 시)
  document.addEventListener('click', e => {
    if (!e.target.closest('.related_site_wrap')) {
      document.querySelectorAll('.related_site').forEach(site => {
        site.style.display = 'none';
      });
    }
  });
});
