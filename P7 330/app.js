var backgroundColorCount = 0;
function changeB()
{
	backgroundColorCount = backgroundColorCount +1;
	if(backgroundColorCount > 3)
	{
		backgroundColorCount = 0;
	}
	if (backgroundColorCount == 0)
	{
		document.body.style.backgroundColor = "#98A1A7";
	}
	if(backgroundColorCount == 1)
	{
		document.body.style.backgroundColor = "#C8C8C8";
	}
	if(backgroundColorCount == 2)
	{
		document.body.style.backgroundColor = "#BBB891";
	}
	if(backgroundColorCount == 3)
	{
		document.body.style.backgroundColor = "#242325";
	}


}
var backgroundColorCount2 = 1;
function changeB2()
{
	backgroundColorCount2 = backgroundColorCount2 +1;
	if(backgroundColorCount2 > 3)
	{
		backgroundColorCount2 = 0;
	}
	if (backgroundColorCount2 == 0)
	{
		document.body.style.backgroundColor = "#87959D";
	}
	if(backgroundColorCount2 == 1)
	{
		document.body.style.backgroundColor = "#E8E9F3";
	}
	if(backgroundColorCount2 == 2)
	{
		document.body.style.backgroundColor = "#CECECE";
	}
	if(backgroundColorCount2 == 3)
	{
		document.body.style.backgroundColor = "#272635";
	}


}

function login(form)
{
if (form.uname.value == "RickyRocks" && form.psw.value == "whataguy")
  {
    window.open('userpage.html');
  }
 else if (form.uname.value == "ChuckB" && form.psw.value == "spyguy")
 {
 	window.open('otheruser2.html');
 }
 else
 {
   alert("Error Password or Username");
  }
}

var SharedwithChuck = Boolean(false);

function Share_Ricky()
{
	prompt("Who do you want to share with?");
	SharedwithChuck = true;
	sessionStorage.setItem("SharedwithChuck", SharedwithChuck);
}

var SharedwithRicky = Boolean(false);

function Share_Chuck()
{
	prompt("Who do you want to share with?");
	SharedwithRicky = true;
	sessionStorage.setItem("SharedwithRicky", SharedwithRicky);
}

var CommentChuck = Boolean(false);

function Add_Comment_Chuck()
{
	prompt("Comment:");
	CommentChuck = true;
	sessionStorage.setItem("CommentChuck", CommentChuck);
}

var CommentRicky = Boolean(false);

function Add_Comment_Ricky()
{
	prompt("Comment:");
	CommentRicky = true;
	sessionStorage.setItem("CommentChuck", CommentRicky);
}
