const postarray = JSON.parse(localStorage.getItem('postObj')) || [];

function openPostDiv() {
    document.getElementById('popUp').style.display = "block";
    document.getElementById('postdiv').style.display = "block";
    document.getElementById('createPost').style.display = "none";
}


function exetUploadPostBtn() {
    document.getElementById('popUp').style.display = "none";
    document.getElementById('postdiv').style.display = "none";
    document.getElementById('createPost').style.display = "block";
}


for (var i = 0; i < postarray.length; i++) {
    var postApperHere = document.getElementById('postApperHere');
    var postdivUi = document.createElement('div');
    postdivUi.innerHTML = `<div class="UserPostCss" id="UserPostCss">
    <div class="flx">
        <div class="dp"> <img class="postdp" src="../imgs/avatar3.png" alt=""> </div>
        <div class="date">
            <div id="time">${postarray[i].userName}</div>
    <div>${postarray[i].PostDate}</div>
        </div>
    </div>
    
    <div class="usernamediv" id="usernamediv">${postarray[i].postText}</div>
</div>`;



    postApperHere.append(postdivUi)

}


function uploadPostBtn() {
    event.preventDefault()
    var userPostTxt = document.getElementById('userPostTxtId').value;
    document.getElementById('createPost').style.display = "block";
    document.getElementById('popUp').style.display = "none";
    console.log(userPostTxt)
    document.getElementById('postdiv').style.display = "none";



    // create time 
    var dat = new Date;
    var year = dat.getFullYear();
    var month = dat.getMonth();
    var dayinnum = dat.getDate();
    var hors = dat.getHours();
    var mints = dat.getMinutes();
    var monthName = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "novembver", "december",]

    var fullDate = dayinnum + "/" + monthName[month] + "/" + year;

    console.log(fullDate)

    const user = localStorage.getItem('loggedInUser')
    console.log(user)



    var postObjcreate = {
        postText: userPostTxt,
        userName: user,
        PostDate: fullDate,
    }

    let newpost = postarray;

    newpost.push(postObjcreate)
    localStorage.setItem('postObj', JSON.stringify(newpost))


    
    var postApperHere = document.getElementById('postApperHere');
    var postdivUi = document.createElement('div');
    postdivUi.innerHTML = `<div class="UserPostCss" id="UserPostCss">
    <div class="flx">
        <div class="dp"> <img class="postdp" src="../imgs/avatar3.png" alt=""> </div>
        <div class="date">
            <div id="time">${user}</div>
    <div>${fullDate}</div>
        </div>
    </div>
    
    <div class="usernamediv">${userPostTxt} </div>

</div>`;
    postApperHere.append(postdivUi)
    var userPostTxt = document.getElementById('userPostTxtId').value = "";
}

