# Do it! Beginning Vue.js 라우터 부분 부터
=

4장
-
>[1]: https://github.com/gwkim9444/Vue_Study/blob/master/01_nested.html "4-1 뷰 라우터 실습"  
>[2]: https://github.com/gwkim9444/Vue_Study/blob/master/02_Named_view.html "4-2 네스티드 라우터 구현하기"  
>[3]: https://github.com/gwkim9444/Vue_Study/blob/master/03.Vue_Quiz.html "4-3 네임드 뷰 구현하기"  
>[4]: https://github.com/gwkim9444/Vue_Study/blob/master/04.Vue_HTTP_Communication.html "4-4 뷰 리소스로 데이터 받아오기"  
>[5]: https://github.com/gwkim9444/Vue_Study/blob/master/05.Axios.html "4-5 액시오스로 데이터 받아오기"  


※ Vue 의 Http 통신

1. 웹 앱에서의 HTTP 통신은 정적인 웹을 탈피하기위해 필수요건으로 자리잡음
Ex) 대표적인 Case → Jquery Ajax Library OR JS 내의 XML Object 

2. Vue에서는 HTTP 통신을 하기위한 Ajax 라이브러리를 제공하고있음. 
Vue 내에서 필수 프레임워크로 자리잡은 'Axios(액시오스)' 가 Ajax 라이브러리로 활용됨

보통선에서 Vue 리소스 역시 초기 코어팀에서 공식적으로 지원했던 HTTP 통신관련 라이브러리 이나, 추세상 Axios 라이브러리를 더 많이 사용
＃2019년 11월 15일 기준 
Axios Git Star 개수 : 66.5k
Vue resource 개수 : 9.6k

＃ Axios란? 
Promise based HTTP client for the browser and node.js 라고 명시하고있음.
비동기 기반 JS 로직 처리에서 데이터 통신 과 관련된 로직처리를 Promise 기반으로 동작 시키는데 집중하였고, Axios 역시 Promise API 를 제공

＃ Promise 기반 API 란?

Promise는 비동기 로직 처리에 유용한 JS 객체를 의미함.
JS는 기본적으로 싱글 쓰레드 기반으로 스크립트를 처리하기에, 특정 로직 처리가 끝날때 까지 기다리지 않는 비동기 방식을 많이 사용하고있음.
이럴 경우 통신 로직이 다 처리되기도 전에 다른 Event가 처리되어 여러가지 문제(UI 꼬임 및 데이터를 받기도 전에 로직처리 등등)가 발생함.
따라서 Promise를 통해 완전한 Data 처리가 Browser(Front) 까지 도달했을 때, 그다음 로직처리를 수행 할 수있도록 할 수 있음.


＃ Axios 설치 또는 사용 방법
Using npm:
$ npm install axios

Using bower:
$ bower install axios

Using yarn:
$ yarn add axios

Using cdn:
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

