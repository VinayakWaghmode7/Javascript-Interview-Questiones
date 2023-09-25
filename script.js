const companies = [
    {name:"Flipkart", catgory:"Product Based", start:1995, end:2015 },
    {name:"TCS", catgory:"Service Based", start:1981, end:2020 },
    {name:"Google", catgory:"Product Based", start:1970, end:2030 },
    {name:"Capgemini", catgory:"Service Based", start:1985, end:2023 },
    {name:"Phonepay", catgory:"Product Based", start:2013, end:2027 },
];

const ages=[10, 14, 18, 95, 23, 25, 70, 75, 80, 20, 15, 56, 60, 43, 30];

//Using simple function

for(let i=0; i<companies.length; i++){
    console.log(companies[i])
}
 //using forEach loop
companies.forEach(function(x,index){
    console.log(x);
    console.log(index);
})

// using map function

const output = companies.map(function(x){
      console.log(x);
})

const output1 = companies.map((x)=>{
    console.log(x);
})
