const arrayPeople = [
  {
    namePerson: "Ismet BAKAY",
    country: "Turkey",
    city: "Geneva",
    age: 38,
    bestFriend: "Saadettin",
    image: "01-Powercoders_Portrait_5 (2).jpg",
    alt: "Ismet",
  },
  {
    namePerson: "Bilal SULAIMAN",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Abdul Fettah",
    age: 38,
    image: "00-Powercoders_Portrait_2.jpg",
    alt: "Bilal",
  },
  {
    namePerson: "Abdul Fettah SHIERYAR",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Bilal",
    age: 38,
    image: "03-Powercoders_Portrait_7.jpg",
    alt: "Abdul Fettah",
  },

  {
    namePerson: "Yuliia KUTS",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Olena",
    age: 38,
    image: "05-Powercoders_Portrait_9.jpg",
    alt: "Yuliia",
  },

  {
    namePerson: "Tuba KARACA",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Sevim",
    age: 38,
    image: "07-Powercoders_Portrait_11.jpg",
    alt: "Tuba",
  },

  {
    namePerson: "Hasan DANACI",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Enes",
    age: 38,
    image: "09-Powercoders_Portrait_13.jpg",
    alt: "Hasan",
  },

  {
    namePerson: "Oguz YILDIZ",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Hasan",
    age: 38,
    image: "13-Powercoders_Portrait_17.jpg",
    alt: "Oguz",
  },

  {
    namePerson: "Yusuf ILHAN",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Samet",
    age: 38,
    image: "16-Powercoders_Portrait_21 (1).jpg",
    alt: "Yusuf",
  },

  {
    namePerson: "Samet YILMAZ",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Yusuf",
    age: 38,
    image: "17-Powercoders_Portrait_22.jpg",
    alt: "Samet",
  },

  {
    namePerson: "Enes BORA",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Hasan",
    age: 38,
    image: "19-Powercoders_Portrait_24.jpg",
    alt: "Enes",
  },

  {
    namePerson: "Serkan TASGIN",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Baris",
    age: 38,
    image: "21-Powercoders_Portrait_27.jpg",
    alt: "Serkan",
  },

  {
    namePerson: "Olena SMETIUK",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Yuliia",
    age: 38,
    image: "24-Powercoders_Portrait_30.jpg",
    alt: "Olena",
  },

  {
    namePerson: "Ariani LUH",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Jyothi",
    age: 38,
    image: "25-Powercoders_Portrait_31.jpg",
    alt: "Ariani",
  },

  {
    namePerson: "Sadettin KARATAS",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Ismet",
    age: 38,
    image: "27-Powercoders_Portrait_33.jpg",
    alt: "Sadettin",
  },

  {
    namePerson: "Shamil IDRISOV",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Yusuf",
    age: 38,
    image: "29-Powercoders_Portrait_35.jpg",
    alt: "Shamil",
  },

  {
    namePerson: "Fatih YAVUZ",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Arwa",
    age: 38,
    image: "31-Powercoders_Portrait_37.jpg",
    alt: "Fatih",
  },

  {
    namePerson: "Baris DURUCAN",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Serkan",
    age: 38,
    image: "32-Powercoders_Portrait_38.jpg",
    alt: "Baris",
  },

  {
    namePerson: "Murat GULDIBI",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Samet",
    age: 38,
    image: "33-Powercoders_Portrait_39.jpg",
    alt: "Murat",
  },

  {
    namePerson: "Sevim GOKTURK",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Senay",
    age: 38,
    image: "34-Powercoders_Portrait_40.jpg",
    alt: "Sevim",
  },

  {
    namePerson: "Senay ATLI",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Tuba",
    age: 38,
    image: "35-Powercoders_Portrait_41.jpg",
    alt: "Senay",
  },

  {
    namePerson: "Arwa ALHUSSEIN",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Abul Fettah",
    age: 38,
    image: "38-Powercoders_Portrait_44.jpg",
    alt: "Arwa",
  },

  {
    namePerson: "Ali GOCMEN",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Sadettin",
    age: 38,
    image: "40-Powercoders_Portrait_46.jpg",
    alt: "Ali",
  },

  {
    namePerson: "Jyothi JOGIN",
    country: "Turkey",
    city: "Geneva",
    bestFriend: "Ariani",
    age: 38,
    image: "22-Powercoders_Portrait_28.jpg",
    alt: "Jyothi",
  },
];

const arrayTeam = [
  {
    personName: "Linus",
    image: "Linus.jpg",
  },
  {
    personName: "Hélène",
    image: "Hélène.jpg",
  },
  {
    personName: "Sébastien",
    image: "Sébastien.jpg",
  },
  {
    personName: "Tarek",
    image: "Tarek.jpg",
  },
];

let container = document.getElementById("main");
let card = "";
for (let index = 0; index < arrayPeople.length; index++) {
  card += `<div class='card'>
                <div class="title">
                    <h3>${arrayPeople[index].namePerson}</h3>
                </div>
                <img src="./image/${arrayPeople[index].image}" alt="${arrayPeople[index].alt}" width="200px" onclick="showInformation('${arrayPeople[index].bestFriend}')">
                <table>
                    <tr>
                        <th>Country</th>
                        <th>City</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>${arrayPeople[index].country}</td>
                        <td>${arrayPeople[index].city}</td>
                        <td>${arrayPeople[index].age}</td>
                    </tr>
                </table>
            </div>
            </div>`;
  container.innerHTML = card;
}

let asideContainer = document.getElementById("aside");
let teamCard = "";
//for (let index = 0; index < arrayTeam.length; index++) {
  arrayTeam.forEach(member => {
    teamCard += `<h4>TEACHING TEAM</h4>
              <div class='card'>
                <div class="title">
                    <h3>${member.personName}</h3>
                </div>
                <img src="./image/${member.image}" alt="${member.alt}" width="150px">
              </div>`;
    asideContainer.innerHTML = teamCard;
  });
  for (member of arrayTeam) {
  teamCard += `<h4>TEACHING TEAM</h4>
              <div class='card'>
                <div class="title">
                    <h3>${member.personName}</h3>
                </div>
                <img src="./image/${member.image}" alt="${member.alt}" width="150px">
              </div>`;
  asideContainer.innerHTML = teamCard;
}
