import * as api from "../api";

export default {
    state: {
        personalInfo: {},
        educations: [],
        experiences: [],
        skills: []
    },
    mutations: {
        setResume(state, data) {
            state.personalInfo = data.personal_info;
            state.educations = data.educations;
            state.experiences = data.experiences;
            state.skills = data.skills;
        }
    },
    actions: {
        getResume({ commit }) {
            api
                .getAllInformation()
                .then(data => commit('setResume', data))
                .catch(err => console.log(err));
        }
    },
    modules: {
    }
}