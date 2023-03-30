'use strict';

function Human(name, gender) {
    this.name = name;
    this.gender = gender;
}

function Flat() {
    this.residents = [];
}

Flat.prototype.addResident = function (resident) {
    this.residents.push(resident);
}

function House(maxFlatAmount) {
    this.maxFlatAmount = maxFlatAmount;
    this.flats = [];
}

House.prototype.addFlat = function (flat) {
    for (let i = 0; i < this.flats.length; i++) {
        if (this.flats[i] === flat) {
            console.log('Already exists');
            return;
        }
    }
    if (this.flats.length < this.maxFlatAmount) {
        this.flats.push(flat);
    } else {
        console.log(`The house cannot contain more ${this.maxFlatAmount} flats`);
    }
}
function showResidents(arr) {
    if (arr.length === 0) {
        console.log('Empty');
    }
    arr.forEach(item => {
        console.log(item.name);
    });
}

const mykola = new Human('Mykola', 'male');
const ludmila = new Human('Ludmila', 'female');
const andrew = new Human('Andrew', 'male');

const house = new House(5);
const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();
flat1.addResident(mykola);
flat2.addResident(ludmila);
flat3.addResident(andrew);
house.addFlat(flat1, flat2, flat3);
console.log(house)
console.log(flat1, flat2, flat3)
showResidents(flat1.residents);
showResidents(flat2.residents);
showResidents(flat3.residents);
