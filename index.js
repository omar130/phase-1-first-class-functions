function receivesAFunction(callback){
  
  return callback()

}
function secondFunction(receivesAFunction){
  console.log(receivesAFunction)
}
  
function returnsANamedFunction(){

  return returnsANamedFunction

}


function returnsAnAnonymousFunction(){

  return function(){
    console.log("returns an anonymous function")
  }

}
 
 