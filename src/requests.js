const getQuote = (req) => fetch('https://fed-challenge-api.sure.now.sh/api/v1/quotes', {
  method: 'post',
  body: JSON.stringify(req),
});

export default getQuote;
