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
> new Vue({ template : '<p>Hello {{message}}</p>' });  
></script>  
1. template : {{message}} 코드가 Vue의 템플릿을 의미함
2. template을 통한 생성은 해당 인스턴스가 완전히 생성되고 난 후에 전체 Form이 붙게 됨. 
3. template 이 없다면 모든 태그가 형성 된 후 {{message}} 영역이 Vue에서 생성된 message로 대체되도록 설계되어 있음.  

### 템플릿에서 사용하는 뷰 속성과 문법
>[5-1 데이터 바인딩](https://github.com/gwkim9444/Vue_Study/blob/master/5-1.index.html)  
>[5-2 자바스크립트 표현식](https://github.com/gwkim9444/Vue_Study/blob/master/5-2.Javascript_Expression.html)    
>[5-3 디렉티브](https://github.com/gwkim9444/Vue_Study/blob/master/5-3.Javascript_Expression_2.html)    
>[5-4 이벤트 처리](https://github.com/gwkim9444/Vue_Study/blob/master/5-4.Javascript_Directive.html)  
>[5-5 고급 템플릿 기법](https://github.com/gwkim9444/Vue_Study/blob/master/5-5.Vue_computed.html)  

#### __v-bind__  
>1.v-bind는 id,class,style 등의 HTML의 Attributes 값에 Vue Data 값을 연결할 때 사용하는 Vue만의 데이터 연결 방식이다.  
>2.형식은 v-bind 속성으로 지정할 HTML 속성이나 props 속성 앞에 접두사로 붙여준다.    
>3.v-bind:id="idA" 를 :id="idA"로 사용 할수도 있다.(But, v-bind:id="idA"를 권장)    
>4.HTML 표준과 구분하기 위해 가급적이면 vue를 사용하는 티를 팍팍 내기위해 v-bind 속성을 꼭 붙여주자.

#### __자바스크립트 표현식__  
>1. 데이터 바인딩 방법 중 하나인 {{ }} 안에 자바스크립트 표현식을 넣으면 됨.  
>2. Message 값을 화면에 나타낼 때 간단한 Javascript 연산을 이용해 결과를 표현함.  
>3. __Javascript 표현식을 사용 할때에는 JS선언문과 분기 구문은 사용 할 수 없다.__  
Ex) {{ var = a }} , {{ if (true) { return 100 } }}
>4. 복잡한 연산은 인스턴스 안에서 처리하고 화면에는 간단한 연산 결과만을 표시해야 된다.  


#### __Vue Directive__  
>1. Vue Directive 란 HTML Tag 안에 v- 접두사를 가지는 모든 속성들을 의미함(v-bind,v-if 등..)    
>2. Tag <a>태그는 뷰 인스턴스 데이터 속성에 정의된 flag 값에 따라 보이기도 하고 안보이기도 함.    
>3. Directive는 화면 요소를 더 쉽게 조작하기위해 사용하는 기능.  

##### __Vue Directive 종류__  
>1. __v-if__ : 지정한 뷰 데이터 값의 참, 거짓 여부에 따라 해당 Tag 를 표기 할지 말지 정리  
>2. __v-for__ : 지정한 Vue 데이터 개수 만큼 해당, HTML 태그를 반복 출력 진행  
>3. __v-show__ : v-if 와 유사하게 데이터의 진위 여부에 따라 해당 HTML 태그를 표시하거나 표시하지 않음 다만, v-if는 해당 태그를 완전히 삭제하지만 v-show는 css 효과만 display:none으로 주어 실제 태그는 남아 있고 화면상으로는 보이지 않음  
>4. __v-on__ : 화면 요소의 이벤트를 감지하여 처리 할 때 사용, 예를들면, v-on:click은 해당 Tag의 클릭 이벤트를 감지하여 특정 메서드를 실행가능.
>5. __v-model__ : Form에서 주로 사용되는 속성. Form에 입력한 값을 Vue 인스턴스의 데이터와 즉시 동기화 하여 서버에 보내거나 watch 같은 고급 속성을 이용하여 추가 로직 구현이 가능하도록 설게 되어있음 input,select,textarea Tag에만 적용이 가능.  

##### __Vue Directive의 Event 처리__  
>1.웹 앱에서 사용자 클릭 또는 키보드 이벤트 처리는 당연하다. 뷰 역시 화면에서 발생한 이벤트 처리를 위해 v-on Directive와 method 속성을 활용한다.  
methods : { Event명 : function(){ ..... };  
>2.해당 디렉티브 메서드에 parameter(매개변수)를 포함해 전달하는것이 가능하다.  

##### __고급 템플릿 기법__  
고급 템플릿 기법은 실제 App 개발을 할 때 유용한 Attribute로, 앞에서 배운 Data Binding & Directive와 같은 기본적 문법을 사용한다.  
>1. __computed__ : 최종 HTML은 Vue 내에서 처리된 데이터를 표기하는 용도로만 쓰인다, 이에 computed는 데이터 연산을 정의하는 영역으로 쓰인다.  
> 해당 링크 : [5-5 고급템플릿기법](https://github.com/gwkim9444/Vue_Study/blob/master/5-5.Vue_computed.html)   
> __Vue Computed는 Vue methods와 차이__  
> computed 속성은 해당 데이터 값이 변경되면 자동적으로 수행되는것이고, methods 속성은 해당 속성을 호출할 때 해당 로직이 수행되는것을 의미한다.  
> 캐싱면에서 따진다면 methods속성은 수행 할 때마다 연산을 하기 때문에 별도 캐싱을 하지 않지만, computed속성은 데이터가 변경되지 않는 한 이전의 계산 값을 가지고 있다가 필요할 때 바로 반환 해 줌.  
해당 링크 : [5-5 computed와 methods의 차이](https://github.com/gwkim9444/Vue_Study/blob/master/5-5.Vue_watch.html)   
>2. __watch__ : 데이터 변화를 감지하여 자동으로 특정 로직을 수행함. computed 속성과 유사하나, computed 속성은 내장 API를 활용한 간단한 연산에 적합하고, watch 속성은 데이터 호출과 같이 시간이 상대적으로 더 많이 소모되는 비동기 처리에 적합함.   
>__watch는 화면단의 데이터를 스크립트단의 특정 데이터와 일치시켜줌으로서, 동적인 Web을 연출하는데 적합하다.__  
해당 링크 : [5-5 Vue watch](https://github.com/gwkim9444/Vue_Study/blob/master/5-5.Vue_watch_2.html)

##### __싱글 파일 컴포넌트(.vue) 확장자 파일구성__
뷰 프로젝트를 하는데 있어서 싱글파일컴포넌트 체계는 Front 구성요소에서 필수적인 요건을 지니고 있다. 싱글파일컴포넌트 체계는 .vue 파일로 프로젝트 구조를 구성하는 방식을 의미한다.  
>1..vue 파일은 다음과 같은 구조를 지닌다.  
  


Tag | 내용 | 기본값
---|:---:|---:
`template` | HTML 태그 내용 | null
`script` | export default { Javascript 내용 } | null
`style` | CSS 스타일 내용 | null  

>2. Vue CLI 
>싱글 컴포넌트 체계를 사용하기위해 .vue파일을 웹브라우저가 인식할 수 있는 형태의 파일로 변환해 주는 웹팩(Webpack)이나 브라우저파이(Browserify) 같은 도구가 필요하다. 뷰 개발자들이 프로젝트를 구성할 수 있도록 Vue Core 팀에서는 CLI도구를 제공하고있다. CLI는 커맨드 창에서 명령어로 특정 동작을 수행 할 수 있는 도구를 의미한다.  

5장 추가. Vue CLI
-
##### __Vue init__    
명령어 | 내용 | 
---|:---:|
`vue init webpack` | 고급 웹팩 기능을 활용한 프로젝트 구성방식, 테스팅,문법 검사 등을 지원 |
`vue init webpack-simple` | 웹팩 최소 기능을 활용한 프로젝트 구성 방식, 빠른 화면 프로토타이핑용 |
`vue init browserify` | 고급 브라우저리파이 기능을 활용한 프로젝트 구성 방식, 테스팅, 문법검사 등을 지원 |
`vue init browserify-simple` | 브라우저리파이 최소기능을 활용한 프로젝트 구성 방식, 빠른 화면 프로토 타이핑용 |
`vue init simple` | 최소 뷰 기능만 들어간 HTML 파일 1개 생성 |
`vue init pwa` | 웹팩 기반의 프로그레시브 웹 앱(PWA,Progressive Web App) 기능을 지원하는 뷰 프로젝트 |

>1.Vue init 디렉터리 생성 후 만들어진 디렉터리 구조는 아래와 같다.  

디렉터리 & 파일 이름 | 내용 | 
---|:---:|
`src` | vue 파일을 비롯해 애플리케이션이 동작하는데 필요한 로직이 들어가는 곳 |
`index.html` | vue로 만든 웹 앱의 시작점. npm run dev 실행 시 로딩되는 파일 |
`webpack.config.js` | 웹팩 설정파일, 웹팩 빌드를 위해 필요한 로직들을 정의하는 파일 |  

##### __Vue Loader__  
뷰 로더는 웹팩에서 지원하는 라이브러리이다. 뷰 로더는 싱글파일 컴포넌트(Vue CLI로 형성한 프로젝트)에서 사용하는 .vue 파일의 내용을 브라우저에서 실행가능한 웹페이지 형태로 변환해 준다.  
  
>1.뷰로더는 위의 Vue 싱글파일 컴포넌트 구조에서 언급된, template,script,style의 내용이 각 각 HTML,Javascript,HTML,CSS Code 등에 인식될 수 있도록 Vue 로더가 반환작업을 진행한다.  
>2.뷰 로더는 .vue 파일을 javascript 모듈로 변환하고 웹팩 플러그인들은 이를 css,html 파일로 분리 역시 가능하도록 설계되어있다.  


6장. 실전 애플리케이션 만들기  
-
### 할일 관리 앱 제작  

종류 | 내용 | 
---|:---:|
`쿠키` | 클라이언트에 대한 정보를 이용자의 PC 나 하드디스크에 보관하기 위해서 웹 사이트에서 클라이언트의 웹브라우저에 전송하는 정보 |
`WEB STORAGE` | HTML5에서 쿠키의 단점을 보완해서 만든기술, key : value 형태의 정보로 쿠키와 마찬가지로 클라이언트 브라우저에 전달(4kb~5Mb) |
`로컬스토리지` | 클라이언트에 대한 정보를 영구적으로 보관하여 사용 (이를 활용해 연결없이 로컬스토리지 데이터만으로 동적인 App을 구성이 가능) |
`세션 스토리지` | 브라우저가 종료 될 경우 클라이언트에 대한 데이터를 삭제(로컬과 차이점), 보안이 요구되는 JSON 데이터 저장에 활용 |  
  
Vue 실전 어플 프로젝트  
-
해당 링크 : [6장.실전어플 만들기](https://github.com/gwkim9444/Vue_Single_App)  


7장. Vue.js 고급 개발자   
-
### 7-1. 뷰 중&고급 레벨로 올라가기 위한 지식  
종류 | 내용 | 
---|:---:|
`Vuex` | Vuex(뷰엑스)는 어플리케이션 상태 관리를 돕는 라이브러리(Library) 중 하나 |
`Vue Reactivity` | Vue가 데이터 변화를 감지하고 자동으로 화면을 갱신하는 특성 |
`Server Side Rendering` | 서버 사이드 렌더링 |
  
#### __Vuex__  

>1.뷰 엑스를 언급하기 전 '상태관리'에 대해 먼저 언급하자면, 상태(state)란 뷰 data 속성과 비슷한것임, 뷰 data 속성과 '상태'는 실질적인 차이점이 존재함. 폼 컴포넌트를 통해 데이터가 전달되고 전달되면서, 상위컴포넌트로 전달되게되는데 목적지인 메인컴포넌트까지 도달하기위해서는 최상위 컴포넌트를 거쳐 지나가게 되어있음. 이런 문제를 해결하고자 상-하위간 데이터전달구조를 따르지 않고도 데이터전달을 관리할 수 있는 체계의 설계기법이 필요하게 되었고 Vuex는 나름 중앙에서 이를 통제하는 상태관리 매니저로서의 역할을 하고자 자리잡은 설계기법임. 상태관리는 컴포넌트가 많고 복잡한 규모의 어플리케이션 규모에 필요하며, 뷰엑스에서 다루는 State,Getters,Mutations,Actions 라는 기능의 사용방법과 개념이 범위가 넓은 주제에 포함되기에 다잡아가는것이 좋다. 
  
#### __뷰의 반응성__ 

>2.Vue Reactivity는 뷰가 데이터 변화를 감지할 때, 자동으로 화면을 갱신하는 특성을 의미함.  
뷰의 반응성에 대해 알아두면 프레임워크 내부적으로 화면을 그리는 방법, 가상돔이 동작하는 방법, 화면을 빠르게 그리기 위해 브라우저에 부하를 주지 않고 돔을 추가 & 삭제하는 방법을 익힐 수 있음.  
Front 개발자로서 뷰의 고급 엔지니어가 되고자 목표한다면 뷰의 반응성에 대해 심도 있게 학습하는것이 좋음. 데이터가 변경되었을 때 뷰에서 자동으로 화면을 갱신하는지 학습할 필요가 있음.  

#### __서버 사이드 렌더링__
>3.서버 사이드 렌드링과 클라이언트 사이드 렌더링에 대한 차이

종류 | 내용 | 장점 |
---|:---:| :---: |
`서버사이드 렌더링` | 이미 완성된 태그와 틀 안에 데이터만 뿌려주는 행위 | 검색 엔진 최적화 (SEO), 초기화면 렌더링 속도 높음 |
`클라이언트 사이드 렌더링` | 웹페이지를 화면에서 그리는 동작을 클라이언트(브라우저)에서 수행하는것, 다그려지지 않은 HTML에 JS프레임워크를 활용해 마무리 | 매끄려운 화면 전환 및 사용자의 뛰어난 경험 |
  
### 7-2. __뷰 개발을 위한 웹팩__

#### __Web Pack__
>1. 최신 프런트 엔드 프레임 워크인 앵귤러,리액트,뷰에서 모두 권하고 있는 __모듈 번들러__  
>2.Vue CLI로 생성한 프로젝트에서 사용하는 웹팩 dev 서버와 웹팩 설정파일(webpack.config.js)에 대해 언급  

#### __웹팩이란?__
>1.앞서 말한 웹팩은 모듈 번들러 인데 여기서 __모듈__ 과 __번들러__ 에 대해 먼저 언급하도록 하겠다.  
>2.웹팩을 공식 홈페이지에서는 '파일 간의 연관 관계를 파악하여 하나의 자바스크립트 파일로 변환해 주는 도구'라고 말하고 있다.  
>3.웹팩의 목적은 __HTML,CSS,JS File 등을 통짜로 묶어 1개의 JS파일로 넣은 다음 JS File만 로딩해도 웹앱이 돌아가게 해 주는 도구__ 라고 보면 된다.  
>왜? 그렇다면 통짜로 __1개의 JS파일에 담는가?__ 이는 웹앱의 로딩속도를 향상 시키는 것과 연관이 깊다.  
>4.일반적으로 웹페이즈를 브라우저에 나타내기 위해 웹 화면을 구성 할 때 화면 구성에 필요한 JS,CSS,img File이 필요하다. 이러한 File 한개당 HTTP 요청이 한번 씩 발생하게 되고, HTTP 네트워크 요청 횟수가 늘어날 수록 웹 Page Loading 속도 역시 감소한다.  
>5.예전부터 이러한 문제를 해결하고자 걸프(Gulp),그런트(Grunt) 와 같은 웹 자동화 도구들이 있었으며, 최근에 이러한 도구보다 더 많은 기능을 추가로 제공하는 웹팩이 나오게 된 것임. 

#### __웹팩의 주요 속성__

속성 | 설명 |
---|:---:| :---: |
`entry` | 웹팩으로 빌드(변환) 할 대상 파일을 지정하는 속성, entry로 지정한 파일의 내용에는 전체 App 로직과 필요 라이브러리를 로딩하는 로직이 들어감 | 
`output` | 웹팩으로 빌드한 결과물의 위치와 파일 이름 등 세부 옵션을 설정하는 속성 | 
`loader` | 웹팩으로 빌드 할 때, HTML,CSS,PNG 파일 등을 javascript로 변환하기 위해 필요한 설정을 정의하는 속성 | 
`plugin` | 웹팩으로 빌드하고 나온 결과물에 대해 추가 기능을 제공하는 속성, 결과물 사이즈를 줄이거나 CSS,HTML파일로 분리하는 기능 등 탑재 |
`resolve` | 웹팩으로 빌드 할 때 해당 파일이 어떻게 해석되는지 정의하는 속성, 특정 라이브러리를 로딩 할 때 버전은 어떤것으로 할지, 경로는 어디에 지정할지 등..  |
