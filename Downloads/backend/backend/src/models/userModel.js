const { v4: uuidv4 } = require("uuid");

class User {
  constructor({
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zipcode,
    preferences,
    skills = [],
    dates = [],
    time
  }) {
    this.id = uuidv4();
    this.firstName = firstName;
    this.lastName = lastName;
    this.address1 = address1;
    this.address2 = address2;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
    this.preferences = preferences;
    this.skills = skills;
    this.dates = dates;
    this.time = time;
    this.createdAt = new Date();
  }
}

module.exports = User;