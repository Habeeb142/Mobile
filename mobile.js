//var counter=0;
cardused=[];
var countsec=countmin=persec=0;
voucher=[];
var card; var amount=0; 
var sound1 = new Audio();
sound1.src = "one.aac";
var sound2 = new Audio();
sound2.src = "two.aac";
var screenHide2value


setInterval(dateshow)
function dateshow()
{
	showdate.innerHTML = new Date().getHours() + ":" + new Date().getMinutes();
}

function pressHash()
{
	screenhide.value+='#';
	scrn.innerHTML+='#';
}
function press(x)
{
	document.getElementById('scrn').style.background="white";
	//counter++; 
	//if (counter!=12)
	//{
		screenhide.value+=x;
		screenhide2.value+=x;
		valuechecker.value+=x;
		scrn.innerHTML+=x;
	/*}	
	else
	{
		screenhide.value+=x;
		scrn.innerHTML += "<br>";
		counter=0;
	}*/
}

function del()
{
	screenhide.value = screenhide.value.slice (0,-1);
	scrn.innerHTML=screenhide.value;
	screenhide2.value=screenhide2.value.slice (0,-1);
	valuechecker.value=valuechecker.value.slice (0,-1);
}

function abort()
{
	screenhide.value = screenhide.value.slice (0,0);	
	//document.getElementById('scrn').style.background='grey';
	scrn.innerHTML=screenhide2.value=valuechecker.value=""
	
}

function call()
{ 	
	var phonenumber=screenhide.value;
	if(phonenumber.length==11)
		{
			phonenumber="";
			if (amount>5)
				{
					setInterval(dat,1000)
					function dat()
						{
							setTimeout(persec++,1000);
							if (persec==1)
								{
									amount-=5;
									persec=0;
									if (amount<=5)
										{
											msg12();
											call()
										}
									if (amount==90) {sound1.play()}
								}

							setTimeout(countsec++,1000);
							if (countsec==60)
								{
									countmin++;
									countsec=0;
								}
							scrn.innerHTML="Calling...<br><br>"+screenhide.value+"<br><br>"+ countmin+ " : "+ countsec;
						}
				}
			else
				{
					sound2.play();
					setInterval(stopCall,5000);
					function stopCall()
						{
							sound2.pause();
							//document.getElementById('scrn').style.background='grey';
							scrn.innerHTML=screenhide2.value=screenhide.value=valuechecker.value=   ""
						}
				}
		}

	else if (screenhide.value== '*123#')
		{
			scrn.innerHTML="please wait...";
			setTimeout(msg,2000);
		}

	else if (screenhide.value=='*123*1#' || screenhide.value=='*123#1')		
		{
			scrn.innerHTML="please wait...";
			setTimeout(msg1,2000);
		}

	else if (screenhide.value=='*123*1*1#' || screenhide.value=='*123#11')
		{
			scrn.innerHTML="please wait...";
			setTimeout(msg11,2000);
		}

	else if (screenhide.value=='*123*1*2#' || screenhide.value=='*123#12')
		{
			 scrn.innerHTML="please wait...";
			setTimeout(msg12,2000);
		}

	else if (screenhide.value=='*123*1*3#' || screenhide.value=='*123#13')
		{
			 scrn.innerHTML="please wait...";
			setTimeout(msg13,2000);
		}

	else if (screenhide.value=='*123*2#' || screenhide.value=='*123#2')
		{
			scrn.innerHTML="please wait...";
			setTimeout(msg2,2000);
		}

	else if (screenhide.value=='*123*3#' || screenhide.value=='*123#3')
		{
			scrn.innerHTML="please wait...";
			setTimeout(msg3,2000);
		}

	else if (screenhide.value=='*556#')
		{
			scrn.innerHTML="please wait...";
			setTimeout(acc,2000);
		}
	else if (phonenumber.length<11)
		{
			scrn.innerHTML="Unknown USSD or Number Invalid"
		}
	/*else if (screenhide.value=='*555*'+card1+"#" || screenhide.value=='*555*'+card2+"#" || screenhide.value=='*555*'+card3+"#")
	{
		scrn.innerHTML="please wait...";
		setTimeout(accMsg,2000);

	}*/

	else if (voucherString.search(screenhide2.value)>0 && screenhide.value=='*555*'+screenhide2.value+ '#')
		{
			scrn.innerHTML="please wait...";
			(cardused.includes(valuechecker.value))?
			setTimeout(msgUsedCard,2000):setTimeout(accMsg,2000);
				
		}
	/*else if (voucherString.search(screenhide2.value)<0 && screenhide.value=='*555*'+screenhide2.value)
		{
			scrn.innerHTML="please wait...";
			setTimeout(accMsgInvalid,2000);
		}*/

		

	
}
function msg()
{	
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>Account Information</li><li>Tarrif Plan Migration</li><li>Data Services</li><li>Hello World Roaming</li><li>International Offers</li></ol>";
	scrn.innerHTML+='Enter 1,2,3...5 to proceed<br>';
}
function msg1()
{
	scrn.innerHTML="";
	scrn.innerHTML="My Tools<ol><li>My Number</li><li>My Tarrif Plan</li><li>My Account Balance</li><li>My Data Balance</li>";
	scrn.innerHTML+='Enter 1,2,3 or 4 to proceed<br>';
}

function msg11()
{
	scrn.innerHTML="";
	scrn.innerHTML="Your Mobile Number is 08132722019"
}

function msg12()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are on MTN Pulse"
}

function msg13()
{
	scrn.innerHTML="";
	scrn.innerHTML="You Account Balance"
}

function msg2()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>Beta Talk</li><li>Pulse</li><li>Xtra Special</li><li>Xtra Special</li><li>Xtra value</li>";
	scrn.innerHTML+='Enter 1,2,3 or 4 to proceed<br>';
}

function msg3()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>Buy Data Plans</li><li>Buy Xtra Value</li><li>Buy GoodyBags</li><li>Ceeck Balance</li>";
	scrn.innerHTML+='Enter 1,2,3 or 4 to proceed<br>';
}

function acc()
{
	scrn.innerHTML="";
	scrn.innerHTML="Pulse Main balance:#"+ amount +".00; Get 2.5GB & #2,500 talktime @ #2000 on XtraValue. Dial *131*311#, Val/30days";
}
function accMsg()
{
	scrn.innerHTML="";
	amount+=200;
	scrn.innerHTML="Account Recharge of #200 was Succesful Pulse Main balance:#" + amount +".00 NGN; Get 2.5GB & #2,500 talktime @ #2000 on XtraValue. Dial *131*311#, Val/30days";
	for (var x = no.value-1; x < no.value; x++)
		{
			cardused[x]=screenhide2.value;
			cardused.push(screenhide2.value);
		}
}
function accMsgInvalid()
{
	scrn.innerHTML="";
	scrn.innerHTML="Invalid Recharge Card"
}
function msgUsedCard()
{
	scrn.innerHTML="";
	scrn.innerHTML="This Recharge Card has already been used by you.";
}



//voucherGenerator
voucher=[];
function voucherGenerator()
{	
	for (i = 0; i < no.value; i++)
	{	
		voucher[i] =Math.floor(Math.random()*100000000000000) 
		voucherBr = voucher[i] + "<br>";
		vouchers.innerHTML += voucherBr;
		voucherString = JSON.stringify(voucher);
		//voucherString.search(screenhide2.value);
	}

	/*for ( v = 1; v < voucher.length; v++)
	{	
		card1=voucher[1];
		card2=voucher[2];
		card3=voucher[3];
	}*/
}



