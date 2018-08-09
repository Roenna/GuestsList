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
        keyPressed : function() { 
            console.log('Key pressed!')
        }
    },
    computed: {
        sortNames: function() {
            return this.stalkersList.sort();
        }
    },
    watch: {
        stalkersList : function(data) { 
            console.log('List change!');
        }
    },
    filters: {
        toUpper: function(data){
            return data.toUpperCase();
        }
    }
});