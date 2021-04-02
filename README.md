# Poll'd 
A web application made for the Browser Technologies course during the Web Design and Development minor.

## Description
Poll'd is a web application where you can simply create a poll and let other people vote on it. No need to create an account or whatever. Just fill in the question and answers, pick a date and time when it closes, and share the poll url. You will automatically get a notification (if supported) when the poll closes and the results are in. This application also uses websockets to get live updates when people are voting, so there is no need to refresh (if supported).

## Features
- Notifications: get a web-push notification when the poll closes and the results are in.
- Websockets: get live updates when visiting a poll results page.
- Clipboard: easily copy the url to a poll page to let other people vote.
- Cookies: saves cookies so users can't vote multiple times.

The homepage:  

![polld-1](https://user-images.githubusercontent.com/10921830/113429312-9b245280-93d8-11eb-82c1-186fc7e9cbed.png)  

The create poll page:  

![polld-2](https://user-images.githubusercontent.com/10921830/113429314-9bbce900-93d8-11eb-9004-522f4640729e.png)  

The poll page:  

![polld-3](https://user-images.githubusercontent.com/10921830/113429315-9bbce900-93d8-11eb-9792-5108cade8483.png)  


## Progressive enhancement
- Notifications: if your browser does not support notifications, you simply don't get a notification. The subscribe to notifications button also won't be available (so you won't get dissapointed). However if websockets are working, you just get an update on the page itself if you have it opened. If websockets are also not supported in your browser, you would have to refresh.
- Websockets: this works in basically every browser, but if it doesn't work you would just have to refresh. The user gets feedback to let them know if the data is live or not. If it isn't there will be a refresh button available that refreshes the page.
- Clipboard: if this is supported in your browser, you can just click on the link on the page and it will get copied to your clipboard. If it isn't supported, you can just double click and copy the url yourself.
- Cookies: if you have cookies enabled, you can save polls as 'drafts' and finish them later. You can also vote on polls and find them on the 'My votes' pages. If you have cookies disabled you can still vote, but you won't be able to find your votes back on the my votes pages. You can also save drafts without cookies, but you would have to save the url to the draft yourself.

The poll page with JavaScript enabled (and everything working properly):  

![localhost_4000_result_6067374aa1a3a82610d32ed1](https://user-images.githubusercontent.com/10921830/113429288-919aea80-93d8-11eb-83f7-c3631b52a4ef.png)  

The poll page with JavaScript disabled:  

![localhost_4000_result_6067374aa1a3a82610d32ed1 (1)](https://user-images.githubusercontent.com/10921830/113429284-9069bd80-93d8-11eb-884d-c88d7a380151.png)  

The create poll page with JavaScript enabled:  

![localhost_4000_createpoll](https://user-images.githubusercontent.com/10921830/113429291-92338100-93d8-11eb-9780-2942e0733ec3.png)  

The create poll page with JavaScript disabled:  

![localhost_4000_createpoll (1)](https://user-images.githubusercontent.com/10921830/113429290-919aea80-93d8-11eb-997a-6808469d7603.png)  


## Browsers tested
- Chrome desktop
- Safari desktop
- Chrome mobile (Android - OnePlus 6t)
- Safari mobile (iOS - iPhone XS Max)

## Test report
I have tested every feature in all of the browsers that are listed above and wrote a small report about my experience in each browser.

### Chrome desktop:
Everything is working exactly like expected, since I developed this whole site while using Chrome I did not expect to run into any trouble. Without disabling cookies or JavaScript every feature works completely. With cookies and JavaScript disabled some features are not (completely) available, but that was expected.

### Safari desktop:
Almost everything works in the desktop version of Safari, the only thing that did not work (and was causing errors) was the push notification feature. So I added a check in the code (feature detection) that checks if the 'PushManager' is available in your window. This is not the case in Safari, so the subscribe to notifications button does not appear. Also the date and time input types are not supported in Safari, I do have client-side validation with JavaScript and validation built into the HTML, so this should not really be a problem, but it might be a bit less user friendly.

### Chrome mobile:
Just like in Safari the push notifications are not working here, everything else works completely (as expected).

### Safari mobile:
And finally in the Safari mobile browser, the push notifications do not work (as expected). iOS devices do not support the PushManager at all yet, so hopefully they will add that soon. The date and time inputs do actually work on the mobile version of Safari, and everything else works as expected. There was one (for me) strange thing where the websocket (with the live poll updates) would not work. But it appears that Safari mobile does not like websockets that are hosted with a non HTTPS connection, so once I deployed my app everything worked just fine.

## Install

- Clone this repo
```
git clone https://github.com/BVictorB/polld.git .
```
- Install all NPM packages
```
npm i
```
- Run the application (go to http://localhost:4000/ in your browser).
```
npm start
```

