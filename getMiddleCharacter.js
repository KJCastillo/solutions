//get middle character of a string - codewars

function getMiddle(s)
{
  var middle = Math.floor(s.length/2);
    //Math.floor to get round number when checking length of string
    
    if (s.length % 2 == 0)
        return s[middle-1] + s[middle]
        //scenario if string equals even number
    else
        return s[middle]
        //scenario if string equals odd number
}

//Test.assertEquals(getMiddle("test"),"es");
//Test.assertEquals(getMiddle("testing"),"t");
//Test.assertEquals(getMiddle("middle"),"dd");
//Test.assertEquals(getMiddle("A"),"A");
