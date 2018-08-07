new Vue ({
    el:  '#app',
    data: {
        event: {
            eventDate: 'August 11th - 14th',
            eventTitle: 'Summer adventure!',
            eventDesc: "<b>Finally!</b> We're going on our little trip in the mountains for a couple of days",
        },
        newNameText: '',
        stalkersList: ['Milena'],
        appStyles: {
            marginTop: '25px',
        },
        eventCapacity: 10,
        eventCapacityPercentage: 0
    },
    methods: {
        addStalker : function() {
            if(this.newNameText.length > 0 & this.stalkersList.length < this.eventCapacity){
                this.stalkersList.push(this.newNameText);
                this.newNameText = '';
                this.eventCapacityPercentage = this.stalkersList.length/this.eventCapacity * 100;
            }
        },
        methodCall: function() {
            this.appStyles.marginTop = "50px";
        }
    },
    computed: {
        sortNames: function() {
            return this.stalkersList.sort();
        }
    }
});