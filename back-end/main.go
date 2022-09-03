package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"net/http"
)



func DownloadCV(c *gin.Context) {
	c.FileAttachment("./assets/Daniel_Hughes_CV.docx","daniel_hughes_cv.docx")
	c.Header("Content-Description", "File Transfer")
    c.Header("Content-Transfer-Encoding", "binary")
    c.Header("Content-Disposition", "attachment; filename=cv.docx")
    c.Header("Content-Type", "application/octet-stream")

}

func main() { //Our router - send a specific route to a function
	gin.SetMode(gin.ReleaseMode) //Production mode
	router := gin.Default()

	corsConfig := cors.DefaultConfig()
	corsConfig.AllowAllOrigins = true //Allowing this production NGINX server to send data to the API
	corsConfig.AllowCredentials = true
	corsConfig.AddAllowMethods("OPTIONS")
	router.Use(cors.New(corsConfig))

	router.Use(static.Serve("/", static.LocalFile("../front-end/da-n/dist/", true)))
	router.LoadHTMLGlob("../front-end/da-n/dist/index.html")

	router.GET("/", func(c *gin.Context) {
		// Call the HTML method of the Context to render a template
		c.HTML(
			// Set the HTTP status to 200 (OK)
			http.StatusOK,
			// Use the index.html template (SPA)
			"index.html",
			// Pass the data that the page uses (in this case, 'title')
			gin.H{
				"title": "Home Page - Daniel Hughes",
			},
		)
	})

	router.GET("/sakuki", func(c *gin.Context) {
		// Call the HTML method of the Context to render a template
		c.HTML(
			// Set the HTTP status to 200 (OK)
			http.StatusOK,
			// Use the index.html template (SPA)
			"index.html",
			// Pass the data that the page uses (in this case, 'title')
			gin.H{
				"title": "Project - Sakuki",
			},
		)
	})

	router.GET("/zenmon", func(c *gin.Context) {
		// Call the HTML method of the Context to render a template
		c.HTML(
			// Set the HTTP status to 200 (OK)
			http.StatusOK,
			// Use the index.html template (SPA)
			"index.html",
			// Pass the data that the page uses (in this case, 'title')
			gin.H{
				"title": "Project - Zenmon",
			},
		)
	})

	router.GET("/heiki", func(c *gin.Context) {
		// Call the HTML method of the Context to render a template
		c.HTML(
			// Set the HTTP status to 200 (OK)
			http.StatusOK,
			// Use the index.html template (SPA)
			"index.html",
			// Pass the data that the page uses (in this case, 'title')
			gin.H{
				"title": "Project - Heiki",
			},
		)
	})

	router.GET("/danflix", func(c *gin.Context) {
		// Call the HTML method of the Context to render a template
		c.HTML(
			// Set the HTTP status to 200 (OK)
			http.StatusOK,
			// Use the index.html template (SPA)
			"index.html",
			// Pass the data that the page uses (in this case, 'title')
			gin.H{
				"title": "Project - Danflix",
			},
		)
	})

	router.GET("/courier_app", func(c *gin.Context) {
		// Call the HTML method of the Context to render a template
		c.HTML(
			// Set the HTTP status to 200 (OK)
			http.StatusOK,
			// Use the index.html template (SPA)
			"index.html",
			// Pass the data that the page uses (in this case, 'title')
			gin.H{
				"title": "Project - Courier App",
			},
		)
	})

	router.GET("/dan", func(c *gin.Context) {
		// Call the HTML method of the Context to render a template
		c.HTML(
			// Set the HTTP status to 200 (OK)
			http.StatusOK,
			// Use the index.html template (SPA)
			"index.html",
			// Pass the data that the page uses (in this case, 'title')
			gin.H{
				"title": "Project - Da-n",
			},
		)
	})

	router.GET("/download-cv", DownloadCV)

	router.Run(":8000")
}