# browser-practice

브라우저 연습

## [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)

- 브라우저에서 제공하는 APIs
- 몇몇 Web APIs는 보안 처리가 되어 있는 HTTPS 환경에서만 동작한다.

## Window 전역 객체

브라우저 전체 창

- DOM
  - document - 페이지가 표시되는 부분
- BOM
  - navigator - 눈에는 보이지 않지만 브라우저 정보가 담겨 있는 객체
  - location
  - fetch
  - storage
- JavaScript
  - Array
  - Map
  - Date

**-> 개발자도구 콘솔에 window 객체를 찍어보자.**

### Window Size

- `window.screen.width/height` - 스크린 크기
- `window.outerWidth/Height` - 브라우저 창 크기
- `window.innerWidth/Height` - 뷰포트 크기(스크롤바 표시 영역 포함)
- `document.documentElement.clientWidth/Height` - 뷰포트 크기(스크롤바 표시 영역 제외)

### Window Coordinates

- 브라우저 좌표는 뷰포트 좌측 상단에서부터 시작한다.
- `Element.getBoundingClientRect()` - 요소의 크기나 위치 정보
- `MouseEvent.offsetX/Y` - 이벤트가 걸려있는 DOM 노드를 기준 좌표
- `MouseEvent.clientX/Y` - 보이는 뷰포트 기준 좌표
- `MouseEvent.pageX/Y` - 스크롤로 숨겨진 부분을 포함한 전체 페이지 기준 좌표
- `MouseEvent.screenX/Y` - 실제 화면 스크린 기준 좌표

### Window Scroll

- `Window.scrollBy()` - 주어진 값만큼 스크롤 이동
- `Window.scrollTo()` - 주어진 좌표로 스크롤 이동
- `Element.scrollIntoView()` - 호출된 요소가 사용자에게 표시되도록 스크롤 이동
