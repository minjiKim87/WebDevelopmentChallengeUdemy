const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
  res.render("welcome");
});

router.get("/signup", function (req, res) {
  res.render("signup");
});

const exitingUser = await db
  .getDb()
  .collection("users")
  .findOne({ email: enteredEmail });

if (exitingUser) {
  console.log("User exists already");
  return res.redirect("/signup");
}
router.get("/login", function (req, res) {
  res.render("login");
});

router.post("/signup", async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredConfirmEmail = userData["confirm-email"];
  const enteredPassword = userData.password;

  if (
    !enteredEmail ||
    !enteredConfirmEmail ||
    !enteredPassword ||
    enteredPassword < 6 ||
    enteredEmail !== enteredConfirmEmail ||
    !enteredEmail.includes("@")
  ) {
    console.log("Incorrect data");
    return res.redirect("/signup");
  }

  const hashedPassword = await brypt.hash(enteredPassword, 12);

  const user = {
    email: email,
    password: enteredPassword,
  };
  await db.getDb().collection("users").insertOne(user);

  res.redirect("/login");
});

router.post("/login", async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredPassword = userData.password;

  const exitingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: enteredEmail });

  if (!exitingUser) {
    console.log("Could not log in");
    return res.redirect("/login");
  }

  const passwordAreEqual = bcrypt.compare(
    enteredPassword,
    exitingUser.password
  );

  if (!passwordAreEqual) {
    console.log("Colud not log in - passwords are not equal!");
    return res.redirect("/login");
  }

  console.log("User is authenticated!");
  res.redirect("/admin");
});

router.get("/admin", function (req, res) {
  res.render("admin");
});

router.post("/logout", function (req, res) {});

module.exports = router;
