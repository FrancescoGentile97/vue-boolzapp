const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            text: "",
            search:"",
            user: {
                id: 1,
                order: 1,
                name: "Yone",
                avatar: "img/Yone.avatar.jpeg",
                visible: true,
                lastAccess: "16:10",
                messages: [
                    {
                        date: "10/01/2020, 15:30",
                        message: "Oggi sono andato Mid,mi hanno stompato come al solito... 2/10/0",
                        status: "sent",

                    },
                    {
                        date: "10/01/2020, 15:50",
                        message: "A te comè andata la giornata?",
                        status: "sent",

                    },
                    {
                        date: "10/01/2020, 16:15",
                        message: "Sono andato Top,ho comprato la botrk.",
                        status: "received",

                    },
                ],
            },
            usersList: [
                {
                    id: 1,
                    order: 1,
                    name: "Yone",
                    avatar: "img/Yone.avatar.jpeg",
                    visible: true,
                    lastAccess: "16:10",
                    messages: [
                        {
                            date: "10/01/2020, 15:30",
                            message: "Oggi sono andato Mid,mi hanno stompato come al solito... 2/10/0",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020, 15:50",
                            message: "A te comè andata la giornata?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020, 16:15",
                            message: "Sono andato Top,ho comprato la botrk.",
                            status: "received",
                        },
                    ],
                },
                {
                    id: 2,
                    order: 2,
                    name: "Dr.Mundo",
                    avatar: "img/mundo.avatar.jpeg",
                    visible: true,
                    lastAccess: "16:41",
                    messages: [
                        {
                            date: "20/03/2020, 16:30",
                            message: "We bello,dove sei?",
                            status: "sent",
                        },
                        {
                            date: "20/03/2020, 16:30",
                            message: "MUNDO VA DOVE VUOLE",
                            status: "received",
                        },
                        {
                            date: "20/03/2020, 16:35",
                            message: "Siringhe ci sono! Bendaggi ci sono! Dr.Mundo... ci sono!",
                            status: "received",
                        },
                    ],
                },
                {
                    id: 3,
                    order: 3,
                    name: "Rakan",
                    avatar: "img/rakan.avatar.jpeg",
                    visible: true,
                    lastAccess: "10:35",
                    messages: [
                        {
                            date: "28/03/2020, 10:10",
                            message: "Dove hai comprato quel mantello di piume?",
                            status: "received",
                        },
                        {
                            date: "28/03/2020, 10:20",
                            message: "Su Shein.",
                            status: "sent",
                        },
                        {
                            date: "28/03/2020, 16:15",
                            message: "Quanto lo hai pagato?",
                            status: "received",
                        },
                    ],
                },
                {
                    id: 4,
                    order: 4,
                    name: "Garen",
                    avatar: "img/garen.avatar.jpeg",
                    visible: true,
                    lastAccess: "16:41",
                    messages: [
                        {
                            date: "10/01/2020, 15:30",
                            message: "Tutto bene a casa?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020, 15:50",
                            message: "Adoro Demacia,è proprio bella Demacia,combatto per Demacia,vivo a Demacia",
                            status: "received",
                        },
                    ],
                },
                {
                    id: 5,
                    order: 5,
                    name: "Lux",
                    avatar: "img/lux.avatar.jpeg",
                    visible: true,
                    lastAccess: "17:41",
                    messages: [
                        {
                            date: "10/01/2020, 15:30",
                            message: "Lux,sei ancora latitante a Demacia?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020, 15:50",
                            message: "Ehi tutto bene?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020, 16:15",
                            message: "Adoro la luce segui la luce ἬᾄђᾄἬᾋђᾋἬᾋђᾄ",
                            status: "received",
                        },
                    ],
                },
                {
                    id: 6,
                    order: 6,
                    name: "Gnar",
                    avatar: "img/gnar.avatar.jpeg",
                    visible: true,
                    lastAccess: "15:51",
                    messages: [
                        {
                            date: "10/01/2020, 15:30",
                            message: "Hey GNAR!",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020, 15:50",
                            message: "Shabubabi",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020, 16:15",
                            message: "Shabubabi",
                            status: "received",
                        },
                    ],
                },
                {
                    id: 7,
                    order: 7,
                    name: "Blitzcrank",
                    avatar: "img/blitzcrank.avatar.jpeg",
                    visible: true,
                    lastAccess: "18:12",
                    messages: [
                        {
                            date: "10/01/2020, 15:30",
                            message: "Hey Blitz come vanno i grab in bot?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020, 15:50",
                            message: "Hai vinto quella ranked?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020, 16:15",
                            message: "22!",
                            status: "received",
                        },
                    ],
                },
                {
                    id: 8,
                    order: 8,
                    name: "Annie",
                    avatar: "img/annie.avatar.jpeg",
                    visible: true,
                    lastAccess: "19:29",
                    messages: [
                        {
                            date: "10/01/2020, 15:30",
                            message: "Hey Annie dovresti smetterla di dare fuoco alle cose!",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020, 15:50",
                            message: "E pensare piuttosto a studiare",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020, 16:15",
                            message: "Ma io voglio giocare!",
                            status: "received",
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        getLastMessage(user) {
            let lastIndex = user.messages.length - 1;
            return user.messages[lastIndex].message;
        },
        lastDateMessage(user) {
            let lastIndex = user.messages.length - 1;
            return user.messages[lastIndex].date;
        },
        sentNewMessage(user) {
            let options = {'year': 'numeric', 'month': '2-digit', 'day': '2-digit','hour' : 'numeric', 'minute' : 'numeric' };
            let now = new Date().toLocaleString('it-IT',options);
            let newMessage = {
                date: now,
                message: this.text,
                status: "sent",
            }
            let responseMessage;
            user.messages.push(newMessage);
            this.text = "";
            if (user.id == 1) {
                responseMessage = {
                    date: now,
                    message: "Ho feddato un Garen 10/0 come sempre fratellino.",
                    status: "received",
                }
            }
            if (user.id == 2) {
                responseMessage = {
                    date: now,
                    message: "Mundo è un dottore vero.",
                    status: "received",
                }  
            }
            if (user.id == 3) {
                responseMessage = {
                    date: now,
                    message: "Non lo sò me lo ha regalato Xayah!",
                    status: "received",
                }  
            }
            if (user.id == 4) {
                responseMessage = {
                    date: now,
                    message: "PER DEMACIAAAA!!",
                    status: "received",
                }  
            }
            if (user.id == 5) {
                responseMessage = {
                    date: now,
                    message: "Odio tutta la mia famiglia,che bella la luce uwu",
                    status: "received",
                }  
            }
            if (user.id == 6) {
                responseMessage = {
                    date: now,
                    message: "GNAAAAR!!!!",
                    status: "received",
                }  
            }
            if (user.id == 7) {
                responseMessage = {
                    date: now,
                    message: "Il metallo è più duro della carne",
                    status: "received",
                }  
            }
            if (user.id == 8) {
                responseMessage = {
                    date: now,
                    message: "Hai per caso visto il mio orsetto Tibers?!?",
                    status: "received",
                }  
            }
            this.orderChat(user);
            // metto else if "id == 2 ecc" e metto gli altri messaggi 
            if (responseMessage != undefined) {
                setTimeout(() => {
                    user.messages.push(responseMessage);
                }, 2000);
            }
        },
        getChatSelector(user) {
            this.user = user
        },
        orderChat(userChat) {
            this.usersList.forEach(user => {
                if (user.id == userChat.id) {
                    user.order = 1;
                } else {
                    user.order += 1;
                }
            });
            this.usersList.sort((a, b) => {
                return a.order - b.order;
            });
        },
        onDeleteMessage(i,userChat){
           this.usersList.forEach(user => {
            if (user.id == userChat.id){
              if(user.messages[i].status == "sent"){
                user.messages[i].message = "Il tuo messaggio è stato eliminato";
              }else{
                user.messages[i].message = "Il messaggio è stato eliminato";
              }
                this.user = user;
            }
           });
        },
        searchUserChat(){
            this.usersList.forEach(user => {
                if (user.name.toUpperCase().includes(this.search.toUpperCase())){
                   user.visible = true; 
                }else {
                    user.visible = false;
                }
                
            });

        }
    }
}).mount("#app");