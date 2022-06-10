/*
Code adopted from boc's original memory wall code, thank you!
Original - https://github.com/bocboda/blah/blob/master/memwall_original.js
*/

var wallArray = new Array();
	var tempX = 0;
	var tempY = 0;

function writeWall()
{
	document.write("<center>");
	for(i=1;i<wallArray.length;i++)
	{
		if (wallArray[i]!=null)
		{
		document.write("<table align='center'><tr>");
		for(j=1;j<wallArray[i].length;j++)
		{
			if(wallArray[i][j]!=null)
			{
				document.write(wallArray[i][j]);
			}
		}
		document.write("</tr></table>");
		}
	}
	document.write("</center>");
}


function wall(rowpos,colpos,imgurl,imgurl2,link,pname,txtval,tribe,subtext)
{
	if (wallArray[rowpos]==null)
	{
		wallArray[rowpos] = new Array();
	}
    if (imgurl2 == ''){
        imgurl2 = imgurl
    }

    let wallText = ''
    if (subtext != '' && txtval != ''){
        wallText = wallArray[rowpos][colpos]= `<td><div class="container"><img src="${imgurl}" alt="Avatar"class="image" style="width:100%"><p><a href="${link}"><img src="${imgurl2}" alt="Avatar" class="imageTransition" style="width:100%"></a></p><div class="box"><div class="tribe ${tribe}">${pname}</div><div class="subtext ${subtext}">${txtval}</div></div></div></td>`
    }
    else{
        wallText = wallArray[rowpos][colpos]= `<td><div class="container"><img src="${imgurl}" alt="Avatar"class="image" style="width:100%"><p><a href="${link}"><img src="${imgurl2}" alt="Avatar" class="imageTransition" style="width:100%"></a></p><div class="box"><div class="tribe ${tribe}">${pname}</div></div></div></td>`
    }
	
	wallArray[rowpos][colpos]= wallText

}