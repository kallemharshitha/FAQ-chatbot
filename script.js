
function talk(){
  var know = {
   "What student services are avaliable for students?": "The institute strives to provide outstanding service and opportunities to students. We offer a wide variety of campus- based activities designed to assist students in self learning, experiential learning, career development, innovation, creativity,  gathering information, making decisions about their lives, and implementing plans for their future and more.",
   "what is the college ratings? " : "IARE is in Rank-band 201-250 in engineering category as per National Institutional Rating Framework(NIRF)",
   "What is the most popular course at IARE?": "Engineering courses are the most popular courses opted by students at IARE , Hyderabad . Of these, B.Tech. (Bachelor of Technology) courses are the most sought after amongst both students and parents.",
   "What are the norms for the number of Credits per Semester and total number of Credits for UG/PG programme? ": "These norms are usually defined by UGC or AICTE. Usually around 25 Credits per semester is the accepted norm. ",
   "Will there be any Revaluation or Re-Examination System?": "There will double valuation of answer scripts. There will be a make up Examination after a reasonable preparation time after the End Semester Examination for specific cases mentioned in the Rules and Regulations. In addition to this, there shall be a ‘summer term’ (compressed term) followed by the End Semester Exam, to save the precious time of students.",
   "Does the college have scholarship facility?": "Yes, Students can avail scholarship facility subject to the merit and other specific criteria set by the college management.",
   "Is there A Medical Service In College?": "Emergency medical care and first-aid is available in the campus with one Medical Practitioner and one Nursing Assistant. General medicines are made available in the center."
  };
  var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
  }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
  }
}
