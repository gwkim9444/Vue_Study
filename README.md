# Do it! Beginning Vue.js 라우터 부분 부터


4장. 라우터 & HTTP 통신
-
>[4-1 뷰 라우터 실습](https://github.com/gwkim9444/Vue_Study/blob/master/01_nested.html/)  
>[4-2 네스티드 라우터 구현하기](https://github.com/gwkim9444/Vue_Study/blob/master/02_Named_view.html/)  
>[4-3 네임드 뷰 구현하기](https://github.com/gwkim9444/Vue_Study/blob/master/03.Vue_Quiz.html/)  
>[4-4 뷰 리소스로 데이터 받아오기](https://github.com/gwkim9444/Vue_Study/blob/master/04.Vue_HTTP_Communication.html/)  
>[4-5 액시오스로 데이터 받아오기](https://github.com/gwkim9444/Vue_Study/blob/master/05.Axios.html/)  


※ Vue 의 Http 통신

>1. 웹 앱에서의 HTTP 통신은 정적인 웹을 탈피하기위해 필수요건으로 자리잡음  
>Ex) 대표적인 Case → Jquery Ajax Library OR JS 내의 XML Object   
>2. Vue에서는 HTTP 통신을 하기위한 Ajax 라이브러리를 제공하고있음.   
>Vue 내에서 필수 프레임워크로 자리잡은 'Axios(액시오스)' 가 Ajax 라이브러리로 활용됨
>보통선에서 Vue 리소스 역시 초기 코어팀에서 공식적으로 지원했던 HTTP 통신관련 라이브러리 이나, 추세상 Axios 라이브러리를 더 많이 사용  
＃2019년 11월 15일 기준  
>Axios Git Star 개수 : 66.5k  
>Vue resource 개수 : 9.6k  

＃ Axios란? 
>Promise based HTTP client for the browser and node.js 라고 명시하고있음.  
>비동기 기반 JS 로직 처리에서 데이터 통신 과 관련된 로직처리를 Promise 기반으로 동작 시키는데 집중하였고, Axios 역시 Promise API 를 제공  

＃ Promise 기반 API 란?

>Promise는 비동기 로직 처리에 유용한 JS 객체를 의미함.  
>JS는 기본적으로 싱글 쓰레드 기반으로 스크립트를 처리하기에, 특정 로직 처리가 끝날때 까지 기다리지 않는 비동기 방식을 많이 사용하고있음.  
>이럴 경우 통신 로직이 다 처리되기도 전에 다른 Event가 처리되어 여러가지 문제(UI 꼬임 및 데이터를 받기도 전에 로직처리 등등)가 발생함.  
>따라서 Promise를 통해 완전한 Data 처리가 Browser(Front) 까지 도달했을 때, 그다음 로직처리를 수행 할 수있도록 할 수 있음.  


＃ Axios 설치 또는 사용 방법  
>Using npm:  
>$ npm install axios  

>Using bower:  
>$ bower install axios  

>Using yarn:  
>$ yarn add axios  

>Using cdn:  
><script src="https://unpkg.com/axios/dist/axios.min.js"></script>


5장. 뷰 템플릿
-

※ Vue 템플릿이란?  
HTML,CSS 등의 마크업 등의 마크업 속성과 뷰 인스턴스에서 정의한 데이터 및 로직들을 연결하여 사용자가 브라우저에 볼수있는 형태의 HTML로 변환시켜 줌  
>템플릿 속성을 사용하는 방법
>＃ ES5 기준  
><script>  
> new Vue({   
>     template : '<p>Hello {{message}}</p>'  
>   });
></script>  

1. template:<p>Hello {{message}}</p> 같은 코드가 Vue의 템플릿을 의미함
2. template을 통한 생성은 해당 인스턴스가 완전히 생성되고 난 후에 전체 Form이 붙게 됨. 
3. template 이 없다면 모든 태그가 형성 된 후 {{message}} 영역이 Vue에서 생성된 message로 대체되도록 설계되어 있음.  

### 템플릿에서 사용하는 뷰 속성과 문법
>[5-1 데이터 바인딩](https://github.com/gwkim9444/Vue_Study/blob/master/5-1.index.html)  
>2.자바스크립트 표현식  
>3.디렉티브  
>4.이벤트 처리  
>5.고급 템플릿 기법  

#### v-bind  
>1.v-bind는 id,class,style 등의 HTML의 Attributes 값에 Vue Data 값을 연결할 때 사용하는 Vue만의 데이터 연결 방식이다.  
>2.형식은 v-bind 속성으로 지정할 HTML 속성이나 props 속성 앞에 접두사로 붙여준다.    
>3.v-bind:id="idA" 를 :id="idA"로 사용 할수도 있다.(But, v-bind:id="idA"를 권장)    
>4.HTML 표준과 구분하기 위해 가급적이면 vue를 사용하는 티를 팍팍 내기위해 v-bind 속성을 꼭 붙여주자.

#### 자바스크립트 표현식  
>1. 데이터 바인딩 방법 중 하나인 {{ }} 안에 자바스크립트 표현식을 넣으면 됨.  
>2. Message 값을 화면에 나타낼 때 간단한 Jvascript 연산을 이용해 결과를 표현함.  
>3. Javascript 표현식을 사용 할때에는 JS선언문과 분기 구문은 사용 할 수 없다.   
>4. 복잡한 연산은 인스턴스 안에서 처리하고 화면에는 간단한 연산 결과만을 표시해야 된다.  
