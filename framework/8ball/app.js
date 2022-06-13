var app = new Vue({
    el: '#app',
    data: {
        message: 'Ask a Question',
        messageBank: [
            'Yes',
            'No',
            'Probably',
            'Maybe Tomorrow',
            'Maybe',
            'Probably Not'
        ],

        question:""
    },
    methods: {
        askQuestion: function () {
            if (!this.isValidQuestion) {return;}

            let nextIndex = Math.floor(Math.random() * this.messageBank.length)
            let nextResponse = this.messageBank[nextIndex]
            this.message = nextResponse
            this.question = ""
        },
        isValidQuestion: function () {
            return this.question[this.question.length-1] == "?"
        }
    }

})