const express = require("express")
const app = express()
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/route")

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/", htmlRoutes);
app.use('/api', apiRoutes);


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
