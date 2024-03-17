$(document).ready(function(){




})



function openClassPopup(){

let config = {
    layouts: {
        name: 'layouts',
        padding: 4,
        panels: [
            { type: 'left', size: '50%', resizable: true, minSize: 300 },
            { type: 'main', minSize: 300, style: 'overflow: hidden' }
        ]
    },
    grid: {
        name: 'classGrid',
        show: {
            toolbar: true,
            toolbarDelete: true
        },
        url: '/school/clists',
        columns: [
        	{ field: 'recid', text: 'recid', size: '33%', hidden: true },
            { field: 'className', text: 'Class Name', size: '33%', sortable: true, searchable: true },
            { field: 'classType', text: 'Class Type', size: '33%', sortable: true, searchable: true },
            { field: 'classDesc', text: 'Class Desc', size: '33%' },
            { field: 'doc', text: 'DOC', size: '33%' },
            { field: 'dou', text: 'DOU', size: '33%' },
            { field: 'schoolName', text: 'School', size: '33%' }
            
        ],

        async onClick(event) {
            console.log(event)
            event.done(() => {
                var sel = this.getSelection()
                let form = w2ui['classForm'];
                if (sel.length == 1) {
                    form.recid = sel[0]
                    form.record = w2ui['classGrid'].get(form.recid);
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
	        header: 'Class Details',
	        name: 'classForm',
	        fields: [
	            { field: 'classId', type: 'text', html: { page:0, group: 'Class Details', label: 'ID', attr: 'size="10" readonly' } },
	            { field: 'className', type: 'text', required: true, html: { page:0, label: 'Class Name', attr: 'size="40" maxlength="40"' } },
	            { field: 'classType', type: 'text', html: { page:0, label: 'Class Type', attr: 'size="40"' } },
	            { field: 'classDesc', type: 'text', html: { page:0, label: 'Class Desc', attr: 'size="40" maxlength="40"' } },
	            { field: 'doc', type: 'text', html: { page:0, label: 'DOC', attr: 'size="40" maxlength="40"' } },
	            { field: 'dou', type: 'text', html: { page:0, label: 'DOU', attr: 'size="40" maxlength="40"' } },
	            { field: 'schoolName', type: 'text', html: { page:0, label: 'School Name', attr: 'size="40" maxlength="40" readonly' } },
	            {hidden: true, field: 'schoolId', type: 'text', html: { page:0, label: 'SchoolId', attr: 'size="40" maxlength="40"' } }

		        ],
	        actions: {
	            Reset() {
	                this.clear()
	            },
	            Save() {
	                 w2confirm('Are you sure?')
					    .yes(() => {
					        fire_ajax_save_class(this.record);
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
let layout = $('#layouts').w2layout(config.layouts);
let grid = $('#classGrid').w2grid(config.grid);
let form = $('#classForm').w2form(config.form);



    w2popup.open({
        title: 'Popup',
        width: 900,
        height: 600,
        showMax: true,
        body: '<div id="main" style="position: absolute; left: 2px; right: 2px; top: 0px; bottom: 3px;"></div>',
				
		onOpen: function(event){
			event.onComplete = function () {
                layout.render('#w2ui-popup #main')
		        layout.html('left', grid)
		        layout.html('main', form)
            }
		},
		onClose: function(event){
			if(w2ui.layouts){
				$().w2destroy('layouts');
			}if(w2ui.classGrid){
				$().w2destroy('classGrid');
			}if(w2ui.classForm){
				$().w2destroy('classForm');
			}
		}
				
    })
}


function fire_ajax_save_class(record){
	
	    var jsonClassData = {};
    jsonClassData.classId = record.classId;
    jsonClassData.className = record.className;
    jsonClassData.classDesc = record.classDesc;
    jsonClassData.classType = record.classType;
    jsonClassData.schoolId = record.schoolId;
    jsonClassData.doc = record.doc;
    jsonClassData.dou = record.dou;


    var jsonClassDataString = JSON.stringify(jsonClassData)

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        contentType: 'application/json',
        url: "/school/addClass",
        data: jsonClassDataString,
        processData: false, //prevent jQuery from automatically transforming the data into a query string
        cache: false,
        timeout: 600000,
        dataType: 'json',
        success: function (data, textStatus, xhr) {
			console.log(data);
			w2alert("Class added successfully!!");
			w2ui.classGrid.reload();
        },
        error: function (e) {
            console.log(e)
        }
    });
	
}
