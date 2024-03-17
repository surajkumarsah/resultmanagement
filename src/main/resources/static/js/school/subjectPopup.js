$(document).ready(function(){




})



function openSubjectPopup(){

let subConfig = {
    layouts: {
        name: 'subLayouts',
        padding: 4,
        panels: [
            { type: 'left', size: '50%', resizable: true, minSize: 300 },
            { type: 'main', minSize: 300, style: 'overflow: hidden' }
        ]
    },
    grid: {
        name: 'subjectGrid',
        show: {
            toolbar: true,
            toolbarDelete: true
        },
        url: '/school/sublists',
        columns: [
        	{ field: 'recid', text: 'recid', size: '33%', hidden: true },
            { field: 'name', text: 'Sub Name', size: '33%', sortable: true, searchable: true },
            { field: 'type', text: 'Sub Type', size: '33%', sortable: true, searchable: true },
            { field: 'courseType', text: 'Course', size: '33%' },
            { field: 'subDesc', text: 'Desc', size: '33%' },
            { field: 'doc', text: 'DOC', size: '33%' },
            { field: 'dou', text: 'DOU', size: '33%' },
            { field: 'schoolName', text: 'School', size: '33%' },
            { hidden: true, field: 'schoolId', text: 'SchoolId', size: '33%' }

        ],

        async onClick(event) {
            console.log(event)
            event.done(() => {
                var sel = this.getSelection()
                let form = w2ui['subjectForm'];
                if (sel.length == 1) {
                    form.recid = sel[0]
                    form.record = w2ui['subjectGrid'].get(form.recid);
                    form.record.schoolName = $('#searchSchool').val()
					form.record.schoolId = $('#schoolId').val()

                    form.refresh()
                } else {
                    form.clear()
                }
            })
        }
        },
    form: {
	        header: 'Subject Details',
	        name: 'subjectForm',
	        fields: [
	            { field: 'subjectId', type: 'text', html: { page:0, group: 'Subject Details', label: 'ID', attr: 'size="10" readonly' } },
	            { field: 'name', type: 'text', required: true, html: { page:0, label: 'Subject Name', attr: 'size="40" maxlength="40"' } },
	            { field: 'type', type: 'text', html: { page:0, label: 'Sub Type', attr: 'size="40"' } },
	           	{ field: 'courseType', type: 'text', html: { page:0, label: 'Course', attr: 'size="40"' } },
	            { field: 'subDesc', type: 'text', html: { page:0, label: 'Sub Desc', attr: 'size="40" maxlength="40"' } },
	            { field: 'doc', type: 'text', html: { page:0, label: 'DOC', attr: 'size="40" maxlength="40"' } },
	            { field: 'dou', type: 'text', html: { page:0, label: 'DOU', attr: 'size="40" maxlength="40"' } },
	            { field: 'schoolName', type: 'text', html: { page:0, label: 'School Name', attr: 'size="40" maxlength="40"' },
	            	render(record, extra){
						let schoolName = $('#searchSchool').val();
						return schoolName;
					}
	             },
	            {hidden: true, field: 'schoolId', type: 'text', html: { page:0, label: 'SchoolId', attr: 'size="40" maxlength="40"' },
	            	render(record, extra){
						return $('#schoolId').val();
					}
	             }

		        ],
	        actions: {
	            Reset() {
	                this.clear()
	            },
	            Save() {
	                 w2confirm('Are you sure?')
					    .yes(() => {
					        fire_ajax_save_sub(this.record);
					    })
					    .no(() => {
					        console.log('Yes')
					    })
	            }
	        },
	        onLoad: function (e) {
            e.onComplete = function (event) {
                let record = e.data;
                let schoolName = $('#searchSchool').val();
                let schoolId = $('#schoolId').val();
                
                record.schoolName = schoolName;
                record.schoolId = schoolId;
            }

            //w2ui.leaveForm.reload()
        }
        }
}

	// initialization in memory
let subLayout = $('#subLayouts').w2layout(subConfig.layouts);
let subGrid = $('#subjectGrid').w2grid(subConfig.grid);
let subForm = $('#subjectForm').w2form(subConfig.form);



    w2popup.open({
        title: 'Popup',
        width: 900,
        height: 600,
        showMax: true,
        body: '<div id="subMain" style="position: absolute; left: 2px; right: 2px; top: 0px; bottom: 3px;"></div>',
				
		onOpen: function(event){
			event.onComplete = function () {
                subLayout.render('#w2ui-popup #subMain')
		        subLayout.html('left', subGrid)
		        subLayout.html('main', subForm)
            }
		},
		onClose: function(event){
			if(w2ui.subLayouts){
				$().w2destroy('subLayouts');
			}if(w2ui.subjectGrid){
				$().w2destroy('subjectGrid');
			}if(w2ui.subjectForm){
				$().w2destroy('subjectForm');
			}
		}
				
    })
}


function fire_ajax_save_sub(record){
	
	    var jsonSubjectData = {};
    jsonSubjectData.subjectId = record.subjectId;
    jsonSubjectData.name = record.name;
    jsonSubjectData.type = record.type;
    jsonSubjectData.courseType = record.courseType;
    jsonSubjectData.subDesc = record.subDesc;
    jsonSubjectData.schoolId = record.schoolId;
    jsonSubjectData.doc = record.doc;
    jsonSubjectData.dou = record.dou;


    var jsonSubjectDataString = JSON.stringify(jsonSubjectData)

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        contentType: 'application/json',
        url: "/school/addSubject",
        data: jsonSubjectDataString,
        processData: false, //prevent jQuery from automatically transforming the data into a query string
        cache: false,
        timeout: 600000,
        dataType: 'json',
        success: function (data, textStatus, xhr) {
			console.log(data);
			w2alert("Subject added successfully!!");
			w2ui.subjectGrid.reload();
        },
        error: function (e) {
            console.log(e)
        }
    });
	
}
