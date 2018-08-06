new Vue ({
    el:  '#app',
    data: {
        event: {
            eventDate: 'August 11th - 14th',
            eventTitle: 'Summer adventure!',
            eventDesc: "<b>Finally!</b> We're going on our little trip in the mountains for a couple of days",
        },
        newNameText: '',
        stalkersList: [],
        formSubmitClass: "",
        appStyles: {
            marginTop: '25px',
        }
    },
    methods: {
        addStalker : function() {
            if(this.newNameText.length > 0){
                this.stalkersList.push(this.newNameText);
                this.newNameText = '';
                this.formSubmitClass = "submitted"
            }
        }
    },
});