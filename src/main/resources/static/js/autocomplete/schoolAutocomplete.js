$(document).ready(function () {
	
	
	$("#searchSchool").autocomplete({

        source: function (request, response) {
            $.ajax({
                url: "/school/searchSchoolAutoComplete",
                data: {searchText: $("#searchSchool").val()},
                //dataType: "json",
                success: function (data) {
                    if (data.length > 0) {

                        let schoolName = [];
                        for (let i = 0; i < data.length; i++) {
							let schoolDetails = {};
							schoolDetails.label = data[i].schoolName;
							schoolDetails.value = data[i].schoolId;
                            schoolName.push(schoolDetails);
                        }
                        response(schoolName)
                    }
                },
                error: function (xhr, status) {
                	alert(status);
            	}
            });
        },
        select: function (event, ui) {
            event.preventDefault(); //preventing default methods
            $("#searchSchool").val(ui.item.label);
            $("#schoolId").val(ui.item.value);
        },
        
        autoFocus:true
    });
	
	
})



    