const url = "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent";
const urlSched =
  "https://cricbuzz-cricket.p.rapidapi.com/schedule/v1/international";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "67c58b0aecmshf86f64500820ec9p182073jsn310dcd258272",
    "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
  },
};

fetch(urlSched, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // if (data.status != "success") return;
    const matchList = data.matchScheduleMap;
    if (!matchList) return [];
    console.log(matchList);
    matchList.map;
  });
