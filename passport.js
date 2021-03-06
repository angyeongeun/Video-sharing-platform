import passport from "passport";
import GithubStrategy from "passport-github";
import { githubLoginCallback } from "./controllers/userController";
import User from "./models/User";
import routes from "./routes";

passport.use(User.createStrategy());


passport.use(
    new GithubStrategy(
        {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: `http://localhost:4000${routes.githubCallback}`

},

githubLoginCallback

));


passport.serializeUser(User.serializeUser());
console.log("User.serializeUser() : "+User.serializeUser());
passport.deserializeUser(User.deserializeUser());


export default passport;