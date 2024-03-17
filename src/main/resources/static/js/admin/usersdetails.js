$(document).ready(function(){
	
	
});



function fire_ajax_save_Users(record) {

    //let record = w2ui['myForm'].record;
    
    var jsonUsersData = {};
    jsonUsersData.id = record.id;
    jsonUsersData.userName = record.userName;
    jsonUsersData.email = record.email;
    jsonUsersData.enabled = true;
    jsonUsersData.tokenExpired = true;
    //jsonUsersData.usersDesc = record.usersDesc;

	/*let roles = {};
	roles.roleName = record.roles;
	jsonUsersData.roles = roles;*/

	let jsonAddressData = {};
	jsonAddressData.address1 = record.address1;
	jsonAddressData.address2 = record.address2;
	jsonAddressData.city = record.city;
	jsonAddressData.country = record.country;
	jsonAddressData.state = record.state;
	jsonAddressData.zipCode = record.zipCode;

	jsonUsersData.addressId = jsonAddressData;

    var jsonUsersDataString = JSON.stringify(jsonUsersData)

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        contentType: 'application/json',
        url: "/user/add",
        data: jsonUsersDataString,
        processData: false, //prevent jQuery from automatically transforming the data into a query string
        cache: false,
        timeout: 600000,
        dataType: 'json',
        success: function (data, textStatus, xhr) {
			console.log(data);
			w2alert("Users added successfully!!");
			w2ui.userGrid.reload();
        },
        error: function (e) {
            console.log(e)
        }
    });
}


	// Users grid
	// widget configuration
	$('#userGrid').w2grid({	
	        name: 'userGrid',
	        show: {
	            toolbar: true
	        },
	        url: '/user/lists',
	        columns: [
	        	{ field: 'recid', text: 'recid', size: '33%', hidden: true },
	        	{ field: 'id', text: 'UserId', size: '33%', hidden: true},
	            { field: 'userName', text: 'Users Name', size: '33%', sortable: true, searchable: true },
	            { field: 'email', text: 'Email', size: '33%', sortable: true, searchable: true },
	            { field: 'enabled', text: 'Status', size: '33%' },
	            { field: 'rolesStr', text: 'Roles', size: '33%', sortable: true, searchable: true,
	            	//editable: { type: 'list', items: '', showAll: true, openOnFocus: true, align: 'left' },
	            	//render(record, extra) {
                		/*let len = record.roles.length;
	                    let roles;
	                    for(let i=0; i<len; i++){
							if(roles == undefined){
								roles = record.roles[i].roleName;
							}else{
								roles = roles +", "+ record.roles[i].roleName;
							}
						}
						return roles;*/
            		//}
	            }
	        ],

	        onClick(event) {
	            //console.log(event)
	            event.done(() => {
	                var sel = this.getSelection()
	                let form = w2ui['userForm'];
	                if (sel.length == 1) {
	                    form.recid = sel[0]
	                    form.record = w2ui['userGrid'].get(form.recid);
	                    form.refresh()
	                    
	                    /*let len = w2ui['userForm'].record.roles.length;
	                    let roles;
	                    for(let i=0; i<len; i++){
							if(roles == undefined){
								roles = form.record.roles[i].roleName;
							}else{
								roles = roles +", "+ form.record.roles[i].roleName;
							}
						}
						$('#roles').val(roles);*/
	                } else {
	                    form.clear()
	                }
	            })
	        }
	        });
	        
	    $('#userForm').w2form({
	        header: 'Users Details',
	        name: 'userForm',
	        fields: [
	            { field: 'id', type: 'text', html: { page:0, group: 'Users Details', label: 'ID', attr: 'size="10" readonly' } },
	            { field: 'userName', type: 'text', required: true, html: { page:0, label: 'Users Name', attr: 'size="40" maxlength="40"' } },
	            { field: 'email', type: 'email', html: { page:0, label: 'Email', attr: 'size="40"' } },
	            { field: 'UsersDesc', type: 'text', html: { page:0, label: 'Users Desc', attr: 'size="40" maxlength="40"' } },
	       		{ field: 'rolesStr', type:'text', html:{label: 'Roles'}, text: 'Roles', size: '33%',
	            	//editable: { type: 'list', items: '', showAll: true, openOnFocus: true, align: 'left' },
	            	render(record, extra) {
                		
            		}
	            },
		        { field: 'address1', type: 'text', required: true,
		            html: {
		                page: 1,
		                group: 'Address',
		                groupStyle: 'width: 100%',
		                label: 'Line 1',
		                span: 4,
		                attr: 'style="width: 200px"'
		            }
		        },
		        { field: 'address2', type: 'text',
		            html: {
		                page: 1,
		                label: 'Line 2',
		                span: 4,
		                attr: 'style="width: 200px"'
		            }
		        },
		        { field: 'city', type: 'text', required: true,
		            html: {
		                page: 1,
		                label: 'City',
		                span: 4,
		                attr: ''
		            }
		        },
		        { field: 'country', type: 'text', required: true,
		            html: {
		                page: 1,
		                label: 'Country',
		                span: 4,
		                attr: ''
		            }
		        },
		        { field: 'state', type: 'text', required: true,
		            html: {
		                page: 1,
		                label: 'State',
		                span: 4,
		                attr: ''
		            }
		        },
		        { field: 'zipCode', type: 'text', required: true,
		            html: {
		                page: 1,
		                label: 'Zip Code',
		                span: 4,
		                attr: ''
		            }
		        },
		        { field: 'short_bio', type: 'textarea',
		            html: {
		                page: 2,
		                group: 'Additional Fields',
		                column: 'after',
		                label: 'Short Bio',
		                attr: 'style="width: 90%; height: 60px; resize: none"'
		            }
		        },
		        { field: 'talk_name', type: 'text', required: true,
		            html: {
		                page: 2,
		                column: 'after',
		                label: 'Talk Name',
		                attr: 'style="width: 90%"'
		            }
		        },
		        { field: 'description', type: 'textarea',
		            html: {
		                page: 2,
		                column: 'after',
		                label: 'Description',
		                attr: 'style="width: 90%; height: 60px; resize: none"'
		            }
		        }
	        ],
	        tabs: [
		        { id: 'tab1', text: 'Users Details' },
		        { id: 'tab2', text: 'Address' },
		        { id: 'tab3', text: 'Other' }
		    ],
	        actions: {
	            Reset() {
	                this.clear()
	            },
	            Save() {
	                 w2confirm('Are you sure?')
					    .yes(() => {
					        fire_ajax_save_Users(this.record);
					    })
					    .no(() => {
					        console.log('Yes')
					    })
	            }
	            
	        }
	        });
	    
	    	    
	    
	   	//Bottom toolbar button
	 
	    
 $('#toolbar').w2toolbar({
    box: '#toolbar',
    name: 'toolbar',
    items: [
        { type: 'button', id: 'admin', text: 'Admin', icon: 'w2ui-icon-check' },
		{ type: 'button', id: 'teacher', text: 'Teacher', icon: 'w2ui-icon-check' },
		{ type: 'button', id: 'student', text: 'Student', icon: 'w2ui-icon-check' },
        { type: 'break',  id: 'break0' },
        { type: 'button', id: 'btn', text: 'Action Button', icon: 'w2ui-icon-info', disabled: true },
        { type: 'button', id: 'btn2', text: 'Other Button', icon: 'w2ui-icon-paste' }
    ],
    onClick(event) {
        if (event.target == 'admin'){
			openAdminPopup();
		}
		else if (event.target == 'teacher'){
			openTeacherPopup();
		}
		else if (event.target == 'student'){
			openStudentPopup();
		}
		else if(event.target == 'users'){
			openUsersPage();
		}
    }
});


function openUsersPage(){
	location.replace("/user")
}

	    
