package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	fmt.Println("Hello world")
	router.Run(":8080")
}
