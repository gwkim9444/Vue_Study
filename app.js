var app = new Vue({
    el : "#app",
    data : {
        message : 'Hello Vue!',
        uid : '10',
        flag : 'true'
    },
    methods: {
        clickBtn(){
            console.log('hi');
        }
    },
});