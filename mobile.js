//var counter=0;
cardused=[];
var countsec=countmin=persec=0;
voucher=[];
var card; var amount=0; 
var pulse=false; var xtraxpensive=false; var xtravalue=false; var xtracool=false;var betatalk=false;
var sound1 = new Audio();
sound1.src = "one.aac";
var sound2 = new Audio();
sound2.src = "two.aac";
var tariff= "Pulse";



setInterval(dateshow)
function dateshow()
{
	showdate.innerHTML = new Date().getHours() + ":" + new Date().getMinutes();
}

function todo()
{	
	document.getElementById('todoList').style.width='170px';
	//document.getElementById('todoList').style.width='90px';
	todoList.innerHTML="<ol><li>Ability To call</li><br><li>Alert on empty account</li><br><li>Drop Call on Card Exhaust</li><br><li>*123# access</li><br><li>Voucher Generator</li><br><li>Recharge card LOad</li><br><li>Used Rechearge Identifier</li><br><li>Invalid Recharge Identifier</li><li>Account Balance Check</li><br>and more...";
}

function pressHash()
{
	scrn.innerHTML=screenhide.value+='#';
}
function press(x)
{
	document.getElementById('scrn').style.background="white";
	//counter++; 
	/*if (counter!=12)
	{*/
		screenhide2.value=valuechecker.value+=x;
		scrn.innerHTML=screenhide.value+=x;
		
	/*}	
	else
	{
		screenhide2.value=valuechecker.value+=x;
		screenhide.value=
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
	scrn.innerHTML=screenhide2.value=valuechecker.value="";
	screenhide.value="";
	
}

function call()
{ 	
	var phonenumber=screenhide.value;
	if(phonenumber.length==11)
		{
			if (amount>20)
				{
					setInterval(dat,1000)
					function dat()
						{
							setTimeout(persec++,1000);
							if (persec==1)
								{
									//pulse
									if(pulse && !betatalk && !xtraxpensive && !xtravalue && !xtracool)
										{
											amount-=5;alert(amount)
										}
									//beta talk
									else if(!pulse && betatalk && !xtraxpensive && !xtravalue && !xtracool)
										{
											amount-=10;
										}
									//xtraexpensive
									else if(!pulse && !betatalk && xtraxpensive && !xtravalue && !xtracool)
										{
											amount-=20;
										}
									//xtravalue
									else if(!pulse && !betatalk && !xtraxpensive && xtravalue && !xtracool)
										{
											amount-=10;
										}
									//xtracool
									else if(!pulse && !betatalk && !xtraxpensive && !xtravalue && xtracool)
										{
											amount-=5;
										}
									else if(!pulse && !betatalk && !xtraxpensive && !xtravalue && !xtracool)
										{
											amount-=5;
										}
									
									persec=0;

									if (amount==20)
										{
											
											call();
										}
									if (amount==100) {sound1.play()}
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
					setTimeout(stopCall,5000);
					function stopCall()
						{
							sound2.pause();sound1.pause();
							//document.getElementById('scrn').style.background='grey';
							setInterval(callAborting);
							function callAborting()
							{scrn.innerHTML="call ended";}
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
	else if (screenhide.value=='*123*1*4#' || screenhide.value=='*123#14')
		{
			scrn.innerHTML="please wait...";
			setTimeout(msg14,2000);
		}

	else if (screenhide.value=='*123*2#' || screenhide.value=='*123#2')
		{
			scrn.innerHTML="please wait...";
			setTimeout(msg2,2000);
		}

	else if (screenhide.value=='*123*2*1#' || screenhide.value=='*123#21')
		{
			scrn.innerHTML="please wait...";
			tariff='Beta Talk';
			betatalk=true;
			pulse=false;
			xtraxpensive=false;
			xtravalue=false;
			xtracool=false;
			setTimeout(tarrifPlan,2000);
		}

	else if (screenhide.value=='*123*2*2#' || screenhide.value=='*123#22')
		{
			scrn.innerHTML="please wait...";
			tariff='Pulse';
			pulse=true;
			betatalk=false;
			xtraxpensive=false;
			xtravalue=false;
			xtracool=false;
			setTimeout(tarrifPlan,2000);
		}
	else if (screenhide.value=='*123*2*3#' || screenhide.value=='*123#23')
		{
			scrn.innerHTML="please wait...";
			tariff='XtraExpensive';
			pulse=false;
			betatalk=false;
			xtracool=false;
			xtravalue=false;
			xtraxpensive=true;
			setTimeout(tarrifPlan,2000);
		}
	else if (screenhide.value=='*123*2*4#' || screenhide.value=='*123#24')
		{
			scrn.innerHTML="please wait...";
			tariff='XtraCool';
			pulse=false;
			betatalk=false;
			xtraxpensive=false;
			xtravalue=false;
			xtracool=true;
			setTimeout(tarrifPlan,2000);
		}
	else if (screenhide.value=='*123*2*5#' || screenhide.value=='*123#25')
		{
			scrn.innerHTML="please wait...";
			tariff='XtraValue';
			pulse=false;
			betatalk=false;
			xtraxpensive=false;
			xtracool=false;
			xtravalue=true;
			setTimeout(tarrifPlan,2000);
		}
	else if (screenhide.value=='*123*3#' || screenhide.value=='*123#3')
		{
			scrn.innerHTML="please wait...";
			setTimeout(msg3,2000);
		}
	else if (screenhide.value=='*123*3*1#' || screenhide.value=='*123#31')
		{
			scrn.innerHTML="please wait...";
			setTimeout(msg31,2000);
		}
	else if (screenhide.value== '*123*3*1*1#' || screenhide.value=='*123#311')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg311,2000)
	}
	else if (screenhide.value== '*123*3*1*2#' || screenhide.value=='*123#312')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg312,2000)
	}
	else if (screenhide.value== '*123*3*1*3#' || screenhide.value=='*123#313')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg313,2000)
	}
	else if (screenhide.value== '*123*3*1*4#' || screenhide.value=='*123#314')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg314,2000)
	}
	else if (screenhide.value== '*123*3*1*5#' || screenhide.value=='*123#315')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg315,2000)
	}
	else if (screenhide.value== '*123*3*1*5#' || screenhide.value=='*123#315')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg315,2000)
	}
	else if (screenhide.value== '*123*3*1*1*1#' || screenhide.value=='*123#3111')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg3111,2000)
	}
	else if (screenhide.value== '*123*3*1*1*2#' || screenhide.value=='*123#3112')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg3112,2000)
	}
	else if (screenhide.value== '*123*3*1*2*1#' || screenhide.value=='*123#3121')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg3121,2000)
	}

	else if (screenhide.value== '*123*3*1*2*2#' || screenhide.value=='*123#3122')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg3122,2000)
	}
	else if (screenhide.value== '*123*3*1*3*1#' || screenhide.value=='*123#3131')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg3131,2000)
	}
	else if (screenhide.value=='*123#3132')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg3132,2000)
	}
	else if (screenhide.value=='*123#3133')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg315,2000)
	}
	else if (screenhide.value=='*123#3141')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg3141,2000)
	}
	else if (screenhide.value=='*123#3151')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg3151,2000)
	}
	else if (screenhide.value=='*123#32')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg32,2000)
	}
	else if (screenhide.value=='*123#33')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg33,2000)
	}
	else if (screenhide.value== '*123#4')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg4,2000)
	}
	else if (screenhide.value== '*123#41')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg41,2000)
	}
	else if (screenhide.value=='*123#42')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg42,2000)
	}
	else if (screenhide.value== '*123#421')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg421,2000)
	}

	else if (screenhide.value== '*123#4211')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg4211,2000)
	}
	else if (screenhide.value=='*123#4212')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg4212,2000)
	}
	else if (screenhide.value== '*123#4213')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg4213,2000)
	}
	else if (screenhide.value== '*123#4214')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg4214,2000)
	}
	else if (screenhide.value== '*123#422')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg422,2000)
	}
	else if (screenhide.value== '*123#4221')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg4221,2000)
	}
	else if (screenhide.value== '*123#4222')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg4222,2000)
	}
	else if (screenhide.value== '*123#4223')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg4223,2000)
	}
	else if (screenhide.value== '*123#43')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg43,2000)
	}
	else if (screenhide.value== '*123#431')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg431,2000)
	}
	else if (screenhide.value== '*123#4311')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg4311,2000)
	}
	else if (screenhide.value== '*123#4312')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg4312,2000)
	}
    else if (screenhide.value== '*123#4313')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg4313,2000)
	}
	else if (screenhide.value== '*123#4314')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg4314,2000)
	}
	else if (screenhide.value== '*123#432')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg432,2000)
	}
	else if (screenhide.value== '*123#4321')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg4321,2000)
	}
	else if (screenhide.value== '*123#4322')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg4322,2000)
	}
	else if (screenhide.value== '*123#4323')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg4323,2000)
	}
	else if (screenhide.value== '*123#5')
	{
		scrn.innerHTML="please wait...";
		setTimeout(msg5,2000)
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

	else if (voucherString.search(screenhide2.value)>0 && screenhide.value=='*555*'+screenhide2.value+'#')
		{
			scrn.innerHTML="please wait...";
			(cardused.includes(valuechecker.value))?
			setTimeout(msgUsedCard,2000):setTimeout(accMsg,2000);
		}
	else if (voucherString.search(screenhide2.value)<0 && screenhide.value=='*555*'+screenhide2.value+ '#')
		{
			scrn.innerHTML="please wait...";
			setTimeout(accMsgInvalid,2000);
		}

		

	
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
	scrn.innerHTML+='Enter 1,2,3, 4 to proceed<br>';
}

function msg11()
{
	scrn.innerHTML="";
	scrn.innerHTML="Your Mobile Number is 08132722019"
}

function msg12()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are on MTN"+ tarrif;
}

function msg13()
{
	scrn.innerHTML="";
	scrn.innerHTML="Your Account Balance is"+ amount;
}
function msg14()
{
	scrn.innerHTML="";
	scrn.innerHTML="Your Data Balance is 20MB";
}

function msg2()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>Beta Talk</li><li>Pulse</li><li>XtraExpensive</li><li>XtraCool</li><li>Xtra Value</li>";
	scrn.innerHTML+='Enter 1,2,3,4 or 5 to proceed<br>';
}

/*function msg21()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are on MTN Beta Talk"
}*/

function tarrifPlan()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are on MTN" +tariff;
}

function msg3()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>Buy Data Plans</li><li>Buy Xtra Value</li><li>Buy GoodyBags</li>";
	scrn.innerHTML+='Enter 1,2,3 or 4 to proceed<br>';
}
function msg31()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol>BUY DATA PLANS<br><li>Daily Plans</li><li>Weekly Plans</li><li>Monthly Plans</li><li>2-Months Plans</li><li>3-Months Plans</li>";
	scrn.innerHTML+='Enter 1,2,3,4 or 5 to proceed<br>';
}
function msg311()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol>DAILY PLANS<br><li>50MB+25MB Bonus Daily Plan:Cost 100 NGN</li><li>150MB+75MB Bonus Daily Plan:Cost 200 NGN</li>";
	scrn.innerHTML+='Enter 1 or 2 to proceed<br>';
}
function msg312()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol>WEEKLY PLANS<br><li>150MB Weekly Plan:Cost 300 NGN</li><li>500MB+250MB bonus(1am-7am) Weekly Plan:Cost 500 NGN</li>";
	scrn.innerHTML+='Enter 1 or 2 to proceed<br>';
}
function msg313()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol>MONTHLY PLANS<br><li>1GB+500MB Bonus(1am-7am):Cost 1000 NGN</li><li>1.5GB Monthly Plan:Cost 1200 NGN</li><li>2.5GB+1GB bonus(1am-7am):Cost 2000 NGN";
	scrn.innerHTML+='Enter 1,2 or 3 to proceed<br>';
}
function msg314()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol>2-MONTHS PLANS<br><li>50GB 2-Months Plan:Cost 20000 NGN</li>";
	scrn.innerHTML+='Enter 1 to proceed<br>';
}
function msg315()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol>3-MONTHS PLANS<br><li>85GB 3-Months Plan:Cost 50000 NGN</li>";
	scrn.innerHTML+='Enter 1 to proceed<br>';
}
function msg3111()
{
	scrn.innerHTML="";
	scrn.innerHTML="Thank You. Your data balance is now 75MB.";
}
function msg3112()
{
	scrn.innerHTML="";
	scrn.innerHTML="Thank You. Your data balance is now 225MB."	
}
function msg3121()
{
	scrn.innerHTML="";
	scrn.innerHTML="Thank You. Your data balance is now 150MB";
}
function msg3122()
{
	scrn.innerHTML="";
	scrn.innerHTML="Thank You. Your data balance is now 750MB";
}
function msg3131()
{
	scrn.innerHTML="";
	scrn.innerHTML="Thank You. Your data balance is now 1500MB";
}
function msg3132()
{
	scrn.innerHTML="";
	scrn.innerHTML="Thank You. Your data balance is now 1.5GB";
}
function msg3133()
{
	scrn.innerHTML="";
	scrn.innerHTML="Thank You. Your data balance is now 3.5GB";
}
function msg3141()
{
	scrn.innerHTML="";
	scrn.innerHTML="Thank You. Your data balance is now 50GB";
}
function msg3151()
{
	scrn.innerHTML="";
	scrn.innerHTML="Thank You. Your data balance is now 85GB";
}

function msg32()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are not eligible to buy extra value, please call 180";
}

function msg33()
{
	scrn.innerHTML="";
	scrn.innerHTML="Goodybag is no more available on this platform";
}
function msg4()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>UAE BUNDLE</li><li>Global Roaming Discount</li><li>Global Roaming Bundles";
	scrn.innerHTML+='Enter 1,2,3 to proceed<br>';
}
function msg41()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are now eligible for UAE Bundle. You now have #6000 valid for 14days";
}
function msg42()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>Eligible destination</li><li>Subscribe to HelloWorld Global Roaming Discount</li></ol>";
	scrn.innerHTML+='Enter 1,2 to proceed<br>';
}
function msg421()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>United Kingdom</li><li>United States</li><li>France</li><li>Germany</li></ol>";
	scrn.innerHTML+='Enter 1,2,3,4 to proceed<br>';
}
function msg4211()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>You are Eligible</li></ol>";
}
function msg4212()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>You are Eligible</li></ol>";
}
function msg4213()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>You are Eligible</li></ol>";
}
function msg4214()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>You are Eligible</li></ol>";
}
function msg422()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>Daily @ #300</li><li>Weekly @ #1,500</li><li>Monthly @ #5000</li></ol>";
	scrn.innerHTML+='Enter 1,2,3 to proceed<br>';
}
function msg4221()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>You are Eligible for HelloWorld Global Roaming Discount</li>"
}
function msg4222()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are Eligible for HelloWorld Global Roaming Discount"
}
function msg4223()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are Eligible for HelloWorld Global Roaming Discount"
}

function msg43()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>Eligible destination</li><li>Subscribe to HelloWorld Global Roaming Bundles</li>";
	scrn.innerHTML+='Enter 1,2 to proceed<br>'
}
function msg431()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>United Kingdom</li><li>United States</li><li>France</li><li>Germany</li>";
	scrn.innerHTML+='Enter 1,2,3,4 to proceed<br>'
}
function msg4311()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are Eligible";
}
function msg4312()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are Eligible";
}
function msg4313()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are Eligible";
}
function msg4314()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are Eligible";
}

function msg432()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>Daily @ #300</li><li>Weekly @ #1,500</li><li>Monthly @ #5000</li></ol>";
	scrn.innerHTML+='Enter 1,2,3 to proceed<br>';
}

function msg4321()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are Eligible";
}
function msg4322()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are Eligible";
}
function msg4323()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are Eligible";
}
function msg5()
{
	scrn.innerHTML="";
	scrn.innerHTML="Your Sim does not support internation access, please contact our customer care line";
}
function acc()
{
	scrn.innerHTML="";
	scrn.innerHTML=tariff +" Main balance:#"+ amount +".00; Get 2.5GB & #2,500 talktime @ #2000 on XtraValue. Dial *131*311#, Val/30days";
}
function accMsg()
{	
	scrn.innerHTML="";
	amount+=200;
	scrn.innerHTML="Account Recharge of #200 was Succesful &nbsp;"+tariff + "&nbsp; Main balance:#" + amount +".00 NGN; Get 2.5GB & #2,500 talktime @ #2000 on XtraValue. Dial *131*311#, Val/30days";
	for (var x = no.value-1; x < no.value; x++)
		{
			cardused[x]=screenhide2.value;
			cardused.push(screenhide2.value);
			redId.innerHTML+=cardused[x];
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
		voucher[i] =Math.floor(Math.random()*100000000000000);
		voucherBr = voucher[i] + "<br>";
		vouchers.innerHTML += voucherBr;
		document.getElementById('vouchers').style.color='green';
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



