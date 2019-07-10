const fetch = require('node-fetch');

/**
 * When was John Snow born?
 * @return {Promise} Promise resolves to string year John Snow was born
 */
function q0() {
  return fetch('http://anapioficeandfire.com/api/characters/583')
    .then((resp) => {
      if (!resp.ok) {
        throw Error(resp.statusText);
      }
      return resp.json();
    })
    .then((data) => {
      // console.log(data.born);
      return data.born;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function q1() {
  return fetch('http://anapioficeandfire.com/api/characters/16')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.born;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function q2() {
  return fetch('http://www.anapioficeandfire.com/api/houses/378')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.region;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function q3() {
  return fetch('http://www.anapioficeandfire.com/api/houses/229')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.coatOfArms;
    })
    .catch((err) => {
      console.log(err.messge);
    });
}

function q4() {
  return fetch('http://www.anapioficeandfire.com/api/houses/17')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.seats[1];
    })
    .catch((err) => {
      console.log(err.messge);
    });
}

function q5() {
  return fetch('http://www.anapioficeandfire.com/api/characters/901')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.aliases[1];
    })
    .catch((err) => {
      console.log(err.messge);
    });
}

function q6() {
  return fetch('http://www.anapioficeandfire.com/api/houses/362')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return fetch(data.founder)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data.name;
        })
        .catch((err) => {
          console.log(err.messge);
        })
    })
}

function q7() {
  return fetch('http://www.anapioficeandfire.com/api/characters/232')
 .then((response)=>{
   return response.json();
 })
 .then((data)=>{
   const book_1 = fetch(data.povBooks[0])
   .then((response)=>{
     return response.json();
   })
   .then((data)=>{
     return data.name;
   })
   const book_2 = fetch(data.povBooks[1])
   .then((response)=>{
     return response.json();
   })
   .then((data)=>{
     return data.name;
   })
   const book_3 = fetch(data.povBooks[2])
   .then((response)=>{
     return response.json();
   })
   .then((data)=>{
     return data.name;
   })
   return Promise.all([book_1, book_2, book_3]);
 })

}
module.exports = {
  q0,
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
};
