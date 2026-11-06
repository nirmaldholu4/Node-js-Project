import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/tempData").then(() => {
    console.log("mongodb connect");
}).catch(() => {
    console.log("server error");
})

const movieScchema = mongoose.Schema({
    title: String,
    genre: String,
    producer: String
});

const movie = mongoose.model("movie", movieScchema);

app.get("/", (req, res) => {
    res.json({
        msg: "Home Route.."
    });
});


app.post("/AddMovies", async (req, res) => {
    const Data = await movie.create(req.body);
    res.json({
        msg: "movie added",
        data: Data
    });
});

app.get("/GetAllMovies", async (req, res) => {
    const Data = await movie.find();
    res.json({
        msg: "movie Find",
        data: Data
    });
});

app.get("/GetMovie", async (req, res) => {
    const Data = await movie.findOne(req.body);

    if (!Data) {
        return res.json({
            msg: "movie is not found"
        });
    }

    res.json({
        msg: "movie Find",
        data: Data
    });
});

app.put("/UpdateMovie", async (req, res) => {
    const Data = await movie.findByIdAndUpdate(req.body.id, req.body);

    if (!Data) {
        return res.json({
            msg: "movie is not found"
        });
    }

    res.json({
        msg: "movie update",
        data: Data
    });
});

app.delete("/DeleteMovie", async (req, res) => {
    const Data = await movie.findByIdAndDelete(req.body.id);

    if (!Data) {
        return res.json({
            msg: "movie is not found"
        });
    }

    res.json({
        msg: "movie deleted",
        data: Data
    });
});

app.listen(3000);