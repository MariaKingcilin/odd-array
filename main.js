var a=[1,2,3,4,5,6,7,8,9,10];
function odd(a)
{
	var count=0;
	for(i=0;i<a.length;i++)
	{
		if(a[i]%2!=0)
		{
			count++;
		}
	}
	return count;
}
document.write(odd(a));