import { nanoid } from "nanoid";

const RewardData = [
  {
    title: "Bamboo Stand",
    subheading: "Pledge $25 or more",
    text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    standsleft: 101,
    id: nanoid(),
    pledge: 0,
    radio: false,
  },
  {
    title: "Black Edition Stand",
    subheading: "Pledge $75 or more",
    text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    standsleft: 64,
    id: nanoid(),
    pledge: 0,
    radio: false,
  },
  {
    title: "Mahogany Special Edition",
    subheading: "Pledge $200 or more",
    text: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    standsleft: 30,
    id: nanoid(),
    pledge: 0,
    radio: false,
  },
];

export default RewardData;