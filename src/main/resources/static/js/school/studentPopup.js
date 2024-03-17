$(document).ready(function(){
	
	
});

var subjects;
var selectedRecords;


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
			w2ui.studentGrid.reload();
        },
        error: function (e) {
            console.log(e)
        }
    });
}

function openStudentPopup(){

	if(w2ui.layouts){
		$().w2destroy('layouts');
	}if(w2ui.studentGrid){
		$().w2destroy('studentGrid');
	}if(w2ui.studentForm){
		$().w2destroy('studentForm');
	}


let studentConfig = {
    layouts: {
        name: 'layouts',
        padding: 4,
        panels: [
            { type: 'left', size: '40%', resizable: true, minSize: 300 },
            { type: 'main', minSize: 600, style: 'overflow: hidden' }
        ]
    },
    	grid: {
            name: 'studentGrid',
	        show: {
	            toolbar: true
	        },
	        url: '/user/studlists',
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
            		
            		/*render: function(record, extra){
						
					}*/
	            }
	        ],

	        async onClick(event) {
	            //console.log(event)
	            event.done(() => {
	                var sel = this.getSelection()
	                let form = w2ui['studentForm'];
	                if (sel.length == 1) {
	                    form.recid = sel[0]
	                    form.record = w2ui['studentGrid'].get(form.recid);
	                    selectedRecords = form.record;
	                    form.refresh()
	                    
	                    /*let len = w2ui['studentForm'].record.roles.length;
	                    let roles;
	                    for(let i=0; i<len; i++){
							if(roles == undefined){
								roles = form.record.roles[i].roleName;
							}else{
								roles = roles +", "+ form.record.roles[i].roleName;
							}
						}
						$('#roles').val(roles);*/
						
						
						
						if($('.subDiv').length != 0){
							$('.subDiv').remove();
						}
						if($('.examDiv').length != 0){
							$('.examDiv').remove();
						}
						if($('.classDiv').length != 0){
							$('.classDiv').remove();
						}
						
						let className = form.record.classId.className;
						let classHtml = '<br><label class="subDiv"><strong>' + className + '</strong></label>';

						
						let subLen = form.record.classId.subjects.length;
						let subHtml;
						if(subLen > 0){
							subHtml = '<br><label class="subDiv"><input type="hidden" value="'+form.record.classId.subjects[0].subjectId+'"/><strong>' + form.record.classId.subjects[0].name + '</strong></label>';
							for(let i=1; i<subLen; i++){
								subHtml = subHtml + '<br><label class="subDiv"><input type="hidden" value="'+form.record.classId.subjects[i].subjectId+'"/><strong>' + form.record.classId.subjects[i].name + '</strong></label>';
							}
						}
						
						
						let examLen = form.record.classId.exams.length;
						let examHtml;
						subjects = form.record.classId.subjects;
						if(examLen > 0){
							examHtml = '<br><table class="subDiv"><tr><td><label><strong>' + form.record.classId.exams[0].name + '</strong></label></td> <td><button class="addMarks w2ui-btn w2ui-btn-blue" id="'+form.record.classId.exams[0].examId+'" name="'+form.record.classId.exams[0].name+'" >Add Marks</button> </td>    <td><button class="genreport w2ui-btn w2ui-btn-blue" id="'+form.record.classId.exams[0].examId+'" name="'+form.record.classId.exams[0].name+'" >Report</button> </td></tr>';
							for(let i=1; i<examLen; i++){
								examHtml = examHtml + '<br><tr><td><label><strong>' + form.record.classId.exams[i].name + '</strong></label></td> <td> <button class="addMarks w2ui-btn w2ui-btn-blue" id="'+form.record.classId.exams[i].examId+'" name="'+form.record.classId.exams[i].name+'" >Add Marks</button> </td>   <td> <button class="genreport w2ui-btn w2ui-btn-blue" id="'+form.record.classId.exams[i].examId+'" name="'+form.record.classId.exams[i].name+'" >Report</button> </td> </tr>';
							}
							examHtml + '</table>';
						}
						
						
						
						$('#subjectId').after(subHtml);
						$('#exams').after(examHtml);
						$('#classId').after(classHtml);
						
	                } else {
	                    form.clear()
	                }
	            })
	        }
	        },
	        
	    form: {
	        header: 'Users Details',
	        name: 'studentForm',
	        panels: [
            //{ type: 'right', size: '60%', resizable: true}
            ],
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
		                page: 6,
		                group: 'Additional Fields',
		                column: 'after',
		                label: 'Short Bio',
		                attr: 'style="width: 90%; height: 60px; resize: none"'
		            }
		        },
		        { field: 'talk_name', type: 'text', required: true,
		            html: {
		                page: 6,
		                column: 'after',
		                label: 'Talk Name',
		                attr: 'style="width: 90%"'
		            }
		        },
		        { field: 'description', type: 'textarea',
		            html: {
		                page: 6,
		                column: 'after',
		                label: 'Description',
		                attr: 'style="width: 90%; height: 60px; resize: none"'
		            }
		        },
		        
		        
		    { field: 'classId', type: 'text', html: { page:2, group: 'Class Details', label: 'Class', attr: 'size="20"' },
		    	render(record, extra) {
                	return record.classId.classId;		
            	}
		    	
		     },
			{ field: 'subjectId', type: 'text', html: { page:3, group: 'Subjects', label: 'Subjects', attr: 'size="20"' } },
			{ field: 'exams', type: 'text', html: { page:4, group: 'Exams', label: 'Exams', attr: 'size="20"' } },
			{ field: 'marks', type: 'text', html: { page:5, group: 'marks', label: 'Marks', attr: 'size="20"' } },

	        ],
	        
	        
	        
	        
	        
	        tabs: [
		        { id: 'tab1', text: 'Users Details' },
		        { id: 'tab2', text: 'Address' },
		        { id: 'tab3', text: 'Class' },
		        { id: 'tab4', text: 'Subject' },
		        { id: 'tab5', text: 'Exam' },
		        { id: 'tab6', text: 'Marks' },
		        { id: 'tab7', text: 'Other' }
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
let studentlayout = $('#layouts').w2layout(studentConfig.layouts);
let studentGrid = $('#studentGrid').w2grid(studentConfig.grid);
let studentForm = $('#studentForm').w2form(studentConfig.form);



    w2popup.open({
        title: 'Popup',
        width: 1200,
        height: 500,
        showMax: true,
        body: '<div id="main" style="position: absolute; left: 2px; right: 2px; top: 0px; bottom: 3px;"></div>',
				
		onOpen: function(event){
			event.onComplete = function () {
				event.preventDefault();
                studentlayout.render('#w2ui-popup #main')
		        studentlayout.html('left', studentGrid)
		        studentlayout.html('main', studentForm)
            }
		},
		onClose: function(event){
			if(w2ui.layouts){
				$().w2destroy('layouts');
			}if(w2ui.studentGrid){
				$().w2destroy('studentGrid');
			}if(w2ui.studentForm){
				$().w2destroy('studentForm');
			}
		}
				
    })
}


$(document).on('click', '.addMarks' , function(e){
	//alert('hello')
	let examId = this.id;
	let examName = this.name;
	
	openAddMarksPopup(examId, examName, subjects, selectedRecords);
})



$(document).on('click', '.genreport' , function(e){
	//alert('hello')
	let examId = this.id;
	let examName = this.name;
	
	  const myObject = { examId: examId, examName: examName, subjects: subjects, selectedRecords: selectedRecords };
	  const myObjectString = JSON.stringify(myObject);
	  localStorage.setItem('reportdata', myObjectString);
	
	//openAddMarksPopup(examId, examName, subjects, selectedRecords);
	
	window.location.href = "/school/reportcard";
})



