console.log('person1.shows tickets');
console.log('person2:shows tickets');

const preMovie=async () => {
    const promiseWifeBriginingTickets=new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve('ticket')
        },3000)
    })
    const getCoolDrinks=new Promise((resolve,reject) => resolve('cooldrinks'));
    const getButter=new Promise((resolve, reject) => resolve('butter'))
        
    

    let ticket=await promiseWifeBriginingTickets;

    console.log(`wife: i have ${ticket}`)
    console.log('husband: we should go in')
    console.log('wife: no i am hungry')

    let cooldrinks=await getCoolDrinks;
    
    console.log(`husband:i got ${cooldrinks}`)
    console.log('husband:we should go in')
    console.log('wife:I need butter on my cooldrinks')

    let butter=await getButter;

    console.log(`husband: i got some ${butter} on cooldrinks`)
    console.log(`husband:anything else darling`)
    console.log(`wife:lets got we are getting late`)
    console.log(`husband:thank you for the remember`)

    return ticket
}

preMovie().then((m) => console.log(`person3:shows ${m}`))

console.log('person4:shows tickets')
console.log('person5:shows tickets')