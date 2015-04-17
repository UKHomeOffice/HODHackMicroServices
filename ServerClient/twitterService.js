var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: '4rsWoj0hqsIi8QenDpKa4GOKO',
    consumer_secret: 'M3Ubv61VYvG3iQpaycYxnRkG51C75cgkwK5mkcikz6N7mLF3b9',
    access_token_key: '3176305919-Is2fmsdlcmwT37FJeCe8VEUwvntpgfhMOh4Jc3N',
    access_token_secret: 'BtQvZoqN5V1UkeKLQfqkzrapN20lbFe9aiN8hF8SJEiJM'
});



function tweet(tweetText) {
    client.post('statuses/update', {status: tweetText},  function(error, tweet, response){
        if(error) throw error;
        console.log(tweet);  // Tweet body.
    });
}

tweet('YoYo');

