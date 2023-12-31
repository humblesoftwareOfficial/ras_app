export const truncateText = (text = "", endTo = 25) =>
  text?.length > endTo ? `${text.substr(0, endTo)}...` : text;

export const generateKey = () => {
  var key = "";
  var characters =
    "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn1234567890vb0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 15; i++) {
    key += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return key;
};

export const getStatusCount = (data = []) => {
  try {
    const countByStatus = data.reduce((acc, obj) => {
      const status = obj.status;
      if (!acc[status]) {
        acc[status] = 1;
      } else {
        acc[status]++;
      }
      return acc;
    }, {});
    return countByStatus;
  } catch (error) {
    return "";
  }
};

export const EInstanceIntervalTime = {
  Last_Hour : 'Last_Hour',
  Last_Half_Hour : 'Last_Half_Hour',
  Last_Quarter_Hour : 'Last_Quarter_Hour',
}

export const getInstancesIntervalTimeTranslation = (value = "") => {
  try {
    switch (value) {
      case EInstanceIntervalTime.Last_Hour:
        return 'Dernière Heure';
        case EInstanceIntervalTime.Last_Half_Hour:
        return 'Dernière Démi-Heure';
        case EInstanceIntervalTime.Last_Quarter_Hour:
        return "Dernier Quart d'heure";
      default:
        return "";
    }
  } catch (error) {
    return "";
  }
}