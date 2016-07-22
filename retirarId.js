const retirarId = (esc, callback)=>{
  let ar = [];
  for(let i = 0 ; i < esc.length ; i++) {
    ar.push(esc[i]._id);
  }
  callback(ar);
};

schema.find((err, esc)=>{
  //Eu quero obter um array contendo os _id, por exemplo: ['345456556', '304565065', '65065605']
  retirarId(esc, ar=>{
    console.log(ar);
  });
});
