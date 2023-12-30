const defineDayOf = (date) => {
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const minutes =
    date?.getMinutes() > 9 ? date?.getMinutes() : "0" + date?.getMinutes();
  const hours =
    date?.getHours() > 9 ? date?.getHours() : "0" + date?.getHours();
  const seconds =
    date?.getSeconds() > 9 ? date?.getSeconds() : "0" + date?.getSeconds();
    return (
        date?.getDate() +
        " " +
        months[date?.getMonth()] +
        " " +
        date?.getFullYear() +
        " à " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
};

export const timing = (date, notAdd = false) => {
  try {
    return defineDayOf(new Date(date.toString()));
  } catch (error) {
    console.log({ error });
    return "";
  }
};
