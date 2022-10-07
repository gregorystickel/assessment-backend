//const express = require("express");

const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const deleteFortuneBtn = document.getElementById("deleteFortuneButton");
const addFortuneFrm = document.querySelector(".submit");
const getAllFortBtn = document.getElementById("getAllFortunesButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const deleteFortune = () => {
    axios.delete("http://localhost:4000/api/fortune/")
        .then(res => {
            const message = "Fortune Deleted";
            alert(message);
    });
};

const addFortune = (e) => {
    e.preventDefault();
    let newFort = document.querySelector(".submit-fortune").value;
    console.log(newFort)
    let newPost = {
        post: newFort
    }
    axios.post("http://localhost:4000/api/fortune/", newPost)
        .then
        (res => {
            const message = "Fortune Added";
            alert(message);
    });
};

const getAllFortune = () => {
    
    axios.get("http://localhost:4000/api/fortunes/")
        .then
        (res => {
            const message = "All fortunes retieved";
            alert(message);
    });
};


complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener(`click`, getFortune);
deleteFortuneBtn.addEventListener(`click`, deleteFortune);
addFortuneFrm.addEventListener(`submit`, addFortune);
getAllFortBtn.addEventListener(`click`, getAllFortune);