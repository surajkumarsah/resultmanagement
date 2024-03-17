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
			w2ui.TeacherGrid.reload();
        },
        error: function (e) {
            console.log(e)
        }
    });
}

function openTeacherPopup(){

let TeacherConfig = {
    layouts: {
        name: 'layouts',
        padding: 4,
        panels: [
            { type: 'left', size: '50%', resizable: true, minSize: 300 },
            { type: 'main', minSize: 300, style: 'overflow: hidden' }
        ]
    },
    	grid: {
            name: 'TeacherGrid',
	        show: {
	            toolbar: true
	        },
	        url: '/user/teacherlists',
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

	        async onClick(event) {
	            //console.log(event)
	            event.done(() => {
	                var sel = this.getSelection()
	                let form = w2ui['TeacherForm'];
	                if (sel.length == 1) {
	                    form.recid = sel[0]
	                    form.record = w2ui['TeacherGrid'].get(form.recid);
	                    form.refresh()
	                    
	                    /*let len = w2ui['TeacherForm'].record.roles.length;
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
	        },
	        
	    form: {
	        header: 'Users Details',
	        name: 'TeacherForm',
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
	   }
}
	    
	    	    
	    	// initialization in memory
let adminlayout = $('#layouts').w2layout(TeacherConfig.layouts);
let TeacherGrid = $('#TeacherGrid').w2grid(TeacherConfig.grid);
let TeacherForm = $('#TeacherForm').w2form(TeacherConfig.form);



    w2popup.open({
        title: 'Popup',
        width: 900,
        height: 600,
        showMax: true,
        body: '<div id="main" style="position: absolute; left: 2px; right: 2px; top: 0px; bottom: 3px;"></div>',
				
		onOpen: function(event){
			event.onComplete = function () {
                adminlayout.render('#w2ui-popup #main')
		        adminlayout.html('left', TeacherGrid)
		        adminlayout.html('main', TeacherForm)
            }
		},
		onClose: function(event){
			if(w2ui.layouts){
				$().w2destroy('layouts');
			}if(w2ui.TeacherGrid){
				$().w2destroy('TeacherGrid');
			}if(w2ui.TeacherForm){
				$().w2destroy('TeacherForm');
			}
		}
				
    })
}
