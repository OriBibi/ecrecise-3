import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <head>
    <meta charset="UTF-8">
    <title>Ori&Yigal</title>
    <link rel="icon" type="image/x-icon" href="favicon.ico"/>
    <link rel="stylesheet" href="static/css/login.css">
    <script type="text/javascript" src="js/login.js"></script>
</head>
<body>
<div class="login-page">
    <h1>Ori&Yigal</h1>
    <h2>Flowers Boutique</h2>
    <div class="form">
        <form class="login-form">
            <input class="inputs" id="username" type="text" placeholder="username"/>
            <input class="inputs" id="password" type="password" placeholder="password"/>
            <label for="remember" style="word-wrap:break-word">
                <input style="display: inline-block;" type="checkbox" id="remember">remember me
            </label>
            <div id="error"></div>
            <input class="login-button" id="login" type="button" value="login">
            <p class="message">Not registered? <a href="register">Create an account</a></p>
        </form>
    </div>
</div>
</body>
</html>
        `;
    }
}