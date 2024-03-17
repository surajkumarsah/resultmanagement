$(document).ready(function(){
	

});



function fire_ajax_save_student(record) {

    //let record = w2ui['myForm'].record;
    
    var jsonStudentData = {};
    jsonStudentData.schoolId = record.schoolId;
    jsonStudentData.schoolName = record.schoolName;
    jsonStudentData.schoolEmail = record.schoolEmail;
    jsonStudentData.schoolDesc = record.schoolDesc;


    var jsonStudentDataString = JSON.stringify(jsonStudentData)

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        contentType: 'application/json',
        url: "/school/stu/add",
        data: jsonStudentDataString,
        processData: false, //prevent jQuery from automatically transforming the data into a query string
        cache: false,
        timeout: 600000,
        dataType: 'json',
        success: function (data, textStatus, xhr) {
			console.log(data);
			w2alert("School added successfully!!");
			w2ui.schoolGrid.reload();
        },
        error: function (e) {
            console.log(e)
        }
    });
}


	// school grid
	 $('#schoolGrid').w2grid({
	        name: 'schoolGrid',
	        show: {
	            toolbar: true,
	            toolbarDelete: true
	        },
	        url: '/school/lists',
	        columns: [
	        	{ field: 'recid', text: 'recid', size: '33%', hidden: true },
	            { field: 'schoolName', text: 'School Name', size: '33%', sortable: true, searchable: true },
	            { field: 'schoolEmail', text: 'Email', size: '33%', sortable: true, searchable: true },
	            { field: 'schoolDesc', text: 'Desc', size: '33%' }
	        ],

	        onClick(event) {
	            console.log(event)
	            event.done(() => {
	                var sel = this.getSelection()
	                let form = w2ui['schoolForm'];
	                if (sel.length == 1) {
	                    form.recid = sel[0]
	                    form.record = w2ui['schoolGrid'].get(form.recid);
	                    form.refresh()
	                } else {
	                    form.clear()
	                }
	            })
	        }
	    });
	    
 
	    
	    
	    
	     $('#schoolForm').w2form({
	        header: 'School Details',
	        name: 'schoolForm',
	        fields: [
	            { field: 'schoolId', type: 'text', html: { page:0, group: 'School Details', label: 'ID', attr: 'size="10" readonly' } },
	            { field: 'schoolName', type: 'text', required: true, html: { page:0, label: 'School Name', attr: 'size="40" maxlength="40"' } },
	            { field: 'schoolEmail', type: 'email', html: { page:0, label: 'Email', attr: 'size="40"' } },
	            { field: 'schoolDesc', type: 'text', html: { page:0, label: 'School Desc', attr: 'size="40" maxlength="40"' } },
	       
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
		        { id: 'tab1', text: 'School Details' },
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
					        fire_ajax_save_school(this.record);
					    })
					    .no(() => {
					        console.log('Yes')
					    })
	            },
	            toolbarDelete(){
					alert('delete');
				}
	            
	        }
	    });
	    
	    	    
	    
	    
	    
 $('#toolbar').w2toolbar({
    box: '#toolbar',
    name: 'toolbar',
    items: [
        { type: 'button', id: 'class', text: 'Class', icon: 'w2ui-icon-check' },
        { type: 'button', id: 'subject', text: 'Subject', icon: 'w2ui-icon-cross' },
        { type: 'button', id: 'admin', text: 'Admin', icon: 'w2ui-icon-check' },
		{ type: 'button', id: 'teacher', text: 'Teacher', icon: 'w2ui-icon-check' },
		{ type: 'button', id: 'student', text: 'Student', icon: 'w2ui-icon-check' },
		{ type: 'button', id: 'exam', text: 'Exam', icon: 'w2ui-icon-check' },
		{ type: 'button', id: 'class', text: 'Class', icon: 'w2ui-icon-check' },
        { type: 'break',  id: 'break0' },
        { type: 'button', id: 'btn', text: 'Action Button', icon: 'w2ui-icon-info', disabled: true },
        { type: 'button', id: 'btn2', text: 'Other Button', icon: 'w2ui-icon-paste' }
    ],
    onClick(event) {
        if (event.target == 'class'){
			openClassPopup();
		}
        else if (event.target == 'subject'){
			openSubjectPopup();
		}
		else if (event.target == 'admin'){
			openAdminPopup();
		}
		else if (event.target == 'teacher'){
			openTeacherPopup();
		}
		else if (event.target == 'exam'){
			openExamPopup();
		}
    }
});
