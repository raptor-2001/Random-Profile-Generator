const data = [
  {
    name: 'Jhon Doe',
    gender: 'male',
    looking: 'female',
    location: 'Boston, Ma',
    image: "https://randomuser.me/api/portraits/men/2.jpg"

  } ,
  {
    name: 'Daisy Sha',
    gender: 'female',
    looking: 'male',
    location: 'Manhattan, NY',
    image: "https://randomuser.me/api/portraits/women/5.jpg"

  },
  {
    name: 'Jhon Smith',
    gender: 'male',
    looking: 'female',
    location: 'New Jersey',
    image: "https://randomuser.me/api/portraits/men/52.jpg"

  } ,
  {
    name: 'Scarlet Jain',
    gender: 'female',
    looking: 'male',
    location: 'New Texas',
    image: "https://randomuser.me/api/portraits/women/12.jpg"

  } 
];


const profile = profileIterator(data);

// The application

getProfile();


document.getElementById('next').addEventListener('click',getProfile);

function getProfile(){

  const Pi = profile.next().value;

  if(Pi!=undefined){

    // setting the profile image
      document.getElementById('imagedisplay').innerHTML = 
      `<img src = "${Pi.image}">
      `

    // setting profile info
      document.getElementById('profileDisplay').innerHTML = 
      `
      <ul>
        <li> Name: ${Pi.name}</li>
        <li> Name: ${Pi.gender}</li>
        <li> Name: ${Pi.looking}</li>
        <li> Name: ${Pi.location}</li>
      </ul>

      `
  }else{
    window.location.reload();
  }

}


// Profile Iterator
function profileIterator(profiles){
  let index = 0;

  return {
    next: function(){
      return profiles.length > index ? 
      {value: profiles[index++],done: false}:
      {done: true}
    }
  }
}