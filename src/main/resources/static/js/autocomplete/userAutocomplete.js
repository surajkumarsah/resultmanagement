$(document).ready(function () {
	
	
	$("#searchUser").autocomplete({

        source: function (request, response) {
            $.ajax({
                url: "/user/searchUserAutoComplete",
                data: {searchText: $("#searchUser").val()},
                //dataType: "json",
                success: function (data) {
                    if (data.length > 0) {

                        let userName = [];
                        for (let i = 0; i < data.length; i++) {
							let userDetails = {};
							userDetails.label = data[i].userName;
							userDetails.value = data[i].id;
                            userName.push(userDetails);
                        }
                        response(userName)
                    }
                },
                error: function (xhr, status) {
                	alert(status);
            	}
            });
        },
        select: function (event, ui) {
            event.preventDefault(); //preventing default methods
            $("#searchUser").val(ui.item.label);
            $("#userId").val(ui.item.value);
        },
        
        autoFocus:true
    });
	
	
})



    