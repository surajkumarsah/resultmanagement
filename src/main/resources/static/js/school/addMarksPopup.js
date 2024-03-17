$(document).ready(function(){
	
	
});


function fire_ajax_save_SubjectMarks(record) {

    //let record = w2ui['myForm'].record;
    
    if(record[0].marks == null){
		w2alert('Please enter the marks!!');
		return;
	}

    var jsonSubMarksDataArr = [];
    for(let i=0; i<record.length; i++){
		let jsonSubMarksData = {};
		jsonSubMarksData.stuSubMarksId = record[i].stuSubMarksId;
	    jsonSubMarksData.examId = record[i].examId;
	    jsonSubMarksData.schoolId = record[i].schoolId;
	    jsonSubMarksData.studentId = record[i].studentId;
	    jsonSubMarksData.subjectId = record[i].subjectId;
	    jsonSubMarksData.marks = parseInt(record[i].marks);
	   	jsonSubMarksData.theoryMarks = parseInt(record[i].theoryMarks);
	    jsonSubMarksData.practicalMarks = parseInt(record[i].practicalMarks);
	    jsonSubMarksData.extraMarks = parseInt(record[i].extraMarks);
	    jsonSubMarksData.assignmentMarks = parseInt(record[i].assignmentMarks);

	    
	    jsonSubMarksDataArr[i] = jsonSubMarksData;
	}

    var jsonSubMarksDataString = JSON.stringify(jsonSubMarksDataArr)

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        contentType: 'application/json',
        url: "/school/addExamMarks",
        data: jsonSubMarksDataString,
        processData: false, //prevent jQuery from automatically transforming the data into a query string
        cache: false,
        timeout: 600000,
        dataType: 'json',
        success: function (data, textStatus, xhr) {
			if(data == "Marks added Successfully."){
				console.log(data);
				w2alert(data);
				//w2ui.studentGrid.reload();
			}
			
        },
        error: function (e) {
			if(e.responseText == "Marks added Successfully."){
				console.log(e.responseText);
				w2alert(e.responseText);
			}
            console.log(e)
        }
    });
}


function fire_ajax_get_SubjectMarks(examId, schoolId, studentId) {

    //let record = w2ui['myForm'].record;
    

    /*var jsonSubMarksDataArr = [];
    for(let i=0; i<record.length; i++){
		let jsonSubMarksData = {};
		jsonSubMarksData.id = record[i].stuSubMarksId;
	    jsonSubMarksData.examId = record[i].examId;
	    jsonSubMarksData.schoolId = 1;//record[i].schoolId;
	    jsonSubMarksData.studentId = 3;//record[i].studentId;
	    jsonSubMarksData.subjectId = record[i].subjectId;
	    jsonSubMarksData.marks = record[i].marks;
	    
	    jsonSubMarksDataArr[i] = jsonSubMarksData;
	}

    var jsonSubMarksDataString = JSON.stringify(jsonSubMarksDataArr)
*/

	let jsonSubMarksDataArr = [{'examId': examId, 'schoolId': 1, 'studentId':3}]

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        contentType: 'application/json',
        url: "/school/examMarkslists",
        data: JSON.stringify(jsonSubMarksDataArr),
        processData: false, //prevent jQuery from automatically transforming the data into a query string
        cache: false,
        timeout: 600000,
        dataType: 'json',
        success: function (data, textStatus, xhr) {
			console.log(data);
			w2alert(data);
        },
        error: function (e) {
			if(e.responseText == "Marks added Successfully."){
				console.log(e.responseText);
				w2alert(e.responseText);
			}
            console.log(e)
        }
    });
}


var selOfexamMarks;

function openAddMarksPopup(id, name, subjects, selectedRecords){
	
	if(w2ui.layouts){
		$().w2destroy('layouts');
	}if(w2ui.studentGrid){
		$().w2destroy('studentGrid');
	}if(w2ui.studentForm){
		$().w2destroy('studentForm');
	}
	
	if(w2ui.examMarksLayout){
		$().w2destroy('examMarksLayout');
	}if(w2ui.examMarksGrid){
		$().w2destroy('examMarksGrid');
	}if(w2ui.examMarksForm){
		$().w2destroy('examMarksForm');
	}
	
	 $('#popup').w2popup().close()
	
	
	let examMarksConfig = {
	    layouts: {
	        name: 'examMarksLayout',
	        padding: 4,
	        panels: [
	            { type: 'left', size: '50%', resizable: true, minSize: 300 },
	            { type: 'main', minSize: 300, style: 'overflow: hidden' }
	        ]
	    },
	    	grid: {
	            name: 'examMarksGrid',
		        show: {
		            toolbar: true,
		            toolbarSave: true
		        },
		        //url: '/user/teacherlists',
		        columns: [
		        	{ field: 'recid', text: 'recid', size: '33%', hidden: true },
		        	{ field: 'stuSubMarksId', text: 'stuSubMarksId', size: '33%', hidden: true, render() { return stuSubMarksId; }},
		        	{ field: 'examId', text: 'examId', size: '33%', hidden: true, render(){ return id; }},
		        	{ field: 'studentId', text: 'studentId', size: '33%', hidden: true},
		        	{ field: 'schoolId', text: 'schoolId', size: '33%', hidden: true},
		            { field: 'examName', text: 'Exam Name', size: '33%', sortable: true, searchable: true, render(){ return name; }},
		            { field: 'subjectId', text: 'subjectId', size: '33%', hidden: true },
		            { field: 'subjectName', text: 'Subject Name', size: '33%', sortable: true, searchable: true},
		            { field: 'marks', text: 'Marks', size: '33%', sortable: true, searchable: true, editable: { type: 'text' }},
		            { field: 'theoryMarks', text: 'T Marks', size: '33%', sortable: true, editable: { type: 'text' }},
		            { field: 'practicalMarks', text: 'P Marks', size: '33%', sortable: true, editable: { type: 'text' }},
		            { field: 'assignmentMarks', text: 'A Marks', size: '33%', sortable: true, editable: { type: 'text' }},
		            { field: 'extraMarks', text: 'E Marks', size: '33%', sortable: true, editable: { type: 'text' }},
		        
		        ],
	
		        async onClick(event) {
		            //console.log(event)
		            event.done(() => {
						event.preventDefault();
		                var sel = this.getSelection();
		                selOfexamMarks = this.getSelection();
		                let form = w2ui['examMarksForm'];
		                if (sel.length == 1) {
		                    form.recid = sel[0]
		                    form.record = w2ui['examMarksGrid'].get(form.recid);
		                    form.refresh()
		                } else {
		                    form.clear()
		                }
		            })
		        }
		        },
		        
		    form: {
		        header: 'Exam Marks Details',
		        name: 'examMarksForm',
		        fields: [
		            { field: 'recid', type: 'text', html: { page:0, label: 'ID', attr: 'size="10" readonly' } },
		            {hidden:true, field: 'examId', type: 'text', required: true, html: { page:0, label: 'examId', attr: 'size="40" maxlength="40"' },
		            	render(){return id;}
		             },
		            { field: 'examName', type: 'text', html: { page:0, label: 'Exam Name', attr: 'size="40"' }, render(){return name;} },
		            {hidden:true, field: 'subjectId', type: 'text', html: { page:0, label: 'subjectId', attr: 'size="40" maxlength="40"' } },
		       		{ field: 'subjectName', type:'text', html:{label: 'Subject Name'}, size: '33%'},
			      	{ field: 'marks', type:'text', html:{label: 'Marks'}, size: '33%'},
	
			      ],
		        tabs: [
			        { id: 'tab1', text: 'Add Marks' },
			       
			    ],
		        actions: {
		            Reset() {
		                this.clear()
		            },
		            Save() {
		                 w2confirm('Are you sure?')
						    .yes(() => {
								let records = w2ui.examMarksGrid.records;
						        fire_ajax_save_SubjectMarks(records);
						    })
						    .no(() => {
						        console.log('Yes')
						    })
		            }
		        }
		   }
	}
		    
	// initialization in memory
	let examMarksLayout = $('#examMarksLayout').w2layout(examMarksConfig.layouts);
	let examMarksGrid = $('#examMarksGrid').w2grid(examMarksConfig.grid);
	let examMarksForm = $('#examMarksForm').w2form(examMarksConfig.form);
	
	
	
	    w2popup.open({
	        title: 'Exam Marks Layouts',
	        width: 900,
	        height: 400,
	        showMax: true,
	        body: '<div id="main" style="position: absolute; left: 2px; right: 2px; top: 0px; bottom: 3px;"></div>',
					
			onOpen: function(event){
				event.onComplete = function () {
					event.preventDefault();
	                			        
			        $('#examName').val(name);
			        $('#examId').val(id);
			        
			       	let subLen = subjects.length;
					let subHtml, schoolId, studentId;
					let examId = id;
					//fire_ajax_get_SubjectMarks(examId, schoolId, studentId);//schoolId and studentId hardcoded
					let subMarksArr = selectedRecords.subMarks;

					//var selOfexamMarks = w2ui.examMarksGrid.getSelection();
	                /*if (selOfexamMarks.length == 1) {
	                    subMarksArr = w2ui['examMarksGrid'].get(form.recid);
	                }*/
					let flag = 0;
					if(subLen > 0){
						for(let i=0; i<subLen; i++){
							jsonMarksValue = {};
							if((subMarksArr.length > 0)){
								for(let j=0; j<subMarksArr.length; j++){
									if((subjects[i].subjectId ==  subMarksArr[j].subjectId) && (id == subMarksArr[j].examId)){
										
										jsonMarksValue.recid = i;
										jsonMarksValue.stuSubMarksId = subMarksArr[j].stuSubMarksId;
										jsonMarksValue.examId = subMarksArr[j].examId;
										jsonMarksValue.examName = name;
										jsonMarksValue.marks = subMarksArr[j].marks;
										jsonMarksValue.theoryMarks = subMarksArr[j].theoryMarks;
										jsonMarksValue.practicalMarks = subMarksArr[j].practicalMarks;
										jsonMarksValue.assignmentMarks = subMarksArr[j].assignmentMarks;
										jsonMarksValue.extraMarks = subMarksArr[j].extraMarks;
										jsonMarksValue.subjectName = subjects[i].name;
										jsonMarksValue.subjectId = subjects[i].subjectId;
										jsonMarksValue.studentId = subMarksArr[j].studentId;
										jsonMarksValue.schoolId = subMarksArr[j].schoolId;
										
										flag = 1;
									}
								}
							}if(flag == 0){
								jsonMarksValue.recid = i;
								jsonMarksValue.examId = id;
								jsonMarksValue.examName = name;
								jsonMarksValue.subjectName = subjects[i].name;
								jsonMarksValue.subjectId = subjects[i].subjectId;
								jsonMarksValue.stuSubMarksId = undefined;
								jsonMarksValue.studentId = selectedRecords.id;
								jsonMarksValue.schoolId = selectedRecords.classId.schoolId;
							}
							
							w2ui.examMarksGrid.records.push(jsonMarksValue);
						}
						//w2ui.examMarksGrid.reload();
					}
					
					examMarksLayout.render('#w2ui-popup #main')
			        examMarksLayout.html('left', examMarksGrid)
			        examMarksLayout.html('main', examMarksForm)
			        
			        
	            }
			},
			onClose: function(event){
				if(w2ui.examMarksLayout){
					$().w2destroy('examMarksLayout');
				}if(w2ui.examMarksGrid){
					$().w2destroy('examMarksGrid');
				}if(w2ui.examMarksForm){
					$().w2destroy('examMarksForm');
				}
				
				openStudentPopup();
			}
					
	    })
	
	

}


