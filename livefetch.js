
//------conriguration-------//
const firebaseConfig = {
    apiKey: "AIzaSyAx0EqLdT49lj4fET4emeFrrD2ILJuxRcE",
    authDomain: "fir-javascript-afa80.firebaseapp.com",
    databaseURL: "https://fir-javascript-afa80-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-javascript-afa80",
    storageBucket: "fir-javascript-afa80.appspot.com",
    messagingSenderId: "123396908723",
    appId: "1:123396908723:web:2c79a366ec77319ebdf2c6"
};

firebase.initializeApp(firebaseConfig);
let cloudDB = firebase.firestore();
cloudDB.settings({ timestampsInSnapshots: true });

const list = document.querySelector('#list');

function renderList(doc) {
    let idForDiv = document.createElement('div');
    let name = document.createElement('h2');
    let sec = document.createElement('li');
    let gen = document.createElement('li');

    idForDiv.setAttribute('id',doc.data().ID)
    name.innerHTML = doc.data().NameOfStd;
    sec.innerHTML = '유통기한: '+ doc.data().Section;
    gen.innerHTML = '메모: '+ doc.data().Gender;
    

    idForDiv.appendChild(name);
    idForDiv.appendChild(sec);
    idForDiv.appendChild(gen);

    list.appendChild(idForDiv);

}

cloudDB.collection('Submit').onSnapshot((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderList(doc);
    })
})