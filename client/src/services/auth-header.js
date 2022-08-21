export default function authHeader() {
    const Token = JSON.parse(localStorage.getItem('TOKEN'));
    console.log(Token);
    if (Token && Token.response) {
      return { Authorization: 'Bearer ' + Token.response };
    } else {
      return {};
    }
  }
  