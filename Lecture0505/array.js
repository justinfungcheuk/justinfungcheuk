/**
 * str.repeat(i) + \n
 * - "*".repeat(i) + \n
 * - 前面是空格： ''.repeat(i) + "*"
 * .repeat(10-i)
 * 
 */

const companies = [
    {name: "Company One", category: "Finance",start:1991, end:2004},
    {name: "Company Two", category: "Retails",start:1981, end:2014},
    {name: "Company Three", category: "Finance",start:2001, end:2014},
    {name: "Company Four", category: "Auto",start:2009, end:2024},
    {name: "Company Five", category: "Education",start:1881, end:1994},
    {name: "Company Six", category: "Retails",start:1971, end:2014},
    {name: "Company Seven", category: "Education",start:1989, end:2009},
    {name: "Company Eight", category: "Auto",start:1971, end:2014},
    {name: "Company Night", category: "Retails",start:2010, end:2014},
    {name: "Company Ten", category: "Finance",start:2017, end:2023},
];

const age = [12,67,5,8,45,89,34,12,56,77,17,21,48];

//for each
let i=0;
for(;i<companies.length;){
    //console.log(companies[i]);
    i++;
}

// array foreach
companies.forEach(function(company){ //匿名函數
    //console.log(company); //由於沒有定義 company，所以這裡是一個 argument
})

companies.forEach((company) => {
    //console.log(company)
})

companies.forEach(company=> console.log(company))

//filter
let adult = [];
for(let i=0; i<age.length; i++){
    if(age[i] >= 21){
        adult.push(age[i]);
    }
}

let adult1 = age.filter(function(age){
    if(age >= 21){
        return true;
    }
})

let adult2 = age.filter(age => age >= 21); //由於 arrow function 最主要是 return true 或 false，所以不用寫 if
console.log(adult);
console.log(adult1);
console.log(adult2);


const retailsCompanies = companies.filter(company => company.category == "Retails");
console.log(retailsCompanies)

const eightlyCompanies = companies.filter(function(company){
    if(company.start >= 1980 && company.start < 1990){
        return true;
    }
});
console.log(eightlyCompanies);

const tenYearsCompanies = companies.filter(function(company){
    if(company.end - company.start >= 20){
        return true;
    }
});
console.log(tenYearsCompanies);


// Map
const companyNames = companies.map(function(company){
    return company.name; //只是獲取 公司的名字 company.name
});
console.log(companyNames);

 const testMap = companies.map(function(company){
     return `${company.name} [${company.start} - ${company.end}]`
 });
 console.log(testMap);

 const ageMap = age.map(function(age){
     return Math.sqrt(age);
 }).map(function(age){
     return age * 2;
 });
 console.log(ageMap)

 // sort
 const sortAges = age.sort(function(a1,a2){ // sort方法 需要提供兩個 argument, 用作為相關數據排序，分別由大到小 或 小到大
     return a2 - a1;
 });
 console.log(sortAges);

 const sortedCompanies = companies.sort(function(c1,c2){
     (c1.name > c2.name) ? 1 : -1   
     // return 只是 return single value
     // 如果有多於一個 value 可以用 [{}]，例如：[{10,11,12}]
     
 });
 console.log(sortedCompanies);

 //reduce
 let total = 0;
 for(let i = 0; i < age.length; i++){
     total = total + age[i];
 }
 console.log(total);

 const ageSum1 = age.reduce(function(total1,age){
     return total1 + age;
 },0); // 0 會擺在 第一個參數 total, 代表它由0開始計算
 console.log(ageSum1);

 const totalYears = companies.reduce((total2, company) => 
     total2 + company.end - company.start
 ,0);
 console.log(totalYears);


 const combineResult = age
 .map(age => age * 2)
 .filter(age => age >= 40)
 .sort((age1,age2) => age1 - age2)
 .reduce((total3,age) => total3 + age,0);

 console.log(combineResult);