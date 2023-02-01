// Return The Coins Combination With The Minimum Number Of Coins
// Given a value V, if we want to make change for V cents, and we have an infinite supply of each of C = { C1, C2, .. , Cm} valued coins, what is the minimum number of coins to make the change?
// For example:
// ● Given coins[] = {25, 10, 5}, V = 30, the answer is 2 coins, which is combined with
// one coin of 25 cents and one of 5 cents
// ● Given coins[] = {9, 6, 5, 1}, V = 11, the answer is 2 coins, which is combined with
// one coin of 6 cents and one of 5 cents
function minCoins(coins, coinLenght ,V)
{
    if (V == 0)
        return 0;
    let res = Number.MAX_VALUE;
    for(let i = 0; i < coinLenght; i++)
    {
        if (coins[i] <= V)
        {
            let sub_res = minCoins(coins, coinLenght, V - coins[i]);
             
            if (sub_res != Number.MAX_VALUE && sub_res + 1 < res)
                res = sub_res + 1;
        }

    }
    return res;
}
let coins = [ 9, 6, 5, 1 ];
let coinLenght = coins.length;
let V = 11;
console.log(minCoins(coins, coinLenght ,V) );

// Take refrence from the geekForGeeks.