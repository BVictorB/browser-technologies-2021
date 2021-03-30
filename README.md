# Poll'd 
A web application made for the Browser Technologies course during the Web Design and Development minor.

## Description
Poll'd is a web application where you can simply create a poll and let other people vote on it. No need to create an account or whatever. Just fill in the question and answers, pick a date and time when it closes, and share the poll url. You will automatically get a notification (if supported) when the poll closes and the results are in. This application also uses websockets to get live updates when people are voting, so there is no need to refresh (if supported).

## Features
- Notifications: get a web-push notification when the poll closes and the results are in.
- Websockets: get live updates when visiting a poll results page.
- Clipboard: easily copy the url to a poll page to let other people vote.
- Cookies: saves cookies so users can't vote multiple times.

## Progressive enhancement
- Notifications: if your browser does not support notifications, you simply don't get a notification. The subscribe to notifications button also won't be available (so you won't get dissapointed). However if websockets are working, you just get an update on the page itself if you have it opened. If websockets are also not supported in your browser, you would have to refresh.
- Websockets: this works in basically every browser, but if it doesn't work you would just have to refresh. The user gets feedback to let them know if the data is live or not. If it isn't there will be a refresh button available that refreshes the page.
- Clipboard: if this is supported in your browser, you can just click on the link on the page and it will get copied to your clipboard. If it isn't supported, you can just double click and copy the url yourself.
- Cookies: if you have cookies enabled, you can save polls as 'drafts' and finish them later. You can also vote on polls and find them on the 'My votes' pages. If you have cookies disabled you can still vote, but you won't be able to find your votes back on the my votes pages. You can also save drafts without cookies, but you would have to save the url to the draft yourself.

## Browsers tested
- Chrome desktop
- Safari desktop
- Chrome mobile (Android - OnePlus 6t)
- Safari mobile (iOS - iPhone XS Max)

## Test report
Coming soon...

## Install

- Clone this repo
```
git clone https://github.com/BVictorB/browser-technologies-2021.git .
```
- Install all NPM packages
```
npm i
```
- Run the application (go to http://localhost:4000/ in your browser).
```
npm start
```