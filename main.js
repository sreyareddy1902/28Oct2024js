
/*---example1
let n=11;
if(n%2==0)
{
    document.write( n + "is even number")
}
else{
    document.write( n + "is odd number")
}
-----*/


/*---example2
let a=10,b=20
if(a>b)
{
    document.write(a +" is maximum")
}
else
{
    document.write(b +" is maximum")
}
-----*/

/*---example3
let a=20,b=10,c=30
if(a>b && a>c)
{
    document.write(a + " is maximum")
}
else if(b>c)
{
    document.write(b + " is maximum")
}
else{
    document.write("c is maximum")
}
----*/

/*---example4
let a=20,b=10,c=30
if(a<b && a<c)
{
    document.write(a + " is maximum")
}
else if(b<c)
{
    document.write(b + " is maximum")
}
else{
    document.write("c is maximum")
}
----*/

/*---example5
let n=10
if(n>=10 && n<=20)
{
    document.write("yes the number is in beteen 10 and 20")
}
else
{
    document.write("no, the number is not in beteen 10 and 20")
}
---*/


/*---example6
let n=14
if(n>=13 && n<=19)
{
    document.write("n is teenage")
}
else
{
    document.write("n is not a teenage")
}
----*/

/*---example7
let a=37,b=47
if(a%10 == b%10)
{
    document.write("yes last digit is same")
}
else
{
    document.write("no last digit is not same")
}
----*/

/*---example8
let n=14
if(n%5==0 && n%3==0)
{
    document.write("divisible by both 5 and 3")
}
else
{
    document.write("not divisible by both 5 and 3")
}
----*/


/*----example9
let day='monday'
switch(day)
{
    case 'sunday':
        document.write("0")
        break;
    case 'monday':
        document.write("1")  
        break
    case 'tuesday':
        document.write("2")
        break
    case 'wednesday':
        document.write("3")
        break
   
    case 'thursday':
            document.write("4")  
            break 
    case 'friday':
            document.write("5")
            break
        case 'saturday':
            document.write("6")
            break

    default:
        document.write("invalid day")    
        break      
}
-----*/
 


/*---example10
let time='12'
switch(time)
{
    case '1':
        document.write("Good night")
        break;
    case '2':
        document.write("Good night")  
        break
    case '3':
        document.write("Good morning")
        break
    case '4':
        document.write("Good morning")
        break    
    case '5':
        document.write("Good morning")  
        break 
    case '6':
        document.write("Good morning")
        break
    case '7':
        document.write("Good morning")
        break
    case '8':
        document.write("Good morning")
        break;
    case '9':
        document.write("Good morning")  
        break
    case '10':
        document.write("Good morning")
        break
    case '11':
        document.write("Good morning")
        break          
    case '12':
        document.write("Good afternoon")  
        break 
    case '13':
        document.write("Good afternoon")
        break
    case '14':
        document.write("Good afternoon")
        break
    case '15':
        document.write("Good afternoon")
        break;
    case '16':
        document.write("Good evening")  
        break
    case '17':
        document.write("Good evening")
        break
    case '18':
        document.write("Good evening")
        break                  
    case '19':
        document.write("Good evening")  
        break 
    case '20':
        document.write("good night")
        break
    case '21':
        document.write("good night")
        break
    case '22':
        document.write("good night")
        break
    case '23':
        document.write("good night")  
        break 
    case '24':
        document.write("good night")
        break
                            
 
     default:
         document.write("invalid time")    
         break      
 } 
-----*/



/*---example10 [Note:-To avoid redundancy we use this method]
let time='5'
switch(time)
{
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '10':
    case '11':
        document.write("Good Morning")
        break;
    case '12':
    case '13':
    case '14':
    case '15':
        document.write("Good Afternoon")
        break
    case '16':
    case '17':
    case '18':
    case '19':
        document.write("Good Evening")
        break
    case '20':
    case '21':
    case '22':
    case '23':
    case '24':
    case '1':
    case '2':
        document.write("Good Night")
        break
}
-----*/



/*---Example11-----*/
let year=2024
if((year%4==0) && (year%100!==0))
{
    document.write(year + " is a leap year")
}
else if(year%400==0)
{
    document.write(year + " is a leap year")
}
else
{
    document.write(year + " is not  a leap year")
}
