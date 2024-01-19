// Création d'une class profil utilisateur

class UserProfile {

    constructor(name, diplomas = [], experience = [], educationHistory = []) {
        this.name = name;
        this.diplomas = diplomas;
        this.experience = experience;
        this.educationHistory = educationHistory;
    }

    // Fonctions d'ajout d'informations
    addDiploma() {
        const diploma = prompt('Entrez votre diplôme');
        if (diploma) {
            user.diplomas.push(diploma)
        }
    }

    addEducation() {
        const school = prompt('Entrez le nom de l\'école');
        const diploma = prompt('Entrez le diplôme obtenu');
        if (school && diploma) {
            user.educationHistory.push({school, diploma})
        }
    };

    addExperience() {
        const jobTitle = prompt('Entrez le titre du post');
        const company = prompt('Entrez le nom de l\'entreprise');
        if (jobTitle && company) {
            user.experience.push({jobTitle, company})
        }
    }

    // Actualisation de l'affichage de l'interface utilisateur depuis des inputs
    updateUi() {
        const diplomasList = document.getElementById('diplomas-id');
        diplomasList.innerHTML = '';
        user.diplomas.forEach(diploma => {
            const li = document.createElement('li');
            li.textContent = diploma
            diplomasList.appendChild(li);
        })

        const experienceList = document.getElementById('experiences-id');
        experienceList.innerHTML = '';
        user.experience.forEach(experience => {
            const li = document.createElement('li');
            li.textContent = `${experience.jobTitle} chez ${experience.company}`
            experienceList.appendChild(li);
        })

        const educationList = document.getElementById('educations-id');
        educationList.innerHTML = '';
        user.educationHistory.forEach(education => {
            const li = document.createElement('li');
            li.textContent = `${education.diploma} chez ${education.school}`
            educationList.appendChild(li);
        })
    }
}

const user = new UserProfile('Brahim');

// Initialisation d'un nouvel utilisateur
const educationBtn = document.getElementById('add-education');
educationBtn.addEventListener('click', () => {
    user.addEducation()
    user.updateUi()
})

const diplomaBtn = document.getElementById('add-diploma');
diplomaBtn.addEventListener('click', () => {
    user.addDiploma()
    user.updateUi()
});

document.getElementById('add-experience').addEventListener('click', () => {
    user.addExperience()
    user.updateUi()
})




