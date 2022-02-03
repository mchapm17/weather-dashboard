var fetchButton = document.getElementById('startbtn')

function getApi() {
  var inputValue = document.getElementById('inputvalue').value;
  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=imperial&appid=b413e7be1ff00e3d22099d864fa27e7c`;
console.log ('inside get api') 
console.log(inputValue)
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
      console.log(data.name)
      console.log(data.main.temp)
      console.log(data.wind.speed)
      console.log(data.main.humidity)
      // for (var i = 0; i < data.length; i++) {
      //   //Creating a h3 element and a p element
      //   var userName = document.createElement('h3');
      //   var userUrl = document.createElement('p');

      //   //Setting the text of the h3 element and p element.
      //   userName.textContent = data[i].login;
      //   userUrl.textContent = data[i].url;

      //   //Appending the dynamically generated html to the div associated with the id="users"
      //   //Append will attach the element as the bottom most child.
      //   usersContainer.append(userName);
      //   usersContainer.append(userUrl);
      // }
    });
}
fetchButton.addEventListener('click', getApi);


