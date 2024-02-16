
const btn = document.querySelector('button');
const inputs = document.querySelector('form');

 btn.addEventListener('click', () => {
  Email.send({
    Host:"smtp.mailtrap.io",
    Username:"430ee1ad5ee1a8",
    Password:"d00d9d349d06f9",
    To:"harshadapatil0hp@gmail.com",
    From:inputs.elements["email"].value,
    Subject:"Contact Us Query By The Customer",
    Body:inputs.elements["cmt_msg"].value + "<br>" + inputs.elements["f_name"] + inputs.elements["l_name"] + "<br>" + inputs.elements["mob_no"]
  }).then(msg => alert("The email successfully sent."))
})
