import express from "express";
import morgan from "morgan";
import nodemon from "nodemon";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";


const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware)

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;

//메모장

//middleware part
//app.use("/user", userRouter);
// use를 쓰는 이유는 get을 썻을 때는 그 get이 가진 변수만 사용하지만, use를 사용하면 여러 개를 한꺼번에 사용할 수 있기 떄문
//userRouter 내부에 3개가 있기 때문에 get보다는 use가 나은 것으로 보인다.
