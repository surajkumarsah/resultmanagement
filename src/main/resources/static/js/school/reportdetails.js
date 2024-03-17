$(document).ready(function(){
	
	const myObjectString2 = localStorage.getItem('reportdata');
	const sd = JSON.parse(myObjectString2);
	//console.log(sd); 
	
	$('#schoolName').text();//School Name
	$('#schoolRec').text();//School Recognization
	$('#schoolAdd').text();//School Address
	
	$('#stuName').text(sd.selectedRecords.userName);
	$('#stuClass').text(sd.selectedRecords.classId.className);
	$('#stuSection').text();
	$('#sturoll').text()
	$('#stucode').text('STUD-'+sd.selectedRecords.classId.className);
	
	let id;
	
    let subLen = sd.subjects.length;
	let subHtml, schoolId, studentId, totalFmarks = 0, totalGmarks = 0;
	let examId = sd.examId;
	//fire_ajax_get_SubjectMarks(examId, schoolId, studentId);//schoolId and studentId hardcoded
	let subMarksArr = sd.selectedRecords.subMarks;
	let subjects = sd.subjects;
	let masterrowhtml;
	
	let fullMarks = 100;
	
	let flag = 0;
	if(subLen > 0){
		for(let i=0; i<subLen; i++){
			jsonMarksValue = {};
			if((subMarksArr.length > 0)){
				for(let j=0; j<subMarksArr.length; j++){
					if((subjects[i].subjectId ==  subMarksArr[j].subjectId) && (examId == subMarksArr[j].examId)){
						let totalMarks = subMarksArr[j].theoryMarks + subMarksArr[j].practicalMarks + subMarksArr[j].assignmentMarks ;
						let tmarks = subMarksArr[j].theoryMarks == null ?  0 : subMarksArr[j].theoryMarks;
						let pmarks = subMarksArr[j].practicalMarks == null ? 0 : subMarksArr[j].practicalMarks;
						let amarks = subMarksArr[j].assignmentMarks == null ? 0 : subMarksArr[j].assignmentMarks;
						totalFmarks = totalFmarks + fullMarks;
						totalGmarks = totalGmarks + totalMarks;
						
						let html = 
							'<tr>'
						       +'<td class="align-start">'+subjects[i].name+'</td>'
						        +'<td>'+fullMarks+'</td>'
						        +'<td>'+tmarks+'</td>'
						        +'<td>'+pmarks+'</td>'
						        +'<td>'+amarks+'</td>'
						        +'<td>'+totalMarks+'</td>'
						        +'<td>A+</td>'
						    +'</tr>'
						;
						masterrowhtml = masterrowhtml + html;
						}
					}
				}
			}
		}
		
	//$('.marksTableHead').after(html);
	$('.marksTableHead').after(masterrowhtml);
	
	
	$('#grandTotalRow').find("td").eq(1).html(totalFmarks);	
	$('#grandTotalRow').find("td").eq(3).html(totalGmarks);
	
	let tper = (totalGmarks/totalFmarks)*100;
	let noOfWkDays = 200;
	let schattdays = 180;
	let attper = (schattdays/noOfWkDays)*100;
	let pubdate = 'mm/dd/yyyy';
	
	$('#totalPercentage').text(parseFloat(tper).toFixed(2));
	$('#rank').text()
	$('#noOfWkDays').text(parseFloat(noOfWkDays).toFixed(2));
	$('#schattdays').text(parseFloat(schattdays).toFixed(2));
	$('#attper').text(attper)
	$('#conduct').text()
	$('#applicaion').text()
	
	$('#pubdate').text(pubdate);
});






/*
function getPDF(){

	var HTML_Width = $(".canvas_div_pdf").width()*3;
	var HTML_Height = $(".canvas_div_pdf").height()*3;
	var top_left_margin = 15;
	var PDF_Width = HTML_Width+(top_left_margin*2);
	var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
	var canvas_image_width = HTML_Width;
	var canvas_image_height = HTML_Height;
	
	var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
	

	html2canvas($(".canvas_div_pdf")[0],{allowTaint:true}).then(function(canvas) {
		canvas.getContext('2d');
		
		console.log(canvas.height+"  "+canvas.width);
		
		var imgData = canvas.toDataURL("image/jpeg", 1.0);
		var pdf = new jsPDF('p', 'pt',  [PDF_Width, PDF_Height]);
	    pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
		
		
		for (var i = 1; i <= totalPDFPages; i++) { 
			pdf.addPage(PDF_Width, PDF_Height);
			pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
		}
		
	    pdf.save("HTML-Document.pdf");
    });
}; 
	
	

	
function abc() {
	var doc = new jsPDF();
	var specialElementHandlers = {
	    '#editor': function (element, renderer) {
	        return true;
	    }
	};
	
        doc.fromHTML($('#content').html(), 15, 15, {
            'width': 170,
                'elementHandlers': specialElementHandlers
        });
        doc.save('sample-file.pdf');
}

*/



let html = "";
let masterHtml = [];
let adComm = ['A', 'B', 'C'];
let ids = ['a', 'b', 'c'];
let href = ['about.html', '#.html', '#.html'];

for(let i=0; i<adComm.length; i++){
	html = '<a id="'+ids[i]+'" href="'+href[i]+'" class="dropdown-item dynamicHeader">'+adComm[i]+'</a>';
	masterHtml.push(html);
	$('#administrationMain').after(html)
}

if('.dynamicHeader'){
	$('.dynamicHeader').remove();
}
	