export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const search = (req, res) => {
    const {

        query: { term: searchingBy }

    } = req;

    res.render("search", { pageTitle: "Search", searchingBy }); //우리는 늘 그랬듯 답을 찾을 것이다.
};

export const upload = (req, res) => res.render("upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });
