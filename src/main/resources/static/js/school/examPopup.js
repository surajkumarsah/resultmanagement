$(document).ready(function(){




})



function openExamPopup(){

let examConfig = {
    layouts: {
        name: 'layouts',
        padding: 4,
        panels: [
            { type: 'left', size: '50%', resizable: true, minSize: 300 },
            { type: 'main', minSize: 300, style: 'overflow: hidden' }
        ]
    },
    grid: {
        name: 'examGrid',
        show: {
            toolbar: true,
            toolbarDelete: true
        },
        url: '/exam/elists',
        columns: [
        	{ field: 'recid', text: 'recid', size: '33%', hidden: true },
            { field: 'name', text: 'Exam Name', size: '33%', sortable: true, searchable: true },
            { field: 'type', text: 'Exam Type', size: '33%', sortable: true, searchable: true },
            { field: 'examDesc', text: 'Exam Desc', size: '33%' },
            { field: 'doc', text: 'DOC', size: '33%' },
            { field: 'dou', text: 'DOU', size: '33%' },
            { field: 'schoolName', text: 'School', size: '33%' },
            { hidden: true, field: 'schoolId', text: 'School', size: '33%' }

        ],

        async onClick(event) {
            console.log(event)
            event.done(() => {
                var sel = this.getSelection()
                let form = w2ui['examForm'];
                if (sel.length == 1) {
                    form.recid = sel[0]
                    form.record = w2ui['examGrid'].get(form.recid);
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
	        header: 'Exam Details',
	        name: 'examForm',
	        fields: [
	            { field: 'examId', type: 'text', html: { page:0, group: 'Exam Details', label: 'ID', attr: 'size="10" readonly' } },
	            { field: 'name', type: 'text', required: true, html: { page:0, label: 'Exam Name', attr: 'size="40" maxlength="40"' } },
	            { field: 'type', type: 'text', html: { page:0, label: 'Exam Type', attr: 'size="40"' } },
	            { field: 'examDesc', type: 'text', html: { page:0, label: 'Exam Desc', attr: 'size="40" maxlength="40"' } },
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
					        fire_ajax_save_exam(this.record);
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
let examlayout = $('#layouts').w2layout(examConfig.layouts);
let examgrid = $('#examGrid').w2grid(examConfig.grid);
let examform = $('#examForm').w2form(examConfig.form);



    w2popup.open({
        title: 'Popup',
        width: 900,
        height: 600,
        showMax: true,
        body: '<div id="main" style="position: absolute; left: 2px; right: 2px; top: 0px; bottom: 3px;"></div>',
				
		onOpen: function(event){
			event.onComplete = function () {
                examlayout.render('#w2ui-popup #main')
		        examlayout.html('left', examgrid)
		        examlayout.html('main', examform)
            }
		},
		onClose: function(event){
			if(w2ui.layouts){
				$().w2destroy('layouts');
			}if(w2ui.examGrid){
				$().w2destroy('examGrid');
			}if(w2ui.examForm){
				$().w2destroy('examForm');
			}
		}
				
    })
}


function fire_ajax_save_exam(record){
	
	    var jsonExamData = {};
    jsonExamData.examId = record.examId;
    jsonExamData.name = record.name;
    jsonExamData.examDesc = record.examDesc;
    jsonExamData.type = record.type;
    jsonExamData.schoolId = record.schoolId;
    jsonExamData.doc = record.doc;
    jsonExamData.dou = record.dou;


    var jsonExamDataString = JSON.stringify(jsonExamData)

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        contentType: 'application/json',
        url: "/exam/addExam",
        data: jsonExamDataString,
        processData: false, //prevent jQuery from automatically transforming the data into a query string
        cache: false,
        timeout: 600000,
        dataType: 'json',
        success: function (data, textStatus, xhr) {
			console.log(data);
			w2alert("Exam added successfully!!");
			w2ui.examGrid.reload();
        },
        error: function (e) {
            console.log(e)
        }
    });
	
}
