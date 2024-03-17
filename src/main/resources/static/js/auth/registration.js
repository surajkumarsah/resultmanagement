$(document).ready(function(){
    $('#myForm').w2form({
        name   : 'myForm',
        fields : [
            { field: 'user_name', type: 'text', required: true },
            { field: 'password', type: 'text', required: true}
        ],
        actions: {
            Reset() {
                this.clear();
            },
            Save() {
                w2confirm('Are you sure?')
			    .yes(() => {
			        fire_ajax_regis_auth();
			    })
			    .no(() => {
			        console.log('Yes')
			    })
            }
        }
    });
});


function fire_ajax_regis_auth() {

    let record = w2ui['myForm'].record;
    
    var jsonUserData = {};
    jsonUserData.userName = record.user_name;
    jsonUserData.password = record.password;


    var jsonUserDataString = JSON.stringify(jsonUserData)

    $.ajax({
        type: "POST",
        contentType: 'application/json',
        url: "/auth/registration",
        data: jsonUserDataString,
        processData: false, //prevent jQuery from automatically transforming the data into a query string
        cache: false,
        timeout: 600000,
        dataType: 'json',
        success: function (data, textStatus, xhr) {
			console.log(data);
        },
        error: function (e) {
            console.log(e)
        }
    });
}

