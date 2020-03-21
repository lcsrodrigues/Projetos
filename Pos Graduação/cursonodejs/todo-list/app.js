const yargs = require('yargs')


yargs.command({
    command:"add",
    describe:"add a new task",
    
    handler: (argv)=>{
        console.log(`adding new task --> ${argv.name}`)
    }
})

yargs.command({
    command:"update",
    describe:"update a new task",
    handler: ()=>{
        console.log("update new task")
    }
})

yargs.command({
    command:"remover",
    describe:"remover a new task",
    handler: ()=>{
        console.log("remover new task")
    }
})

yargs.command({
    command:"list",
    describe:"list a new task",
    handler: ()=>{
        console.log("list new task")
    }
})

yargs.parse()