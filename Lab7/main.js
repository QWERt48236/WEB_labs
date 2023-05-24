
var n = 10;

function check_num(n)
{
    if(isNaN(n))
        return "";
    else 
        if(n%2 == 0)
            return "Number is even"
        else 
            return "Number is odd"
}

console.log(check_num(n));



function find_prime_num(n)
{
    var sum_arr = [];
    var prime_num_arr = [];
    if(i!=1){
        for(var i = 2; i <= n; i++)
        {   
            for(var j = 2; j <= i; j++)
            {   
                if(i % j == 0)
                {
                    break;
                }
                else if(j == i-1)
                {
                    prime_num_arr.push(i);
                    break;
                }
            }
            
        }
        
        var prime_num = 0;
        for(var j = 1; j < prime_num_arr.length; j++)
        {
            prime_num += prime_num_arr[j];
            if(j % 5 == 0 )
            {
                sum_arr.push(prime_num);
                prime_num = 0;
            }
        }

    }
    return sum_arr;
}
console.log(find_prime_num(n));

function number_sum(n)
{
    var sum = 0;
    for(var i = 0; i <= n; i++)
    {
        var num_arr = "";
        for(var j = 0; j <= i; j++)
            num_arr += "1";
        sum+=parseInt(num_arr);
    }
    console.log(sum);
}

number_sum(n);