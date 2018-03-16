var backgroundColorCount = 0;
function changeB()
{
	backgroundColorCount = backgroundColorCount +1;
	if(backgroundColorCount > 5)
	{
		backgroundColorCount = 0;
	}
	if (backgroundColorCount == 0)
	{
		document.body.style.backgroundColor = "#C8C8C8";
	}
	if(backgroundColorCount == 1)
	{
		document.body.style.backgroundColor = "#C2B2B4";
	}
	if(backgroundColorCount == 2)
	{
		document.body.style.backgroundColor = "#BBB891";
	}
	if(backgroundColorCount == 3)
	{
		document.body.style.backgroundColor = "#BC8F8F";
	}
	if(backgroundColorCount == 4)
	{
		document.body.style.backgroundColor = "#A18276";
	}
	if(backgroundColorCount == 5)
	{
		document.body.style.backgroundColor = "#DDC3A6";
	}


}
var backgroundColorCount2 = 0;
function changeB2()
{
	backgroundColorCount2 = backgroundColorCount2 +1;
	if(backgroundColorCount2 > 5)
	{
		backgroundColorCount2 = 0;
	}
	if (backgroundColorCount2 == 0)
	{
		document.body.style.backgroundColor = "#E8E9F3";
	}
	if(backgroundColorCount2 == 1)
	{
		document.body.style.backgroundColor = "#D4AA7D";
	}
	if(backgroundColorCount2 == 2)
	{
		document.body.style.backgroundColor = "#CECECE";
	}
	if(backgroundColorCount2 == 3)
	{
		document.body.style.backgroundColor = "#9D9C62";
	}
	if(backgroundColorCount2 == 4)
	{
		document.body.style.backgroundColor = "#A3B9C9";
	}
	if(backgroundColorCount2 == 5)
	{
		document.body.style.backgroundColor = "#BE92A2";
	}

}

function login(form)
{
if (form.uname.value == "RickyRocks" && form.psw.value == "whataguy")
  {
  window.location.href=('userpage.html');
  }
 else if (form.uname.value == "ChuckB" && form.psw.value == "spyguy")
 {
 	window.location.href=('otheruser2.html');
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
	localStorage.setItem("SharedwithChuck", SharedwithChuck);
	location.reload();
}

var SharedwithRicky = Boolean(false);

function Share_Chuck()
{
	prompt("Who do you want to share with?");
	SharedwithRicky = true;
	localStorage.setItem("SharedwithRicky", SharedwithRicky);
}

var CommentChuck = Boolean(false);

function Add_Comment_Chuck()
{
	var helper = prompt("Comment:");
	CommentChuck = true;
	localStorage.setItem("CommentChuck", CommentChuck);
}

var CommentRicky = Boolean(false);

function Add_Comment_Ricky()
{
	var helper = prompt("Comment:");
	CommentChuck = true;
	localStorage.setItem("CommentRicky", CommentRicky);
}

function Clear() {
	window.localStorage.clear();
}
