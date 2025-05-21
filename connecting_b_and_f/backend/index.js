import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Knock Knock",
      joke: "Why did the chicken cross the road? To get to the other side!",
    },
    {
      id: 2,
      title: "Dad Joke",
      joke: "I told my wife she was drawing her eyebrows too high. She looked surprised!",
    },
    {
      id: 3,
      title: "Pun",
      joke: "I used to play piano by ear, but now I use my hands.",
    },
    {
      id: 4,
      title: "Knock Knock",
      joke: "Knock, knock. Who’s there? Lettuce. Lettuce who? Lettuce in, it’s freezing out here!",
    },
    {
      id: 5,
      title: "Dad Joke",
      joke: "I’m reading a book on anti-gravity. It’s impossible to put down!",
    },
    {
      id: 6,
      title: "Pun",
      joke: "I used to be a baker, but I couldn’t make enough dough.",
    },
    {
      id: 7,
      title: "Knock Knock",
      joke: "Knock, knock. Who’s there? Cow says. Cow says who? No silly, cow says moooo!",
    },
    {
      id: 8,
      title: "Dad Joke",
      joke: "Why don’t skeletons fight each other? They don’t have the guts.",
    },
    {
      id: 9,
      title: "Pun",
      joke: "I told my computer I needed a break, and now it won’t stop sending me beach wallpapers.",
    },
    {
      id: 10,
      title: "Knock Knock",
      joke: "Knock, knock. Who’s there? Atch. Atch who? Bless you!",
    },
    {
      id: 11,
      title: "Dad Joke",
      joke: "I used to be a banker, but I lost interest.",
    },
    {
      id: 12,
      title: "Pun",
      joke: "I’m on a whiskey diet. I’ve lost three days already.",
    },
    {
      id: 13,
      title: "Knock Knock",
      joke: "Knock, knock. Who’s there? Olive. Olive who? Olive you and I miss you!",
    },
    {
      id: 14,
      title: "Dad Joke",
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 15,
      title: "Pun",
      joke: "I used to be a doctor, but now I’m just a quack.",
    },
  ];
  res.send(jokes);
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
