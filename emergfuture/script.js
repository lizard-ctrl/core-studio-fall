// chatroom sourcecode https://www.scaledrone.com/blog/javascript-chat-room-tutorial/





const CLIENT_ID = 'x7CoboJpcg2VpDAl';

const drone = new ScaleDrone(CLIENT_ID, {
  data: { 
    name: getRandomName(),
    color: getRandomColor(),
  },
});

let members = [];

drone.on('open', error => {
  if (error) {
    return console.error(error);
  }
  console.log('Successfully connected to Scaledrone');

  const room = drone.subscribe('observable-room');
  room.on('open', error => {
    if (error) {
      return console.error(error);
    }
    console.log('u found me sexcyyyy(;;; ur in the room');
  });

  room.on('members', m => {
    members = m;
    updateMembersDOM();
  });

  room.on('member_join', member => {
    members.push(member);
    updateMembersDOM();
  });

  room.on('member_leave', ({id}) => {
    const index = members.findIndex(member => member.id === id);
    members.splice(index, 1);
    updateMembersDOM();
  });

  room.on('data', (text, member) => {
    if (member) {
      addMessageToListDOM(text, member);
    } else {
    
    }
  });
});

drone.on('close', event => {
  console.log('Connection was closed', event);
});

drone.on('error', error => {
  console.error(error);
});

function getRandomName() {
  const sexa = ["shimmering", "silky", "sleek", "slinky", "smashing", "solid_gold",  "spell_binding", "spicy", "tempting", "tender", "moist", "throbbing", "thrusting", "sweaty", "foxy", "phat", "thicc", "spicy", "sizzling", "dreamy" , "smoky", "luscious", "smoking_hot" , "erotic", "tarty", "filthy", "E", "hot" ];
  const sexn = [

    "stallion", "hot_lips", "thot", "rod", "cock", "balls", "MILF", "DILF", "climax", "CyberSex", "money", "coins", "cum", "ejaculation", "gangbang", "phonesex", "orgasm", "quickie",  "threesome", "intimacy", "girl", "boy", "dad", "mom", "pet", "sub", "dom"];
  return (
    sexa[Math.floor(Math.random() * sexa.length)] +
    "_" +
    sexn[Math.floor(Math.random() * sexn.length)]
  );
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}



const DOM = {
  membersCount: document.querySelector('.members-count'),
  membersList: document.querySelector('.members-list'),
  messages: document.querySelector('.messages'),
  input: document.querySelector('.message-form__input'),
  form: document.querySelector('.message-form'),
};

DOM.form.addEventListener('submit', sendMessage);

function sendMessage() {
  const value = DOM.input.value;
  if (value === '') {
    return;
  }
  DOM.input.value = '';
  drone.publish({
    room: 'observable-room',
    message: value,
  });
}

function createMemberElement(member) {
  const { name, color } = member.clientData;
  const el = document.createElement('div');
  el.appendChild(document.createTextNode(name));
  el.className = 'member';
  el.style.color = color;
  return el;
}

function updateMembersDOM() {
  DOM.membersCount.innerText = `${members.length} hotties in here:`;
  DOM.membersList.innerHTML = '';
  members.forEach(member =>
    DOM.membersList.appendChild(createMemberElement(member))
  );
}

function createMessageElement(text, member) {
  const el = document.createElement('div');
  el.appendChild(createMemberElement(member));
  el.appendChild(document.createTextNode(text));
  el.className = 'message';
  return el;
}

function addMessageToListDOM(text, member) {
  const el = DOM.messages;
  const wasTop = el.scrollTop === el.scrollHeight - el.clientHeight;
  el.appendChild(createMessageElement(text, member));
  if (wasTop) {
    el.scrollTop = el.scrollHeight - el.clientHeight;
  }
}
