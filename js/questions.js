const questionBank = {
    priorites: [
        {
            question: "À une intersection sans signalisation, qui est prioritaire ?",
            answers: [
                { text: "Le véhicule venant de droite", correct: true },
                { text: "Le véhicule venant de gauche", correct: false },
                { text: "Le véhicule le plus rapide", correct: false }
            ],
            explanation: "La priorité à droite s'applique en l'absence de signalisation."
        },
        {
            question: "Face à un panneau 'Cédez le passage', je dois :",
            answers: [
                { text: "M'arrêter systématiquement", correct: false },
                { text: "Ralentir et céder le passage si un véhicule arrive", correct: true },
                { text: "Passer si j'estime avoir le temps", correct: false }
            ],
            explanation: "Le panneau 'Cédez le passage' impose de ralentir et de laisser passer les véhicules prioritaires."
        },
        // ... 20 questions sur les priorités
    ],

    signalisation: [
        {
            question: "Un feu rouge clignotant signifie :",
            answers: [
                { text: "Arrêt absolu", correct: true },
                { text: "Je peux passer si la voie est libre", correct: false },
                { text: "Le feu est en panne", correct: false }
            ],
            explanation: "Un feu rouge clignotant impose un arrêt absolu, comme un feu rouge fixe."
        },
        {
            question: "Une ligne continue blanche signifie :",
            answers: [
                { text: "Interdiction de franchissement", correct: true },
                { text: "Franchissement autorisé pour doubler", correct: false },
                { text: "Simple indication de voie", correct: false }
            ],
            explanation: "Une ligne continue ne doit jamais être franchie ou chevauchée."
        },
        // ... 20 questions sur la signalisation
    ],

    vitesse: [
        {
            question: "Sur autoroute par temps de pluie, la vitesse est limitée à :",
            answers: [
                { text: "130 km/h", correct: false },
                { text: "110 km/h", correct: true },
                { text: "90 km/h", correct: false }
            ],
            explanation: "Par temps de pluie, la vitesse sur autoroute est limitée à 110 km/h."
        },
        {
            question: "Le minimum autorisé sur autoroute est de :",
            answers: [
                { text: "50 km/h", correct: false },
                { text: "80 km/h", correct: false },
                { text: "70 km/h", correct: true }
            ],
            explanation: "Sur autoroute, il est interdit de rouler en dessous de 70 km/h sur la voie de droite (sauf circonstances particulières)."
        },
        // ... 20 questions sur la vitesse
    ],

    comportement: [
        {
            question: "En cas de panne sur autoroute, je dois :",
            answers: [
                { text: "Mettre mon gilet et sortir du côté droit", correct: false },
                { text: "Mettre mon gilet et sortir côté gauche", correct: true },
                { text: "Rester dans mon véhicule", correct: false }
            ],
            explanation: "Il faut toujours sortir côté gauche pour éviter le trafic et après avoir mis son gilet jaune."
        },
        {
            question: "L'utilisation du téléphone au volant est :",
            answers: [
                { text: "Autorisée avec une oreillette", correct: false },
                { text: "Autorisée avec le haut-parleur", correct: false },
                { text: "Interdite dans tous les cas", correct: true }
            ],
            explanation: "L'usage du téléphone au volant est strictement interdit, même avec une oreillette."
        },
        // ... 20 questions sur le comportement
    ],

    allQuestions: [
        {
            question: "Sur une route à double sens, je double :",
            answers: [
                { text: "Par la droite", correct: false },
                { text: "Par la gauche", correct: true },
                { text: "Comme je veux", correct: false }
            ],
            explanation: "Le dépassement s'effectue toujours par la gauche sur une route à double sens pour des raisons de sécurité."
        },
        {
            question: "La vitesse maximale en ville est de :",
            answers: [
                { text: "30 km/h", correct: false },
                { text: "50 km/h", correct: true },
                { text: "70 km/h", correct: false }
            ],
            explanation: "En agglomération, la vitesse est limitée à 50 km/h sauf indication contraire."
        },
        {
            question: "Le taux d'alcoolémie maximum autorisé pour un conducteur expérimenté est de :",
            answers: [
                { text: "0,5 g/l de sang", correct: true },
                { text: "0,8 g/l de sang", correct: false },
                { text: "0,2 g/l de sang", correct: false }
            ],
            explanation: "Le taux maximum autorisé est de 0,5 g/l de sang pour un conducteur expérimenté."
        },
        {
            question: "Face à un panneau STOP, je dois :",
            answers: [
                { text: "Marquer l'arrêt et vérifier que la voie est libre", correct: true },
                { text: "Ralentir et passer si la voie est libre", correct: false },
                { text: "Klaxonner et passer", correct: false }
            ],
            explanation: "Le panneau STOP impose un arrêt total, même si aucun véhicule n'arrive."
        },
        {
            question: "Sur autoroute par temps de pluie, la vitesse est limitée à :",
            answers: [
                { text: "130 km/h", correct: false },
                { text: "110 km/h", correct: true },
                { text: "90 km/h", correct: false }
            ],
            explanation: "Par temps de pluie, la vitesse sur autoroute est réduite à 110 km/h."
        },
        {
            question: "Le port de la ceinture de sécurité est :",
            answers: [
                { text: "Obligatoire à l'avant uniquement", correct: false },
                { text: "Obligatoire pour tous les passagers", correct: true },
                { text: "Facultatif en ville", correct: false }
            ],
            explanation: "Le port de la ceinture est obligatoire pour tous les occupants, à l'avant comme à l'arrière."
        },
        {
            question: "Un feu orange clignotant signifie :",
            answers: [
                { text: "Passage autorisé avec prudence", correct: true },
                { text: "Arrêt obligatoire", correct: false },
                { text: "Priorité aux piétons", correct: false }
            ],
            explanation: "Un feu orange clignotant indique un passage dangereux, il faut redoubler de vigilance."
        },
        {
            question: "En cas de brouillard intense, j'allume :",
            answers: [
                { text: "Mes feux de position", correct: false },
                { text: "Mes feux de croisement", correct: false },
                { text: "Mes feux de brouillard", correct: true }
            ],
            explanation: "Les feux de brouillard sont spécialement conçus pour ces conditions météorologiques."
        },
        {
            question: "La distance de sécurité sur autoroute correspond à :",
            answers: [
                { text: "1 seconde", correct: false },
                { text: "2 secondes", correct: true },
                { text: "3 secondes", correct: false }
            ],
            explanation: "Il faut maintenir une distance de sécurité d'au moins 2 secondes avec le véhicule qui précède."
        },
        {
            question: "Le téléphone au volant est :",
            answers: [
                { text: "Autorisé avec une oreillette", correct: false },
                { text: "Autorisé en kit mains libres", correct: false },
                { text: "Interdit dans tous les cas", correct: true }
            ],
            explanation: "L'usage du téléphone au volant est strictement interdit, même avec un dispositif mains libres."
        }
        // Je peux continuer avec les 90 autres questions si vous le souhaitez
    ]
}; 