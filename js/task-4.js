const users4 = [
    {
        name: "Moore Hensley",
        gender: "male",
        balance: 2811
    },
    {
        name: "Sharlene Bush",
        gender: "female",
        balance: 3821
    },
    {
        name: "Ross Vazquez",
        gender: "male",
        balance: 3793
    },
    {
        name: "Elma Head",
        gender: "female",
        balance: 2278
    },
    {
        name: "Carey Barr",
        gender: "male",
        balance: 3951
    },
    {
        name: "Blackburn Dotson",
        gender: "male",
        balance: 1498
    },
    {
        name: "Sheree Anthony",
        gender: "female",
        balance: 2764
    }
];

const getTotalBalanceByGender = (users4, gender) => {
    return users4.reduce((total, user) => {
        return user.gender === gender ? total + user.balance : total
    }, 0)
}
getTotalBalanceByGender(users4, "male")
getTotalBalanceByGender(users4, "female")
console.log(getTotalBalanceByGender(users4, "male"));
console.log(getTotalBalanceByGender(users4, "female")); 
