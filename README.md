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

### Window Load

- `DOMContentLoaded` - HTML 파일만 로드가 완료되면 호출된다.
- `load` - HTML 파일로부터 파생된 모든 리소스들이 로딩이 완료되면 호출된다.
- `beforeunload` - 사용자가 페이지를 나가기 전에 호출된다.
- `unload` - 리소스들이 모두 언로드가 완료되면 호출된다.
- defer 옵션을 사용하면 DOMContentLoaded 시점 즈음에 서로 비슷하게 발생되기 때문에 효율적이다.

## DOM

- 브라우저는 HTML 태그를 자바스크립트의 Node 객체로 변환한다.
- 최종적으로 HTML 문서는 DOM Tree가 된다.
- Node 인터페이스는 EventTarget 인터페이스를 상속한다.
- Document, Element 인터페이스는 Node 인터페이스를 상속한다.
- Document, Element는 결국 Node이고, Node는 결국 EventTarget이다.

### CSSOM

DOM + CSS

- 모든 CSS 스타일이 Cascading 룰에 따라서 합해진 계산된 스타일(Computed Style)이 등록된다.
- DOM과 CSSOM 트리를 합해서 사용자에게 궁극적으로 보여지는 아이들만 가지고 Render Tree를 생성한다.

## Critical Rendering Path

### Construction

트리가 작으면 작을수록 성능이 좋기 때문에 최대한 요소들을 작게 만드는 것이 중요하다.

1. request/response -> HTML
2. loading
3. scripting -> DOM, CSSOM
4. rendering -> Render Tree

### Operation

최대한 composition만 일어나도록 한다. paint, layout이 발생하지 않도록 한다.

5. layout -> 크기, 모양, 위치 계산
6. paint -> 성능을 위해 레이어별로 준비(will-change)
7. composition -> 레이어를 차곡차곡 쌓기

> 개발자 도구에서 `More tools - Layers`에서 확인 가능

💎 Tip. [CSS 속성값이 성능에 어떤 영향을 주는지 알려주는 사이트](https://csstriggers.com/)

> 개발자 도구 성능 탭에서 녹화하여 성능 증거 개선을 추출할 수 있다.

> 개발자 도구 팔레트에서 '레이아웃 변경 지역 표시(렌더링)'를 선택하여 브라우저 화면에서 확인해볼 수 있다.
