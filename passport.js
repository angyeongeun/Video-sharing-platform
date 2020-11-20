import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
console.log("User.serializeUser() : "+User.serializeUser());
passport.deserializeUser(User.deserializeUser());


export default passport;