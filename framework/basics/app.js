var app = new Vue({
    el: '#app',
    data: {
      message: "Hello Vue!",
      showText: true,
      items: [
          {text:'item a', show: true, color:'#19d'},
          {text:'item b', show: true, color:'#1fd'},
          {text:'item c', show: true, color:'#89d'},
          {text:'item d', show: true, color:'#19a'}
      ]
    },
    methods: {
        toggleTextandAddA_Global: function () {
            this.showText = !this.showText;
            this.message = this.message + 'a'
        },
        toggleTextandAddA: function (item) {
            item.show = !item.show;
            item.text = item.text + 'a'
        },
        changeColor: function (item) {
            if (item.color != "#f00") {
                item.previousColor = item.color
                item.color = "#f00"
            } else {
                item.color = item.previousColor
            }
            
        }
    }
  })