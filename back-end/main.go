package main

import (
	"github.com/gin-contrib/cors"
	// "github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	// "net/http"
)



func DownloadCV(c *gin.Context) { //./assets/Daniel_Hughes_CV.docx
	filePath := "./assets/Daniel_Hughes_CV.pdf"
	// Set headers
	c.Writer.Header().Set("Content-Disposition", "attachment; filename=Daniel_Hughes_CV.pdf")
	c.Writer.Header().Set("Content-Type", "application/pdf")
	c.File(filePath)
}

func main() { //Our router - send a specific route to a function
	gin.SetMode(gin.ReleaseMode) //Production mode
	router := gin.Default()

	corsConfig := cors.DefaultConfig()
	corsConfig.AllowAllOrigins = true //Allowing this production NGINX server to send data to the API
	corsConfig.AllowCredentials = true
	corsConfig.AddAllowMethods("OPTIONS")
	router.Use(cors.New(corsConfig))

	// Serve static assets from .next/static
    router.Static("/_next/static", "./.next/static")

    // Serve public static files if you have any
    router.Static("/public", "./public")

	router.NoRoute(func(c *gin.Context) {
        // Serve the fallback HTML for client-side routing
        // This could be an entry point for your Next.js app if applicable
        c.File("./public/index.html")
    })

	router.GET("/download-cv", DownloadCV)

	router.Run(":8000")
}