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
