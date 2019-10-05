(function() {
    var qAndA = [{
            question: "How did Daenerys Targaryen eventually hatch her dragon eggs?",
            options: ["In a lightning storm", "In a funeral pyre", "In a fireplace", "In a frozen cave"],
            answer: "In a funeral pyre"
        },
        {
            question: "What was Ned Stark's great sword called?",
            options: ["Ice", "Oathkeeper", "Widow's Wail", "Northguard"],
            answer: "Ice"
        },
        {
            question: "The phrase 'Valar Morghulis' or 'all men must die' is usually responded with?",
            options: ["Valar Rohnas or 'all men must live'", "Valar Dohaeris or 'all men must serve'",
                "Valar GoGo or 'all men must dance'", "Valar Narnia or 'all men ust fight'"
            ],
            answer: "Valar Dohaeris or 'all men must serve'"
        },
        {
            question: "What is the only thing that can put out volatile Wildfire?",
            options: ["Sand", "Water", "Dragon's blood", "Sunlight"],
            answer: "Sand"
        },
        {
            question: "Besides dragonglass, what is the only other substance capable of defeating White Walkers?",
            options: ["Weirwood", "Wildfire", "Valyrian Steel", "Snowballs"],
            answer: "Valyrian Steel"
        },
        {
            question: "Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?",
            options: ["Ghost", "Lady", "Nymeria", "Summer"],
            answer: "Lady"
        },
        {
            question: "What was Arya's punishment for stealing from the Many-Face God?",
            options: ["Death", "Memory Loss", "Blindness", "Uncontrollable Laughter"],
            answer: "Blindness"
        },
        {
            question: "The name of King Tommen's favorite cat is",
            options: ["Battle Pus", "Little Lion", "Ser Pounce", "Prince Fuzzy"],
            answer: "Ser Pounce"
        },
        {
            question: "'It's nothing' were the last words of which infamous character",
            options: ["Renly Baratheon", "Tywin Lannister", "Robb Stark", "King Joffrey"],
            answer: "King Joffrey"
        },
        {
            question: "Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat and ?",
            options: ["Pride in drawing blood first", "Knowledge of poisons",
                "Night-time attacks", "Ruby-colored armor"
            ],
            answer: "Knowledge of poisons"
        },
        {
            question: "Who shoots the flaming arrow that subsequently destroy's Stannis' fleet in Blackwater Bay?",
            options: ["Tyrion Lannister", "King Joffrey", "Jaime Lannister", "Bronn"],
            answer: "Bronn"
        },
        {
            question: "How many times has Beric Dondarrion been brought back to life?",
            options: ["3", "6", "7", "2"],
            answer: "6"
        },
        {
            question: "The Night King was created using a dagger made of",
            options: ["Valyrian Steel", "Blue Ice", "Dragon glass", "Weirwood"],
            answer: "Dragon glass"
        },
        {
            question: "Who created the secret tunnel in the sewers under Casterly Rock?",
            options: ["Tyrion Lannister", "Lord Baelish", "Jaime Lannister", "Varys"],
            answer: "Tyrion Lannister"
        },
        {
            question: "Dead creatures revived by White Walkers are known as ?",
            options: ["Walkers", "Wights", "Zombies", "Claws"],
            answer: "Wights"
        },
        {
            question: "Who was responsible for the creation of the Night King?",
            options: ["The Lord of Light", "The Children of the Forest", "The Drowned God", "The First Men"],
            answer: "The Children of the Forest"
        },
        {
            question: "In the TV show, what was Hodor called before he got his tragic door-holding nickname?",
            options: ["Wylis", "Horys", "Myrys", "Gladys"],
            answer: "Wylis"
        },
        {
            question: "Daenerys' dragons are (or were) called Drogon, Viserion and ?",
            options: ["Dougal", "Vhagar", "Rhaegal", "Balerion"],
            answer: "Rhaegal"
        },
        {
            question: "What is the name of Arya’s sword?",
            options: ["Ice", "Pointy", "Fang", "Needle"],
            answer: "Needle"
        },
        {
            question: "Who was Ned Stark’s predecessor as Robert Baratheon’s Hand?",
            options: ["Jaime Lannister", "Jon Arryn", "Tywin Lannister", "Ser Jorah Mormont"],
            answer: "Jon Arryn"
        },
        {
            question: "Who had the honour of killing Petyr Baelish?",
            options: ["Jon Snow", "Sansa Stark", "Brienne", "Arya Stark"],
            answer: "Arya Stark"
        },
        {
            question: "What was the name of the fortune teller Cersei visited as a teenager?",
            options: ["Jenny the Newt", "Maggie the Frog", "Winnie the Lizard", "Kerry the Kangarillapig"],
            answer: "Maggie the Frog"
        },
        {
            question: "The King Beyond the Wall, Mance Rayder, was roasted alive on whose orders?",
            options: ["Cersei Lannister", "Daenerys Targaryen", "Stannis Baratheon", "Roose Bolton"],
            answer: "Stannis Baratheon"
        },
        {
            question: "What were the first words King Robert said to Ned Stark in episode one of season one?",
            options: ["'You’ve got fat.'", "'You’ve not changed.'", "'You look old.'", "'Your hair looks terrible.'"],
            answer: "'You’ve got fat.'"
        },
        {
            question: "What is the name of Jon Snow's Direwolf?",
            options: ["Grey Wind", "Graham", "Ghost", "Gargamel"],
            answer: "Ghost"
        },
        {
            question: "What's the name of Lysa Arryn's too-old-to-be-nursing son?",
            options: ["Edmore", "Hoster", "Robin", "Nedwell"],
            answer: "Robin"
        },
        {
            question: "Who said: 'Chaos isn''t a pit. Chaos is a ladder'?",
            options: ["Lord Varys", "Petyr Baelish 'Littlefinger'", "Cersei Lannister", "Faris Rotter"],
            answer: "Petyr Baelish 'Littlefinger'"
        },
        {
            question: "Who had molten gold poured over their head?",
            options: ["Robb Stark", "Viserys Targaryen", "Khal Drogo", "Aloo Gobi"],
            answer: "Viserys Targaryen"
        },
        {
            question: "Grey Worm is the leader of which group?",
            options: ["The Unthanks", "The Unjust", "The Unsullied", "The Undertones"],
            answer: "The Unsullied"
        },
        {
            question: "Who masterminded the plot to kill King Joffrey?",
            options: ["Brienne of Tarth", "Lord Varys", "Olenna Tyrell", "Rene Artois"],
            answer: "Olenna Tyrell"
        },
        {
            question: "Who is the youngest of Ned Stark’s children?",
            options: ["Bran", "Arya", "Sansa", "Rickon"],
            answer: "Rickon"
        },
        {
            question: "Who is Jon Snow’s mother?",
            options: ["Lysa Arryn", "Cersei Lannister", "Lyanna Stark", "An unnamed prostitute"],
            answer: "Lyanna Stark"
        },
        {
            question: "Jamie Lannister has a golden ?",
            options: ["Sword", "Tongue", "Hand", "Chariot"],
            answer: "Hand"
        },
        {
            question: "How does Gregor, “the Mountain”, Clegane kill Oberyn Martell, the “Red Viper”, in their trial by combat?",
            options: ["Poisons him", "Strangles him", "Cuts his head off", "Crushes his skull"],
            answer: "Crushes his skull"
        },
        {
            question: "Which former ranger of the Night’s Watch led an army of wildlings as the “King-Beyond-the-Wall”?",
            options: ["Mance Rayder", "Janos Slynt", "Craster", "Tormund Giantsbane"],
            answer: "Mance Rayder"
        },
        {
            question: "What’s the name of the band of assassins that Arya Stark joins in Braavos?",
            options: ["Second sons", "Brotherhood without Banners", "Sons of the Harpy", "Faceless Men"],
            answer: "Faceless Men"
        },
        {
            question: "How is Ser Davos colloquially known?",
            options: ["The Potato Lord", "The Cabbage Duke", "The Onion Knight", "The Beetroot Lord"],
            answer: "The Onion Knight"
        },
        {
            question: "What is Brienne’s real surname?",
            options: ["Tully", "Tarth", "Gibb", "Utichi"],
            answer: "Tarth"
        },
        {
            question: "What is Sansa Stark's favorite treat?",
            options: ["Apple cranberry crisp", "Strawberry rhubarb pie", "Lemon cakes", "Honey cakes"],
            answer: "Lemon cakes"
        },
    ];
})